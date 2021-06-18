<template>
  <div class="wrapper py-8 sm:py-12 md:py-16 lg:py-24 xl:py-28 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pc:px-32">
    <h1 class="text-28 md:text-38 lg:text-48 text-mainBlue font-GothamProBold mb-8 text-center">
      Ready-to-go
      <span class="text-mainLightBlue">BPO solutions</span>
      to solve your process challenges today
    </h1>
    <div class="my-12 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(data, i) in datas"
        :key="i"
        class="p-4 md:p-10 bg-white rounded-5 shadow-mainBox"
      >
        <img
          :src="require(`@/assets/icons/home/ready/${data.icon}.svg`)"
          :alt="data.title"
          class="mb-3 md:mb-6"
        />
        <h1 class="text-base md:text-18 lg:text-20 text-mainBlue font-OpenSans font-bold mb-3 md:mb-6">{{ data.title }}</h1>
        <p class="text-mainDarkBlue text-14 md:text-base font-OpenSans font-normal">{{data.text}}</p>
      </div>
      <div
        class="consultation p-10 bg-BoxBg rounded-5 flex flex-col justify-between bg-no-repeat bg-cover"
        :style="{backgroundImage: 'url(' + require(`@/assets/icons/home/consultation.svg`) + ')'}"
      >
        <h1 class="text-base md:text-18 lg:text-20 text-white font-OpenSans font-bold mb-6">Get a free <br /> consultation</h1>
        <img src="@/assets/icons/arrow-right-white.svg" alt="arrow" width="30" class="cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeReady',
  data: () => ({
    datas: [
      {
        icon: 'typing',
        title: 'Typing',
        text: 'In today’s volatile and highly complex business environment, substantial'
      },
      {
        icon: 'transcription',
        title: 'Trasncription',
        text: 'In today’s volatile and highly complex business environment, substantial'
      },
      {
        icon: 'translation',
        title: 'Translation',
        text: 'In today’s volatile and highly complex business environment, substantial'
      },
      {
        icon: 'data',
        title: 'Data Entry',
        text: 'In today’s volatile and highly complex business environment, substantial'
      },
      {
        icon: 'admin',
        title: 'Admin Services',
        text: 'In today’s volatile and highly complex business environment, substantial'
      },
    ]
  })
}
</script>

<style scoped>
.wrapper {
  background: rgba(229,232,253, .3);
}
</style>
