<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>
<script>

export default {
  name: '',
  components: {},
  data() {
    return {
      name: 'value',
      
    };
  },
  computed: {
    func() {
      return '함수 실행 결과'
    }
  },
    mounted() {
      console.log('mounted')
      console.log(document.querySelector('h1'))
    },
  created() {
    console.log(this.name)
    console.log("created")
    console.log(document.querySelector('h1'))

  },
  methods: {
    
  }
}
</script>