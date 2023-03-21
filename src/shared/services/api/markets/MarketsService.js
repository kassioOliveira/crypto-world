import { Api } from "../axios-config"


const getAll = async (limit=2000) => {

    try {
        const {data} = await Api.get(`/markets?limit=${limit}`);

        if(data){
            return data;
        }

        return new Error("Erro ao listar mercado.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar o mercado.")
        return new Error(errorResponse);
    }
}

export const MarketService = {
    getAll
};