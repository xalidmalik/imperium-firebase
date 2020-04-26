import { GET_ALL_CUSTOMERS, GET_CUSTOMER_BY_ID } from '../actions/TypeGenerator';

const INITIAL_STATE_CUSTOMER_LIST = {
    customersIsLoading: false,
    customers: null,
    customerErrorMessage: null
};
const INITIAL_STATE_SELECTED_CUSTOMER = {
    customersIsLoading: false,
    customers: null,
    customerErrorMessage: null
};

export const getAllCustomersReducer = (state = INITIAL_STATE_CUSTOMER_LIST, action) => {
    switch (action.type) {
        case GET_ALL_CUSTOMERS.REQUEST:
            return {
                ...state,
                customers: null,
                customersIsLoading: true,
                customerErrorMessage: null
            }
        case GET_ALL_CUSTOMERS.SUCCSESS:
            return {
                ...state,
                customers: action.payload,
                customersIsLoading: false,
                customerErrorMessage: null
            }
        case GET_ALL_CUSTOMERS.FAILED:
            return {
                ...state,
                customers: null,
                customersIsLoading: false,
                customerErrorMessage: action.payload,
            }
        default:
            return state;
    }

}
export const getSelectedCustomer = (state = INITIAL_STATE_SELECTED_CUSTOMER, action) => {
    switch (action.type) {
        case GET_CUSTOMER_BY_ID.REQUEST:
            return {
                ...state,
                selectedCustomer: null,
                customersIsLoading: true,
                customerErrorMessage: null
            }
        case GET_CUSTOMER_BY_ID.SUCCSESS:
            return {
                ...state,
                selectedCustomer: action.payload,
                customersIsLoading: false,
                customerErrorMessage: null
            }
        case GET_CUSTOMER_BY_ID.FAILED:
            return {
                ...state,
                selectedCustomer: null,
                customersIsLoading: false,
                customerErrorMessage: action.payload,
            }
        default:
            return state;
    }

} 
