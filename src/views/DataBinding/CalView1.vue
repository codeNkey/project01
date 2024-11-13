<template>
  <div>
    <label for="add">더하기</label>
    <input type="checkbox" id="add" value="{{ result }}" v-model="addFunc" />
    <label for="sub">빼기</label>
    <input type="checkbox" />
    <label for="mul">곱하기</label>
    <input type="checkbox" />
    <label for="div">나누기</label>
    <input type="checkbox" /><br />
    <input type="text" v-model="num1" /> <input type="text" v-model="num2" />
    <p>{{ result }}</p>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addFunc() {
      this.result = this.num1 + this.num2;
      return this.result;
    },
    subFunc() {
      this.result = this.num1 - this.num2;
      return this.result;
    },
    mulFunc() {
      this.result = this.num1 * this.num2;
      return this.result;
    },
    divFunc() {
      this.result = this.num1 / this.num2;
      return this.result;
    }
  }
};
</script>
