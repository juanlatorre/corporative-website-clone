<template>
  <router-link
    to="/companies"
    class="text-blue-900 font-bold uppercase transition-all duration-300 ease-linear hover:text-gray-500"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["to"]
};
</script>

<style></style>
