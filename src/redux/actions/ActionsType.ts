const GenerateTypes = (type) => ({
    REQUEST: `${type}_REQUEST`,
    SUCCSESS: `${type}_SUCCSESS`,
    FAILED: `${type}_FAILED`,
});

export const SET_USER = GenerateTypes("SET_USER")

export const GET_ALL_CUSTOMERS = GenerateTypes("GET_ALL_CUSTOMERS")
export const GET_CUSTOMER_BY_ID = GenerateTypes("GET_CUSTOMER_BY_ID")
export const REMOVE_CUSTOMER_BY_ID = GenerateTypes("REMOVE_CUSTOMER_BY_ID")
export const UPDATE_CUSTOMER = GenerateTypes("UPDATE_CUSTOMER")
export const CREATE_CUSTOMER = GenerateTypes("CREATE_CUSTOMER")

export const GET_ALL_CARS = GenerateTypes("GET_ALL_CARS")
export const GET_CAR_BY_ID = GenerateTypes("GET_CAR_BY_ID")
export const REMOVE_CAR_BY_ID = GenerateTypes("REMOVE_CAR_BY_ID")
export const UPDATE_CAR = GenerateTypes("UPDATE_CAR")
export const CREATE_CAR = GenerateTypes("CREATE_CAR")

export const GET_ALL_BOOKING = GenerateTypes("GET_ALL_BOOKING")
export const GET_BOOKING_BY_ID = GenerateTypes("GET_BOOKING_BY_ID")
export const REMOVE_BOOKING_BY_ID = GenerateTypes("REMOVE_BOOKING_BY_ID")
export const UPDATE_BOOKING = GenerateTypes("UPDATE_BOOKING")
export const CREATE_BOOKING = GenerateTypes("CREATE_BOOKING")