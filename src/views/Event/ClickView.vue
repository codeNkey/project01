<template>
<div>
    <p>Counter : {{ num }}</p>
    <button @click="addCount()">Add</button><br>
    <button @click="subCount()">Sub</button>

</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            num : 0
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        addCount() {
            this.num += 1
        },
        subCount() {
            this.num -= 1
        },
    }
}
</script>