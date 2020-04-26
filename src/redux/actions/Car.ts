import { GetAllCar } from './../../database/Car';
import { GET_ALL_CARS } from "./TypeGenerator"

export const GetAllCarsActions = (code: any) => (dispatch) => (
    dispatch({
        type: GET_ALL_CARS.REQUEST,
    }),
    GetAllCar(code)
        .then(success =>
            dispatch({
                type: GET_ALL_CARS.SUCCSESS,
                payload: success
            }))
        .catch(error =>
            dispatch({
                type: GET_ALL_CARS.FAILED,
                payload: error
            }))
);