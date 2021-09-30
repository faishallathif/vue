<template >
  <nav>
    <v-app-bar>
      <v-toolbar-title>Cuniverse</v-toolbar-title>
        <v-text-field class="ml-5"
        solo
        placeholder="Cari, produk, sekolah, kelas..."
        append-icon="mdi-magnify"
        hide-details="true"></v-text-field>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn @click="drawer = !drawer">
        login
      </v-btn>
      
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="pa-5"
      right
      temporary
      width="auto"
      >
        <FormLogin/>
      </v-navigation-drawer>
  </nav>
</template>
<script>
import FormLogin from '@/components/FormLogin'
  export default {
    components:{
      FormLogin
    },
    data: () => ({
      drawer: false,
    }),
  }
</script>
<style scoped>

</style>