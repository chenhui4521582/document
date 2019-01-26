<template>
    <div class="account_safety component_height component_scroll">
        <ul>
            <li>
                <router-link to="/home/bind_mobile">
                    <span>绑定手机号码</span>
                    <i><img src="/static/images/home/right_btn.png" alt=""></i>
                    <em>{{$store.state.user_info.user_mobile?$store.state.user_info.user_mobile:'未绑定'}}</em>
                </router-link>
            </li>
            <li>
                <router-link to="/home/bind_alipay">
                    <span>绑定支付宝账户</span>
                    <i><img src="/static/images/home/right_btn.png" alt=""></i>
                    <em>{{$store.state.user_info.user_alipay?$store.state.user_info.user_alipay:'未绑定'}}</em>
                </router-link>

            </li>
            <li>
                <router-link to="/home/bind_qq">
                    <span>联系QQ号</span>
                    <i><img src="/static/images/home/right_btn.png" alt=""></i>
                    <em>{{$store.state.user_info.user_qq?$store.state.user_info.user_qq:'未绑定'}}</em>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "account_safety"
    }
</script>

<style scoped>

</style>
