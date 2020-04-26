import { Accounting } from './Collection';
import { CheckUndefined, Save, GetById, GetAll, Delete, Update } from './Helper';

export const CreateAccounting = async (model: object) => {
    CheckUndefined(model);
    return await Save(Accounting, model)
};

export const GetAccountingById = async (Id: string) => {
    return await GetById(Accounting, Id)
};

export const GetAllAccounting = async (Code: string) => {
    return await GetAll(Accounting, Code)
};

export const RemoveAccountingById = async (id: string) => {
    return await Delete(Accounting, id)
};

export const UpdateAccounting = async (model: any) => {
    return await Update(Accounting, model)
};