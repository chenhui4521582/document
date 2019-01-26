<template>
    <div class="component_header">
        <div class="back" v-show="back" @click="backUp">
                <img src="/static/images/back.png" alt="">
        </div>
        {{title}}
    </div>
</template>
<script>
    export default{
        name: 'component_header',
        data: function () {
            return {
                title:'',
                back:false
            }
        },
        methods: {
            backUp(){
                this.$router.go(-1)
            }
        },
        watch:{
            '$route':function(to,from){
                this.title = to.params.title||to.query.title||to.meta.title;
                this.back = to.meta.back;
            }
        },
        mounted(){
            let {title,back} = this.$route.meta;
            let params_title = this.$route.params.title;
            let query_title = this.$route.query.title;
            this.title = params_title||query_title||title;
            this.back = back;
        }
    }
</script>
