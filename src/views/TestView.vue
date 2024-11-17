<template>
  <div>
    <nav>
      <a v-for="(menu,i) in menuLists" :key="i" :href="menu.link">{{ menu.text }}</a>
    </nav>


  </div>
</template>
<script>

export default {
  name: '',
  components: {},
  data() {
    return {
      menuLists: [
        { text: '메뉴1', link: 'render'},
        { text: '메뉴2', link: 'show'},
        { text: '메뉴3', link: 'watch'},
        { text: '메뉴4', link: 'about'},
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    
  }
}
</script>