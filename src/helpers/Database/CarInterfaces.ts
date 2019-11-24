export interface ICar {
  BrandName: string;
  ModelName: string;
  Plate: string;
  CaseType: string;
  FuelType: string;
  GearType: string;
  KM: number;
  EngineCapacity: string;
  DoorsNumber: number;
  Price: number;
  MinDriverLicenseYear: string;
  MinDrivingLicenseYear: string;
  Color: string;
  Deposit: string;
  Classes: string;
  Year: string;
  isMaintenance: boolean;
  isCrash: boolean;
  IsDeleted: boolean;
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
}