import axios from "axios";
import { Api } from "../axios-config";



const getAll = async (offset = 0, limit = 2000) => {

    try {
        const { data } = await Api.get(`/assets?offset=${offset}&limit=${limit}`);

        if (data) {
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
        const { data } = await Api.get(`/assets/${id}`);

        if (data) {
            return data;
        }

        return new Error("Erro ao listar ativo.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar ativo.")
        return new Error(errorResponse);
    }
}


const getHistoryById = async (id, historyDate = 'd1') => {

    try {
        const { data } = await Api.get(`/assets/${id}/history?interval=${historyDate}`);

        if (data) {
            return data;
        }

        return new Error("Erro ao listar histórico.");
    } catch (error) {
        const errorResponse = (error?.message ? error.message : " Erro ao consultar histórico.")
        return new Error(errorResponse);
    }
}

const getTop5HistoryById = async (id1,id2,id3,id4,id5, historyDate = 'h1') => {


       return axios.all([
            Api.get(`/assets/${id1}/history?interval=${historyDate}`),
            Api.get(`/assets/${id2}/history?interval=${historyDate}`),
            Api.get(`/assets/${id3}/history?interval=${historyDate}`),
            Api.get(`/assets/${id4}/history?interval=${historyDate}`),
            Api.get(`/assets/${id5}/history?interval=${historyDate}`)

        ]).then((data) => {

            if (data) {
                return data;
                
            }

            return new Error("Erro ao listar históricos.");

        })
            .catch((error) => {
                const errorResponse = (error?.message ? error.message : " Erro ao consultar histórico.")
                return new Error(errorResponse);
            })


        // .then(axios.spread((data1,data2,data3,data4,data5)=> {

        //     if(data){
        //         return data;
        //     }

        //     return new Error("Erro ao listar históricos.");

        // }))

}


const getMarketsById = async (id, limit = 2000) => {

    try {
        const { data } = await Api.get(`/assets/${id}/markets?limit=${limit}`);

        if (data) {
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
    getMarketsById,
    getTop5HistoryById
};