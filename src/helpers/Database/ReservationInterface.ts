export type ReservationType = "Ön Rezerve" | "Rezerve" | "Başlat" | "Bitir";

export interface IReservation {
  Id?: string;
  CustomerId: any;
  AdditionalCustomerId?: any;
  ReservationTypes: ReservationType;
  CarId: any;
  BeginDateTime: any;
  EndDateTime: any;
  Price: number;
  Deposit: number;
  Paid: number;
  PaymentType: string;
  Code: string;
  Customer?: any;
  Car?: any;
}

export class ReservationModel {
  Id: string = "";
  CustomerId: any = "";
  AdditionalCustomerId?: any;
  ReservationTypes: ReservationType = "Ön Rezerve";
  CarId: any = "";
  BeginDateTime: any = ""
  EndDateTime: any = ""
  Price: number = 0;
  Deposit: number = 0;
  Paid: number = 0;
  PaymentType: string = "";
  Code: string = "";
  Customer?: any;
  Car?: any;
}
