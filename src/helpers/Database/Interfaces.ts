export interface IUser {
  Id?: number;
  Name: string;
  Surname: string;
  Gender: string;
  City?: string;
  Country?: string;
  County?: string;
  BirthOfDateTime: string;
  Nationality: string;
  Tc: string;
  PassportSerialNumber: string;
  FirstPhone: string;
  SecondPhone?: string;
  SecondPhoneOwner?: string;
  Email: string;
  Address: string;
  LicenseYear: string;
  SerialNumberOfDrivingLicense: string;
  IsActive?: boolean;
  IsAdditionalDriver: boolean;
  InBlackList?: boolean;
  LocationSite: string;
  Profession?: string;
  BloodGroup: string;
  Code: string;
}

export class UserModel {
  Address: string = "";
  BirthOfDateTime: string = "";
  BloodGroup: string = "Erkek";
  City?: string = "";
  Country?: string = "";
  County?: string = "";
  DrivingClasses: string = "";
  Email: string = "";
  FirstPhone: string = "";
  Gender: string = "";
  LicenseYear: string = "";
  LocationSite: string = "";
  Name: string = "";
  NameOfFather?: string = "";
  NameOfMother?: string = "";
  Nationality: string = "";
  PassportSerialNumber: string = "";
  Profession?: string = "";
  SecondPhone?: string = "";
  SecondPhoneOwner?: string = "";
  SerialNumberOfDrivingLicense: string = "";
  Surname: string = "";
  Tc: string = "";
  IsAdditionalDriver: boolean = false;
  WorkPhone: string = "";
  WorkPlace: string = "";
  Code: string = "";
  IsActive?: boolean = true;
  InBlackList?: boolean = false;
}
