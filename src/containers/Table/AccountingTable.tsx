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
import { HeaderAccountingBoard } from "src/helpers/Static/Headers";
import SecureStore from "secure-ls";
import Header from "../../components/Header/Header";
import moment from "moment";
import CardInfo from "src/components/Card/CardInfo";
import { AccountingListHeader } from "../../helpers/Static/ListHeader";
import { GetAllTransaction } from "src/firebase/database/Transaction";
import { GetAllTransactionActions } from "src/redux/actions/Transaction";
import { Transaction } from "src/firebase/database/Collection";

const AccountingTable: React.FC = () => {
  const dispatch = useDispatch();
  const { transactionIsLoading, transaction, income, expense, gain, transactionErrorMessage } = useSelector((state: any) => state.getAllTransaction);

  // const [income, setIncome] = useState(0)

  const sc = new SecureStore();
  const getAllTransaction = () => {
    dispatch(GetAllTransactionActions("ayazarac"))
  };


  useEffect(() => {
    getAllTransaction();

  }, []);

  useEffect(() => {
    if (!transactionIsLoading && transaction) {
      let data = HandleIncome(transaction, "Gelir");
      console.log("hani", data)
      // setIncome(data)
    }
  }, []);

  // if (!customers) return null;

  function HandleIncome(list: any, type) {
    let z = 0;
    list.filter(x => {
      if (x.Type == type) {
        z = z + parseInt(x.Ammount)
        return z
      }
    })
    return z;
  }

  return (
    <>
      <Header
        titleFirst={HeaderAccountingBoard.titleFirst}
        btnLink={HeaderAccountingBoard.btnLink}
        btnTitle={HeaderAccountingBoard.btnTitle}
      />
      <div className="flex flex-row">
        <CardInfo
          title="Gelir"
          desc={income}
          date=""
          color="blue-300"
          classes=" w-1/3"
        />
        <CardInfo
          title="Gider"
          desc={expense}
          date=""
          color="red-300"
          classes="mx-4 w-1/3"
        />
        <CardInfo
          title="Kar"
          desc={gain}
          date=""
          color="green-300"
          classes=" w-1/3"
        />
      </div>
      <CardWrapper classes="w-card-table-info bg-white rounded-lg flex shadow-base mb-4 overflow-hidden">
        {!transactionIsLoading && transaction ?
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
                {transaction.map((i, index) => {
                  return (
                    <tr
                      className={`border-gray-300 border-b hover:border-${i.Color} hover:bg-gray-100 cursor-pointer`}
                      key={index}
                      onDoubleClick={() => {
                        // sc.set("SelectedCar", i);
                        History.push("/car/detail");
                      }}
                    >

                      <td>{moment(i.Created).format("DD.MM.YYYY (HH:mm)")}</td>
                      <td>{i.Customer}</td>
                      <td className={`${i.Type == "Gelir" ? " text-green-500" : "text-red-500"} font-bold`}>{i.Type}</td>
                      <td>{i.Process}</td>
                      <td className="text-base font-bold">{i.Ammount} TL</td>
                      <td>
                        <div className="flex">
                          {/* <Link
                            className="w-12 h-12 text-gray-600 block rounded-lg hover:text-orange-400 mr-2"
                            onClick={() => {
                              sc.set("SelectedCar", i);
                            }}
                            to="/car/detail"
                          >
                            <span className="w-12 block my-auto">
                              {Carax.More}
                            </span>
                          </Link> */}
                          <button
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

export default AccountingTable;
