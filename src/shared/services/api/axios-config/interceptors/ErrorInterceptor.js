

export const errorInterceptor = (error) => {

    if(error.message === "Network Error"){
        return Promise.reject(new Error("Error de conexão."));
    }

    if(error.response?.status === 401){
        return Promise.reject(new Error("Requisição não autorizada."))
    }

    if(error.response?.status === 404){
        return Promise.reject(new Error("Não encontrado."))
    }

    if(error.response?.status === 500 || 501){
        return Promise.reject(new Error("Parece que algo aconteceu do nosso lado. Tente novamente em breve."))
    }

    return Promise.reject(error);
};