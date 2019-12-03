import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carax } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";
import { message, car } from "../../helpers/Static/System";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { AlertSwalDelete, AlertSwal } from "../../helpers/Alert/Alert";
import { SearchCar } from "../../helpers/Function/Search";
import { isEmpty } from "lodash";
import { carListHeader } from "../../helpers/Static/ListHeader";
import { GetRecords, RemoveRecord } from "../../database";
import { HeaderCarBoard } from "src/helpers/Static/Headers";
import SecureStore from "secure-ls";
import Img from "react-image";
import Header from "../../components/Header/Header";
import { ICar } from "src/helpers/Database/CarInterfaces";

const CarTable: React.FC = () => {
  const [cars, setCars] = useState<ICar[]>(new Array<ICar>());

  const sc = new SecureStore();
  useEffect(() => {
    getAllCars();
    console.log("arabalar :", cars);
  }, []);

  const getAllCars = () => {
    GetRecords("Car", "ayazarac").then((data:any) => setCars(data));
  };

  const removeCars = (Id: any) => {
    AlertSwalDelete(response => {
      if (response) {
        RemoveRecord("Car", Id, "ayazarac").then(() => getAllCars());
      }
    });
  };

  if (!cars) return null;
  return (
    <>
      <Header
        OnChange={value => {
          let bulunan = SearchCar(cars, value);
          if (isEmpty(bulunan) || !value) {
            getAllCars();
          } else {
            setCars(bulunan);
          }
        }}
        length={cars.length}
        titleFirst={HeaderCarBoard.titleFirst}
        btnLink={HeaderCarBoard.btnLink}
        btnTitle={HeaderCarBoard.btnTitle}
      />
      <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
        <div className="w-full overflow-auto rounded-lg med-table-wrapper">
          <table className="table-auto med-table">
            <thead>
              <tr>
                {carListHeader.map((i, index) => {
                  return <th key={index}>{i.col}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {cars.map((i, index) => {
                return (
                  <tr
                    className={`border-gray-300 border-b hover:border-${i.Color} hover:bg-gray-100 cursor-pointer`}
                    key={index}
                    onDoubleClick={() => {
                      sc.set("SelectedCar", i);
                      History.push("/car/detail");
                    }}
                  >
                    <td className="flex items-center relative">
                      <div
                        className={`rounded mr-4 w-32 min-w-32 flex items-center justify-center text-white text-xl`}
                      >
                        <Img src={i.Image} />
                      </div>
                      <div className="block">
                        <span className="flex leading-none">{i.BrandName}</span>
                        <h5 className="flex text-xl font-bold ">
                          {i.ModelName}
                        </h5>
                      </div>
                    </td>
                    <td>{i.KM}</td>
                    <td>{i.GearType}</td>
                    <td>{i.FuelType}</td>
                    <td>{i.isMaintenance ? "Bakımda " : "Aktif"}</td>
                    <td className="font-bold">
                      {i.Price} <span>&#8378;</span>
                    </td>
                    <td>
                      <div className="flex">
                        <Link
                          className="w-12 h-12 text-gray-600 block rounded-lg hover:text-orange-400 mr-2"
                          onClick={() => {
                            sc.set("SelectedCar", i);
                          }}
                          to="/car/detail"
                        >
                          <span className="w-12 block my-auto">
                            {Carax.More}
                          </span>
                        </Link>
                        <button
                          onClick={() => removeCars(i.Id)}
                          className="w-12 h-12 text-red-400 block rounded-lg hover:text-red-500"
                        >
                          <span className="w-12 h-12 block my-auto p-3">
                            {Carax.Delete}
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardWrapper>
    </>
  );
};

export default CarTable;
