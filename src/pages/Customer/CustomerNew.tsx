import React, { Component } from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import CustomerForm from "../../containers/Forms/CustomerForm";
import { HeaderCustomerNew } from "src/helpers/Static/Headers";
import Header from "../../components/Header/Header";

const CustomerNew: React.FC = () => {
  return (
    <RightLayout>
      <Header
        titleFirst={HeaderCustomerNew.titleFirst}
        linkFirst={HeaderCustomerNew.linkFirst}
        titleSecond={HeaderCustomerNew.titleSecond}
        btnForm={HeaderCustomerNew.btnForm}
        btnTitle={HeaderCustomerNew.btnTitle}
      />
      <CustomerForm />
    </RightLayout>
  );
};

export default CustomerNew;
