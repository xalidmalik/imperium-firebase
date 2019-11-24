export interface IUser {
  Id?: number;
  Name: string;
  Surname: string;
  TCNumber: string;
  PassportNumber: string;
  Gender: string;
  BirthDate: string;
  BirthPlace: string;
  BloodGroup: string;
  MotherName?: string;
  FatherName?: string;
  FirstPhone: string;
  EmergencyPhone?: string;
  EmergencyPhoneOwner?: string;
  Email: string;
  WorkPhone?: string;
  WorkPlace?: string;
  Profession?: string;
  Country?: string;
  City?: string;
  County?: string;
  Address: string;
  DrivingClasses: string;
  DrivingLicenseNumber: string;
  DrivingLicenseYear: string;
  IsAdditionalDriver: boolean;
  LocationSite: string;
  Code: string;
  IsActive?: boolean;
  InBlackList?: boolean;
}

export class UserModel {
  Name: string = "";
  Surname: string = "";
  TCNumber: string = "";
  PassportNumber: string = "";
  Gender: string = "";
  BirthDate: string = "";
  BirthPlace: string = "";
  BloodGroup: string = "";
  MotherName?: string = "";
  FatherName?: string = "";
  FirstPhone: string = "";
  EmergencyPhone?: string = "";
  EmergencyPhoneOwner?: string = "";
  Email: string = "";
  WorkPhone: string = "";
  WorkPlace: string = "";
  Profession?: string = "";
  Country?: string = "";
  City?: string = "";
  County?: string = "";
  Address: string = "";
  DrivingClasses: string = "";
  DrivingLicenseNumber: string = "";
  DrivingLicenseYear: string = "";
  IsAdditionalDriver: boolean = false;
  LocationSite: string = "";
  Code: string = "";
  IsActive?: boolean = true;
  InBlackList?: boolean = false;
}
