import { Transaction, Customer } from './Collection';
import { CheckUndefined, Save, GetById, GetAll, Delete, Update } from './Helper';

export const CreateBookingTransaction = async (model: any, id: any) => {
    CheckUndefined(model);
    const newModel: any = {
        Code: "ayazarac",
        Created: new Date().toString(),
        Customer: model.Customer.Name + " " + model.Customer.Surname,
        CustomerId: model.CustomerId,
        ReservationId: id,
        Ammount: model.Paid,
        Process: "Rezervasyon",
        PaymentType: model.PaymentType,
        desc: "",
        Type: "Gelir"
    };

    return await Save(Transaction, newModel)
};

export const GetTransactionById = async (Id: string) => {
    return await GetById(Transaction, Id)
};

export const GetAllTransaction = async (Code: string) => {
    return await GetAll(Transaction, Code)
};

export const RemoveTransactionById = async (id: string) => {
    return await Delete(Transaction, id)
};

export const UpdateTransaction = async (model: any) => {
    return await Update(Transaction, model)
};


export function HandleTotal(list: any, type) {
    let z = 0;
    list.filter(x => {
        if (x.Type == type) {
            z = z + parseInt(x.Ammount)
        }
    })
    return z;
}