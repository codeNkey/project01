<template>
  <div>
    <input type="text" name="" id="" :value="userId" />
    <button @click="checkId()">ID_CHCEK</button>
    <input type="text" name="" id="" :value="userId" />
    <br />
    <br />
    <input type="serach" v-model="text1" />
    <button :disabled="text1 === ''">조회</button>
    <p :style="styleCat">{{ title }}</p>
    <img :src="myImages" alt="" style="width:500px" />
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      userId: "",
      myImages: "cat.jpg",
      title: "예쁜고양이",
      styleCat: {
        color: "blue",
        fontSize: "30px"
      },
      text1: ""
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkId() {
      console.log("heejin");
    }
  }
};
</script>
