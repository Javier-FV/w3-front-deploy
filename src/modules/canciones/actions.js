import Vue from 'vue';
import axios from "axios";

/* Actions are triggered with the store.dispatch method: store.dispatch('increment') */
/*El primer parametro es el contexto*/

/* Trae todas las canciones de canciones.json */
export async function fetchCancionesData({ commit }) {
    await fetch('fixeddata/canciones.json')
        .then(response => response.json())
        .then(data => commit('setCanciones', data))
        .catch((error) => {
            console.log("Error al pedir canciones por datos fijos: ", error.message);
        }).finally(() => {
            console.log("Petición de fetchCancionesData resuelta");
        });

}

/* Trae todas las canciones del servidor en la DB */
export async function fetchCanciones({ commit }) {
    
   console.log("ENTRO A FETCH CANCIONES")
    
    await Vue.axios.get('/canciones').then(({ data }) => {
        commit('setCanciones', data);
    }).catch((error) => {
        console.log("Error al pedir canciones por DB: ", error.message);
    }).finally(() => {
        console.log("Petición de fetchCanciones resuelta");
    });
}

/* Trae una cancion del servidor en la DB */
export async function fetchSelectedSong({ commit }, id) {

    await Vue.axios.get(`/cancion/${id}`).then(({ data }) => {
        commit('setSelectedSong', data);
    }).catch((error) => {
        console.log("Error al pedir canciones por DB: ", error.message);
    }).finally(() => {
        console.log("Petición de fetchCanciones resuelta");
    });
}





/* Agregar cancion */

export async function addCancion({ state, dispatch }, cancion) {

    console.log("ANADIR")

    var cancionExiste=null;

    if(state.canciones.length >= 0) {

        cancionExiste=state.canciones.find(elemento => elemento.name === cancion.name && elemento.autor ===cancion.autor);
    }

    if(cancionExiste==null) {
        console.log("entro a crear")
    await Vue.axios.post('/cancion', {
        name: cancion.name,
        urlPista: cancion.urlPista,
        urlImagen: cancion.urlImagen,
        calificacion: cancion.calificacion,
        genre: cancion.genre,
        autor: cancion.autor,
        letra: cancion.letra
    })
        .catch((error) => {
            console.log("Error al crear cancion en DB: ", error.message);
            
        }).finally(() => {
            dispatch('fetchCanciones');  //Al finalizar se vuelve a pedir todas las canciones porque se agrego una cancion
            console.log("Petición de AddCancion resuelta");
            
        }); }else{
            alert("There is a song with the same name and author; therefore, it wasn't added to the list of songs")
            console.log("La cancion no puede ser agregada porque ya existe una con el mismo nombre");
        }
}

export async function updateCancion({dispatch },cancion) {
     
     console.log("ENTRO A EDITAR", cancion.id)
    await Vue.axios.put(`/cancion/${cancion.id}`, {

        id: cancion.id,  //Evaluar si quitar esta linea, no creo que sea necesaria..
        name: cancion.name,
        urlPista: cancion.urlurlPista,
        urlImagen: cancion.urlImagen,
        calificacion: cancion.calificacion,
        autor: cancion.autor,
        letra: cancion.letra
    })
        .catch((error) => {
            console.log("Error al actualizar cancion en DB: ", error.message);
            
        }).finally(() => {
            dispatch('fetchCanciones');
            console.log("Petición de UpdateCancion resuelta");
        });
}

export async function deleteCancion({ dispatch }, cancion) {
    console.log("ID CANCION")
    console.log(cancion.id)


    await Vue.axios.delete(`/cancion/${cancion.id}`)
        .catch((error) => {
            console.log("Error al eliminar cancion en DB: ", error.message);
           
        }).finally(() => {
            dispatch('fetchCanciones');  //Al finalizar se vuelve a pedir todas las canciones porque se agrego una cancion
            console.log("Petición de DeleteCancion resuelta");
            
        });

}







