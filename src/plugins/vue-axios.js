import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const baseURL="https://ancient-hollows-89536.herokuapp.com"; //PARA PRODUCCION midominio.com.co   
axios.defaults.baseURL=baseURL;
const jwt_token=window.localStorage.getItem('token')
if(jwt_token!==undefined){

console.log(jwt_token)
axios.defaults.headers.common['token']=jwt_token

}

Vue.use(VueAxios, axios);
