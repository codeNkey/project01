<template>
<div>
    <input type="text" v-model="userId">
    <button @click="clickEvent()">클릭</button>
    <button @click="changeData()">변경</button>
    <br>
    <br>
    <input type="text" v-model.number="num1"> +
    <input type="text" v-model.number="num2"> =
    <span>{{ num1 + num2 }}</span>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userId: 'heejin',
            num1: 0,
            num2: 0,
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        clickEvent() {
            console.log(this.userId)
        },
        changeData() {
            this.userId = 'heejin2'
        }
    }
}
</script>