import { GetCarById } from './Car';
import { GetCustomerById } from './Customer';
import { Booking } from './Collection';
import { CheckUndefined, Save, GetById, GetAll, Delete, Update } from './Helper';

export const CreateBooking = async (model: object) => {
    CheckUndefined(model);
    return await Save(Booking, model)
};

export const GetBookingById = async (Id: string) => {
    return await GetById(Booking, Id)
};


// export const GetBookingDetails = async (doc) => {
//     doc.Customer = await GetCustomerById(doc.CustomerId);
//     doc.Car = await GetCarById(doc.CarId);
//     return await doc
// }

export const GetAllBooking = async (Code: string) => {
    return await GetAll(Booking, Code)
};

export const RemoveBookingById = async (id: string) => {
    return await Delete(Booking, id)
};

export const UpdateBooking = async (model: any) => {
    return await Update(Booking, model)
};

