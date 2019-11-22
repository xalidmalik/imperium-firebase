import { DocumentTypes } from "../helpers/Database/DocumentTypes";
import { IRecord, ICheckRowVersion } from "../helpers/Types/RecordInterface";
import React from "react";
import db from "../firebase/firebaseconfig";
import ls from "secure-ls";
import { async } from "q";

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
    dbValue.then(data => secureStore.set(`${documentType}-${Code}`, data));
    return dbValue;
  } else {
    const localData = secureStore.get(`${documentType}-${Code}`);
    console.log("Localden dondu agaM");
    return localData;
  }
};

const RemoveRecord = (props: IRecord) => {};

const UpdateRecord = (props: IRecord) => {};

const ChechRowVersion = async (code: any, documentType: DocumentTypes) => {
  let secureStore = new ls();

  let findedRowVersion = db.collection("RowVersion").doc(code);
  let data: any = await findedRowVersion.get().then(data => data.data());

  let b = secureStore.get(`${documentType}-${code}`);

  let localData: number = b[documentType];
  let serverData: number = data[documentType];

  console.log("server : ", serverData);
  console.log("local: ", localData);
  secureStore.set(`${documentType}-${code}`, data[documentType]);

  if (localData != serverData) {
    return true;
  } else {
    // secureStore.set(`${documentType}-${code}`, data[documentType]);
    return false;
  }
};

export const IncrenmentRowVersion = async (
  documentType: DocumentTypes,
  increntmentData: DocumentTypes,
  code?: string
) => {
  let secureStore = new ls();

  let findedRowVersion = db.collection(documentType).doc(code);

  let data: any = await findedRowVersion.get().then(data => data.data());
  data[increntmentData] = data[increntmentData] + 1;

  // Write Local Storage
  secureStore.set(`${increntmentData}-${code}`, data);

  // Write Db
  findedRowVersion.update(data);

  console.log(data[increntmentData]);
  console.log(data);

  return findedRowVersion;
};
