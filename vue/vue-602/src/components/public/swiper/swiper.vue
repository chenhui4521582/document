<template>
    <div class="swiper-container banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :id="item.poster_id">
                <img :src="item.poster_src" alt="" class="img"/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css'
    export default{
        name: '',
        props:['list'],
        watch:{
            'list':function(){
                this.$nextTick(function () {

                })
            }
        },
        updated:function(){
            let swiper_banner =  new Swiper('.banner', {
                pagination: {
                    el: '.swiper-pagination'
                },
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                }
            });
        }
    }
</script>
<style>
    .img{width: 100%;vertical-align: top}
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{text-align: right;bottom: 5px}
    .swiper-pagination-bullet-active{background:#fcb334;}
</style>
