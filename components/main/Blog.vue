<template>
  <div class="my-8 sm:my-12 md:my-16 lg:my-24 xl:my-28 px-1 xs:px-1 sm:px-2 md:px-4 lg:px-8 xl:px-12 pc:px-32">
    <h1 class="text-28 md:text-38 lg:text-48 text-mainBlue font-GothamProBold mb-8 text-center">
      Our
      <span class="text-mainLightBlue">Blog</span>
    </h1>
    <div class="my-14 flex flex-wrap justify-between">
      <div
        v-for="(blog, i) in blogs"
        :key="i"
        class="block xs:flex lg:block px-2 md:px-4 lg:px-4 xl:px-10 w-full lg:w-2/6 mb-6 lg:mb-0"
      >
        <div
          class="bg-center bg-no-repeat bg-cover w-full xs:w-3/4 sm:w-2/4 lg:w-full h-36 sm:h-36 md:h-44 lg:h-52 mb-4 xs:mb-0 lg:mb-6 mr-6 lg:mr-0"
          :style="{backgroundImage: 'url(' + require(`@/assets/img/blog/${blog.img}.png`) + ')'}"
        ></div>
        <div class="flex flex-col justify-between lg:block">
          <div>
            <h1 class="text-base md:text-18 lg:text-20 text-mainBlue font-OpenSans font-bold mb-3 sm:mb-6">{{ blog.title }}</h1>
            <p class="text-mainDarkBlue text-14 md:text-base font-OpenSans font-normal mb-2 sm:mb-6">{{ blog.text }}</p>
          </div>
          <p class="text-mainDarkBlue text-14 md:text-base font-OpenSans font-normal mb-0 lg:mb-6 text-right lg:text-left">{{ blog.date }}</p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <BaseButton text="Look more" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBlog',
  data: () => ({
    blogs: [
      {
        img: 'blog1',
        title: 'The Role of BPO in the Insurance Industry',
        text: 'In today’s volatile and highly complex business environment, substantial change is being witnessed in the insurance sector.',
        date: '20.05.2019'
      },
      {
        img: 'blog2',
        title: 'Top 7 B2B Appointment Setting Tips for you',
        text: 'One of the most integral parts of any business is scheduling appointments. It is one of the ways for sales representatives',
        date: '10.03.2019'
      },
      {
        img: 'blog3',
        title: '5 Best Practices in Air Freight Logistics',
        text: 'In the current business landscape, a large number of business enterprises are increasingly implementing global sourcing',
        date: '12.02.2019'
      }
    ]
  })
}
</script>

<style scoped>

</style>
