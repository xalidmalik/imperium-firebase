import { DocumentTypes } from "../helpers/Database/DocumentTypes";
import { IRecord, ICheckRowVersion } from "../helpers/Types/RecordInterface";
import React from "react";
import db from "../firebase/firebaseconfig";
import ls from "secure-ls";

export const GetRecords = async (
  documentType: DocumentTypes,
  Code: string,
  UpdateModel?: any
) => {
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
  console.log("giden model: ", model);
  console.log("giden model type: ", typeof model);

  return db
    .collection(documentType)
    .doc()
    .set(Object.assign({}, model))
    .then(() => IncrenmentRowVersion(documentType, code));
};

const RemoveRecord = (props: IRecord) => {};

export const UpdateRecord = (
  code: any,
  documentType: DocumentTypes,
  updatedModel: any
) => {
  let findedProduct = db.collection(documentType).doc(updatedModel.Id);
  return findedProduct
    .update(Object.assign({}, updatedModel))
    .then(() => IncrenmentRowVersion(documentType, code));
};

const ChechRowVersion = async (code: any, documentType: DocumentTypes) => {
  let secureStore = new ls();

  let findedRowVersion = db.collection("RowVersion").doc(code);
  let data: any = await findedRowVersion.get().then(data => data.data());
  let oldSecureStore = secureStore.get(`${"RowVersion"}-${code}`);
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
