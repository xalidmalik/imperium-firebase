import React, { PureComponent, useState } from "react";
import { Link } from "react-router-dom";
import { Carax } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";
import moment from "moment";
import Header from "../../components/Header/Header";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { isEmpty } from "lodash";
import { SearchReservation } from "../../helpers/Function/Search";
import { ReservationListHeader } from "../../helpers/Static/ListHeader";
import {
  HeaderReservationList,
  HeaderCustomerList
} from "src/helpers/Static/Headers";

const ReservationTable: React.FC<any> = () => {
  const [reservations, setReservation] = useState<any>([]);
  //   componentDidMount() {
  //     this.props.fetchDepartment();
  //     this.props.fetchReservationList(true);
  //     localStorage.removeItem("SelectedReservation");
  //   }

  //   componentDidUpdate(prevProps) {
  //     const { reservationListIsLoading, reservationList } = this.props;

  //     if (
  //       prevProps.reservationListIsLoading &&
  //       !reservationListIsLoading &&
  //       reservationList
  //     ) {
  //       this.setState({
  //         reservations: reservationList
  //       });
  //     }
  //   }

  if (!reservations) return null;
  return (
    <>
      <Header
        titleFirst={HeaderReservationList.titleFirst}
        btnLink={HeaderCustomerList.btnLink}
        btnTitle={HeaderCustomerList.btnTitle}
        OnChange={value => {}}
        // length={this.state.reservations.length}
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
              {reservations.map((i, index) => {
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
                        {i.CustomerName[0] + i.CustomerSurname[0]}
                      </div>
                      <div className="block">
                        <h5 className="flex font-bold">{`${i.CustomerName} ${i.CustomerSurname}`}</h5>
                        <span className="text-sm flex">{`Tel: ${i.CustomerFirstPhone}`}</span>
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <h5 className="flex font-bold">
                          {`${i.CarBrandName} ${i.CarModelName}`}
                        </h5>
                        <div className="flex">
                          <span className="text-sm flex">{`Plaka: ${i.CarPlate}`}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <h5 className="flex">
                          {moment(i.ReservationStartDateTime).format(
                            "DD.MM.YYYY (HH:mm)"
                          )}
                        </h5>
                        <h5 className="flex">
                          {moment(i.ReservationStartDateTime).format(
                            "DD.MM.YYYY (HH:mm)"
                          )}
                        </h5>
                      </div>
                    </td>
                    <td>
                      <div className="block">
                        <h5 className="flex font-bold">
                          {i.ReservationPrice || i.CarPrice}{" "}
                          <span>&#8378;</span>
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
