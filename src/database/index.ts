import { DocumentTypes } from "../helpers/Database/DocumentTypes";
import { IRecord, ICheckRowVersion } from "../helpers/Types/RecordInterface";
import React from "react";
import db from "../firebase/firebaseconfig";

const GetRecords = (props: IRecord) => {};

const GetSingleRecord = (props: IRecord) => {};

const RemoveRecord = (props: IRecord) => {};

const UpdateRecord = (props: IRecord) => {};

const ChechRowVersion = (props: ICheckRowVersion) => {};

export const IncrenmentRowVersion = async (
  documentType: DocumentTypes,
  code?: string,
  increntmentData?: any
) => {
  let findedRowVersion = db
    .collection(documentType)
    .doc(code)
    .get();

  let data: any = await findedRowVersion.then(data => data.data());

  data[increntmentData] = data[increntmentData] + 1;

  console.log(data[increntmentData]);
  console.log(data);

  return findedRowVersion;
};
