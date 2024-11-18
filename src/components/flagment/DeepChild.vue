<template>
<div>
    <h1>{{ deepChildData }}</h1>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:'',
        };
    },
    inject: ['deepChildData',],
    props: {
        
        },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>