import { GET_ALL_CARS } from '../actions/TypeGenerator';

const INITIAL_STATE_CAR_LIST = {
    carListIsLoading: false,
    cars: null,
    carListErrorMessage: null
};

export const getAllCarsReducer = (state = INITIAL_STATE_CAR_LIST, action) => {
    switch (action.type) {
        case GET_ALL_CARS.REQUEST:
            return {
                ...state,
                cars: null,
                carListIsLoading: true,
                customerErrorMessage: null
            }
        case GET_ALL_CARS.SUCCSESS:
            return {
                ...state,
                cars: action.payload,
                carListIsLoading: false,
                carListErrorMessage: null
            }
        case GET_ALL_CARS.FAILED:
            return {
                ...state,
                cars: null,
                carListIsLoading: false,
                carListErrorMessage: action.payload,
            }
        default:
            return state;
    }

}