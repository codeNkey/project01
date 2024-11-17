<template>
  <div>
    <p>data: {{ name }}</p>
    <p>result: {{ func }}</p>
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
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    
  }
}
</script>