<template>
    <div v-show="list.length>0">
        <div class="games_item" v-for="(item,index) in list" >
            <div class="icon">
                <img :src="item.game_icon" alt=""/>
            </div>
            <div class="games_text">
                <p class="games_text_t">
                    {{item.game_name}}
                    <router-link :to="{path:'/cards',query:{game_id:item.games_id}}">礼包</router-link>
                </p>
                <p class="games_text_c">{{item.game_intro}}</p>
            </div>
            <a href="javascript:void(0)" class="go_game" @click="go_games(item)">开始</a>
            <!--<router-link :to="{name:'game_iframe',params:{game_:item.games_name}}" @click="go_games"></router-link>-->
        </div>
    </div>

</template>
<script>
    export default{
        name: 'children_games',
        props:['list'],
        data: function () {
            return {}
        },
        methods: {
            go_games(item) {
                const {href} = this.$router.resolve({
                    path:'/games/iframe',
                    name: "game_iframe",
                    query: {
                        title:item.game_name
                    }
                });
                window.open(href, '_blank');
            }
        }
    }
</script>
