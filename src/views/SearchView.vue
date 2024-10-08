<template>
  <div>
    <h1>Tìm kiếm</h1>
    <input
      v-model="keyword"
      type="text"
      placeholder="Nhập từ khóa tìm kiếm..."
    />
    <button @click="search">Tìm kiếm</button>

    <div v-if="query">
      <p>
        Value: <strong>{{ query }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const keyword = ref('');
const route = useRoute(); 
const router = useRouter();

const query = computed(() => route.query.q);

const search = () => {
  if (keyword.value) {
    router.push({ path: '/search', query: { q: keyword.value } });
  }
};
</script>

<style scoped>
</style>
