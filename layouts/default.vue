<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/header';
import AppFooter from '@/components/footer';

export default {
  components: { AppHeader, AppFooter }
}
</script>

<style>

</style>
