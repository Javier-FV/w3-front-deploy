<template>
  <b-modal id="modal-1" title="Music Store" variant="dark">
  
        <form>
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>

        </form>

     </b-modal>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            this.$bvModal.show("modal-1")
        }
    }
</script>