<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
    v-model="password"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show2 ? 'text' : 'password'"
            label="Password"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="login"
    >
      login
    </v-btn>
  </v-form>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
  export default {
    data: () => ({
      valid: true,
        show2: false,
        password: '',
        passwordRules:[
             value => !!value || 'Required.',
        ],
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      login () {
        //   console.log(this.email)
        //   console.log(this.password)
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
<style scoped>

</style>

