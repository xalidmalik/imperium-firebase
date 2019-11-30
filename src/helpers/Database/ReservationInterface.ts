export type ReservationType = "Ön Rezerve" | "Rezerve" | "Başlat" | "Bitir";

export interface IReservation {
  Id?: string;
  CustomerId: any;
  AdditionalCustomerId: any;
  ReservationTypes: ReservationType;
  CarId: any;
  BeginDateTime: string;
  EndDateTime: string;
  Price: number;
  Deposit: number;
  Paid: number;
  PaymentType: string;
  Code: string;
}
