import Vue from 'vue';



export async function deleteUsersbyIds({ dispatch }, payloadUsersId) {

    console.log("Entro a eliminar usuarios")
    console.log(payloadUsersId)

    for (let id of payloadUsersId) {

        await Vue.axios.delete(`/usuario/${id}`)
            .catch((error) => {
                console.log("Error al eliminar usuarios en DB: ", error.message);

            }).finally(() => {
                dispatch('fetchUsuarios');
                console.log("Petición de updateUsersbyIds resuelta");
            });
    }
}


/* Trae todas las canciones del servidor en la DB */
export async function fetchUsuarios({ commit }) {

    console.log("Entro a pedir usuarios")
    await Vue.axios.get('/usuarios').then(({ data }) => {
        commit('setUsuarios', data);
    }).catch((error) => {
        console.log("Error al pedir los usuarios por DB: ", error.message);
    }).finally(() => {
        console.log("Petición de fetchUsuarios resuelta");
    });
}

export async function fetchUsuariosInactivos({ commit }) {

    await Vue.axios.get('/usuarios/inactivos').then(({ data }) => {
        commit('setUsuarios', data);
    }).catch((error) => {
        console.log("Error al pedir los usuarios por DB: ", error.message);
    }).finally(() => {
        console.log("Petición de fetchUsuarios resuelta");
    });
}


export async function updateUsersbyIds({ dispatch }, payloadUsersId) {

    console.log("Entro a actualizar usuarios")

    for (let id of payloadUsersId) {

        await Vue.axios.put(`/usuarios/${id}`, {
            active: true,
        })
            .catch((error) => {
                console.log("Error al actualizar usuario en DB: ", error.message);

            }).finally(() => {
                dispatch('fetchUsuarios');
                console.log("Petición de updateUsersbyIds resuelta");
            });
    }
}



export async function loginUser({ dispatch }, user) {

    const { email, password } = user;
    return await Vue.axios.post('/login', { email, password })
}


export async function registerUser({ dispatch }, user) {

    const { name, email, password } = user;
    return await Vue.axios.post('newUser', { name, email, password }).catch((error) => {
        console.log("Error al crear usuario en DB: ", error.message);

    }).finally(() => {
        dispatch('fetchUsuarios');
        console.log("Petición de registerUser resuelta");
    });
}
