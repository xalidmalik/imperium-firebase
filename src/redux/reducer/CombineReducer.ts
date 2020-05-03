import { createTransactionReducer, getAllTransactionReducer } from './Transaction';
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { getAllCarsReducer } from './Car';
import { loginReducer } from './Auth';
import { getAllCustomersReducer, createCustomerReducer } from './Customer';
import { getAllBookingReducer, createBookingReducer } from './Booking';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["car"]
}
const authPersistConfig = {
    key: "auth",
    storage: storageSession
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, loginReducer),
    createCustomer: createCustomerReducer,
    getAllCustomers: getAllCustomersReducer,
    getAllCars: getAllCarsReducer,
    createBooking: createBookingReducer,
    getAllBooking: getAllBookingReducer,
    createTransaction: createTransactionReducer,
    getAllTransaction: getAllTransactionReducer,
})

export default persistReducer(persistConfig, rootReducer)

