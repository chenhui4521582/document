<template>
    <div class="intercept" v-show="show">
        <div class="title">
            <span>请选择登录方式</span>
            <span class="clear"></span>
        </div>
        <div class="login_type">
            <div class="qq"></div>
            <div class="account"></div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'intercept',
        data: function () {
            return {
                show:false,
                msg:'这里的登录拦截'
            }
        },
        methods: {
            qq_login:function(){

            },
            account_login:function(){

            }
        }
    }
</script>
<style scoped>
.intercept{

}
</style>