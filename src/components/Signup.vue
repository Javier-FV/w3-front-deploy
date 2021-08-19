<template>
  <div class="vue-tempalte">
    <b-container w-50 style="margin-top: 30px">
      <form>
        <h3>Sign Up</h3>

        <div class="form-group">
          <label>Full Name</label>
          <input type="text" 
          class="form-control form-control-lg"
          v-model="usuario.name" />
        </div>

        <div class="form-group">
          <label>Email address</label>
          <input type="email" 
          class="form-control form-control-lg"
          v-model="usuario.email" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" 
          v-model="usuario.password"
          class="form-control form-control-lg" />
        </div>

        <button
          type="submit"
          class="btn btn-dark btn-lg btn-block"
          @click="register()"
        >
          Sign Up
        </button>

        <p class="forgot-password text-right">
          Already registered
          <router-link :to="{ name: 'login' }">sign in?</router-link>
        </p>
      </form>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      usuario: {
        name:"",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("usuarios", ["registerUser"]),
    async register() {
        console.log("Entro a registrar")
        await this.registerUser(this.usuario)
        this.$router.push({ name:"login"});

    },
  },
};
</script>