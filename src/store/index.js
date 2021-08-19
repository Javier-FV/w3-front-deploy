import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import canciones from '@/modules/canciones'  //Inserta el modulo canciones.
import milista from '@/modules/milista'
import usuarios from '@/modules/usuarios'



export default new Vuex.Store({

  modules: { 
    canciones, 
    milista,
    usuarios
  }
})
