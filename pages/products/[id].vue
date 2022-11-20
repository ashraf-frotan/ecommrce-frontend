<template>
  <div>this is product details {{ id }}</div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
</script>

<style>
</style>