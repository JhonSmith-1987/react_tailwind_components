import {CityModel} from "../models/CityModel.ts";

export const cityList: CityModel[] = [
    {
        name: 'New York',
        location: 'USA',
        population: '8M',
        gastronomy: 'Diverse'
    },
    {
        name: 'Tokyo',
        location: 'Japan',
        population: '14M',
        gastronomy: 'Sushi'
    },
];

export const cityColumns: (keyof CityModel)[] = ['name', 'location', 'population', 'gastronomy'];

export const cityColumnTranslation = {
    name: 'Nombre de la ciudad',
    location: 'Ubicación',
    population: 'Población',
    gastronomy: 'Gastronomia'
};