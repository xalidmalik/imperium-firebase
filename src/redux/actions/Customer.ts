import { History } from './../../helpers/Static/History';
import { message } from './../../helpers/Static/System';
import { AlertSwal } from './../../helpers/Alert/Alert';
import { CreateCustomer } from './../../firebase/database/Customer';
import { GetAllCustomer } from 'src/firebase/database/Customer';
import { GET_ALL_CUSTOMERS, CREATE_CUSTOMER } from "./TypeGenerator"

export const GetAllCustomerActions = (code: any) => (dispatch) => (
    dispatch({
        type: GET_ALL_CUSTOMERS.REQUEST,
    }),
    GetAllCustomer(code)
        .then(success =>
            dispatch({
                type: GET_ALL_CUSTOMERS.SUCCSESS,
                payload: success
            }))
        .catch(error =>
            dispatch({
                type: GET_ALL_CUSTOMERS.FAILED,
                payload: error
            }))
);
export const CreateCustomerActions = (values: any) => (dispatch) => (
    dispatch({
        type: CREATE_CUSTOMER.REQUEST,
    }),
    CreateCustomer(values)
        .then(success => {
            if (success === null) {
                dispatch({
                    type: CREATE_CUSTOMER.FAILED
                })
                AlertSwal(message.error.title, message.error.type)
            } else if (success === undefined || success) {
                dispatch({
                    type: CREATE_CUSTOMER.SUCCSESS,
                    payload: "success"
                });
                AlertSwal(message.success.title, message.success.type)
                History.push("/customer")
            }
        })
        .catch(error =>
            dispatch({
                type: CREATE_CUSTOMER.FAILED,
                payload: error
            }))
);

