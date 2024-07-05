import './App.css';
import TableComponent from "./components/TableComponent.tsx";
import {UserModel} from "./models/UserModel.ts";
import {userColumns, userColumnTranslations, userList} from "./const/userList.ts";
import {ProductModel} from "./models/ProductModel.ts";
import {CityModel} from "./models/CityModel.ts";
import {productColumns, productColumnTranslations, productList} from "./const/productList.ts";
import {cityColumns, cityColumnTranslation, cityList} from "./const/cityList.ts";

function App() {


    return (
        <>
            <div>
                <h1>Tabla de Usuarios</h1>
                <TableComponent<UserModel>
                    data={userList}
                    columns={userColumns}
                    columnTranslations={userColumnTranslations}
                />
            </div>
            <div>
                <h1>Tabla de Productos</h1>
                <TableComponent<ProductModel>
                    data={productList}
                    columns={productColumns}
                    columnTranslations={productColumnTranslations}
                />
            </div>
            <div>
                <h1>Tabla de Ciudades</h1>
                <TableComponent<CityModel>
                    data={cityList}
                    columns={cityColumns}
                    columnTranslations={cityColumnTranslation}
                />
            </div>
        </>
    )
}

export default App
