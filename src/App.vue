<template>
  <v-app app>
    <Navbar/>
    <v-content>
      <h1 v-if="user">This appear when you have been loged</h1>
      <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

  export default {
    components:{
      Navbar
    },
    created(){
      const auth = firebase.auth();
      auth.onAuthStateChanged(user => { 
        this.user= !!user
        // Check for user status
      })
    },
    data: () => ({
     a:false,
     user:false
    }),
  }
</script>
<style lang="scss">

</style>
