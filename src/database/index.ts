import { DocumentTypes } from "../helpers/Database/DocumentTypes";
import { IRecord, ICheckRowVersion } from "../helpers/Types/RecordInterface";
import React from "react";
import db, { fb } from "../firebase/firebaseconfig";
import ls from "secure-ls";
import { IReservation } from "../helpers/Database/ReservationInterface";

import { uniqBy } from "lodash";

const distinct = (value, index, self) => {
  return self.indexOf(value.CarId) === index;
};

export const GetAvailableCars = async (beginDate: any, endDate: any) => {
  let reservation = await GetReservations();

  let available = reservation.filter(
    (a: IReservation) =>
      !(a.BeginDateTime <= beginDate && a.EndDateTime >= beginDate) ||
      !(a.BeginDateTime <= endDate && a.EndDateTime >= endDate) ||
      !(beginDate <= a.BeginDateTime && endDate >= a.EndDateTime)
  );

  const unique = uniqBy(available, "CarId");
  return unique;
};

export const GetReservations = async () => {
  let reservations: any = await GetRecords("Reservation", "ayazarac");
  let customers = await GetRecords("Customer", "ayazarac");
  let cars = await GetRecords("Car", "ayazarac");

  for (let i = 0; i < reservations.length; i++) {
    reservations[i]["Customer"] = customers.filter(
      q => q.Id == reservations[i].CustomerId
    )[0];
  }

  for (let i = 0; i < reservations.length; i++) {
    reservations[i]["Car"] = cars.filter(q => q.Id == reservations[i].CarId)[0];
  }

  return reservations;
};

export const GetRecords = async (documentType: DocumentTypes, Code: string) => {
  let secureStore = new ls();

  if (await ChechRowVersion(Code, documentType)) {
    const dbValue = db
      .collection(documentType)
      .where("Code", "==", Code)
      .get()
      .then(value =>
        value.docs.map(doc => {
          let d = doc.data();
          d.Id = doc.id;
          return d;
        })
      );
    dbValue.then(data => secureStore.set(`${documentType}-List-${Code}`, data));
    return dbValue;
  } else {
    const localData = secureStore.get(`${documentType}-List-${Code}`);
    console.log("Localden dondu agaM");
    return localData || [];
  }
};

export const AddRecord = (
  documentType: DocumentTypes,
  code: any,
  model: object
) => {
  delete model["Id"];

  let keys = Object.keys(model);

  for (let i = 0; i < keys.length; i++) {
    if (model[keys[i]] == undefined) {
      delete model[keys[i]];
    }
  }
  let task = db
    .collection(documentType)
    .doc()
    .set(Object.assign({}, model))
    .finally(() => {
      IncrenmentRowVersion(documentType, code);
    });
  return task;
};

export const RemoveRecord = (
  documentType: DocumentTypes,
  Id: string,
  Code: string
) => {
  return db
    .collection(documentType)
    .doc(Id)
    .delete()
    .then(() => IncrenmentRowVersion(documentType, Code));
};

export const UpdateRecord = (
  code: any,
  documentType: DocumentTypes,
  updatedModel: any
) => {
  console.log("ID ID IDI :", updatedModel.Id);
  let findedProduct = db.collection(documentType).doc(updatedModel.Id);
  return findedProduct
    .update(Object.assign({}, updatedModel))
    .then(() => IncrenmentRowVersion(documentType, code));
};

const ChechRowVersion = async (code: any, documentType: DocumentTypes) => {
  let secureStore = new ls();

  let findedRowVersion = db.collection("RowVersion").doc(code);
  let data: any = await findedRowVersion.get().then(data => data.data());
  console.log("dadadad :", data);
  let oldSecureStore = secureStore.get(`${"RowVersion"}-${code}`);
  console.log("oldSecureStore :", oldSecureStore);
  let localData: number = oldSecureStore[documentType];
  let serverData: number = data[documentType];
  secureStore.set(`${"RowVersion"}-${code}`, data);
  if (localData != serverData) {
    return true;
  } else {
    return false;
  }
};

export const IncrenmentRowVersion = async (
  increntmentData: DocumentTypes,
  code?: string
) => {
  let secureStore = new ls();

  let findedRowVersion = db.collection("RowVersion").doc(code);

  let data: any = await findedRowVersion.get().then(data => data.data());
  data[increntmentData] = data[increntmentData] + 1;

  // Write Local Storage
  // secureStore.set(`${increntmentData}-${code}`, data);

  // Write Db
  findedRowVersion.update(data);

  console.log(data[increntmentData]);
  console.log(data);

  return findedRowVersion;
};
