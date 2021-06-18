<template>
  <div class="border-t border-gray-500 flex flex-col md:flex-row justify-between items-center py-6 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pc:px-32">
    <div class="flex flex-col md:flex-row text-center md:text-left">
      <p class="text-white opacity-50 text-13 font-OpenSans font-normal mb-3 md:mb-0 mr-0 md:mr-10">© 2019 Capital Typing. All Rights Reserved</p>
      <p class="text-white opacity-50 text-13 font-OpenSans font-normal mb-0">Legal  Privacy  Policy</p>
    </div>
    <div class="flex items-center mt-4 md:mt-0">
      <img
        v-for="social in socials"
        :key="social"
        :src="require(`@/assets/icons/social/${social}.svg`)"
        :alt="social"
        class="ml-4 opacity-50 cursor-pointer"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'CopyWrite',
  data: () => ({
    socials: ['facebook', 'twitter', 'linkedin']
  })
}
</script>
