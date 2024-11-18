<template>
<div>
    <DeepChild
    
    />
</div>
</template>
<script>
import DeepChild from './DeepChild.vue';
export default{ 
    name:'',
    components:{DeepChild},
    props: {
        chilData:String,
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