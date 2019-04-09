<template>
    <div class="point_task">
        <div class="title">今日任务 <span>积分可以兑换商品噢！</span></div>
        <ul>
            <li v-for="(item,index) in task">
                <div class="icon"><img :src="item.icon" alt=""></div>
                <div class="text">
                    <p class="n">{{item.name}}</p>
                    <p class="c">{{item.text}}</p>
                </div>
                <div class="btn" @click="event(item.event)">
                    {{item.btn}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import task_config from '../../data/task_config.js'
    export default {
        name: "point_task",
        data(){
            return{
                task:task_config.task
            }
        },
        methods:{
            bind_mobile(){},
            sd(){},
            sc(){},
            friends(){},
            gzh(){},
            sign() {
                console.log('111')
            },
            event(fn){
                if(fn == 'sign'){
                    this.sign();
                }else if(fn == 'gzh'){
                    this.gzh();
                }else if(fn == 'friends'){
                    this.friends();
                }else if(fn == 'sc'){
                    this.sc();
                }else{
                    this.sd();
                }
            }
        }
    }
</script>

<style scoped>

</style>
