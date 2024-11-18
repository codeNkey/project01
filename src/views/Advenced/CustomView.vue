<template>
<div>
    <div class="" >
        <label for="email" class="form-label" >이메일 주소</label>
        <input type="email" class="form-control" v-focus></div>
    <div class="">
        <label for="pw" class="form-label">비밀번호</label>
        <input type="password" id='pw' class="form-control" v-focus>
    </div>
    <div>
        <p>전화번호</p>
        <input type="text" name="" id="" v-number> -
        <input type="text" name="" id="" v-number> -
        <input type="text" name="" id="" v-number> 
    </div>
    <div>
        <button class="btn btn-primary">로그인</button>
    </div>
</div>

</template>
<script>

export default{ 
    name:'',
    components:{},
    directives: {
        
            focus: {
                mounted(el,) {
                    el.focus()
                }
            },
            number: {
                mounted(el) {
                    el.addEventListener('input', (event) => {
                    event.target.value = event.target.value.replace(/\D/g,'')})
                }
            }
        },
    
    data(){
        return{
            num1: 0,
            num2: 0,
            num3: 0,

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>