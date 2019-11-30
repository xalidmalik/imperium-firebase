export type ReservationType = "Ön Rezerve" | "Rezerve" | "Başlat" | "Bitir";

export interface IReservation {
  Id?: string;
  Customer: any;
  AdditionalCustomer: any;
  ReservationTypes: ReservationType;
  Car: any;
  BeginDateTime: string;
  EndDateTime: string;
  Price: number;
  Deposit: number;
  Paid: number;
  PaymentType: string;
  Code: string;
}

