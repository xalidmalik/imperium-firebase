import { LoginWithEmail } from '../../firebase/database/Auth';
import { LOGIN_USER } from "./TypeGenerator"

export const LoginActions = (username: any, password: any) => (dispatch) => (
    dispatch({
        type: LOGIN_USER.REQUEST,
    }),
    LoginWithEmail(username, password)
        .then(success => {
            if (success) {
                dispatch({
                    type: LOGIN_USER.SUCCSESS,
                    payload: success.uid
                })
            }
        })
        .catch(error =>
            dispatch({
                type: LOGIN_USER.FAILED,
                payload: error
            }))
);
