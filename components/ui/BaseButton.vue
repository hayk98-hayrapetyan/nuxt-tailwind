<template>
  <button
    class="rounded-5 font-OpenSans font-bold text-13 uppercase px-14 py-4"
    :class="colors"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    colors: {
      type: String,
      default: 'bg-mainOrange text-white shadow-mainShadow'
    }
  }
}
</script>
