import { Customer } from './Collection';
import { CheckUndefined, Save, GetById, GetAll, Delete, Update } from './Helper';

export const CreateCustomer = async (model: object) => {
    CheckUndefined(model);
    return await Save(Customer, model)
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