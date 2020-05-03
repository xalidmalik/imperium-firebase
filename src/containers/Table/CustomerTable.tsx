import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { Carax } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";
import { message } from "../../helpers/Static/System";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { AlertSwalDelete, AlertSwal } from "../../helpers/Alert/Alert";
import { SearchCustomer } from "../../helpers/Function/Search";
import { isEmpty } from "lodash";
import { customerListHeader } from "../../helpers//Static/ListHeader";
import { ICustomer } from "src/helpers/Database/CustomerInterfaces";
import { HeaderCustomerBoard } from "src/helpers/Static/Headers";
import SecureStore from "secure-ls";
import Header from "../../components/Header/Header";
import moment from "moment";
import { GetAllCustomer, RemoveCustomerById } from "src/firebase/database/Customer";
import { GetAllCustomerActions } from "src/redux/actions/Customer";



const CustomerTable: React.FC = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state => state.getAllCustomers.customers));
  console.log(customers);


  const sc = new SecureStore();
  useEffect(() => {
    getAllRecords();
  }, []);

  const getAllRecords = () => {
    dispatch(GetAllCustomerActions("ayazarac"));
  };

  const RemoveCustomer = (Id: any) => {
    AlertSwalDelete(() => {
      RemoveCustomerById(Id).then(() => getAllRecords());
    });
  };

  // if (!customers) return null;

  return (
    <>
      <Header
        titleFirst={HeaderCustomerBoard.titleFirst}
        OnChange={(value?: any) => {
          let searched = SearchCustomer(customers, value);
          if ((isEmpty(searched) && searched != []) || !value) {
            getAllRecords();
          }
          // else {
          //   setCustomers(searched);
          // }
        }}
        length={customers && customers.length}
        btnLink={HeaderCustomerBoard.btnLink}
        btnTitle={HeaderCustomerBoard.btnTitle}
      />
      <CardWrapper classes="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
        {customers ?
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
                  return (
                    <tr
                      className={`border-gray-300 border-b hover:border-med-500 hover:bg-gray-100 cursor-pointer`}
                      key={numb}
                      onDoubleClick={() => {
                        sc.set("SelectedCustomer", i);
                        History.push("/customer/detail");
                      }}
                    >
                      <td>
                        <div className="flex items-center">
                          <div className="rounded-full bg-gray-300 mr-4 p-2 w-10 h-10 min-h-10 min-w-10 flex items-center justify-center text-gray-800">
                            {i.Name[0] + i.Surname[0]}
                          </div>
                          {`${i.Name} ${i.Surname}`}
                        </div>
                      </td>
                      <td>{i.TCNumber}</td>
                      <td>{i.FirstPhone}</td>
                      <td>{i.Email}</td>
                      <td
                        className={`font-bold ${
                          new Date().getFullYear() -
                            moment(i.DrivingLicenseYear).toDate().getFullYear() <=
                            1
                            ? "text-red-500"
                            : "text-green-500"
                          }`}
                      >
                        <span className="mr-2">•</span>
                        {new Date().getFullYear() -
                          moment(i.DrivingLicenseYear).toDate().getFullYear() +
                          " Yıl"}
                      </td>
                      <td>
                        <div className="flex">
                          <Link
                            className="w-12 h-12 text-gray-600 block rounded-lg hover:text-orange-400 mr-2"
                            onClick={() => {
                              sc.set("SelectedCustomer", i);
                            }}
                            to="/customer/detail"
                          >
                            <span className="w-12 block my-auto">
                              {Carax.More}
                            </span>
                          </Link>
                          <button
                            onClick={() => RemoveCustomer(i.Id)}
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
          :
          <p className="flex justify-center items-center w-full font-bold">Yükleniyor...</p>
        }
      </CardWrapper>
    </>
  );
};

export default CustomerTable;
