import { CREATE_TRANSACTION, GET_ALL_TRANSACTION } from '../actions/TypeGenerator';

const INITIAL_STATE_CREATE_TRANSACTION = {
    createTransactionIsLoading: false,
    createTransactionResponse: null,
    createTransactionErrorMessage: null
};
const INITIAL_STATE_GET_ALL_TRANSACTION = {
    transactionIsLoading: false,
    transaction: null,
    income: 0,
    expense: 0,
    gain: 0,
    transactionErrorMessage: null
};

export const createTransactionReducer = (state = INITIAL_STATE_CREATE_TRANSACTION, action) => {
    switch (action.type) {
        case CREATE_TRANSACTION.REQUEST:
            return {
                ...state,
                createTransactionIsLoading: true,
                createTransactionResponse: null,
                createTransactionErrorMessage: null
            }
        case CREATE_TRANSACTION.SUCCSESS:
            return {
                ...state,
                createTransactionIsLoading: false,
                createTransactionResponse: action.payload,
                createTransactionErrorMessage: null
            }
        case CREATE_TRANSACTION.FAILED:
            return {
                ...state,
                createTransactionIsLoading: false,
                createTransactionResponse: null,
                createTransactionErrorMessage: null
            }
        default:
            return state;
    }

}


export const getAllTransactionReducer = (state = INITIAL_STATE_GET_ALL_TRANSACTION, action) => {
    switch (action.type) {
        case GET_ALL_TRANSACTION.REQUEST:
            return {
                ...state,
                transaction: null,
                transactionIsLoading: true,
                transactionErrorMessage: null
            }
        case GET_ALL_TRANSACTION.SUCCSESS:
            return {
                ...state,
                transaction: action.payload,
                income: action.income,
                expense: action.expense,
                gain: action.gain,
                transactionIsLoading: false,
                transactionErrorMessage: null
            }
        case GET_ALL_TRANSACTION.FAILED:
            return {
                ...state,
                transaction: null,
                transactionIsLoading: false,
                transactionErrorMessage: action.payload,
            }
        default:
            return state;
    }

}
