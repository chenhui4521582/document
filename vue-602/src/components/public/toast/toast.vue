<template>
    <transition :name="fadeIn">
        <div class="alertBox" v-show="show">
            <transition :name="translate">
                <div class="box" :class="position" v-show="show">
                    <div class="loading" v-if="type == 'loading'">
                        <div class="loadingimg">
                            <span class="spinner-loader"></span>
                        </div>
                    </div>
                    <div class="text" v-else>
                        {{text}}
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    export default {
        data:function() {
            return {
                show:'',
                text:'',
                position:'',
                type:'',
                time:'',
                transition:''
            }
        },
        computed: {
            translate:function(){ // ����props���������Ӧ�Ķ���
                if (!this.transition) {
                    return ''
                }
                else {
                    if (this.position === 'top') {
                        return 'translate-top'
                    } else if (this.position === 'middle') {
                        return 'translate-middle'
                    } else if (this.position === 'bottom') {
                        return 'translate-bottom'
                    }
                }
            },
            fadeIn:function(){ // ͬ��
                if (!this.transition) {
                    return ''
                } else {
                    return 'fadeIn'
                }
            }
        }
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    .box{
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,.5);
        z-index: 5000;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        color: #fff;
    }

    .spinner-loader:not(:required) {
        -moz-animation: spinner-loader 1500ms infinite linear;
        -webkit-animation: spinner-loader 1500ms infinite linear;
        animation: spinner-loader 1500ms infinite linear;
        -moz-border-radius: 0.5em;
         -webkit-border-radius: 0.5em;
         border-radius: 0.5em;
        -moz-box-shadow: rgba(255, 255, 255, 1) 1.5em 0 0 0, rgba(255, 255, 255, 1) 1.1em 1.1em 0 0, rgba(255, 255, 255, 1) 0 1.5em 0 0, rgba(255, 255, 255, 1) -1.1em 1.1em 0 0, rgba(255, 255, 255, 1) -1.5em 0 0 0, rgba(255, 255, 255, 1) -1.1em -1.1em 0 0, rgba(255, 255, 255, 1) 0 -1.5em 0 0, rgba(255, 255, 255, 1) 1.1em -1.1em 0 0;
        -webkit-box-shadow: rgba(255, 255, 255, 1) 1.5em 0 0 0, rgba(255, 255, 255, 1) 1.1em 1.1em 0 0, rgba(255, 255, 255, 1) 0 1.5em 0 0, rgba(255, 255, 255, 1) -1.1em 1.1em 0 0, rgba(255, 255, 255, 1) -1.5em 0 0 0, rgba(255, 255, 255, 1) -1.1em -1.1em 0 0, rgba(255, 255, 255, 1) 0 -1.5em 0 0, rgba(255, 255, 255, 1) 1.1em -1.1em 0 0;
         box-shadow: rgba(255, 255, 255, 1) 1.5em 0 0 0, rgba(255, 255, 255, 1) 1.1em 1.1em 0 0, rgba(255, 255, 255, 1) 0 1.5em 0 0, rgba(255, 255, 255, 1) -1.1em 1.1em 0 0, rgba(255, 255, 255, 1) -1.5em 0 0 0, rgba(255, 255, 255, 1) -1.1em -1.1em 0 0, rgba(255, 255, 255, 1) 0 -1.5em 0 0, rgba(255, 255, 255, 1) 1.1em -1.1em 0 0;
        display: inline-block;
        font-size: 10px;
        width: 1em;
        height: 1em;
        margin: 1.5em;
        overflow: hidden;
        text-indent: 100%;
        vertical-align: middle;
    }

    .box .text{
        padding:20px;
        font-size: 14px;
        text-align: center;
    }
    .loadingimg{
        text-align: center;
    }
    .box .loading{
        min-width: 80px;
        padding:10px;
    }
    .loading p{
        text-align: center;
    }


    @-moz-keyframes spinner-loader {
        0% {
            -moz-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -moz-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spinner-loader {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes spinner-loader {
        0% {
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    .fadeIn-enter-active, .fadeIn-leave-active{
        transition: opacity .3s;
    }
    .fadeIn-enter, .fadeIn-leave-active{
        opacity: 0;
    }
    .translate-top-enter-active, .translate-top-leave-active{
        transition: all 0.3s cubic-bezier(.36,.66,.04,1);
    }
    .translate-top-enter, .translate-top-leave-active{
        transform: translateY(-50%);
        opacity: 0;
    }
    .translate-middle-enter-active, .translate-middle-leave-active{
        transition: all 0.3s cubic-bezier(.36,.66,.04,1);
    }
    .translate-middle-enter, .translate-middle-leave-active{
        transform: translateY(80%);
        opacity: 0;
    }
    .translate-bottom-enter-active, .translate-bottom-leave-active{
        transition: all 0.3s cubic-bezier(.36,.66,.04,1);
    }
    .translate-bottom-enter, .translate-bottom-leave-active{
        transform: translateY(100%);
        opacity: 0;
    }
</style>
