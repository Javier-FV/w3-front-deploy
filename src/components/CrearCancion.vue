<template>
  <div id="crearcancion">
    <b-container>
      <b-row>
        <h3>
          Usuario {{ $route.params.usuario }} {{ $route.params.name }}, ingresa
          tu canción
        </h3>
        <b-row>
          <b-col cols="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6"
            ><b-form-group
              id="fieldset-songname"
              description="Let us know the name of our song."
              label="Enter song's name"
              label-for="cancion.name"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedbackCancionName"
              :state="stateCancionName"
            >
              <b-form-input
                id="name"
                v-model="$v.cancion.name.$model"
                :state="stateCancionName"
                trim
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col cols="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6">
            <b-form-group
              id="fieldset-author"
              description="Let us know the autor of the song."
              label="Enter the author's name"
              label-for="cancion.autor"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedbackAutor"
              :state="stateAutor"
            >
              <b-form-input
                id="autor"
                v-model="$v.cancion.autor.$model"
                :state="stateAutor"
                trim
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-select
              v-model="cancion.genre"
              :options="options"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="myrow">
          <b-col cols="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6"
            ><b-form-input
              placeholder="Enter image's URL"
              v-model="cancion.urlImagen"
            ></b-form-input
          ></b-col>
          <b-col cols="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6">
            <b-img-lazy thumbnail fluid :src="cancion.urlImagen"></b-img-lazy>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-input
              placeholder="Enter the URL of the song video"
              v-model="cancion.urlPista"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-textarea
              placeholder="Write the lyric of the song"
              v-model="$v.cancion.letra.$model"
              debounce="500"
              rows="3"
              max-rows="12"
              :class="{'is-invalid':$v.cancion.letra.$error, 'is-valid':!$v.cancion.letra.$invalid}"
            ></b-form-textarea>
          </b-col>
        </b-row>
        <b-col cols="12">
          <b-button variant="primary" @click="addSong">Crear canción</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {required, minLength} from 'vuelidate/lib/validators'



export default {
  name: "CrearCancion",
  data() {
    return {
      name:  "",
      usuario:"",
      selected: null,
      options: [
        { value: null, text: "Please select some a genre" },
        { value: "Blues", text: "Blues" },
        { value: "Música clásica", text: "Classic Music" },
        { value: "Jazz", text: "Jazz" },
        { value: "Gospel", text: "Gospel" },
        { value: "Metal", text: "Metal" },
        { value: "Pop", text: "Pop" },
        { value: "Reggaeton", text: "Reggaeton" },
        { value: "Rock and Roll", text: "Rock and Roll" },
        { value: "Rhythm and Blues", text: "Rhythm and Blues" },
        { value: "Salsa", text: "Salsa" },
        { value: "Soul", text: "Soul" },
        { value: "Vallenato", text: "Vallenato" },
        { value: "Otros", text: "Otros" },
      ],
      cancion: {
        name: "",
        urlImagen: "https://picsum.photos/1024/400/?image=41", //https://picsum.photos/1024/400/?image=41,
        calificacion: "",
        urlPista: "",
        letra: "",
        autor: "",
        genre: "",
      }
    };
  },
  validations: {
      cancion:{
        name: {
          required
        },
        autor:{
          required
        },
        letra:{
          required,
          minLength: minLength(10)       
          }
    }
  },
  mounted() {

    console.log("ENTRO")
  },
  components: {},
  computed: {
    stateCancionName() {
      return this.cancion.name.length >= 2;
    },
    stateAutor() {
      return this.cancion.autor.length >= 2;
    },
    invalidFeedbackCancionName() {
      if (this.cancion.name.length > 0) {
        return "Enter at least 2 characters.";
      }
      return "Please enter something.";
    },
    invalidFeedbackAutor() {
      if (this.cancion.autor.length > 0) {
        return "Enter at least 2 characters.";
      }
      return "Please enter something.";
    },
  },
  methods: {
    ...mapActions("canciones", ["addCancion"]),
    addSong() {
      
      this.$v.$touch();

      if(!this.$v.$error || this.$v.$pendding){

        this.addCancion(this.cancion);
        this.$router.push({name:'Home', params: { user_id: "Creado"}})      }

    }
  }
};
</script>
    
