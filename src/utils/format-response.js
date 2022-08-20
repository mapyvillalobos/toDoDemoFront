//Para formatear los mensajes de error que nos mande el backend

export function internalServerError(err){
    //undefined.data
    if (err.response && err.response.data && err.response.data.errorMessage)
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
    return{
        status: false,
        errorMessage: "Internal server error. Please check your server"
    }
}

export function successStatus (res) {
    return{
        status: true,
        data: res.data
    }
}