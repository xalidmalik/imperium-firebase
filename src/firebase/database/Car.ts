import { Car } from './Collection';
import { CheckUndefined, Save, GetById, GetAll, Delete, Update } from './Helper';

export const CreateCar = async (model: object) => {
    CheckUndefined(model);
    return await Save(Car, model)
};

export const GetCarById = async (Id: string) => {
    return await GetById(Car, Id)
};

export const GetAllCar = async (Code: string) => {
    return await GetAll(Car, Code)
};

export const RemoveCarById = async (id: string) => {
    return await Delete(Car, id)
};

export const UpdateCar = async (model: any) => {
    return await Update(Car, model)
};