const TypeGenerator = (type) => ({
    REQUEST: `${type}_REQUEST`,
    SUCCSESS: `${type}_SUCCSESS`,
    FAILED: `${type}_FAILED`,
});

export const SET_USER = TypeGenerator("SET_USER")

export const GET_ALL_CUSTOMERS = TypeGenerator("GET_ALL_CUSTOMERS")
export const GET_CUSTOMER_BY_ID = TypeGenerator("GET_CUSTOMER_BY_ID")
export const REMOVE_CUSTOMER_BY_ID = TypeGenerator("REMOVE_CUSTOMER_BY_ID")
export const UPDATE_CUSTOMER = TypeGenerator("UPDATE_CUSTOMER")
export const CREATE_CUSTOMER = TypeGenerator("CREATE_CUSTOMER")

export const GET_ALL_CARS = TypeGenerator("GET_ALL_CARS")
export const GET_CAR_BY_ID = TypeGenerator("GET_CAR_BY_ID")
export const REMOVE_CAR_BY_ID = TypeGenerator("REMOVE_CAR_BY_ID")
export const UPDATE_CAR = TypeGenerator("UPDATE_CAR")
export const CREATE_CAR = TypeGenerator("CREATE_CAR")

export const GET_ALL_BOOKING = TypeGenerator("GET_ALL_BOOKING")
export const GET_BOOKING_BY_ID = TypeGenerator("GET_BOOKING_BY_ID")
export const REMOVE_BOOKING_BY_ID = TypeGenerator("REMOVE_BOOKING_BY_ID")
export const UPDATE_BOOKING = TypeGenerator("UPDATE_BOOKING")
export const CREATE_BOOKING = TypeGenerator("CREATE_BOOKING")