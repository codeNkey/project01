<template>
  <div>
    <button @click="toggleLike" :disabled="isLiked">
      좋아요
    </button>
    <p>좋아요 수: {{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,      // 좋아요 수
      isLiked: false // 좋아요를 눌렀는지 여부
    };
  },
  methods: {
    toggleLike() {
      if (!this.isLiked) {
        this.count++;
        this.isLiked = true; // 좋아요 누른 상태로 변경
      }
    }
  }
};
</script>
