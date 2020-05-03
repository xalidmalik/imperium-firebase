import { LOGIN_USER } from "../actions/TypeGenerator";

const INITIAL_STATE = {
    loginIsLoading: false,
    login: null,
    loginErrorMessage: null
}

export const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER.REQUEST:
            return {
                ...state,
                login: null,
                loginIsLoading: true,
                loginErrorMessage: null
            }
        case LOGIN_USER.SUCCSESS:
            return {
                ...state,
                login: action.payload,
                loginIsLoading: false,
                loginErrorMessage: null
            }
        case LOGIN_USER.FAILED:
            return {
                ...state,
                login: null,
                loginIsLoading: false,
                loginErrorMessage: action.payload,
            }
        default:
            return state;
    }

}
