<template>
<div>
  <select
    class="form-select my-2"
    aria-label="Default select example"
    @change="diffChange"
    v-model="selectedData"
  >
    <option value="all">모두 보기</option>
    <option value="high">전일 상승</option>
    <option value="low">전일 하락</option>
  </select>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-if="selectedData == 'all'">
          <input type="checkbox" />
        </th>
        <th v-for="col in headers" :key="col.key">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,i) in items" :key="i">
        
        <th v-if="selectedData == 'all'">
          <input
            type="checkbox"
            :value="item.exchange"
            v-model="checkedItems"
            @change="selectedCheck"
          />
        </th>
        <th v-if="selectedData == 'high'">
          <input
            type="radio"
            :value="item.exchange"
            v-model="checkedItems"
            @change="selectedCheck"
          />
        </th>
        <td v-for="col in headers" :key="col.key">{{ item[col.key] }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "SimpleGrid",
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedData: "all",
      checkedItems: [],
     
    };
  },
  methods: {
    diffChange() {
      this.$emit("diff-change", this.selectedData);
    },
    selectedCheck() {
      this.$emit("change-item", this.checkedItems);
    },
     selectedRadio() {
      this.$emit("checked-item", this.ckeckedRadio);
    },
    
  }
};
</script>
