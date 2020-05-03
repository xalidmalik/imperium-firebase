import { GET_ALL_CUSTOMERS, CREATE_CUSTOMER } from '../actions/TypeGenerator';

const INITIAL_STATE_CUSTOMER_LIST = {
    customersIsLoading: false,
    customers: null,
    customerErrorMessage: null
};
const INITIAL_STATE_CREATE_CUSTOMER = {
    createCustomerIsLoading: false,
    createCustomerResponse: null,
    createCustomerErrorMessage: null
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
export const createCustomerReducer = (state = INITIAL_STATE_CREATE_CUSTOMER, action) => {
    switch (action.type) {
        case CREATE_CUSTOMER.REQUEST:
            return {
                ...state,
                createCustomerIsLoading: true,
                createCustomerResponse: null,
                createCustomerErrorMessage: null
            }
        case CREATE_CUSTOMER.SUCCSESS:
            return {
                ...state,
                createCustomerIsLoading: false,
                createCustomerResponse: action.payload,
                createCustomerErrorMessage: null
            }
        case CREATE_CUSTOMER.FAILED:
            return {
                ...state,
                createCustomerIsLoading: false,
                createCustomerResponse: null,
                createCustomerErrorMessage: null
            }
        default:
            return state;
    }

} 
