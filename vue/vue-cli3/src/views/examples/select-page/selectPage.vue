<template>
  <div class="select-page">
    <div class="content">
      <div class="title">
        <p class="back"><router-link to="/">返回</router-link></p>
        <p class="title">
          例子:选择翻页
        </p>
      </div>
      <div class="body">
        <div class="sex" v-show="page.index === '1'">
          <p>1.请问您的性别是</p>
          <p>
            <input type="radio" value="man" v-model="page.sex.value" />
            <label>男</label>
            <input type="radio" value="woman" v-model="page.sex.value" />
            <label>女</label>
            <input type="radio" value="secrecy" v-model="page.sex.value" />
            <label>保密</label>
          </p>
          <p>
            <Button @click.native="switchPage(2)" :active="true">下一步</Button>
          </p>
        </div>
        <div class="hobby" v-show="page.index === '2'">
          <p>2.选择您的兴趣爱好</p>
          <p></p>
          <p>
            <input type="checkbox" value="book" v-model="page.hobby.value" />
            <label>看书</label>
          </p>
          <p>
            <input
              type="checkbox"
              value="swimming"
              v-model="page.hobby.value"
            />
            <label>游泳</label>
          </p>
          <p>
            <input type="checkbox" value="Movies" v-model="page.hobby.value" />
            <label>看电影</label>
          </p>
          <p>
            <input type="checkbox" value="music" v-model="page.hobby.value" />
            <label>听音乐</label>
          </p>
          <p>
            <Button
              @click.native="switchPage(1)"
              :active="true"
              style="margin-right: 5px"
              >上一步</Button
            >
            <Button
              @click.native="switchPage(3)"
              :active="false"
              style="margin-right: 5px"
              >下一步</Button
            >
            <Button @click.native="reset()" :active="false">重置</Button>
          </p>
        </div>
        <div class="introduce" v-show="page.index === '3'">
          <p>1.介绍一下自己</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="page.secrecy.value"
          ></textarea>
          <p>
            {{ isSubmit }}
            <Button
              @click.native="submit()"
              :active="true"
              style="margin-right: 5px"
              :disabled="isSubmit"
              >提交</Button
            >
            <Button
              @click.native="switchPage(2)"
              :active="false"
              style="margin-right: 5px"
              >上一步</Button
            >
            <Button @click.native="reset()" :active="false">重置</Button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./components/Button";
export default {
  name: "examples-selectPage",
  data: () => ({
    page: {
      index: "1",
      sex: {
        value: "",
        active: "",
        disable: ""
      },
      hobby: {
        value: [],
        active: "",
        disable: ""
      },
      secrecy: {
        value: "111",
        active: "",
        disable: "",
        length: "100"
      }
    }
  }),
  components: {
    Button
  },
  methods: {
    switchPage(index) {
      this.page.index = index.toString();
    },
    submit() {
      !this.isSubmit && alert("提交");
    },
    reset() {
      this.page = {
        index: "1",
        sex: {
          value: "",
          active: "",
          disable: ""
        },
        hobby: {
          value: [],
          active: "",
          disable: ""
        },
        secrecy: {
          value: "",
          active: "",
          disable: ""
        }
      };
    }
  },
  computed: {
    isSubmit() {
      let isSex, isHobby, isSecrecy;
      this.page.secrecy.value.length >= 10 && (isSecrecy = true);
      this.page.hobby.value.length >= 2 && (isHobby = true);
      this.page.sex.value && (isSex = true);
      if (isSex && isHobby && isSecrecy) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped lang="less">
.select-page {
  height: 100vh;
  background: #ccc;
  padding: 10px;
  .text-left();
  .content {
    height: 100%;
  }
  .body {
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    label {
      margin-right: 5px;
    }
  }
  p {
    padding: 10px 0;
  }
  .border-bottom {
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>
