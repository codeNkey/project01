<template>
<div>
    <div v-html="htmlString"></div>
    <div v-html="htmlString" :style="style1"></div>
    <button @click="style1.color = 'red'">색상바꾸기</button>
    <button @click="colors()">콘솔 로그 보기</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            htmlString:'<h1>PieterKim</h1><p>Hello Welcome Mysite</p>',
            style1 : {
                color: 'green',
                fontSize: '30px',
            }

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        colors () {
            console.log(this.style1.color)
        },
    }
}
</script>