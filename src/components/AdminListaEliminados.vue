<template>
  <div id="lista">
    <b-list-group>
      <b-row><b-col>Nombre:</b-col><b-col>Creación:</b-col><b-col>Status</b-col><b-col>Acción</b-col></b-row>
      <b-list-group-item v-for="item in users" :key="item.userId">
        <b-row>       
          <b-col>
            {{ item.name.slice(0,10) }}
          </b-col>
          <b-col>
            {{ item.createdAt}}
          </b-col>
          <b-col>
            {{ item.active }}
          </b-col>
          <b-col>
            <b-form-checkbox
              :id="`Eliminado-${item.userId}`"
              v-model="selectedEliminados"
              :value="item.userId"
            >
              Eliminar
            </b-form-checkbox>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
     <p>
    <admin-modal-eliminados
      @eliminarUsuarios="eliminarUsuariosList"
    ></admin-modal-eliminados></p> 
 
  </div>
</template>



<script>

import AdminModalEliminados from "@/components/AdminModalEliminados";
import { mapState} from "vuex";

export default {

   name:"AdminListaEliminados",
  data() {
    return {
      selectedEliminados: [],
    };
  },
  props:{
    users:{
      type:Array
    }
  },
  mounted(){


  },
  computed: {
    
    
  },
  methods: {

    eliminarUsuariosList(){
      console.log("Entro a eliminar de Adminlista")
      this.$emit('eliminarUsuariosParent',this.selectedEliminados);

    }
  },
  components: {
    AdminModalEliminados  },
};
</script>