import { Customer } from './Collection';
import { CheckUndefined, Save, GetById, GetAll, Delete, Update, GetAllByTc } from './Helper';

export const CreateCustomer = async (model: any) => {
    CheckUndefined(model);
    const tc = model.TCNumber;
    const allList = await GetAllByTc(Customer, tc)
    if (allList.length !== 0) {
        console.log("alalalla", allList)
        return null
    }
    else {
        return await Save(Customer, model)
    }
};

export const GetCustomerById = async (Id: string) => {
    return await GetById(Customer, Id)
};

export const GetAllCustomer = async (Code: string) => {
    return await GetAll(Customer, Code)
};

export const RemoveCustomerById = async (id: string) => {
    return await Delete(Customer, id)
};

export const UpdateCustomer = async (model: any) => {
    return await Update(Customer, model)
};