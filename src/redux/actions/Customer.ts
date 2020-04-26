import { GetAllCustomer } from 'src/database/Customer';
import { GET_ALL_CUSTOMERS } from "./TypeGenerator"

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
// export const GetSelectedCustomerActions = (code: any) => (dispatch) => (
//     dispatch({
//         type: GET_ALL_CUSTOMERS.REQUEST,
//     }),
//     GetAllCustomer(code)
//         .then(success =>
//             dispatch({
//                 type: GET_ALL_CUSTOMERS.SUCCSESS,
//                 payload: success
//             }))
//         .catch(error =>
//             dispatch({
//                 type: GET_ALL_CUSTOMERS.FAILED,
//                 payload: error
//             }))
// );

