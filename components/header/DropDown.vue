<template>
  <div
    class="wrapper absolute left-0 top-full bg-white rounded-10 ml-2 z-30"
  >
    <img src="@/assets/icons/drop-down.svg" alt="arrow" class="absolute w-full left-0 -top-2" />
    <img src="@/assets/icons/lamp.svg" alt="lamp" class="absolute right-0 bottom-0 max-h-32" />
    <div class="py-9 pl-8 pr-24 w-full h-full z-40 relative">
      <div class="w-full flex flex-wrap">
        <div
          v-for="(link, i) in links"
          :key="i"
          class="w-1/2 mb-3"
        >
          <a class="transition duration-300 text-14 font-lato text-mainBlue font-bold hover:text-mainOrange cursor-pointer">{{link.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    links: {
      type: Array
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 430px;
  height: 165px;
}
</style>
