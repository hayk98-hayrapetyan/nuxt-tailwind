<template>
  <nav class="z-20 flex justify-between items-center py-4 relative px-2 xs:px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pc:px-32">
    <div @click="showMenu" :class="{'show': show}" class="flex custom:hidden toggler h-5 w-10 flex-col justify-between cursor-pointer">
      <div class="bar_1 w-full"></div>
      <div class="bar_2 w-full"></div>
      <div class="bar_3 w-full"></div>
    </div>
    <div class="flex justify-center items-center navbar-logo cursor-pointer">
      <img src="@/assets/img/logo.png" alt="logo" />
    </div>
    <div class="hidden custom:block">
      <ul class="flex items-center">
        <li
          v-for="link in links"
          :key="link.name"
          class="dropDown relative pb-2 z-20"
        >
          <a
            class="transition duration-100 px-5 text-mainBlue hover:text-mainOrange font-lato font-bold text-14 cursor-pointer whitespace-nowrap flex items-center"
          >
            {{ link.name }}
            <img v-if="link.sub_links" src="@/assets/icons/arrow-bottom.svg" alt="arrow" class="ml-2 inline mt-1">
          </a>
          <DropDown
            v-if="link.sub_links"
            :links="link.sub_links"
            class="transition duration-300 dropDownElem"
          />
        </li>
      </ul>
    </div>
    <div>
      <a href="tel:800-784-9402" class="flex items-center whitespace-nowrap text-mainBlue font-lato font-bold text-14">
        <img src="@/assets/icons/tel.svg" alt="tel" class="mr-2 transform scale-125 custom:scale-100">
        <span class="hidden custom:inline">800-784-9402</span>
      </a>
    </div>
    <!--  Mobile  -->
    <transition name="slide-horizon" mode="out-in">
      <ul v-if="show" class="text-right transition duration-300 right-0 top-full z-40 block custom:hidden absolute bg-info py-4 pr-6 pl-2 w-full bg-white shadow-mainBox">
        <li v-for="(link, i) in links" :key="link.name" class="mb-3 dropDown">
          <a
            @click="showMenu(link.sub_links)"
            class="text-right px-5 text-mainBlue font-lato font-bold text-14 cursor-pointer whitespace-nowrap flex items-center"
          >
            {{ link.name }}
            <img
              v-if="link.sub_links"
              src="@/assets/icons/arrow-bottom.svg"
              alt="arrow"
              class="ml-2 inline mt-1"
            />
          </a>
          <ul v-if="link.sub_links" class="pl-2 dropDownElem">
            <li
              v-for="(sub, k) in link.sub_links"
              :key="k"
            >
              <a class="text-right px-5 text-mainBlue font-lato font-bold text-14 cursor-pointer whitespace-nowrap flex items-center">
                {{sub.name}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>
import DropDown from "./DropDown";

export default {
  components: { DropDown },
  data: () => ({
    links: [
      {
        name: 'Services',
        sub_links: [
          {name: 'Typing'},
          {name: 'Admin Services'},
          {name: 'Trasncription'},
          {name: 'Data Entry'},
          {name: 'Translation'},
          {name: 'Data Entry'},
        ]
      },
      {
        name: 'Industries',
        sub_links: [
          {name: 'Typing'},
          {name: 'Admin Services'},
          {name: 'Trasncription'},
          {name: 'Data Entry'},
          {name: 'Translation'},
        ]
      },
      {name: 'About Us' },
      {name: 'Blog' },
      {name: 'Contacts Us' },
    ],
    show: false
  }),
  methods: {
    showMenu(e){
      if(e && e.length){
        return;
      }
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>
.dropDownElem {
  display: none;
}
.dropDown:hover .dropDownElem, .dropDownElem:hover {
  display: block;
}
.toggler > div {
  height: 2px;
  background: #223F47;
  transition: all 0.3s;
}
.show .bar_2 {
  display: none;
}
.show .bar_1 {
  transform: rotate(45deg) translate(0px, 10px);
}
.show .bar_3 {
  transform: rotate(315deg) translate(3px, -11px);
}
</style>
