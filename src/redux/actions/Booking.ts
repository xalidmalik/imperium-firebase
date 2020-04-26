import { GetAllBooking } from 'src/database/Booking';
import { GetAllCustomer } from 'src/database/Customer';
import { GET_ALL_BOOKING } from "./ActionsType"

export const GetAllBookingActions = (code: any) => (dispatch) => (
    dispatch({
        type: GET_ALL_BOOKING.REQUEST,
    }),
    GetAllBooking(code)
        .then(success =>
            dispatch({
                type: GET_ALL_BOOKING.SUCCSESS,
                payload: success
            }))
        .catch(error =>
            dispatch({
                type: GET_ALL_BOOKING.FAILED,
                payload: error
            }))
);