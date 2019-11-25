export interface ICar {
  BrandName: string;
  ModelName: string;
  Plate: string;
  CaseType: string;
  FuelType: string;
  GearType: string;
  KM: string;
  EngineCapacity: string;
  DoorsNumber: number;
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
}

export class CarModel {
  BrandName: string = "";
  ModelName: string = "";
  Plate: string = "";
  CaseType: string = "";
  FuelType: string = "";
  GearType: string = "";
  KM: number = 0;
  EngineCapacity: string = "";
  DoorsNumber: number = 4;
  Price: number = 0;
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
}
