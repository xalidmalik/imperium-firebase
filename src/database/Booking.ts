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


const changePropCar = (prev, next) => {
    prev.BrandName = next.BrandName
    prev.ModelName = next.ModelName
    prev.Plate = next.Plate
    prev.Deposit = next.Deposit
    prev.Classes = next.Classes
    prev.isMaintenanc = next.isMaintenanc
    prev.isCrash = next.isCrash
    prev.IsDeleted = next.IsDeleted
    prev.Image = next.Image
    prev.Code = next.Code
    return prev;
}
export const GetAllBooking = async (Code: string) => {
    let booking: any = await Booking
        .where("Code", "==", Code)
        .get()
        .then((value) =>
            value.docs.map((doc) => {
                let AllBooking = doc.data();
                AllBooking.Id = doc.id;
                return AllBooking;
            })
        )

    if (booking == "") {
        console.log("dadawd", booking)
        return booking
    }
    booking.map(async (doc) => {
        doc.Customer = await GetCustomerById(doc.CustomerId);
        // doc.Car = await GetCarById(doc.CarId);

        let Car = await GetCarById(doc.CarId);
        changePropCar(doc, Car)
        return doc
    })


    console.log("booook", booking)
    return booking;
};

export const RemoveBookingById = async (id: string) => {
    return await Delete(Booking, id)
};

export const UpdateBooking = async (model: any) => {
    return await Update(Booking, model)
};

