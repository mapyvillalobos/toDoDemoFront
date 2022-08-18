/**
 * este archivo es para crear la instacia de axios para mandar las peticiones
 */
import axios from "axios";

//crear una constante para validar si mi app está en producción o en local
const isProduction = process.env.NODE_ENV === "production";


//si la app ya está en proucción hará petición a heroku
                                        //producción                               pruebas
const baseURL = isProduction ? "https://ejercicio-tododemo.herokuapp.com/api" : "http://localhost:5005/api"

export const api = axios.create({
    baseURL,
    withCredentials:true,
    timeout: 10000 // esto equivale a 10 segs

})