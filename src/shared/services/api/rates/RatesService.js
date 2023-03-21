import { Api } from "../axios-config";


const getAll = async () => {

    try {
        const {data} = await Api.get("/rates");

        if(data){
            return data;
        }

        return new Error("Erro ao listar cotações.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar contações.")
        return new Error(errorResponse);
    }
}


const getById = async (id) => {

    try {
        const {data} = await Api.get(`/rates/${id}`);

        if(data){
            return data;
        }

        return new Error("Erro ao listar cotação.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar contação.")
        return new Error(errorResponse);
    }
}


export const RatesService = {
    getAll,
    getById
};