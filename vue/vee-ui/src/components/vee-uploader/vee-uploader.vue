<template>
<div class="vee-uploader">
  <div class="uploader-header">
    <div class="upload_btn" @click="handleUploader" >
      上传图片
    </div>
  </div>
  <div class="uploader-center">
    <transition-group name="fade" tag="ul">
      <li v-for="(item,index) in imgList" :key="item.id">
        <div class="list-header">
          <span class="file-name">{{item.fileName}}</span>
          <span class="clear-btn" @click="removeImg(index)">
            <img src="./src/img/clear.png" alt="">
          </span>
        </div>
        <img :src="item.url" alt="">
      </li>
    </transition-group>
  </div>

  <div class="uploader-submit">
    <div class="upload-submit-btn" @click="uploadSubmit">
      提交
    </div>
  </div>
  <form action="" class="" hidden>
    <input type="file" id="uploaderFile" @change="fileChange" multiple accept = 'image/gif,image/jpeg,image/jpg,image/png'>
  </form>

</div>
</template>

<script>
export default {
  name: "vee-uploader",
  data: () => ({
    imgList: [],
    id: 0
  }),
  methods: {
    handleUploader () {
      document.getElementById('uploaderFile').click();
    },
    fileChange (e) {
      this.fileAdd(e.target.files);
      //重置input
      e.target.value = ''
    },
    fileAdd (file) {
      let _this = this;
      let fileName = file[0].name;
      // 编译成base 64 文件
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = function () {
        _this.id += 1;
        _this.imgList.push({ id: _this.id, url: this.result ,fileName});
      }
    },
    removeImg (index) {
      this.imgList.splice(index,1)
    },
    uploadSubmit () {
      if(this.imgList.length <=0){return false}
      this.$emit('uploadSubmit', this.imgList)
    }
  }
}
</script>

<style scoped lang="less">
.vee-uploader{
  .text-left();
  border:1px solid #ccc;
  width: 100%;
  padding: 0 5px 0 5px;
  border-radius: 3px;
  .uploader-header{
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }
  .uploader-submit{
    overflow: hidden;
  }
  .uploader-submit{
    padding: 5px 0;
    border-top: 1px solid #ccc;
  }
  .upload_btn{
    width: 70px;
    height: 30px;
    line-height: 30px;
    background: #25a946;
    color: #fff;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
  }
  .upload-submit-btn{
    width: 70px;
    height: 30px;
    line-height: 30px;
    background: #25a946;
    color: #fff;
    border-radius: 3px;
    font-size: 14px;
    text-align: center;
    float: right;
  }
  .uploader-center{
    min-height: 90px;
    padding-top: 5px;
    ul{
      overflow: hidden;
    }
    li{
      position: relative;
      float: left;
      margin: .5%;
      width: 24%;
      padding-bottom:5px ;
      img{
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
      .list-header{
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        z-index: 1;
        background: rgba(0,0,0,.2);
        text-align: left;
        color: #fff;
        .file-name{
          display: block;
          width: calc(100% - 20px) ;
          height: 20px;
          line-height: 20px;
          text-overflow:ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 10px;
        }
        .clear-btn{
          position: absolute;
          right: 1px;
          top: 2px;
          width: 16px;
          height:16px;
          border-radius: 50%;
          background: rgba(0,0,0,.7);
          text-align: center;
          img{
            display: inline-block;
            margin-top: 2px;
            vertical-align: top;
            width: 12px;
            height: 12px;
          }
        }
      }
    }
    .last{
      margin-right: 0 ;
    }
  }
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-leave,.fade-enter-to{
  opacity: 1;
}
.fade-enter-active,.fade-leave-active{
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  -ms-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
}
</style>
