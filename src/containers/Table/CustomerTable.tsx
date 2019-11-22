import React from "react";
import { Link } from "react-router-dom";
import { Carax } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";
import { message } from "../../helpers/Static/System";
import { CardWrapper } from "../../components/Card/CardWrapper";
import Header from "../../components/Header/Header";
import { AlertSwalDelete, AlertSwal } from "../../helpers/Alert/Alert";
import { SearchCustomer } from "../../helpers/Function/Search";
import moment from "moment";
import { isEmpty } from "lodash";

class CustomerTable extends React.Component {
  state = {
    customers: null
  };

  //   removeCustomer = customerId => {
  //     AlertSwalDelete(result => {
  //       if (result) {
  //         this.props.deleteCustomer(customerId);
  //       }
  //     });
  //   };

  //   componentDidUpdate(prevProps) {
  //     const {
  //       deleteIsLoading,
  //       deleteResponse,
  //       deleteErrorMessage,
  //       isLoading,
  //       customers,
  //       errorMessage
  //     } = this.props;
  //     if (prevProps.deleteIsLoading && !deleteIsLoading && deleteResponse) {
  //       this.props.fetchCustomerList(true);
  //       AlertSwal(message.success.title, message.success.type);
  //     }

  //     if (prevProps.isLoading && !isLoading && customers) {
  //       this.setState({
  //         customers: customers
  //       });
  //     }
  //   }

  //   componentDidMount() {
  //     this.props.fetchCustomerList(true);
  //     localStorage.removeItem("SelectedCustomer");
  //   }

  render() {
    if (!this.state.customers) return null;

    return (
      <>
        <Header
          titleFirst="Müşteriler"
          OnChange={value => {
            let bulunan = SearchCustomer(this.state.customers, value);
            if (isEmpty(bulunan) || !value) {
              this.setState({
                customers: this.props.customers
              });
            } else {
              this.setState({
                customers: bulunan
              });
            }
          }}
          length={this.state.customers.length}
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
                {this.state.customers.map((i, index) => {
                  return (
                    <tr
                      className={`border-gray-300 border-b hover:border-med-500 hover:bg-gray-100 cursor-pointer`}
                      key={index}
                      onDoubleClick={() => {
                        localStorage.setItem(
                          "SelectedCustomer",
                          JSON.stringify(i)
                        );
                        History.push("/customer/detail");
                      }}
                    >
                      <td className="flex items-center">
                        <div className="rounded-full bg-gray-300 mr-4 p-2 w-12 h-12 min-h-12 min-w-12 flex items-center justify-center text-gray-800">
                          {i.Name[0] + i.Surname[0]}
                        </div>
                        {`${i.Name} ${i.Surname}`}
                      </td>
                      <td>{i.Tc}</td>
                      <td>{i.FirstPhone}</td>
                      <td>{i.Email}</td>
                      <td
                        className={`font-bold ${
                          new Date().getFullYear() -
                            moment(i.LicenseYear).format("YYYY") <=
                          1
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        <span className="mr-2">•</span>
                        {new Date().getFullYear() -
                          moment(i.LicenseYear).format("YYYY") +
                          " Yıl"}
                      </td>
                      <td>
                        <div className="flex">
                          <Link
                            className="w-12 h-12 text-gray-600 block rounded-lg hover:text-orange-400 mr-2"
                            onClick={() => {
                              localStorage.setItem(
                                "SelectedCustomer",
                                JSON.stringify(i)
                              );
                            }}
                            to={{
                              pathname: "/customer/detail",
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
                            onClick={() => this.removeCustomer(i.Id)}
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

export default CustomerTable;