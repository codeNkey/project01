<template>
<div>
    <p>당신이 가장 좋아하는 프로선수는 누구입니까</p>
    <input type="radio" name="data" id="1" value="son" v-model="selectedData">
    <label for="1">1. 손흥민</label>&emsp;
    <input type="radio" name="data" id="2" value="hwang" v-model="selectedData">
    <label for="2">2. 황희찬</label>&emsp;
    <input type="radio" name="data" id="3" value="lee" v-model="selectedData">
    <label for="3">3. 이정후</label>&emsp;
    <input type="radio" name="data" id="4" value="ryu" v-model="selectedData">
    <label for="4">4. 류현진</label>&emsp;
    <input type="radio" name="data" id="5" value="etc" v-model="selectedData">
    <label for="5">5. 기타</label>
    <!-- <input type="text" name="data" v-if="selectedData === 'etc'"> -->
    <input type="text" name="data" v-show="selectedData === 'etc'">
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            selectedData: '',
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>