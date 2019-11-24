import React, { useState, useEffect } from "react";
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
import { customerListHeader } from "../../helpers//Static/ListHeader";
import { GetRecords } from "../../database/";
import { ICustomer } from "src/helpers/Database/CustomerInterfaces";
import { HeaderCustomerList } from "src/helpers/Static/Headers";
import SecureStore from "secure-ls";

const CustomerTable: React.FC = () => {
  const [customers, setCustomers] = useState<ICustomer[]>(
    new Array<ICustomer>()
  );
  const sc = new SecureStore();
  useEffect(() => {
    getAllRecords();
  }, []);

  const getAllRecords = () => {
    GetRecords("Customer", "ayazarac").then(value => {
      setCustomers(value);
    });
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

  if (!customers) return null;

  return (
    <>
      <Header
        titleFirst={HeaderCustomerList.titleFirst}
        OnChange={(value?: any) => {
          let searched = SearchCustomer(customers, value);
          if ((isEmpty(searched) && searched != []) || !value) {
            getAllRecords();
          } else {
            setCustomers(searched);
          }
        }}
        length={customers.length}
        btnLink={HeaderCustomerList.btnLink}
        btnTitle={HeaderCustomerList.btnTitle}
      />
      <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
        <div className="w-full overflow-auto rounded-lg med-table-wrapper">
          <table className="table-auto med-table">
            <thead>
              <tr>
                {customerListHeader.map((i, index) => {
                  return <th key={index}>{i.col}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {customers.map((i, numb: any) => {
                console.log(
                  "ada",
                  new Date().getFullYear() -
                    moment(i.DrivingLicenseYear)
                      .toDate()
                      .getFullYear() +
                    " Yıl"
                );
                return (
                  <tr
                    className={`border-gray-300 border-b hover:border-med-500 hover:bg-gray-100 cursor-pointer`}
                    key={numb}
                    onDoubleClick={() => {
                      sc.set("SelectedCustomer", i);
                      History.push("/customer/detail");
                    }}
                  >
                    <td className="flex items-center">
                      <div className="rounded-full bg-gray-300 mr-4 p-2 w-12 h-12 min-h-12 min-w-12 flex items-center justify-center text-gray-800">
                        {i.Name[0] + i.Surname[0]}
                      </div>
                      {`${i.Name} ${i.Surname}`}
                    </td>
                    <td>{i.TCNumber}</td>
                    <td>{i.FirstPhone}</td>
                    <td>{i.Email}</td>
                    <td
                      className={`font-bold ${
                        new Date().getFullYear() -
                          moment(i.DrivingLicenseYear)
                            .toDate()
                            .getFullYear() <=
                        1
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      <span className="mr-2">•</span>
                      {new Date().getFullYear() -
                        moment(i.DrivingLicenseYear)
                          .toDate()
                          .getFullYear() +
                        " Yıl"}
                    </td>
                    <td>
                      <div className="flex">
                        <Link
                          className="w-12 h-12 text-gray-600 block rounded-lg hover:text-orange-400 mr-2"
                          onClick={() => {
                            sc.set("SelectedCustomer", i);
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
                          // onClick={() => this.removeCustomer(i.Id)}
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

export default CustomerTable;
