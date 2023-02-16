import ActionsType from "./action.enum";

export const setToken = (data) => ({ type: ActionsType.SET_TOKEN, data });
export const addFlash = (data) => ({ type: ActionsType.ADD_FLASH, data });
export const getUser = (data) => ({ type: ActionsType.GET_USER, data });
export const removeToken = () => ({ type: ActionsType.LOG_OUT });
export const loading = (data) => ({ type: ActionsType.LOADING, payload: data });