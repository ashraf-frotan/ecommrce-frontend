<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
var products = [
  {
    id: 1,
    title: "Warm winter coat",
    price: 12.4,
    image:  "1.jpg",
    description: "",
  },
  {
    id: 2,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam!",
  },
  {
    id: 4,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam!",
  },
  {
    id: 3,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam!",
  },
  {
    id: 5,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam!",
  },
  {
    id: 6,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam!",
  },
  {
    id: 7,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam!",
  },
  {
    id: 8,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam!",
  },
  {
    id: 9,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam!",
  },
];
</script>

<style>
</style>