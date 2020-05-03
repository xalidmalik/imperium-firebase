export type ReservationType = "Ön Rezerve" | "Rezerve" | "Başlat" | "Bitir";

export interface ITransaction {
    Code: string,
    Created: Date,
    Customer: string,
    CustomerId: string,
    ReservationId: string,
    Ammount: number,
    Process: string,
    PaymentType: string,
    Desc: string,
    Type: string
}

export class TransactionModel {
    Code: string = "ayazarac";
    Created: string = new Date().toString();
    Customer: string = "";
    CustomerId: string = "";
    ReservationId: string = "";
    Ammount: number = 0;
    Process: string = "";
    PaymentType: string = "";
    Desc: string = "";
    Type: string = "";
}
