<template>
  <div id="lista">
    <b-list-group>
      <b-row><b-col>Nombre:</b-col><b-col>Creación</b-col><b-col>Status</b-col><b-col>Acción</b-col></b-row>
      <b-list-group-item v-for="item in lista" :key="item.userId">
        <b-row>       
          <b-col>
            {{ item.name.slice(0,10) }}
          </b-col>
          <b-col>
            {{ item.signupDate.toString().slice(0,10) }}
          </b-col>
          <b-col>
            {{ item.active }}
          </b-col>
          <b-col>
            <b-form-checkbox
              :id="`Aprobado-${item.userId}`"
              v-model="selectedAprobados"
              :value="item.userId"
            >
              Aprobado
            </b-form-checkbox>
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
    <p>
    <admin-modal-aprobados
    @aprobarUsuariosModal="_aprobarUsuarios"
    ></admin-modal-aprobados></p>
 
  </div>
</template>



<script>

import AdminModalAprobados from "@/components/AdminModalAprobados";



export default {

  data() {
    return {
      selectedAprobados: [],
    };
  },
  mounted(){
  },
  props: {
    lista: {
      type: Array,
      required: true,
      default: [{ name: "hello" }, { name: "Ben" }],
    }
  },
  computed: {

  },
  methods: {
    _aprobarUsuarios(){
      this.$emit('aprobarUsuarios',this.selectedAprobados);
    }
   
  },
  components: {
    AdminModalAprobados
  },
};
</script>