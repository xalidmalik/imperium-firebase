import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/CombineReducer";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';


const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer, {},
    composeWithDevTools(applyMiddleware(ReduxThunk, loggerMiddleware))
);
export default store;
