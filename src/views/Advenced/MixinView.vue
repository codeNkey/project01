<script>
    export default {
  methods: {
    async get(URL) {
      try {
        const response = await axios.get(URL);
        console.log(response.data); 
        return response.data; 
      } catch (error) {
        console.error(error); 
      }
    },
  },
};
</script>
