<template>
    <div class="bind_alipay component_scroll component_height">
        <div class="no_bind_alipay" v-show="!isbind_alipay">
            <div class="tips">
                <img src="/static/images/home/tip_icon.png" alt="">
                出售账号必须填写支付宝账户，确认后不可更改
            </div>
            <div class="con">
                <div class="mr">
                    <label>姓名:</label>
                    <input type="text" placeholder="请输入支付宝姓名" v-model="user_idname">
                </div>
                <div class="mr">
                    <label>账号:</label>
                    <input type="text" placeholder="请输入支付宝账号" v-model="user_alipay">
                </div>
                <div class="sub_mobile" @click="submit">
                    <span>立即绑定</span>
                </div>
                <div class="explain">
                    <span>注意：</span>
                    请确保支付宝姓名与支付宝账户登记信息一致，否则会导致打款失败，请认真填写
                </div>
            </div>
        </div>
        <div class="binded_alipay" v-show="isbind_alipay">
            <div class="con">
                <div class="mr">
                    <span>支付宝姓名</span>
                    <em>{{store_user_idname}}</em>
                </div>
                <div class="mr">
                    <span>支付宝账号 :</span>
                    <em>{{store_user_alipay}}</em>
                </div>
                <div class="sub_mobile" @click="switch_type">
                    <span>更换</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bind_alipay",
        data(){
            return{
                user_idname:'',
                user_alipay:'',
                isbind:''
            }
        },
        methods:{
            submit(){
                if(!this.user_idname){
                    this.$toast.show('请输入真实姓名');
                    return false
                }
                if(!this.user_alipay){
                    this.$toast.show('请输入支付宝账号');
                    return false
                }else{
                    let url = '/interface/account_safety';
                    this.$http.post(url,{'type':'bind_alipay','user_idname':this.user_idname,'user_alipay':this.user_alipay}).then(res=>{
                        let {error,msg} = res.data;
                        if(error == 1000){
                            this.$toast.show({text:'绑定成功',callback:()=>{
                                    this.$store.commit('update_alipay',{user_idname:this.user_idname,user_alipay:this.user_alipay});
                                    this.isbind=true;
                                }});
                        }else if(error == 1001){
                            this.$toast.show({text:'您尚未登录',callback:()=>{
                                    this.$router.push({path:'/home/login',query:{forworld:'/home/bind_alipay'}})
                                }
                            })
                        }else{
                            this.$toast.show(msg)
                        }
                    })
                }
            },
            switch_type(){
                this.isbind = 'false';
            }
        },
        computed:{
            'store_user_idname':function(){
                return this.$store.state.user_info.user_idname;
            },
            'store_user_alipay':function(){
                return this.$store.state.user_info.user_alipay;
            },
            'isbind_alipay':function () {
                let is = '';
                if(!this.isbind){
                    (this.$store.state.user_info.user_idname&&this.$store.state.user_info.user_alipay)? is = true : is = false
                }else{
                    is = false;
                }
                return is;
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
