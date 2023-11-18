import { apiUrl } from "../environnements/environnement"
import { get } from "./fetchHelpers"

export const getDatas = async (entityName: string) => {
    const url = apiUrl() + entityName

    const datas = await get(url)

    return datas
}

export const getDatasByPage = async (entityName: string, page=1, limit=20) => {
    const url = apiUrl() + entityName + '?page=' + page + '&limit=' + limit

    const datas = await get(url)

    return datas
}

export const getCategories = async () => {
    const url = apiUrl() + 'categories'

    const datas = await get(url)

    return datas
}

export const getSousCategories = async (categorieName: string) => {
    const url = apiUrl() + 'sous-categories/' + categorieName;
    const datas = await get(url);
    return datas;
};