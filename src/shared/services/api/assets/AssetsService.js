import { Api } from "../axios-config";



const getAll = async (offset=0 , limit=2000) => {

    try {
        const {data} = await Api.get(`/assets?offset=${offset}&limit=${limit}`);

        if(data){
            return data;
        }

        return new Error("Erro ao listar ativos.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar ativos.")
        return new Error(errorResponse);
    }
}


const getById = async (id) => {

    try {
        const {data} = await Api.get(`/assets/${id}`);

        if(data){
            return data;
        }

        return new Error("Erro ao listar ativo.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar ativo.")
        return new Error(errorResponse);
    }
}


const getHistoryById = async (id, historyDate ='d1') => {

    try {
        const {data} = await Api.get(`/assets/${id}/history?interval=${historyDate}`);

        if(data){
            return data;
        }

        return new Error("Erro ao listar histórico.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar histórico.")
        return new Error(errorResponse);
    }
}


const getMarketsById = async (id, limit=2000) => {

    try {
        const {data} = await Api.get(`/assets/${id}/markets?limit=${limit}`);

        if(data){
            return data;
        }

        return new Error("Erro ao listar mercados do ativo.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar mercados do ativo.")
        return new Error(errorResponse);
    }
}





export const AssetsService = {
    getAll,
    getById,
    getHistoryById,
    getMarketsById
};