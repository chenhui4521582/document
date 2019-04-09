<template>
    <ul class="reply_list">
        <li v-for="(item,index) in reply_list">
            <div class="user bbs">
                <div class="avatar">
                    <img src="/static/images/avatar.png" alt="" v-if="item.user_avatar == '1'">
                    <img src="/static/images/default_avatar.png" alt="" v-else>
                </div>
                <div class="information">
                    <p>
                        <span class="name">{{item.user_name}}</span>
                        <img :src="'/static/images/home/vip_icon'+item.user_vip+'.png'" alt="" class="vip_img">
                    </p>
                    <p style="font-size: .6rem">{{item.reply_time}}</p>
                </div>
            </div>
            <div class="reply_content">
                {{item.reply_content}}
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        props:['reply_list'],
        name: "children_reply_list",
    }
</script>

<style scoped>

</style>
