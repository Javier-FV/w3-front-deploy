<template>
  <div class="vue-tempalte">
    <b-container w-50 style="margin-top: 30px">
      <form @submit.prevent="signIn">
        <h3>Sign In</h3>

        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            v-model="usuario.email"
            class="form-control form-control-lg"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="usuario.password"
            class="form-control form-control-lg"
          />
        </div>
          <b-button-group>
        <button
          v-show="!loading"
          type="submit"
          class="btn btn-dark btn-lg btn-block"
          @click="signIn()"
        >
          Sign In
        </button>
           <router-link to="/SignUp">
        <button
        router-link
          v-show="!loading"
          type="newuser"
          class="btn btn-dark btn-lg btn-block"
          
        >
          Register
        </button>    </router-link> </b-button-group>

        <p class="forgot-password text-right mt-2 mb-4">
          <router-link to="/forgot-password">Forgot password ?</router-link>
        </p>
        <div>
          <div class="alert alert-light" role="alert">
            {{ message }}
          </div>

          <div class="preloader-wrapper active" v-show="loading">
            <div class="spinner-layer spinner-red-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div>
              <div class="gap-patch">
                <div class="circle"></div>
              </div>
              <div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="social-icons">
          <ul>
            <li>
              <a href="#"><i class="fa fa-google"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </li>
          </ul>
        </div>
      </form>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
      message: "Hola Bienvenido",
      loading: false,
    };
  },
  methods: {
    ...mapActions("usuarios", ["loginUser"]),

    async signIn() {
      await this.loginUser(this.usuario)
        .then((response) => {
          console.log("RESPONSE");
          console.log(response)
       
          this.message = response.data.msg;
          const { token } = response.data;
          
    
          if (!token) {

            this.$router.push("/login");
          } else {
            
            window.localStorage.setItem("token", token);
            const { userId }= response.data.usuario;
           
            this.$router.push({ name:"Home"});
          }
        })
        .catch((err) => {
          console.log(err)
          var { data } = err.response;

          var totalErrors = "";

          if (data.errors !== undefined) {
            if (data.errors.length >= 0) {
              for (err of data.errors) {
                totalErrors = "" + err.msg;
              }
            } else {
              totalErrors = "" + data.errors.msg;
            }
          }
          this.message = totalErrors;
        });
      this.loading = false;
    },
  },
};
</script>