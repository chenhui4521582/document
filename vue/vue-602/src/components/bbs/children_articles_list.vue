<template>
    <div class="arcles_list component_scroll">
        <ul >
            <li v-for="(item,index) in list" v-if="list.length>0">
                <router-link :to="{path:'/bbs/articles',params:{item},name:'articles'}">
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
                            <p style="font-size: .6rem">{{item.time}}</p>
                        </div>
                    </div>
                    <div class="arcles_content">
                        <div class="arcles_text">
                            {{item.articles_content}}
                        </div>
                        <div class="arcles_img" v-show="item.articles_img">
                            <img :src="img" alt="" v-for="(img,index) in item.articles_img" :class="index==2?'last':''">
                        </div>
                    </div>
                    <div class="option">
                        <span class="like">{{item.articles_like||0}}</span>
                        <span class="reply_num">{{item.articles_reply_num||0}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['list'],
        name: "articles_list"
    }
</script>

<style scoped>

</style>
