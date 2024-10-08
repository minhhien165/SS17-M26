<template>
  <div>
    <h1>Danh Sách Bài Viết</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const posts = ref([
  { id: 1, title: "Bài viết 1" },
  { id: 2, title: "Bài viết 2" },
  { id: 3, title: "Bài viết 3" },
]);
</script>

<style scoped>
</style>
