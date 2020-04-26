import { SET_USER } from "./ActionsType"


export const setCurrentUser = user => ({
    type: SET_USER.REQUEST,
    payload: user
})