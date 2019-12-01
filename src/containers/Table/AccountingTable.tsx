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

const AccountingTable: React.FC = () => {
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
          title="Merhaba"
          desc="Hakkinda dhwihdiawda"
          classes=" w-1/4"
        />
        <CardInfo
          title="Merhaba"
          desc="Hakkinda dhwihdiawda"
          classes="mx-4 w-1/4"
        />
        <CardInfo
          title="Merhaba"
          desc="Hakkinda dhwihdiawda"
          classes=" w-2/4"
        />
      </div>
    </>
  );
};

export default AccountingTable;
