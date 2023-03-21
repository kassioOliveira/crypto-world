

export const errorInterceptor = (error) => {

    if(error.message === "Network Error"){
        return Promise.reject(new Error("Error de conexão."));
    }

    if(error.response?.status === 401){
        return Promise.reject(new Error("Requisição não autorizada."))
    }

    return Promise.reject(error);
};