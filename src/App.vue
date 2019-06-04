<template>
  <div >
    <router-view></router-view>
    <footerBottom/>  
  </div>
</template>

<script>
import footerBottom from './components/footer.vue'
export default {
components:{
  footerBottom
}
}
</script>

<style>

</style>
