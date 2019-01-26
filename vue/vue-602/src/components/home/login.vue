<template>
    <div class="login component_height">
        <!-- 登录选择框-->
        <div class="intercept_box" v-show="box=='account'">
            <div class="intercept" >
                <div class="title">
                    <span>请选择登录方式</span>
                <span class="close" @click="back()">
                    <img src="/static/images/close.png" alt=""/>
                </span>
                </div>
                <div class="login_type">
                    <div class="qq">
                        <div class="icon qq_icon">
                            <img src="/static/images/qq.png" alt=""/>
                        </div>
                        <p class="name">QQ登录</p>
                    </div>
                    <div class="account" @click="show_box($event)" data-box="login" ref="login">
                        <div class="icon account_icon">
                            <img src="/static/images/account.png" alt=""/>
                        </div>
                        <p class="name">账号登录</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 账号登录-->
        <div class="account_box" v-show="box=='login'">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="3rem" class="demo-ruleForm">
                <el-form-item label="账号" prop="username" class="mr">
                    <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" class="mr">
                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="info" @click="submit('ruleForm2')" class="sub">提交</el-button>
                </el-form-item>
            </el-form>
            <router-link :to="{path:'/home/register',query:{forworld:this.forworld}}"> 注册 </router-link>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'login',
        data(){
            let validate_user = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入账号'));
                }else {
                    if (value.length > 4 && value.length < 16) {
                        callback();
                    } else {
                        callback(new Error('用户名为5-16位字符，允许字母，数字，下划线'));
                    }
                }
            };
            let validate_pass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                }else {
                    if (value.length > 4 && value.length < 16) {
                        callback();
                    } else {
                        callback(new Error('密码为5-16位字符，允许字母，数字，下划线'));
                    }
                }
            };
            return {
                box:'account',
                ruleForm2: {
                    username: '',
                    password: ''
                },
                rules2: {
                    username: [
                        {required: true, validator: validate_user, trigger: 'blur' }
                    ],
                    password: [
                        {required: true, validator: validate_pass, trigger: 'blur' }
                    ]
                },
                forworld:this.$router.currentRoute.query.forworld
            }
        },
        methods: {
            show_box(e){
                this.box = e.currentTarget.dataset.box;
            },
            back(){
                this.$router.go(-1)
            },
            login(){
                let url = '/interface/login/';
                let params = {username:this.ruleForm2.username,password:this.ruleForm2.password};
                this.$toast.show();
                this.$http(url,{params}).then((res)=>{
                    this.$toast.hide();
                    let error = res.data.error;
                    let msg = res.data.msg;
                    let user_info = res.data.userinfo;
                    if(error == 0){
                        this.$store.commit('login_success',user_info);
                        this.$router.push(this.forworld);
                    }else{
                        this.$toast.show(msg)
                    }
                }).catch(function(){})
            },
            submit:function(formName){
                this.$refs[formName].validate((valid)=>{
                    if (valid) {
                        this.login();
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>
