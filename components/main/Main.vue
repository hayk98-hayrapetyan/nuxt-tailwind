<template>
  <div class="flex flex-wrap items-center justify-between mt-4 xs:mt-0 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pc:px-32">
    <div class="w-full xs:w-1/2 lg:w-2/5">
      <h1 class="text-18 sm:text-24 md:text-30 lg:text-38 xl:text-48 text-mainBlue font-GothamProBold mb-8">
        <span class="text-mainLightBlue">Simplify</span>
        the way you do business
      </h1>
      <p class="text-mainDarkBlue text-14 lg:text-base font-OpenSans font-normal mb-8">Transform your organization with efficient and cost-effective BPO solutions.</p>
      <BaseButton
        text="Get started"
      />
    </div>
    <div class="mx-auto xs:mx-0 my-6 xs:my-0 w-5/6 xs:w-1/2 lg:w-3/5 text-right">
      <img src="@/assets/icons/home/main.svg" alt="main" class="ml-auto">
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton";
export default {
  name: 'HomeMain',
  components: {BaseButton}
}
</script>
