<template>
  <div class="flex flex-wrap justify-between my-10 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pc:px-32">
    <div
      v-for="(data, i) in datas"
      :key="i"
      class="px-0 xs:px-2 md:px-6 w-full xs:w-1/2 lg:w-3/12 mb-8 lg:mb-0"
    >
      <h3 class="text-mainBlue font-lato font-medium text-18 md:text-20 lg:text-25 mb-3">{{data.title}}</h3>
      <p class="text-mainDarkBlue text-14 lg:text-base font-OpenSans font-normal mb-4 xs:mb-8">{{data.text}}</p>
      <a class="text-mainOrange font-OpenSans uppercase text-12 lg:text-13 font-bold cursor-pointer">Learn More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInfo',
  data: () => ({
    datas: [
      {
        title: 'Cost effective',
        text: 'Capital Typing delivers smart, efficient solutions that save time and money.',
      },
      {
        title: 'Flexible',
        text: 'Design solutions to meet your exact need, and integrate seamlessly with your operations.',
      },
      {
        title: 'Reliable',
        text: 'Secure, trustworthy, and proven systems for getting the job done right, and on time, every time.',
      },
      {
        title: 'Scalable',
        text: 'Respond to changing operational requirements smoothly and quickly.',
      },
    ]
  })
}
</script>
