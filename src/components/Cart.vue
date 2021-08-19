<template>
  <div v-if="milista.length" id="cart">
    <b-table head-variant="dark" :items="milista" :fields="fields" sticky-header responsive='sm' class="mt-4 mb-0" >
      <template #cell(delete)="data">
        <b-button variant="outline-danger" @click="removeItem(data.item)" >
          Quitar de lista
        </b-button>
      </template>
      <template #cell(lyrics)="data">
        <b-button variant="outline-primary" @click="verLetra(data.item)" >
          Letra
        </b-button>
      </template>
    </b-table>
  </div>
  <b-alert v-else variant="info" show>No hay canciones en tu lista</b-alert>
</template>
<script>
import { mapState, mapMutations } from "vuex";

import VistaLetra from "@/components/VistaLetra"


export default {
  name: "MiLista",
  components: { VistaLetra},
  data() {
    return {
      fields: [
          {key: 'name', label: 'Nombre'},
          {key: 'autor', label: 'Autor'},
          {key: 'calificacion', label: 'Calificación'},
          {key: 'lyrics', label: ''},
          {key: 'delete', label: ''}],
    };
  },
  computed: {
    ...mapState("milista", ["milista"]),
  },
  methods: {
    ...mapMutations('canciones', ['setSelectedSong']),
    ...mapMutations("milista", ["removeCancionFromMiLista"]),
    removeItem(cancion) {
      this.removeCancionFromMiLista(cancion);
    },
    async verLetra(cancion){
      await this.setSelectedSong(cancion)
      this.$router.push({
      name: 'VistaLetra',
      params: { idLetra: cancion.id }
      })
      //:to="{ name: 'VistaLetra', params: {cancion: data.item} }"
    }

    
  },
};
</script>