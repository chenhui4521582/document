<template>
    <div class="main">
        <div class="game_box">
            <div class="game_icon">
                <img :src="card_item.game_icon" alt="">
            </div>
            <div class="game_text">
                <p class="game_name">{{card_item.game_name}}</p>
                <p class="game_introduce">{{card_item.game_introduce}}</p>
            </div>
            <div class="go_game">
                <router-link :to="{path:'/game_irame',query:{game_id:card_item.game_id}}">开始</router-link>
            </div>
        </div>
        <div class="card_box">
            <div class="card_list" v-show="index==0" v-for="(item,index) in card_item.card_list" v-if="!card_item.is_show">
                <div class="card_text">
                    <p class="card_name">{{item.card_name}}</p>
                    <p class="card_content">{{item.card_introduction}}</p>
                    <p class="card_number">数量:{{item.card_number}}</p>
                </div>
                <div class="get_card" @click="get_card(item.card_id)">领取</div>
            </div>

            <div class="card_list"  v-for="(item,index) in card_item.card_list" v-if="card_item.is_show">
                <div class="card_text">
                    <p class="card_name">{{item.card_name}}</p>
                    <p class="card_content">{{item.card_introduction}}</p>
                    <p class="card_number">数量:{{item.card_number}}</p>
                </div>
                <div class="get_card" @click="get_card(item.card_id)">领取</div>
            </div>

            <div class="check_more" @click="show_card(card_item.game_id)" v-show="!card_item.is_show">查看更多</div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['card_item'],
        name: "card_list",
        data(){
            return{
                show:'',
                showArray:[]
            }
        },
        methods:{
            show_card(){
                this.card_item.is_show = true;
            },
            copy(){
                let Url2=document.getElementById("copy").innerText;
                let oInput = document.createElement('input');
                oInput.value = Url2;
                document.body.appendChild(oInput);
                oInput.select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                oInput.className = 'oInput';
                oInput.style.display='none';
                this.$message({
                    type: 'success',
                    message: '复制成功!',
                    duration:'2000'
                });
            },
            no_login(){
                this.$confirm('您尚未登录!', '领取失败', {
                    confirmButtonText: '去登录',
                    type: 'info',
                    callback:res=>{
                        this.$router.push({path:'/home/login',query:{forworld:"/cards"}})
                    }
                });
            },
            lq_success(msg,msg_id){
                let html = '礼包ID: [<span id="copy" style="padding: 0 10px;color: #f0aa00">'+msg+'</span>]';
                this.$confirm(html, '领取成功', {
                    confirmButtonText: '复制',
                    type: 'success',
                    dangerouslyUseHTMLString: true,
                    callback:res=>{
                        this.copy();
                    }
                });
            },
            no_card(){
                this.$message({
                    type: 'warning',
                    message: '当前礼包不足!',
                    duration:'2000'
                });
            },
            get_card(id){
                let url = '/interface/lqCard';
                this.$http(url,{params:{card_id:id}}).then(res=>{
                    let {error,msg,msg_id} = res.data;
                    error == 1001 && this.no_login();
                    error == 1000 && this.lq_success(msg,msg_id);
                    error == 1002 && this.no_card();
                }).catch(res=>{});
            }
        }
    }
</script>

<style scoped>

</style>
