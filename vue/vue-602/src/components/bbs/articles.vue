<template>
    <div class="articles_detail component_height">
        <div class="main component_scroll component_height">
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
            <div class="content">
                <div class="text">
                    {{item.articles_content}}
                </div>
                <div class="img" v-show="item.articles_img">
                    <img :src="img" alt="" v-for="(img,index) in item.articles_img">
                </div>
                <div class="like" @click="add_like">{{item.articles_like||0}}<img src="/static/images/bbs/thumb_up.png" alt=""></div>
            </div>
            <div class="reply_list" v-show="reply_list.length>0">
                <div class="t">
                    <span>全部评论</span>
                </div>
                <reply_list :reply_list="reply_list"/>
            </div>
        </div>

        <div class="send_reply">
            <div class="text_form">
                <textarea name="" id="" cols="30" rows="10" onresize="none" v-model="send_text" :style="{height:data_height+'px'}"></textarea>
                <div class="send_btn" @click="send">发布</div>
            </div>
        </div>
    </div>
</template>

<script>
    import storage from '../../unit/localstorage.js';
    import reply_list from './children_reply_list';
    export default {
        name: "articles",
        data(){
            return{
                item:'',
                send_text:'',
                data_height:'30',
                reply_list:[]
            }
        },
        components:{
            reply_list
        },
        methods:{
            init(){
                let url = '/interface/reply_list';
                this.$http(url,{params:{id:this.item.articles_id}}).then(res=>{
                    let {error} = res.data;
                    if(error == 1000){
                        let {data} = res.data;
                        this.reply_list = data;
                    }else if(error == 1001){
                        this.$toast.show({text:'您尚未登录',callback:()=>{
                                this.$router.push({path:'/home/login',query:{forworld:'/bbs/articles'}})
                            }
                        })
                    }
                })
            },
            send(){
                let url = '/interface/send_reply',
                    params ={
                        id:this.item.articles_id,
                        content:this.send_text
                    };
                if(params.id&&params.content){
                    this.$http.post(url,params).then(res=>{
                        let {error} = res.data;
                        if(error == 1000){
                            let {data} = res.data;
                            this.$toast.show({text:'回复成功',callback:()=>{
                                    this.reply_list.push(data);
                                    this.send_text='';
                                }});
                        }else if(error == 1001){
                            this.$toast.show({text:'您尚未登录',callback:()=>{
                                    this.$router.push({path:'/home/login',query:{forworld:'/bbs/articles'}})
                                }
                            })
                        }else if(error == 1002){
                            this.$toast.show('回复失败')
                        }
                    })
                }
            },
            add_like(){
                let url = '/interface/add_like',
                params = {articles_id:this.item.articles_id};
                this.$http.post(url,params).then(res=>{
                    let {error} = res.data;
                    if(error == 1003){
                        this.$toast.show({text:'请勿重复点击'});
                    }
                    else if(error == 1000){
                        let {data} = res.data;
                        this.$toast.show({text:'点赞成功'});
                        this.item.articles_like = data.articles_like;
                        storage.set('articles',this.item)
                    }else if(error == 1001){
                        this.$toast.show({text:'您尚未登录',callback:()=>{
                                this.$router.push({path:'/home/login',query:{forworld:'/bbs/articles'}})
                            }
                        })
                    }else if(error == 1002){
                        this.$toast.show('点赞失败')
                    }
                })
            }
        },
        watch:{
            send_text:function () {
                let d_width = document.body.clientWidth,
                    type = d_width <=320 ? 30 : d_width <= 375 ? 37 : d_width <=414 ? 42 : 53,
                    len = this.send_text.length,
                    number = 0;
                for(let i=0;i<len;i++){
                    if(this.send_text.charAt(i)<128){
                        number+=1;
                    }else{
                        number+=2;
                    }
                }
                this.data_height = 30 + parseInt(number/type)*20
            }
        },
        created(){
            let {item} = this.$route.params;
            let storageData = storage.get('articles');
            if(item){
                storage.set('articles',item);
                this.item = item;
            }else if(storageData){
                this.item = storageData;
            }else{
                this.$router.go(-1);
            }
        },
        mounted(){
            this.init();
        }

    }
</script>

<style scoped>

</style>
