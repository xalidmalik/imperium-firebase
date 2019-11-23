import React from "react";
import { Link } from "react-router-dom";
import { Carax } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";
import Img from "react-image";
import { message, car } from "../../helpers/Static/System";
import Header from "../../components/Header/Header";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { AlertSwalDelete, AlertSwal } from "../../helpers/Alert/Alert";
import { isEmpty } from "lodash";
import { SearchCar } from "../../helpers/Search";

const declare module react-image

class CarTable extends React.Component {
  state = {
    cars: null
  };
  

  //   componentDidMount() {
  //     this.props.fetchCarList();
  //   }
  //   removeCar = carId => {
  //     AlertSwalDelete(result => {
  //       if (result) {
  //         this.props.deleteCar(carId);
  //       }
  //     });
  //   };

  //   carRemoveControl = prevProps => {
  //     const { deleteCarIsLoading, deleteCarResponse } = this.props;
  //     if (
  //       prevProps.deleteCarIsLoading &&
  //       !deleteCarIsLoading &&
  //       deleteCarResponse
  //     ) {
  //       this.props.fetchCarList();
  //       AlertSwal(message.success.title, message.success.type);
  //     } else if (
  //       prevProps.deleteCarIsLoading &&
  //       !deleteCarIsLoading &&
  //       !deleteCarResponse
  //     ) {
  //       this.props.fetchCarList();
  //       AlertSwal(message.error.title, message.error.type);
  //     }
  //   };

  //   componentDidUpdate(prevProps) {
  //     this.carRemoveControl(prevProps);

  //     const { isLoading, cars } = this.props;

  //     if (prevProps.isLoading && !isLoading && cars) {
  //       this.setState({
  //         cars: cars
  //       });
  //     }
  //   }

  render() {
    if (!this.state.cars) return null;
    return (
      <>
        <Header
          OnChange={value => {
            let bulunan = SearchCar(this.state.cars, value);
            if (isEmpty(bulunan) || !value) {
              this.setState({
                cars: this.props.cars
              });
            } else {
              this.setState({
                cars: bulunan
              });
            }
          }}
          length={this.state.cars.length}
        />
        <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
          <div className="w-full overflow-auto rounded-lg med-table-wrapper">
            <table className="table-auto med-table">
              <thead>
                <tr>
                  {this.props.header.map((i, index) => {
                    return <th key={index}>{i.col}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {this.state.cars.map((i, index) => {
                  return (
                    <tr
                      className={`border-gray-300 border-b hover:border-${i.Color} hover:bg-gray-100 cursor-pointer`}
                      key={index}
                      onDoubleClick={() => {
                        localStorage.setItem("SelectedCar", JSON.stringify(i));
                        History.push("/car/detail");
                      }}
                    >
                      <td className="flex items-center relative">
                        <div
                          className={`rounded mr-4 w-40 min-w-40 flex items-center justify-center text-white text-xl`}
                        >
                          <Img src={ImageUrl(i.VisualId)} />
                        </div>
                        <div className="block">
                          <span className="flex leading-none">
                            {i.BrandName}
                          </span>
                          <h5 className="flex text-xl font-bold ">
                            {i.ModelName}
                          </h5>
                        </div>
                      </td>
                      <td>{i.Km}</td>
                      <td>{StringGearType(i.GearType.toString())}</td>
                      <td>{StringFuelType(i.FuelType.toString())}</td>
                      <td>{i.Maintenance ? "Bakımda " : "Aktif"}</td>
                      <td className="font-bold">
                        {i.Price} <span>&#8378;</span>
                      </td>
                      <td>
                        <div className="flex">
                          <Link
                            className="w-12 h-12 text-gray-600 block rounded-lg hover:text-orange-400 mr-2"
                            onClick={() => {
                              localStorage.setItem(
                                "SelectedCar",
                                JSON.stringify(i)
                              );
                            }}
                            to={{
                              pathname: "/car/detail",
                              state: {
                                patient: i
                              }
                            }}
                          >
                            <span className="w-12 block my-auto">
                              {Carax.More}
                            </span>
                          </Link>
                          <button
                            onClick={() => this.removeCar(i.Id)}
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
  }
}

export default CarTable;
