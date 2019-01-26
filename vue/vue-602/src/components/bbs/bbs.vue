<template>
    <div class="bbs component_height">
        <articles_list :list="list"/>
        <router-link class="publish_btn" to="/bbs/publish_articles"></router-link>
    </div>
</template>
<script>
    import reply from './reply';
    import articles_list from './children_articles_list';
    export default {
        name: "bbs",
        data(){
            return{
                list:[]
            }
        },
        components:{
            reply,
            articles_list
        },
        methods:{
            init(){
                let url = '/interface/articles';
                this.$http(url).then(res=>{
                    res.data.data.length>0 && (this.list = res.data.data);
                }).catch(res=>{

                });
            }
        },
        mounted(){
            this.init();
        }
    }
</script>
