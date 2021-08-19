<template>
  <b-container>
<b-row>
  <b-col>
  
  <div id="cancionitem">
    <b-card
      bg-variant="dark"
      text-variant="white"
      :title="`Titulo: ${cancion.name.slice(0, 20)}`"
      :img-src="cancion.urlImagen"
      :img-alt="cancion.name"
      img-height="200"
      img-top
      class="mx-2 my-4 m-md-4 m-lg-5"
    >
      <b-row>
        <p class="muted">Autor: {{ cancion.autor.slice(0, 10) }}</p>

        <b-button variant="light" @click.prevent="$emit('addToMiLista', cancion)"
          >Añadir a lista</b-button
        >
      </b-row>
      <b-row>
        <b-button
          block
          variant="dark"
          @click="goToLyrics(cancion)"
          >Ver letra</b-button
        >
      </b-row>
      <b-row>
        <b-button-group class="center">
          <b-button
            variant="danger"
            @click.prevent="$emit('deleteSongForever', cancion)"
            >Borrar</b-button
          >
          <b-button
            variant="warning"
            router-link
            :to="{
              name: 'EditCancion',
              params: { id: cancion.id, usuario: 'Unknown' },
            }"
            >Editar</b-button
          ></b-button-group
        ></b-row
      >
    </b-card>
  </div>
  </b-col>
      </b-row>
       </b-container>
</template>

<script>
import VistaLetra from "@/components/VistaLetra";
import {mapMutations} from 'vuex'
export default {
  name: "CancionItem",
  components: { VistaLetra },
  props: {
    cancion: {
      type: Object,
      require: true,
      default: {
        name: "Cancion no encontrada",
      },
    },
  },
  methods: {
    ...mapMutations('canciones', ['setSelectedSong']),
    async goToLyrics(song){
      await this.setSelectedSong(song)
      this.$router.push({
      name: 'VistaLetra',
      params: { idLetra: song.id }
      })
    }
  },
};
</script>