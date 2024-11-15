<template>
<div>
  <input type="text" value="userId">
  <button  @click="checkId()">ID_CHCEK</button>
  <input type="text" :value="user">
</div>
</template>
<script>

export default{ 
  name:'',
  components:{},
  data(){
    return{
      userId: '',
      myImages: 'cat.jpg',
      title: '예쁜고양이',
      styleCat: {
        color: 'blue',
        fontsize: '30px'
      },
      test1: ''
    };
  },
  setup(){},
  created(){},
  mounted(){},
  unmounted(){},
  methods:{
    checkId() {
      console.log('heejin')
    }
  }
}
</script>