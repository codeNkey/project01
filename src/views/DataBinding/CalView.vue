<template>
<div>
   <button @click="addFunc()">더하기</button> 
    <button @click="subFunc()">빼기</button>
    <button @click="mulFunc()">곱하기</button>
    <button @click="divFunc()">나누기</button><br>
    <input type="text" v-model.number="num1">   <input type="text" v-model.number="num2"> = <span>{{ result }}</span>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            num1: 0,
            num2: 0,
            result : 0,
          

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        addFunc() {
            
           this.result =this.num1 + this.num2 
           return this.result
        },
        subFunc() {
            this.result = this.num1 - this.num2
            return this.result
        },
        mulFunc() {
            this.result = this.num1 * this.num2
            return this.result
        },      
        divFunc() {
            this.result = this.num1 / this.num2
            return this.result
        }

    }
}
</script>