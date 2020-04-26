import { GetAllCar } from 'src/database/Car';
import { GetAllBooking } from 'src/database/Booking';
import { DocumentTypes } from "../helpers/Database/DocumentTypes";
import db from "../firebase/firebaseconfig";
import ls from "secure-ls";
import { IReservation } from "../helpers/Database/ReservationInterface";
import { uniqBy } from "lodash";

export const GetAvailableCars = async (beginDate: any, endDate: any) => {
    let reservation: any = await GetAllBooking("ayazarac");
    console.log(reservation)
    if (reservation == "") {
        let allCar = await GetAllCar("ayazarac");
        return allCar
    } else {

        let available = reservation.filter(
            (a: IReservation) =>
                !(a.BeginDateTime <= beginDate && a.EndDateTime >= beginDate) ||
                !(a.BeginDateTime <= endDate && a.EndDateTime >= endDate) ||
                !(beginDate <= a.BeginDateTime && endDate >= a.EndDateTime)
        );

        const unique = uniqBy(available, "CarId");
        return unique;
    }
};

// export const GetReservations = async () => {
//     let reservations: any = await GetRecords("Reservation", "ayazarac");
//     let customers: any = await GetRecords("Customer", "ayazarac");
//     let cars: any = await GetRecords("Car", "ayazarac");

//     for (let i = 0; i < reservations.length; i++) {
//         reservations[i]["Customer"] = customers.filter(
//             (q) => q.Id == reservations[i].CustomerId
//         )[0];
//     }

//     for (let i = 0; i < reservations.length; i++) {
//         reservations[i]["Car"] = cars.filter(
//             (q) => q.Id == reservations[i].CarId
//         )[0];
//     }
//     console.log("resler2  ", reservations);

//     return reservations;
// };

// const CarRef = db.collection("Car");
// export const GetRecordsByOne = async (Doc: string) => {
//     return await CarRef.doc(Doc).get().then((value) => value.data());
// };




// export const GetRecords = async (documentType: DocumentTypes, Code: string) => {
//   return await db
//     .collection(documentType)
//     .where("Code", "==", Code)
//     .get()
//     .then((value) =>
//       value.docs.map((doc) => {
//         let d = doc.data();
//         d.Id = doc.id;
//         return d;
//       })
//     );
// };

// const CheckUndefined = (model) => {
//   let keys = Object.keys(model);

//   for (let i = 0; i < keys.length; i++) {
//     if (model[keys[i]] == undefined) {
//       delete model[keys[i]];
//     }
//   }
// };

// export const AddRecord = (
//   documentType: DocumentTypes,
//   code: any,
//   model: object
// ) => {
//   delete model["Id"];
//   delete model["Car"];
//   delete model["Customer"];
//   CheckUndefined(model);
//   return db.collection(documentType).doc().set(Object.assign({}, model));
// };

// export const RemoveRecord = (
//   documentType: DocumentTypes,
//   Id: string,
//   Code: string
// ) => {
//   return db.collection(documentType).doc(Id).delete();
// };

// export const UpdateRecord = (
//   code: any,
//   documentType: DocumentTypes,
//   updatedModel: any
// ) => {
//   delete updatedModel["Car"];
//   delete updatedModel["Customer"];
//   let findedProduct = db.collection(documentType).doc(updatedModel.Id);
//   return findedProduct.update(Object.assign({}, updatedModel));
// };
