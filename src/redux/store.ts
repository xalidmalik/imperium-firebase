import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./reducer/CombineReducer";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';


const loggerMiddleware = createLogger();
export const store = createStore(
    rootReducer, {},
    composeWithDevTools(applyMiddleware(ReduxThunk, loggerMiddleware))
);
export const persistor = persistStore(store);

export default { store, persistor };
