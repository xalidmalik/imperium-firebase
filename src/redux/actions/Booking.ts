import { CreateBookingTransaction } from './../../firebase/database/Transaction';
import { createTransactionActions } from './Transaction';
import { message } from './../../helpers/Static/System';
import { AlertSwal } from './../../helpers/Alert/Alert';
import { CreateBooking } from './../../firebase/database/Booking';
import { GetCustomerById } from '../../firebase/database/Customer';
import { GetAllBooking } from 'src/firebase/database/Booking';
import { GetAllCustomer } from 'src/firebase/database/Customer';
import { GET_ALL_BOOKING, CREATE_BOOKING } from "./TypeGenerator"
import { GetCarById } from 'src/firebase/database/Car';
// import { useDispatch } from "react-redux"

// const dispatch = useDispatch();

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

export const CreateBookingActions = (model: any) => (dispatch) => (
    dispatch({
        type: CREATE_BOOKING.REQUEST,
    }),
    CreateBooking(model)
        .then(success => {
            console.log("hahi", success)
            dispatch({
                type: CREATE_BOOKING.SUCCSESS,
                payload: "success"
            })
            AlertSwal(message.success.title, message.success.type)
            CreateBookingTransaction(model, success).then(log => console.log("yalıan", log))
        })
        .catch(error => {
            dispatch({
                type: CREATE_BOOKING.FAILED,
                payload: error
            })
            AlertSwal(message.error.title, message.error.type)
        })

);