import { getAllCarsReducer } from './Car';
import { userReducer } from './User';
import { getAllCustomersReducer } from './Customer';
import { combineReducers } from "redux";
import { getAllBookingReducer } from './Booking';

const rootReducer = combineReducers({
    user: userReducer,
    customers: getAllCustomersReducer,
    cars: getAllCarsReducer,
    booking: getAllBookingReducer
})

export default rootReducer;