import React from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import ReservationForm from "../../containers/Forms/ReservationForm";
import Header from "../../components/Header/Header";

import CustomerForm from "../../containers/Forms/CustomerForm";
import RightModal from "../../components/Modal/RightModal";
import { HeaderAccountingNew } from "src/helpers/Static/Headers";
import AccountingForm from "src/containers/Forms/AccountingForm";

const AccountingNew: React.FC = () => {
  return (
    <>
      <RightLayout>
        <Header
          titleFirst={HeaderAccountingNew.titleFirst}
          linkFirst={HeaderAccountingNew.linkFirst}
          titleSecond={HeaderAccountingNew.titleSecond}
          btnForm={HeaderAccountingNew.btnForm}
          btnTitle={HeaderAccountingNew.btnTitle}
        />
        <AccountingForm />
      </RightLayout>
      <RightModal>
        <CustomerForm />
      </RightModal>
    </>
  );
};

export default AccountingNew;
