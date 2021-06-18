<template>
  <footer class="bg-darkBlue">
    <div class="flex flex-wrap lg:flex-nowrap justify-between pt-20 pb-16 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pc:px-32">
      <div class="w-full lg:w-auto mb-6 lg:mb-0">
        <nuxt-link to="/">
          <img :src="require(`@/assets/img/footer_logo.png`)" alt="logo" class="mx-auto lg:mx-0" />
        </nuxt-link>
      </div>
      <div v-for="(link, i) in links" :key="i" class="w-full sm:w-1/2 lg:w-auto inline-block lg:block text-center lg:text-left mb-6 lg:mb-0">
        <p class="text-white text-13 font-OpenSans font-bold mb-4 sm:mb-8 uppercase">{{ link.title }}</p>
        <ul>
          <li v-for="(sub_link, j) in link.links" :key="j" class="mb-4">
            <a class="flex justify-center lg:justify-start items-center text-white text-base font-OpenSans font-normal opacity-80">
              <span v-if="sub_link.icon" class="w-4 mr-3">
                <img
                  :src="require(`@/assets/icons/${sub_link.icon}.svg`)"
                  :alt="sub_link.icon"
                  class="mx-auto"
                >
              </span>
              {{sub_link.name}}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <CopyWrite />
  </footer>
</template>

<script>
import CopyWrite from "./CopyWrite";

export default {
  components: { CopyWrite },
  data: () => ({
    links: [
      {
        title: 'About us',
        links: [
          { name: 'FAQ' },
          { name: 'Career' },
          { name: 'Support' },
          { name: 'Our Portal' }
        ]
      },
      {
        title: 'Services',
        links: [
          { name: 'Typing' },
          { name: 'Transcription' },
          { name: 'Translation' },
          { name: 'Data Entry' },
          { name: 'Admin Service' },
          { name: 'Set Up Free' },
        ]
      },
      {
        title: 'Industries',
        links: [
          { name: 'Schools & Universities' },
          { name: 'Medical & Healthcare' },
          { name: 'Business & Consulting' },
          { name: 'Banking, Finance & Insurance' },
          { name: 'Legal & Law Enforcment' },
          { name: 'Look All' },
        ]
      },
      {
        title: 'Contacts',
        links: [
          { name: '800-784-9402', icon: 'tel'},
          { name: 'capitaltyping@email', icon: 'mail' },
        ]
      },
    ]
  })
}
</script>
