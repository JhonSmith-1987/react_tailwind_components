import {ProductModel} from "../models/ProductModel.ts";

export const productList: ProductModel[] = [
    {
        name: 'Apple',
        amount: 10,
        price: 1.2
    },
    {
        name: 'Orange',
        amount: 20,
        price: 0.8
    },
];

export const productColumns: (keyof ProductModel)[] = ['name', 'amount', 'price'];

export const productColumnTranslations = {
    name: 'Nombre del producto',
    amount: 'Cantidad',
    price: 'Precio del producto'
}