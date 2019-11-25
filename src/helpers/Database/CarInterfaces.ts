export interface ICar {
  BrandName: string;
  ModelName: string;
  Plate: string;
  CaseType: string;
  FuelType: string;
  GearType: string;
  KM: string;
  EngineCapacity: string;
  DoorsNumber: string;
  Price: string;
  MinDriverLicenseYear: string;
  MinDrivingLicenseYear: string;
  Color: string;
  Deposit: string;
  Classes: string;
  Year: string;
  isMaintenance: boolean;
  isCrash: boolean;
  IsDeleted: boolean;
  Image: any;
  Code: string;
}

export class CarModel {
  BrandName: string = "";
  ModelName: string = "";
  Plate: string = "";
  CaseType: string = "";
  FuelType: string = "";
  GearType: string = "";
  KM: string = "";
  EngineCapacity: string = "";
  DoorsNumber: string = "";
  Price: string = "";
  MinDriverLicenseYear: string = "";
  MinDrivingLicenseYear: string = "";
  Color: string = "";
  Deposit: string = "";
  Classes: string = "";
  Year: string = "";
  isMaintenance: boolean = false;
  isCrash: boolean = false;
  IsDeleted: boolean = false;
  Image: any;
  Code: string = "";
}
