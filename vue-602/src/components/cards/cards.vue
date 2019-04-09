<template>
    <div class="card component_height component_scroll">
        <card_select />
        <div class="card_item" v-for="(item,index) in card">
            <card_list  :card_item="item"/>
        </div>
    </div>
</template>
<script>
    import card_select from './card_select'
    import card_list from './card_list'
    export default{
        name: '',
        data: function () {
            return {
                card:''
            }
        },
        components:{
            card_list,
            card_select
        },
        methods: {
            init(){
                let url = '/interface/cards';
                this.$http(url).then(res=>{
                    let card = res.data.data,
                        game = [],
                        newData = {},
                        len = card.length,
                        i,j;
                    for(i=0;i<len;i++){
                        for(j=i+1;j<len;j++){
                            if(card[i].game_id === card[j].game_id){
                                j = ++i;
                            }
                        }
                        game.push(card[i].game_id);
                    }
                    for(let a=0;a<game.length;a++){
                        newData[game[a]]={
                            'game_name':'',
                            'game_icon':'',
                            'game_id':'',
                            'game_introduce':'',
                            'card_number':'',
                            'is_show':false,
                            'card_list':[]
                        };

                        for(let b =0;b<card.length;b++){
                            if(card[b].game_id == game[a]){
                                newData[game[a]].game_name=card[b].game_name;
                                newData[game[a]].game_icon=card[b].card_icon;
                                newData[game[a]].game_id=card[b].game_id;
                                newData[game[a]].game_introduce=card[b].game_introduce;
                                newData[game[a]].card_number=card[b].card_number;
                                newData[game[a]].card_list.push(card[b]);
                            }
                        }

                    }
                    this.card = newData;
                }).catch(res=>{

                })
            }
        },
        mounted(){
            this.init();
        }
    }
</script>
