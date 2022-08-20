//import api // default donde tengo mi UrlBase
import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";


                            //data = {email:correo@gmail.com, password:"perritos"}
//Login                      <https://tinder/api>/auth/login
export const loginWs = (data) => api.post("/auth/login", data)
.then(successStatus)
.catch(internalServerError);

//Signup
export const signupWs = (data) => api.post("/auth/signup", data)
.then(successStatus)
.catch(internalServerError);

//Logout
export const logoutWs = () => api.get("/auth/logout")
.then(successStatus)
.catch(internalServerError);