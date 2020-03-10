<template>
  <div class="header">
    <transition name="fade">
      <img
        class="object-cover h-full w-full absolute -z-10 transition-opacity duration-500 ease-in-out"
        :class="[coverOpacity]"
        src="../../assets/images/header.jpg"
        v-on:load="onCoverLoaded"
        v-show="coverLoaded"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      coverLoaded: false
    };
  },
  methods: {
    onCoverLoaded() {
      this.coverLoaded = true;
    }
  }
};
</script>

<style></style>
