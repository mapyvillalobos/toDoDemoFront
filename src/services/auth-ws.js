//import api // default donde tengo mi UrlBase
import { api } from "./api";


                            //data = {email:correo@gmail.com, password:"perritos"}
//Login                      <https://tinder/api>/auth/login
export const loginWs = (data) => api.post("/auth/login", data); //falta .then y .catch

//Signup
export const signupWs = (data) => api.post("/auth/signup", data);

//Logout
export const logoutWs = () => api.get("/auth/login");