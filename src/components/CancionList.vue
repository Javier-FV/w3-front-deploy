<template>
  <b-container>
    <div v-if="canciones.length">
      <paginate
        ref="paginator"
        name="canciones"
        :list="canciones"
        :per="perPage"
      >
        <b-card-group columns>
          <cancion-item
            v-for="cancion in paginated('canciones')"
            :key="cancion.id"
            :cancion="cancion"
            @addToMiLista="addCancionToMiLista"
            @deleteSongForever="deleteSong"
          ></cancion-item
        ></b-card-group>
      </paginate>
      <b-col>
        <paginate-links
          v-model="limit"
          for="canciones"
          :show-step-links="true"
          :limit="limit"
          :hide-single-page="true"
          :classes="{
            ul: 'pagination',
            li: 'page-item',
            'li > a': 'page-link',
          }"
        ></paginate-links
      ></b-col>
      <span v-if="$refs.paginator">
        Viewing {{ $refs.paginator.pageItemsCount }} results
      </span>
    </div>
    <b-alert v-else show cloack variant="info">
      No hay canciones disponibles
    </b-alert>
  </b-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CancionItem from "@/components/CancionItem";

export default {
  name: "CancionList",
  components: {
    CancionItem, // Añade el modulo cancion
  },
  data() {
    return {
      //Lista de items registrados
      paginate: ["canciones"], //Nombre de la lista de paginacion
      perPage: 3,
      /// windowWidth:window.screen.width,
    };
  },
  created(){
     //this.fetchCanciones();
  },
  async mounted() {
    console.log("ESTOY EN MOUNTED CANCIONLIST")
    await this.fetchCanciones();
  },
  computed: {
    ...mapState("canciones", ["canciones"]),
    ...mapState("milista", ["milista"]),
    limit() {
      if (window.screen.width > 768) {
        return 10;
      } else {
        return 3;
      }
    },
  },
  methods: {
    ...mapActions("canciones", [
      "fetchCanciones",
      "fetchCancionesData",
      "deleteCancion",
    ]),
    ...mapMutations("milista", ["addCancion"]),
    async addCancionToMiLista(cancion) {
      await this.addCancion(cancion);
    },
    async deleteSong(cancion) {
      await this.deleteCancion(cancion);
    },
  },
};
</script>
