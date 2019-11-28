export interface IDepartment {
  Code: string;
  Name: string;
  CorporateName: string;
  Address: string;
  BrandLogo: string;
  Email: string;
  TaxNumber: number;
  TaxAdministration: string;
  Phone: string;
  FaxNo?: string;
  InstagramUrl: string;
  FacebookUrl: string;
  OfficialEmail?: string;
  PublicSiteUrl: string;
  CompanyCode: string;
}

export class DepartmentModel {
  Code: string = "";
  Name: string = "";
  CorporateName: string = "";
  Address: string = "";
  BrandLogo: string = "";
  Email: string = "";
  TaxNumber: string = "";
  TaxAdministration: string = "";
  Phone: string = "";
  FaxNo?: string = "";
  InstagramUrl: string = "";
  FacebookUrl: string = "";
  OfficialEmail?: string = "";
  PublicSiteUrl: string = "";
  CompanyCode: string = "";
}
