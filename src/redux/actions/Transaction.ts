import { GetAllTransaction, HandleTotal } from 'src/firebase/database/Transaction';
import { message } from '../../helpers/Static/System';
import { AlertSwal } from '../../helpers/Alert/Alert';
import { CreateBookingTransaction } from 'src/firebase/database/Transaction';
import { CREATE_TRANSACTION, GET_ALL_TRANSACTION } from "./TypeGenerator"

export const createTransactionActions = (model: any, id) => (dispatch) => (
    dispatch({
        type: CREATE_TRANSACTION.REQUEST,
    }),
    CreateBookingTransaction(model, id)
        .then(success =>
            dispatch({
                type: CREATE_TRANSACTION.SUCCSESS,
                payload: success
            }))
        .catch(error =>
            dispatch({
                type: CREATE_TRANSACTION.FAILED,
                payload: error
            }))
);
export const GetAllTransactionActions = (code: any) => (dispatch) => (
    dispatch({
        type: GET_ALL_TRANSACTION.REQUEST,
    }),
    GetAllTransaction(code)
        .then(success => {

            console.log("burda ", success)
            dispatch({
                type: GET_ALL_TRANSACTION.SUCCSESS,
                payload: success,
                income: HandleTotal(success, "Gelir"),
                expense: HandleTotal(success, "Gider"),
                gain: HandleTotal(success, "Gelir") - HandleTotal(success, "Gider")
            })
        }
        )
        .catch(error =>
            dispatch({
                type: GET_ALL_TRANSACTION.FAILED,
                payload: error
            }))
);