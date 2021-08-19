/* The only way to actually change state in a Vuex store is by committing a mutation.
 Vuex mutations are very similar to events: each mutation has a string type and a handler. 
 The handler function is where we perform actual state modifications, and it will receive the 
 state as the first argument.You cannot directly call a mutation handler. Think of it more like event registration: 
 "When a mutation with type increment is triggered, call this handler." To invoke a mutation handler, 
 you need to call store.commit with its type: store.commit('increment')
 In Vuex, mutations are synchronous transactions
 */

export function setCanciones(state, payloadCanciones) {
    console.log("Se cargan canciones en setCanciones:")
    console.log(payloadCanciones.total)
    console.log(payloadCanciones.canciones)
    console.log(payloadCanciones.canciones!==null)
    if(payloadCanciones.canciones!==null){
  
    state.canciones = payloadCanciones.canciones
    console.log(state.canciones)


}else{
        alert("The payloadCanciones is empty; therefore, you cannot set any data")
    }
}

export function setCancionesBusqueda(state, payload) {

    if(payload!==null){
  
    state.canciones = payload;
    console.log(state.canciones)

}else{
        alert("The payloadCanciones is empty; therefore, you cannot set any data")
    }
}
////Actualizar cancion en canciones por id/////
export function setCancionById(state, payload) {
    
    console.log("setCancionById")
    console.log(payload)
    const cancionActualizada = state.canciones.find(elemento => elemento.id = payload.id);

    if (cancionActualizada) {
        cancionActualizada = payload.canciones;
    }
}


//Obtener cancion seleccionada
export async function setSelectedSong(state, song){
    state.selectedSong = song;
}
