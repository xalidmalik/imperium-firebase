import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { Carax } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";
import moment from "moment";
import Header from "../../components/Header/Header";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { ReservationListHeader } from "../../helpers/Static/ListHeader";
import {
  HeaderReservationBoard,
} from "src/helpers/Static/Headers";
import SecureStore from "secure-ls";
import { GetAllBookingActions } from "src/redux/actions/Booking";

const ReservationTable: React.FC<any> = () => {
  const dispatch = useDispatch();
  const { booking, bookingIsLoading, bookingErrorMessage } = useSelector((state: any) => state.booking);

  const sc = new SecureStore();
  const getAllReservation = () => {
    dispatch(GetAllBookingActions("ayazarac"))
  };


  useEffect(() => {
    getAllReservation();
  }, []);

  // if (!reservations) return null;
  return (
    <>
      <Header
        titleFirst={HeaderReservationBoard.titleFirst}
        btnLink={HeaderReservationBoard.btnLink}
        btnTitle={HeaderReservationBoard.btnTitle}
        OnChange={(value) => { }}
        length={booking && booking.length}
      />
      <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
        {!bookingIsLoading && booking ?
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
                {booking.map((data: any, index: any) => {
                  return (
                    <tr
                      className={`border-gray-300 border-b hover:border-orange-400 hover:bg-gray-100 cursor-pointer`}
                      key={index}
                      onDoubleClick={() => {
                        sc.set("SelectedReservation", data);
                        History.push("/reservation/detail");
                      }}
                    >
                      <td className="flex items-center relative">
                        <div
                          className={`rounded-full bg-gray-300 mr-4 p-2 w-12 h-12 min-h-12 min-w-12 flex items-center justify-center text-gray-800`}
                        >
                          {data.Customer &&
                            data.Customer.Name[0] + data.Customer &&
                            data.Customer.Surname[0]}
                        </div>
                        <div className="block">
                          <h5 className="flex font-bold">{`${
                            data.Customer && data.Customer.Name
                            } ${data.Customer && data.Customer.Surname}`}</h5>
                          <span className="text-sm flex">{`Tel: ${
                            data.Customer && data.Customer.FirstPhone
                            }`}</span>
                        </div>
                      </td>
                      <td>
                        <div className="block">
                          <h5 className="flex font-bold">
                            {`${data.Car.BrandName && data.Car.BrandName} ${data.Car.ModelName}`}
                          </h5>
                          <div className="flex">
                            <span className="text-sm flex">{`Plaka: ${data.Car.Plate}`}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="block">
                          <h5 className="flex">
                            {moment(data.BeginDateTime).format("DD.MM.YYYY (HH:mm)")}
                          </h5>
                          <h5 className="flex">
                            {moment(data.EndDateTime).format("DD.MM.YYYY (HH:mm)")}
                          </h5>
                        </div>
                      </td>
                      <td>
                        <div className="block">
                          <h5 className="flex font-bold">
                            {data.Price || data.CarId.Price} <span>&#8378;</span>
                          </h5>
                          <span className="text-sm flex">(KDV Dahil)</span>
                        </div>
                      </td>
                      <td>
                        <span className="px-3 py-1 bg-blue-400 rounded-lg text-white">
                          {data.ReservationTypes}
                        </span>
                      </td>
                      <td>
                        <Link
                          className="w-12 h-12 text-gray-600 block rounded-lg hover:text-med-500"
                          onClick={() => {
                            sc.set("SelectedReservation", data);
                            History.push("/reservation/detail");
                          }}
                          to="/reservation/detail"
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
          :
          <p className="flex justify-center items-center w-full font-bold">Yükleniyor...</p>
        }
      </CardWrapper>
    </>
  );
};

export default ReservationTable;
