<template>
    <div id="layout">
        <page_header />
        <div class="wrap">
            <component_header />
            <router-view />
            <component_footer />
        </div>
        <page_footer />
    </div>
</template>
<script>
    import page_header from '../public/page_header.vue';
    import page_footer from '../public/page_footer.vue';
    import component_header from '../public/component_header.vue';
    import component_footer from '../public/component_footer.vue';
    export default{
        name: 'index',
        components:{
            page_header:page_header,
            page_footer:page_footer,
            component_header:component_header,
            component_footer:component_footer
        },
        methods:{
            init(){
                let url = '/interface/getUser/';
                this.$http(url).then(res=>{
                    let {error,userinfo} = res.data;
                    if(error==0){
                        this.$store.commit('login_success',userinfo)
                    }
                }).catch(res=>{

                })
            }
        },
        mounted(){
            this.init();
        }
    }
</script>
