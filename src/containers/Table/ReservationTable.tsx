import React, { PureComponent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carax } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";
import moment from "moment";
import Header from "../../components/Header/Header";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { isEmpty } from "lodash";
import { SearchReservation } from "../../helpers/Function/Search";
import { ReservationListHeader } from "../../helpers/Static/ListHeader";
import { IReservation } from "../../helpers/Database/ReservationInterface";
import {
  HeaderReservationList,
  HeaderCustomerList
} from "src/helpers/Static/Headers";
import { GetRecords, AddRecord } from "src/database";

const ReservationTable: React.FC<any> = () => {
  const [reservations, setReservation] = useState<IReservation[]>(
    new Array<IReservation>()
  );

  const getAllReservation = () => {
    GetRecords("Reservation", "ayazarac").then(data => setReservation(data));

    let obj: IReservation = {
      Price: 150,
      AdditionalCustomer: "",
      BeginDateTime: new Date(Date.now()).toString(),
      EndDateTime: new Date(Date.now()).toString(),
      Car: {
        BrandName: "Reno",
        ModelName: "Meno",
        Plate: "99 be 946",
        Price: ""
      },
      Code: "ayazarac",
      Customer: {
        Name: "Agha",
        Surname: "Huseynov",
        FirstPhone: "5530829742"
      },
      Deposit: 150,
      Paid: 50,
      PaymentType: "Kredi",
      ReservationTypes: "Ön Rezerve"
    };

    AddRecord("Reservation", "ayazarac", obj);
  };

  useEffect(() => {
    getAllReservation();
  }, []);

  if (!reservations) return null;
  return (
    <>
      <Header
        titleFirst={HeaderReservationList.titleFirst}
        btnLink={HeaderReservationList.btnLink}
        btnTitle={HeaderReservationList.btnTitle}
        OnChange={value => {}}
        length={reservations.length}
      />
      <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
        <div className="w-full overflow-auto rounded-lg med-table-wrapper">
          <table className="table-auto med-table">
            <thead>
              <tr>
                {ReservationListHeader.map((i, index) => {
                  return <th key={index}>{i.col}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {reservations.map((i: IReservation, index: any) => {
                return (
                  <tr
                    className={`border-gray-300 border-b hover:border-orange-400 hover:bg-gray-100 cursor-pointer`}
                    key={index}
                    onDoubleClick={() => {
                      localStorage.setItem(
                        "SelectedReservation",
                        JSON.stringify(i)
                      );
                      History.push("/reservation/detail");
                    }}
                  >
                    <td className="flex items-center relative">
                      <div
                        className={`rounded-full bg-gray-300 mr-4 p-2 w-12 h-12 min-h-12 min-w-12 flex items-center justify-center text-gray-800`}
                      >
                        {i.Customer.Name[0] + i.Customer.Surname[0]}
                      </div>
                      <div className="block">
                        <h5 className="flex font-bold">{`${i.Customer.Name} ${i.Customer.Surname}`}</h5>
                        <span className="text-sm flex">{`Tel: ${i.Customer.FirstPhone}`}</span>
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <h5 className="flex font-bold">
                          {`${i.Car.BrandName} ${i.Car.ModelName}`}
                        </h5>
                        <div className="flex">
                          <span className="text-sm flex">{`Plaka: ${i.Car.Plate}`}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <h5 className="flex">
                          {moment(i.BeginDateTime).format("DD.MM.YYYY (HH:mm)")}
                        </h5>
                        <h5 className="flex">
                          {moment(i.EndDateTime).format("DD.MM.YYYY (HH:mm)")}
                        </h5>
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <h5 className="flex font-bold">
                          {i.Price || i.Car.Price} <span>&#8378;</span>
                        </h5>
                        <span className="text-sm flex">(KDV Dahil)</span>
                      </div>
                    </td>
                    <td>
                      <span className="px-3 py-1 bg-blue-400 rounded-lg text-white">
                        {/* {StringReservationStatus(i.ReservationState)} */}
                      </span>
                    </td>
                    <td>
                      <Link
                        className="w-12 h-12 text-gray-600 block rounded-lg hover:text-med-500"
                        onClick={() => {
                          localStorage.setItem(
                            "SelectedReservation",
                            JSON.stringify(i)
                          );
                        }}
                        to={{
                          pathname: "/reservation/detail",
                          state: {
                            patient: i
                          }
                        }}
                      >
                        <span className="w-12 block my-auto">{Carax.More}</span>
                      </Link>
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

export default ReservationTable;
