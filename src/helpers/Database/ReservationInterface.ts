export type ReservationType = "Ön Rezerve" | "Rezerve" | "Başlat" | "Bitir";

export interface IReservation {
  Id?: string;
  AdditionalCustomerId?: any;
  ReservationTypes: ReservationType;
  BeginDateTime: any;
  EndDateTime: any;
  Price: number;
  Deposit: number;
  Paid: number;
  PaymentType: string;
  Code: string;
  Customer?: any;
  Car?: any;
  CarId?: any,
  CustomerId: any,
}

export class ReservationModel {
  Id: string = "";
  AdditionalCustomerId?: any;
  ReservationTypes: ReservationType = "Ön Rezerve";
  BeginDateTime: any = ""
  EndDateTime: any = ""
  Price: number = 0;
  Deposit: number = 0;
  Paid: number = 0;
  PaymentType: string = "";
  Code: string = "";
  Customer?: any;
  Car?: any;
  CarId?: string = "";
  CustomerId: string = "";
}
