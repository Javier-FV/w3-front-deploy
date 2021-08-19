<template>
  <div id="modal">
    <b-button id="show-btn" variant="dark" @click="$bvModal.show('bv-modal-aprove')"
      >Aprobar</b-button
    >

    <b-modal id="bv-modal-aprove" hide-footer >
      <template #modal-title> Advertencia: Los usuarios seleccionados seran aprobados</template>
      <div class="d-block text-center">
        <h3>Esta seguro de continuar?</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-aprove')"
        >Cerrar</b-button
      >
       <b-button class="mt-3" block @click="aprobarModal()"
        >Continuar</b-button
      >
    </b-modal>
  </div>
</template>

<script>



  export default {

    name:"AdminModalAprobados",
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
      aprobarModal(){  //Cierra el modal y va a la funcion aprobarUsuarios del padre
        this.$bvModal.hide('bv-modal-aprove');   
        this.$emit('aprobarUsuariosModal')
      },
       
    }
  }
</script>