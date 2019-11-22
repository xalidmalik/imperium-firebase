import { DocumentTypes } from "./../Database/DocumentTypes";
export interface IRecord {
  Id?: any;
  DocumentType: DocumentTypes;
  UpdateModel?: any;
}

export interface ICheckRowVersion {
  Code: string;
  DocumentType: DocumentTypes;
}
