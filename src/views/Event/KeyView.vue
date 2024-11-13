<template>
  <div>
    <!-- <input type="search" name="" id="" @keyup="checkEnter($event)" v-model="searchText">  -->
    <input
      type="search"
      name=""
      id=""
      v-model="searchText"
      @keyup.enter="startSearch"
    />
    <button @click="startSearch()">Search</button>
    <button type="submit" @click.prevent="startSearch">what</button>
    <br />
    <br />
    <h1>{{ searchText2 }}</h1>
    <div>
      <img src="cat.jpg" alt="" style="width:300px" @contextmenu.prevent="" />
      <input type="radio" @click.prevent="preventClick" />

      <div class="parent" @click="parentClick">
        <div class="child" @click.stop="childClick"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      searchText: "Hello World",
      searchText2: ""
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    startSearch() {
      this.searchText2 = this.searchText;
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.startSearch();
      }
    },
    preventClick() {
      console.log("클릭 금지");
      alert("클릭금지");
    },
    parentClick() {
      console.log("부모태그의 이벤트 발생!!!");
    },
    childClick() {
      console.log("자식 태그의 이벤트 발생!!!");
    }
  }
};
</script>

<style scoped>
.parent {
  border: 1px solid blue;
  display: inline-block;
  height: 500px;
  width: 500px;
}
.child {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
