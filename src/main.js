import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCwvvjgEJG1jKuw4YaWbAqIQZhnNWnf4ik",
  authDomain: "pertama-e561c.firebaseapp.com",
  databaseURL: "https://pertama-e561c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pertama-e561c",
  storageBucket: "pertama-e561c.appspot.com",
  messagingSenderId: "574050799611",
  appId: "1:574050799611:web:212a9df334433a71cdc55e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
