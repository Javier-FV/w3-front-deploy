<template>
<div>
<b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/Home">
  <b-navbar-brand router-link >
      <img src="../assets/images/music_80px.png" alt="Home" class="img-logo"></b-navbar-brand>
      </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <b-nav-form  @submit="searchSong(busqueda)"> 
          <b-form-input size="sm" 
          class="mr-sm-2" 
          v-model="busqueda" 
          placeholder="Search" 
           id="popover-search-input"
          @keyup="searchSong(busqueda)"></b-form-input>

        <b-popover id="popover-search" target="popover-search-input" :show.sync="show" triggers="" placement="bottom">
            <b-icon-x-square id="close-modal" @click="closePopover"></b-icon-x-square>
            <b-list-group v-if="filteredSongs.length">
              <b-list-group-item id="listOfSongs" v-for="(filteredSong, index) in filteredSongs" :key="index">
                <a id="songInList" @click="goToLyrics(filteredSong)">{{filteredSong.name}}, {{filteredSong.autor}}</a>
              </b-list-group-item>
            </b-list-group>
            <div v-else>
              <p id="noResultFound">No se encontraron conincidencias</p>
            </div>
          </b-popover>  

      </b-nav-form>
        <b-navbar-nav>
    <b-nav-item id="popover-search-options" class="advancedSearch">Advanced Search</b-nav-item>
          <b-popover target="popover-search-options" triggers="click" placement="bottom">
            <template #title>Search options</template>
            <b-form-checkbox
              id="checkbox-author"
              v-model="author"
              name="checkbox-author"
            >
              Author
            </b-form-checkbox>
            <b-form-checkbox
              id="checkbox-name"
              v-model="name"
              name="checkbox-name"
            >
              Name
            </b-form-checkbox>
            <b-form-checkbox
              id="checkbox-genre"
              v-model="genre"
              name="checkbox-genre"
            >
              Genre
            </b-form-checkbox>
          </b-popover>
        </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="ml-auto mr-auto btn btn-dark" type="login" router-link to="/login">Log In</b-button>
      </b-navbar-nav>

   
     <b-navbar-nav class="ml-1">
        <b-button 
        title="Create Song" 
        v-show="showIcon"
        size="sm" class="ml-auto mr-auto btn btn-dark" 
        type="createSong" 
        router-link :to="{ name:'CrearCancion', params:{ usuario:'1234', name: 'Julio' }}">
        <b-icon icon="pen" ></b-icon></b-button>
      </b-navbar-nav>
       <b-navbar-nav class="ml-1">
         <b-navbar-brand  class="ml-auto mr-auto" router-link to="/Cart">
      <img src="../assets/images/playlist.svg" alt="Kitten" class="rounded-circle">
       </b-navbar-brand>
      </b-navbar-nav>

     <b-navbar-nav class="ml-1">
        <b-button title="AdminManagement" size="sm" class="ml-auto mr-auto btn btn-dark" router-link :to="{ name:'AdminManagement'}">
        <b-icon icon="journal-check" ></b-icon></b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> 
</div>

</template>


<script>

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Navbar",
    data() {
    return {
      busqueda: "",
      author: true,
      name: true,
      genre: true,
      filteredSongs: [],
      show: false,
      showIcon: false
    };
  },
  async mounted() {
     
 
  },
  watch:{
    busqueda: function(){
      console.log("ENTRO A WATCHER")
      console.log(this.busqueda)
      if(this.busqueda==""){
      console.log("Entro a condicional del fecth")
      this.fetchCanciones(); }
    }
  },
  computed: {
    ...mapState("canciones", ["canciones"]),

  },
  methods: {
    ...mapActions("canciones", ["fetchCanciones"]),
   searchSong(busqueda) {

     console.log("Entro a busqueda")
      if(busqueda.trim()) {
        this.filteredSongs = this.canciones.filter( (cancion) => {
          const byName = this.name && cancion.name.toLowerCase().includes(busqueda.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
          const byAuthor = this.author && cancion.autor.toLowerCase().includes(busqueda.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
          const byGenre = this.genre && cancion.genre.toLowerCase().includes(busqueda.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
          return byName || byAuthor || byGenre;
        });
        
        this.show = true;
        this.setCancionesBusqueda(this.filteredSongs);
      }
    },
    closePopover() {
      this.show = false;
    },
    ...mapMutations('canciones', ['setSelectedSong','setCancionesBusqueda']),
    async goToLyrics(song){
      await this.setSelectedSong(song)
      this.$router.push({
      name: 'VistaLetra',
      params: { idLetra: song.id }
      })
    }
  }
}
</script>