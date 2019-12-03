import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carax } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";
import { message } from "../../helpers/Static/System";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { AlertSwalDelete, AlertSwal } from "../../helpers/Alert/Alert";
import { SearchCustomer } from "../../helpers/Function/Search";
import { isEmpty } from "lodash";
import { customerListHeader } from "../../helpers//Static/ListHeader";
import { GetRecords } from "../../database/";
import { ICustomer } from "src/helpers/Database/CustomerInterfaces";
import { HeaderAccountingBoard } from "src/helpers/Static/Headers";
import SecureStore from "secure-ls";
import Header from "../../components/Header/Header";
import moment from "moment";
import { RemoveRecord } from "../../database/index";
import CardInfo from "src/components/Card/CardInfo";
import { AccountingListHeader } from "../../helpers/Static/ListHeader";

const AccountingTable: React.FC = () => {
  const [customers, setCustomers] = useState<ICustomer[]>(
    new Array<ICustomer>()
  );
  const sc = new SecureStore();
  useEffect(() => {
    getAllRecords();
  }, []);

  const getAllRecords = () => {
    GetRecords("Customer", "ayazarac").then((value: any) => {
      setCustomers(value);
    });
  };

  const RemoveCar = (Id: any) => {
    AlertSwalDelete(() => {
      RemoveRecord("Customer", Id, "ayazarac").then(() => getAllRecords());
    });
  };

  if (!customers) return null;

  return (
    <>
      <Header
        titleFirst={HeaderAccountingBoard.titleFirst}
        btnLink={HeaderAccountingBoard.btnLink}
        btnTitle={HeaderAccountingBoard.btnTitle}
      />
      <div className="flex flex-row">
        <CardInfo
          title="Gider"
          desc="12.000"
          date="01.12.2019"
          color="red-100"
          classes=" w-1/3"
        />
        <CardInfo
          title="Ciro"
          desc="40.000"
          date="01.12.2019"
          color="green-100"
          classes="mx-4 w-1/3"
        />
        <CardInfo
          title="Kar"
          desc="28.000"
          date="01.12.2019"
          color="blue-100"
          classes=" w-1/3"
        />
      </div>
      <CardWrapper classes="w-card-table-info bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
        <div className="w-full overflow-auto rounded-lg med-table-wrapper">
          <table className="table-auto med-table">
            <thead>
              <tr>
                {AccountingListHeader.map((i, index) => {
                  return <th key={index}>{i.col}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {/* {cars.map((i, index) => {
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
              })} */}
            </tbody>
          </table>
        </div>
      </CardWrapper>
    </>
  );
};

export default AccountingTable;
