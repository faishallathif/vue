<template>
  <v-app app>
    <Navbar/>
    <v-content>
      <h1></h1>
      <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
  export default {
    components:{
      Navbar
    },
    data: () => ({
     a:false,
    }),
  }
</script>
<style lang="scss">

</style>
