import { DocumentTypes } from "./../Database/DocumentTypes";
export interface IRecord {
  Id?: any;
  DocumentType: DocumentTypes;
  UpdateModel?: any;
  Code: string;
}

export interface ICheckRowVersion {
  Code: any;
  DocumentType: DocumentTypes;
}
