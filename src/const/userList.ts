import {UserModel} from "../models/UserModel.ts";

export const userList: UserModel[] = [
    {
        name: 'John',
        sur_name: 'Doe',
        age: 30
    },
    {
        name: 'Jane',
        sur_name: 'Smith',
        age: 25
    },
];

export const userColumns: (keyof UserModel)[] = ['name', 'sur_name', 'age'];

export const userColumnTranslations = {
    name: 'Nombre',
    sur_name: 'Apellido',
    age: 'Edad'
};