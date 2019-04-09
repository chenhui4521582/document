<template>
    <div class="page_header">
        <div class="header_wrap">
            <div class="logo">
                <img src="/static/images/logo.png" alt=""/>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'page_header',
        data: function () {
            return {}
        },
        methods: {},
        watch:{
            '$route':function(to,from){
                var path = to.path;

            }
        }
    }
</script>