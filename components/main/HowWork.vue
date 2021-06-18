<template>
  <div class="my-8 sm:my-12 md:my-16 lg:my-24 xl:my-28 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pc:px-32">
    <h1 class="text-28 md:text-38 lg:text-48 text-mainBlue font-GothamProBold mb-8 text-center">
      <span class="text-mainLightBlue">How </span>
      it works?
    </h1>
    <div class="my-12 text-center flex flex-col custom:flex-row justify-between">
      <div class="px-10">
        <img src="@/assets/icons/home/people.svg" alt="people" class="bigImg mx-auto mb-6 custom:mb-12">
        <h1 class="text-18 md:text-20 lg:text-25 xl:text-30 text-mainBlue font-GothamProBold mb-4 custom:mb-8">Smart People</h1>
        <p class="text-mainDarkBlue text-14 md:text-base font-OpenSans font-normal mb-0 custom:mb-8">Lorem ipsum description here Lorem ipsum description</p>
      </div>
      <div>
        <img src="@/assets/icons/plus.svg" alt="plus" class="mx-auto my-12 custom:my-20">
      </div>
      <div class="px-10">
        <img src="@/assets/icons/home/technology.svg" alt="technology" class="bigImg mx-auto mb-6 custom:mb-12">
        <h1 class="text-18 md:text-20 lg:text-25 xl:text-30 text-mainBlue font-GothamProBold mb-4 custom:mb-8">Smart Technology</h1>
        <p class="text-mainDarkBlue text-14 md:text-base font-OpenSans font-normal mb-0 custom:mb-8">Lorem ipsum description here Lorem ipsum description</p>
      </div>
      <div>
        <img src="@/assets/icons/equal.svg" alt="equal" class="mx-auto my-12 custom:mt-20">
      </div>
      <div class="px-10">
        <img src="@/assets/icons/home/solution.svg" alt="solution" class="bigImg mx-auto mb-6 custom:mb-12">
        <h1 class="text-18 md:text-20 lg:text-25 xl:text-30 text-mainBlue font-GothamProBold mb-4 custom:mb-8">Smart Solutions</h1>
        <p class="text-mainDarkBlue text-14 md:text-base font-OpenSans font-normal mb-0 custom:mb-8">Lorem ipsum description here Lorem ipsum description</p>
      </div>
    </div>
    <div class="text-center">
      <BaseButton text="Learn more about BPO" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHowWork',
}
</script>

<style scoped>
.bigImg {
  height: 160px;
}
</style>
