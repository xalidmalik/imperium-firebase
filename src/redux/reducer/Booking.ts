import { GET_ALL_BOOKING } from '../actions/TypeGenerator';


const INITIAL_STATE_BOOKING_LIST = {
    bookingIsLoading: false,
    booking: null,
    bookingErrorMessage: null
};


export const getAllBookingReducer = (state = INITIAL_STATE_BOOKING_LIST, action) => {
    switch (action.type) {
        case GET_ALL_BOOKING.REQUEST:
            return {
                ...state,
                booking: null,
                bookingIsLoading: true,
                bookingErrorMessage: null
            }
        case GET_ALL_BOOKING.SUCCSESS:
            return {
                ...state,
                booking: action.payload,
                bookingIsLoading: false,
                bookingErrorMessage: null
            }
        case GET_ALL_BOOKING.FAILED:
            return {
                ...state,
                booking: null,
                bookingIsLoading: false,
                bookingErrorMessage: action.payload,
            }
        default:
            return state;
    }

}