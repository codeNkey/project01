<template>
<div>
    <h1>{{title}}</h1>
    <p>{{number}}</p>
    <ChiilComponent/>
</div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default{ 
    name:'',
    components:{ChildComponent},
    props: {
        title : {
            type: String,
            default: "페이지 제목이 입력되지 않았습니다.",
            required: true,
        },
        number: Number
    },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>