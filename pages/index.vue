<template>
  <div>
    <img src="@/assets/icons/home/bg.svg" alt="bg" class="w-full absolute left-0 top-0 z-0">
    <div class="relative z-10">
      <HomeMain />
      <HomeInfo />
      <HomeHowWorks />
      <HomeReady />
      <HomeTrust />
      <HomeBlog />
      <HomeQuestion />
    </div>
  </div>
</template>

<script>
import HomeMain from '@/components/main/Main';
import HomeInfo from '@/components/main/Info';
import HomeHowWorks from '@/components/main/HowWork';
import HomeReady from '@/components/main/Ready';
import HomeTrust from '@/components/main/Trust';
import HomeBlog from '@/components/main/Blog';
import HomeQuestion from '@/components/main/Question';

export default {
  components: {
    HomeMain,
    HomeInfo,
    HomeHowWorks,
    HomeReady,
    HomeTrust,
    HomeBlog,
    HomeQuestion
  }
}
</script>

<style>

</style>
