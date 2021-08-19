
export function setUsuarios(state, payload) {

    if(payload.usuarios!==null){
        
    state.usuarios = payload.usuarios
    console.log(state.usuarios)
    }else{
        alert("The payloadUsuarios is empty; therefore, you cannot set any data")
    }
}



