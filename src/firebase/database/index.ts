import moment from 'moment';
import { GetAllCar } from 'src/firebase/database/Car';
import { GetAllBooking } from 'src/firebase/database/Booking';
import { DocumentTypes } from "../../helpers/Database/DocumentTypes";
import db from "../firebaseconfig";
import ls from "secure-ls";
import { IReservation } from "../../helpers/Database/ReservationInterface";
import { uniqBy } from "lodash";

export const GetAvailableCars = async (beginDate: any, endDate: any) => {
    let temp: any = [];
    let booking: any = await GetAllBooking("ayazarac");
    if (booking.length == 0) {
        let allCar = await GetAllCar("ayazarac");
        console.log("allcar", allCar)
        return allCar
    } else {
        console.log("allBook", booking)
        const Parseint = (date) => {
            return moment(date).format("X")
        }
        console.log(Parseint(beginDate))


        let available = booking.filter(
            (a: IReservation) =>
                (Parseint(beginDate) > Parseint(a.BeginDateTime) && Parseint(beginDate) <= Parseint(a.EndDateTime) ||
                    (Parseint(beginDate) <= Parseint(a.BeginDateTime) && Parseint(endDate) >= Parseint(a.EndDateTime) ||
                        (Parseint(endDate) >= Parseint(a.BeginDateTime) && Parseint(beginDate) <= Parseint(a.EndDateTime) ||
                            (Parseint(beginDate) >= Parseint(a.BeginDateTime) && Parseint(endDate) <= Parseint(a.EndDateTime)

                            )))))
        let cars: any = await GetAllCar("ayazarac")
        let findCars = available.map((i: any) => {
            return i.Car
        })
        console.log("find", findCars)
        console.log("cars", cars)

        const comparer = (otherArray) => {
            return (current) => {
                return otherArray.filter((other) => {
                    return other.Id == current.Id
                }).length == 0;
            }
        }
        const onlyInA = findCars.filter(comparer(cars));
        const onlyInB = cars.filter(comparer(findCars));
        let result = onlyInA.concat(onlyInB);

        return result;
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
