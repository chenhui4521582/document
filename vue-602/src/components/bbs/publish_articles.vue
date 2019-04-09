<template>
    <div class="publish_articles component_height">
        <div class="vue-uploader">
            <div class="text">
                <textarea name="" id="" cols="30" rows="10" placeholder="请编辑你的内容，闲聊吐槽都可以喔~" v-model="text"></textarea>
            </div>
            <div class="file-list">
                <section v-for="(file, index) of files" class="file-item draggable-item">
                    <img :src="file.src" alt="" ondragstart="return false;">
                    <p class="file-name">{{file.name}}</p>
                    <span class="file-remove" @click="remove(index)">+</span>
                </section>
                <section v-if="status == 'ready'" class="file-item">
                    <div @click="add" class="add">
                        <span>+</span>
                    </div>
                </section>
            </div>
            <div class="operation-box">
                <button v-if="status == 'ready'" @click="submit">发布话题</button>
                <button v-if="status == 'finished'" @click="finished">完成</button>
            </div>
            <input type="file" accept="image/*" @change="fileChanged" ref="file" multiple="multiple">
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                status: 'ready',
                text:'',
                files: [],
                point: {},
                uploading: false,
                percent: 0
            }
        },
        methods: {
            add() {
                this.$refs.file.click()
            },
            submit() {
                if (this.files.length === 0) {
                    console.warn('no file!');
                    return
                }
                if(this.text.length === 0){
                    console.warn('no text!');
                    return
                }

                const formData = new FormData();

                this.files.forEach((item) => {
                    formData.append(item.name, item.file)
                });

                formData.append('text',this.text);

                this.uploading = true;
                let url = '/interface/publish_articles';
                this.$http.post(url,formData,{headers:{'Content-Type':'multipart/form-data'}}).then(res=>{
                    let {error} = res.data;
                    if(error == 1000){
                        this.$toast.show({text:'发表成功',callback:()=>{
                                this.$router.push({path:'/bbs'});
                            }
                        })
                    }
                    else if(error == 1001){
                        this.$toast.show({text:'您尚未登录',callback:()=>{
                                this.$router.push({path:'/home/login',query:{forworld:'/bbs/publish_articles'}})
                            }
                        })
                    }else if(error == 1002){
                        this.$toast.show('发表失败')
                    }
                })
            },
            finished() {
                this.files = []
                this.status = 'ready'
            },
            remove(index) {
                this.files.splice(index, 1)
            },
            fileChanged() {
                const list = this.$refs.file.files;
                for (let i = 0; i < list.length; i++) {
                    if (!this.isContain(list[i])) {
                        const item = {
                            name: list[i].name,
                            size: list[i].size,
                            file: list[i]
                        };
                        this.html5Reader(list[i], item);
                        this.files.push(item)
                    }
                }
                this.$refs.file.value = ''
            },
            // 将图片文件转成BASE64格式
            html5Reader(file, item){
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.$set(item, 'src', e.target.result)
                };
                reader.readAsDataURL(file)
            },
            isContain(file) {
                return this.files.find((item) => item.name === file.name && item.size === file.size)
            }
        }
    }
</script>
<style scoped>
    .text{
        padding: .5rem;
        width: 100%;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    }
    .text textarea{
        width: 100%;
        height: 120px;
        resize: none;
    }
    .vue-uploader {

    }
    .vue-uploader .file-list {
        padding: 10px 0px;
         border: 1px solid #e5e5e5;
    }
    .vue-uploader .file-list:after {
        content: '';
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
        font-size: 0;
    }
    .vue-uploader .file-list .file-item {
        float: left;
        position: relative;
        width: 100px;
        text-align: center;
    }
    .vue-uploader .file-list .file-item img{
        width: 80px;
        height: 80px;
        border: 1px solid #ececec;
    }
    .vue-uploader .file-list .file-item .file-remove {
        position: absolute;
        right: 12px;
        display: none;
        top: 4px;
        width: 14px;
        height: 14px;
        color: white;
        cursor: pointer;
        line-height: 12px;
        border-radius: 100%;
        transform: rotate(45deg);
        background: rgba(0, 0, 0, 0.5);
    }
    .vue-uploader .file-list .file-item:hover .file-remove {
        display: inline;
    }
    .vue-uploader .file-list .file-item .file-name {
        margin: 0;
        height: 40px;
        word-break: break-all;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .vue-uploader .add {
        width: 80px;
        height: 80px;
        margin-left: 10px;
        float: left;
        text-align: center;
        line-height: 80px;
        border: 1px dashed #ececec;
        font-size: 30px;
        cursor: pointer;
    }
    .vue-uploader .upload-func {
        padding: 10px;
        margin: 0;
        background: #f8f8f8;
        border-top: 1px solid #ececec;
    }
    .vue-uploader .upload-func .progress-bar {
        width: 100%;
        height: 25px;
    }
    .vue-uploader .upload-func .progress-bar section {
        margin-top: 5px;
        background: #00b4aa;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        transition: all .5s ease;
    }
    .vue-uploader .upload-func .operation-box {

        padding-left: 10px;
    }
    .vue-uploader .upload-func .operation-box button {
        padding: 4px 12px;
        color: #fff;
        background: #007ACC;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
    .vue-uploader > input[type="file"] {
        display: none;
    }
    .operation-box{
        padding: .5rem;
    }
    .operation-box button{
        display: block;
        height: 40px;
        width: 100%;
        background: #fcd134;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
        color: #333;
        cursor:pointer;
        outline: none;
    }
</style>
