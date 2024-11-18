<template>
<div>
    <ChildVue
    
    />
</div>
</template>
<script>
import ChildVue from '@/components/flagment/ChildVue.vue';
import DeepChild from '@/components/flagment/DeepChild.vue';
export default{ 
    name:'',
    components:{ChildVue,DeepChild},
    data(){
        return{
            
        };
    },
    provide() {
return {deepChildData : '새로운 문자'}
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>