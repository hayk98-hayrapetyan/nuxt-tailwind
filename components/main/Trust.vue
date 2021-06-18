<template>
  <div>
    <div class="reviewSlide sm:my-12 md:my-16 lg:my-24 xl:py-28 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-40 pc:px-32">
      <h1 class="text-28 md:text-38 lg:text-48 text-mainBlue font-GothamProBold mb-8 text-center">
        <span class="text-mainLightBlue">Trusted</span>
        since 2002 by <br /> organizations big and small
      </h1>

      <client-only>
        <VueSlickCarousel :arrows="true" :dots="false" v-bind="settings">
          <template #prevArrow="arrowOption">
            <div class="hidden xl:block custom-arrow">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="24" stroke="#E5E8FD" stroke-width="2"/>
                <path d="M28 19L22 25L28 31" stroke="#41587A" stroke-width="2"/>
              </svg>
            </div>
          </template>
          <template #nextArrow="arrowOption">
            <div class="hidden xl:block custom-arrow">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle r="24" transform="matrix(-1 0 0 1 25 25)" stroke="#E5E8FD" stroke-width="2"/>
                <path d="M22 19L28 25L22 31" stroke="#41587A" stroke-width="2"/>
              </svg>
            </div>
          </template>
          <div
            v-for="n in 10"
            :key="n"
            class="slideWrap p-4 md:p-10 bg-white rounded-5 shadow-mainBox mx-auto"
          >
            <div class="flex items-center mb-6">
              <div
                class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-center bg-no-repeat bg-cover mr-4"
                :style="{background: 'url(' + require(`@/assets/img/user.png`) + ')'}"
              >
              </div>
              <div>
                <h1 class="text-base md:text-18 lg:text-20 text-mainBlue font-lato font-medium mb-2">John Doe</h1>
                <p class="text-mainDarkBlue text-12 md:text-14 font-lato font-bold">Company name</p>
              </div>
            </div>
            <p class="text-mainDarkBlue text-12 md:text-14 lg:text-base font-OpenSans font-normal">We have been designing and implementing smart business process have been designing and implementing smart business process. We have been designing and implementing smart business process have been designing and implementing smart business process</p>
          </div>
        </VueSlickCarousel>
      </client-only>
    </div>

    <LogoSlide />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import LogoSlide from "./components/LogoSlide";

export default {
  name: 'HomeTrust',
  components: { VueSlickCarousel, LogoSlide },
  data: () => ({
    settings: {
      "dots": false,
      "dotsClass": "slick-dots custom-dot-class",
      "edgeFriction": 0.35,
      "infinite": true,
      "autoplay": true,
      "speed": 1500,
      "cssEase": "linear",
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "swipeToSlide": true
    },
  })
}
</script>
