import { Department } from './Collection';
import { GetById, GetAll } from './Helper';

export const GetDepartment = async (code: string) => {
    return await GetAll(Department, code)
};
