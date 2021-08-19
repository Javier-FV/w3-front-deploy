<template>
  <div id="editcancion">
    <b-container>
      <b-row>
        <h3>{{ $route.params.usuario}} edita la canción {{id}}</h3>
        <b-row>
          <b-col cols="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6"
            ><b-form-group
              id="fieldset-songname"
              description="Let us know the name of our song."
              label="Enter song's name"
              label-for="input-1"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedbackCancionName"
              :state="stateCancionName"
            >
              <b-form-input
                id="input-1"
                v-model="cancion.name"
                :state="stateCancionName"
                trim
              ></b-form-input> </b-form-group
          ></b-col>
          <b-col cols="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6">
            <b-form-group
              id="fieldset-author"
              description="Let us know the autor of the song."
              label="Enter the author's name"
              label-for="input-2"
              valid-feedback="Thank you!"
              :invalid-feedback="invalidFeedbackAutor"
              :state="stateAutor"
            >
              <b-form-input
                id="input-2"
                v-model="cancion.autor"
                :state="stateAutor"
                trim
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
        <b-form-select v-model="cancion.genre" :options="options"></b-form-select>
          </b-col>
        </b-row>

        <b-row class="myrow">
          <b-col cols="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6"
            ><b-form-input
              placeholder="Enter image's URL"
              v-model="cancion.urlImagen"
            ></b-form-input
          ></b-col>
          <b-col cols="col-12 col-sm-12 col-md-12 col-lg-6  col-xl-6"
            ><b-container class="imgcontainer"
              ><b-img-lazy thumbnail fluid :src="cancion.urlImagen"></b-img-lazy></b-container
          ></b-col>
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
          max-rows="5"
          :class="{'is-invalid':$v.cancion.letra.$error, 'is-valid':!$v.cancion.letra.$invalid}"
        ></b-form-textarea>
        </b-col>
      </b-row>
      <b-col cols="12">
      <b-button variant="primary" @click="editSong">Editar canción</b-button>
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

import {   mapState, mapActions} from "vuex";
import {required, minLength} from 'vuelidate/lib/validators'



export default {
  name: "CrearCancion",
  data() {
    return {
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
      id: this.$route.params.id,
      usuario: this.$route.params.usuario,
      cancion: {
              name: "Escribe este campo nuevamente", 
              autor: "Escribe este campo nuevamente",
              urlImagen: "Escribe este campo nuevamente", 
              urlPista: "Escribe este campo nuevamente", 
              letra: "Escribe este campo nuevamente",
              genre: "Escribe este campo nuevamente"
                  },
      }
    }
  ,
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
  }
  ,
  mounted() {
        this.findSong(this.$route.params.id)

  },
  components: {},
  computed: {
    ...mapState("canciones", ["canciones"]),

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
    }
  },
  methods: {
    ...mapActions("canciones", ["updateCancion"]),

    findSong(idBusqueda){

      for( let el of this.canciones){
        if(el.id===idBusqueda){
  
          this.cancion=el;
          this.options.value=this.cancion.genre;
        }
      }
    },
    editSong(){  ///TOCA HAVER VALIDACION DE REPETIDOS/// 

      this.$v.$touch();

      if(!this.$v.$error || this.$v.$pendding){
      alert('Form succesfully submitted')
      this.updateCancion(this.cancion);
      this.$router.push({name:'Home'})
      }
      else{ 
        console.log(this.$v.$error);
        alert('Form failed validation')
      }    
    }
  },
};
</script>