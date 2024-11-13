<template>
<div>
    <div v-if = " userRole === 'C' ">
        <button>조회</button>&emsp;
    </div>
    <div v-else-if = " userRole === 'S' ">
        <button >조회</button>
        <button >판매물품등록</button>
    </div>
    <div v-else>
        <button>조회</button>
        <button>판매물품등록</button>
        <button>삭제</button>
    </div>
    <br>
    <br>
    <select name="" id="" v-model="userRole">
        <option value="A">Admin</option>
        <option value="S">Seller</option>
        <option value="C">Customer</option>
    </select>
</div>
</template>
<script>
export default{ 
    name:'',
    components:{},
    data(){
        return{
            userRole: 'A'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>