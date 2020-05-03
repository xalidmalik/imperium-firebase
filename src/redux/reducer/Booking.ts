import { GET_ALL_BOOKING, CREATE_BOOKING } from '../actions/TypeGenerator';


const INITIAL_STATE_BOOKING_LIST = {
    bookingIsLoading: false,
    booking: null,
    bookingErrorMessage: null
};
const INITIAL_STATE_CREATE_BOOKING = {
    createBookingIsLoading: false,
    createBooking: null,
    createBookingErrorMessage: null
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

export const createBookingReducer = (state = INITIAL_STATE_CREATE_BOOKING, action) => {
    switch (action.type) {
        case CREATE_BOOKING.REQUEST:
            return {
                ...state,
                createBooking: null,
                createBookingIsLoading: true,
                createBookingErrorMessage: null
            }
        case CREATE_BOOKING.SUCCSESS:
            return {
                ...state,
                createBooking: action.payload,
                createBookingIsLoading: false,
                createBookingErrorMessage: null
            }
        case CREATE_BOOKING.FAILED:
            return {
                ...state,
                createBooking: null,
                createBookingIsLoading: false,
                createBookingErrorMessage: action.payload,
            }
        default:
            return state;
    }

}