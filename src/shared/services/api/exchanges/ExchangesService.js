import { Api } from "../axios-config";




const getAll = async () => {

    try {
        const {data} = await Api.get(`/exchanges`);

        if(data){
            return data;
        }

        return new Error("Erro ao listar corretoras.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar corretoras.")
        return new Error(errorResponse);
    }
}


const getById = async (id) => {

    try {
        const {data} = await Api.get(`/exchanges/${id}`);

        if(data){
            return data;
        }

        return new Error("Erro ao listar corretora.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar corretora.")
        return new Error(errorResponse);
    }
}


export const ExchangesService = {
    getAll,
    getById
}
