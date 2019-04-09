<template>
    <div class="card_select">
        <el-input
            placeholder="请输入礼包内容"
            prefix-icon="el-icon-search"
            v-model="select">
            <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "card_select",
        data(){
            return {
                select:''
            }
        }
    }
</script>
