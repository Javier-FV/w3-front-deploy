<template>
  <div id="admin">
    <b-tabs
      active-nav-item-class="font-weight-bold text-uppercase text-danger"
      active-tab-class="font-weight-bold text-success"
      content-class="mt-3"
    >
      <div v-if="usuariosSinActivar.length>0">
        <b-tab title="Aprobación de usuarios" active>
          <p>
            <admin-lista-aprobados
              :lista="usuariosSinActivar"
              @aprobarUsuarios="aprobarUsuarios"
            ></admin-lista-aprobados>
          </p>
        </b-tab>
      </div>
      <div v-if="usuarios.length">
      <b-tab title="Eliminación de usuarios">
        <p>
          <admin-lista-eliminados
           :users="usuarios"
            @eliminarUsuariosParent="eliminarUsuariosFinal"
          ></admin-lista-eliminados>
        </p>
      </b-tab>
      </div>
    </b-tabs>
  </div>
</template>

<script>
import AdminListaAprobados from "@/components/AdminListaAprobados";
import AdminListaEliminados from "@/components/AdminListaEliminados";
import { mapState, mapActions } from "vuex";

export default {
  name: "AdminManagement",
  data() {
    return {};
  },
  computed: {
    ...mapState("usuarios", ["usuarios"]),
    usuariosSinActivar() {
      return this.usuarios.filter((el) => el.active === false);
    },
  },
  mounted() {
    console.log("ENTRO")
    this.fetchUsuarios();
  },
  components: {
    AdminListaAprobados,
    AdminListaEliminados,
  },
  methods: {
    ...mapActions("usuarios", ["fetchUsuarios", "updateUsersbyIds", "deleteUsersbyIds"]),

    aprobarUsuarios(value) {
      console.log("ENTRO A APROBAR");
      this.updateUsersbyIds(value);
    },
    eliminarUsuariosFinal(value) {
       console.log("ENTRO A ELIMINAR");
       this.deleteUsersbyIds(value);

    }
  },
};
</script>
