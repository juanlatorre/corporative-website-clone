<template>
  <nav class="absolute flex md:flex-col items-center justify-between flex-wrap">
    <div class="flex items-center flex-shrink-0 mr-6 my-10 ml-12">
      <img
        class="fill-current w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 mr-2 transition-all transform duration-200 ease-in-out"
        src="https://via.placeholder.com/200x180.png"
      />
    </div>
    <div class="block md:hidden">
      <div
        class="mr-10 menu-button flex items-center text-white w-10 h-10 rotate-0 transition-all duration-500 ease-in-out cursor-pointer relative"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span
          class="w-full absolute bg-white opacity-100 left-0 rotate-0 transition-all duration-300 ease-in-out rounded-sm"
          :class="{ open: isMenuOpen }"
        ></span>
        <span
          class="w-full absolute bg-white opacity-100 left-0 rotate-0 transition-all duration-300 ease-in-out rounded-sm"
          :class="{ open: isMenuOpen }"
        ></span>
        <span
          class="w-full absolute bg-white opacity-100 left-0 rotate-0 transition-all duration-300 ease-in-out rounded-sm"
          :class="{ open: isMenuOpen }"
        ></span>
        <span class="mt-6 bold">MENU</span>
      </div>
    </div>

    <div
      id="navigation"
      class="p-3 bg-white flex flex-col w-full block flex-grow tracking-widest transform md:visible md:opacity-100 md:h-full md:flex-row md:justify-evenly md:translate-x-0 lg:max-w-4xl md:max-w-2xl mb-6 md:mb-0"
      :class="{
        'h-0': !isMenuOpen,
        'opacity-0': !isMenuOpen,
        'overflow-hidden': !isMenuOpen,
        '-translate-x-10': !isMenuOpen,
        'h-full': isMenuOpen
      }"
    >
      <MenuItem to="/companies">Companies</MenuItem>
      <MenuItem to="/about-us">About Us</MenuItem>
      <MenuItem to="/projects">Projects</MenuItem>
      <MenuItem to="/jobs">Jobs</MenuItem>
      <MenuItem to="/news">News</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </div>
  </nav>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";

export default {
  name: "Menu",
  data: () => {
    return {
      isMenuOpen: false
    };
  },
  components: {
    MenuItem
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap");
* {
  font-family: Didact Gothic;
}

div.menu-button > span {
  height: 2px;
}

div.menu-button > span:nth-child(1) {
  top: 0px;
}

div.menu-button > span:nth-child(2) {
  top: 10px;
}

div.menu-button > span:nth-child(3) {
  top: 20px;
}

div.menu-button > span.open:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

div.menu-button > span.open:nth-child(2) {
  opacity: 0;
}

div.menu-button > span.open:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

#navigation {
  transition: height 0.3s ease-in-out, opacity 0.6s ease-in-out 0.2s,
    transform 0.6s ease-out 0.2s;
}
</style>
