import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

//Login                      <https://tinder/api>/auth/login
export const editUserWs = (data) => api.patch("/user/edit-profile", data)
.then(successStatus)
.catch(internalServerError);