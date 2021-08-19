export function addCancion(state, cancion){
        console.log("ENTRO A MUTACION ADDCANCION");
        console.log(cancion);
        state.milista.push(cancion);
        console.log(state.milista);
}

export function removeCancionFromMiLista(state, cancion){
    var index = state.milista.findIndex(c => c.__ob__.dep.id == cancion.__ob__.dep.id);
    state.milista.splice(index, 1);
    console.log("Cancion removida de la lista");
}