<template>
<div class="vistaletra">
<b-container v-if="selectedSong" class="center py-4">
<h1>{{selectedSong.name}}</h1>
<h5>Autor: {{selectedSong.autor}}</h5>
<b-row class="justify-content-md-center"><b-col cols="md-6 m-10"> {{selectedSong.letra}}</b-col></b-row>
</b-container> 
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name:"VistaLetra",
    computed: {
        ...mapState("canciones", ["selectedSong"])
    },
    mounted(){
       
        const idLetra = this.$route.params.idLetra;
        console.log(idLetra)
        if(!this.selectedSong || idLetra != this.selectedSong.id){
            this.fetchSelectedSong(idLetra);
        }
    },
    methods: {
        ...mapActions("canciones",["fetchSelectedSong"]),
    }
    
}
</script>