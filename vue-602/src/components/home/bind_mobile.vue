<template>
    <div class="bind_mobile">
        <div class="bind_mobile" v-if="$store.state.user_info.user_mobile">
            <div class="bind_mobile_header">
                <em><img src="/static/images/home/bind_mobile.png" alt=""></em>
                <p>您已经绑定手机</p>
            </div>
            <div class="bind_mobile_content">
                <p>手机号: {{$store.state.user_info.user_mobile}}</p>
            </div>
        </div>
        <div class="no_bind_mobile" v-else>
            <div class="no_bind_mobile_header">
                <em><img src="/static/images/home/no_bind_mobile.png" alt=""></em>
                <span>为了您的账户安全<br>请及时绑定手机</span>
            </div>
            <div class="no_bind_mobile_content">
                <ul>
                    <li>
                        <input type="text" v-model="mobile" placeholder="请输入手机号码">
                    </li>
                    <li class="code">
                        <input type="text" placeholder="请输入图形验证码" v-model="code">
                        <img :src="code_img" alt="" @click="get_code_img">
                    </li>
                </ul>
                <div class="sub_mobile" @click="submit">
                    <span>
                        立即绑定
                    </span>
                </div>
                <div class="explain">
                    <span>温馨提示：</span>
                    请填写正确的图形验证码以及语音验证码，如获取不到语音验证码请尝试使用短信验证码。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bind_mobile",
        data(){
            return{
                mobile:'',
                code_img:'/interface/code_img',
                code:''
            }
        },
        methods:{
            get_code_img(){
                this.code_img='/interface/code_img/?'+Math.random();
            },
            submit(){
                let mobile = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/;
                if(!this.mobile){
                    this.$toast.show('请输入手机号');
                    return false
                }
                if(!this.code){
                    this.$toast.show('请输入图形验证码');
                    return false
                }
                if(!mobile.test(this.mobile)){
                    this.$toast.show('请输入正确的手机号');
                    return false
                }
                if(this.code.length!=4){
                    this.$toast.show('请输入正确的验证码');
                    return false
                }
                let url = '/interface/account_safety';
                this.$http.post(url,{type:'bind_mobile',mobile:this.mobile,code:this.code}).then(res=>{
                    let {error,msg} = res.data;
                    if(error == 1000){
                        this.$toast.show({text:'绑定成功',callback:()=>{
                                this.$store.commit('update_mobile',this.mobile);

                            }});
                    }else if(error == 1001){
                        this.$toast.show({text:'您尚未登录',callback:()=>{
                                this.$router.push({path:'/home/login',query:{forworld:'/home/bind_mobile'}})
                            }
                        })
                    }else{
                        this.$toast.show(msg)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
