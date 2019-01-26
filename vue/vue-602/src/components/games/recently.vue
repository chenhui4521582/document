<template>
    <div class="recently" v-show="list.length>0">
        <div class="title">
            <em></em>
            <span>最近在玩</span>
            <router-link to="/more">更多></router-link>
        </div>
        <div class="recently_list">
            <div class="item" v-for="(item,index) in list">
                <em><img :src="item.game_src" alt="" class="img"/></em>
                <p>{{item.game_name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'recently',
        props:['list'],
        data: function () {
            return {}
        },
        methods: {}
    }
</script>