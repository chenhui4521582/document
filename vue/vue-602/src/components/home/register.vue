<template>
    <div class="register component_height">
        <!-- 账号注册-->
        <div class="account_box">
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="3.5rem" class="demo-ruleForm" >
                <el-form-item label="账号" prop="username" class="mr">
                    <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" class="mr">
                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="重复密码" prop="password1" class="mr">
                    <el-input type="password" v-model="ruleForm2.password1" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="info" @click="submit('ruleForm2')" class="sub">提交</el-button>
                </el-form-item>
            </el-form>
            <router-link :to="{path:'/home/login',query:{forworld:this.forworld}}"> 登录 </router-link>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'register',
        data(){
            let validate_user = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
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
            let validate_pass1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                }else {
                    if (this.ruleForm2.password===value) {
                        callback();
                    } else {
                        callback(new Error('重复密码不一致'));
                    }
                }
            };
            return {
                ruleForm2: {
                    username: '',
                    password: '',
                    password1: ''
                },
                rules2: {
                    username: [
                        {required: true, validator: validate_user, trigger: 'blur' }
                    ],
                    password: [
                        {required: true, validator: validate_pass, trigger: 'blur' }
                    ],
                    password1: [
                        {required: true, validator: validate_pass1, trigger: 'blur' }
                    ]
                },
                forworld:this.$router.currentRoute.query.forworld
            }
        },
        methods: {
            account(){
                this.account_login = true;
            },
            back(){
                this.$router.go(-1)
            },
            register(){
                let url = '/interface/register';
                let params = {username:this.ruleForm2.username,password:this.ruleForm2.password};
                this.$toast.show();
                this.$http(url,{params}).then((res)=>{
                    this.$toast.hide();
                    let error = res.data.error;
                    let msg = res.data.msg;
                    let user_info = res.data.userinfo;
                    if(error == 0){
                        this.$toast.show({
                            'type':'text',
                            'text':'注册成功',
                            callback:res=>{
                                this.$store.commit('login_success',user_info);
                                this.$router.push(this.forworld);
                            }
                        });
                    }else{
                        this.$toast.show(msg)
                    }
                }).catch(function(){})
            },
            submit:function(formName){
                this.$refs[formName].validate((valid)=>{
                    if (valid) {
                        this.register();
                    } else {
                        return false;
                    }
                });
            }
        },
        mounted(){
            console.log()
        }
    }
</script>
