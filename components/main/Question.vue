<template>
  <div
    class="w-full py-20 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pc:px-32 bg-BoxBg rounded-5 flex flex-col md:flex-row justify-between items-center bg-no-repeat bg-cover"
    :style="{backgroundImage: 'url(' + require(`@/assets/icons/home/question_bg.svg`) + ')'}"
  >
    <div class="text-center md:text-left">
      <h1 class="text-28 md:text-38 lg:text-48 text-white font-GothamProBold mb-3 md:mb-6">Still have a questions?</h1>
      <p class="text-white text-base font-OpenSans font-normal">We can answer on all of it. Just call our manager.</p>
    </div>
    <div class="mt-6 md:mt-0">
      <BaseButton colors="bg-white text-mainLightBlue" text="Get started" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeQuestion'
}
</script>
