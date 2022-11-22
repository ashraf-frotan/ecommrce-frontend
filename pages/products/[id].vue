<template>
  <div>
    <Head>
      <Title>Product Info</Title>
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});

var products = [
  {
    id: 1,
    title: "Warm winter coat",
    price: 12.4,
    image: "1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia atque dignissimos nisi labore consequatur numquam aspernatur consequuntur iusto suscipit, impedit quam at molestias, nemo eos ad culpa, maiores ullam",
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

var product = products.filter((p) => p.id == id);
product = product[0];
if (!product) {
  console.log(product, "eeeeeeer");
  throw createError({
    statusCode: 400,
    statusMessage: "Product not found",
    fatal: true,
  });
}
</script>

<style>
</style>