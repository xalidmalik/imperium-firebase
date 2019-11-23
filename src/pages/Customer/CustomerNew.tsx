import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
// import CustomerForm from "../../containers/Forms/CustomerForm";
import Header from "../../components/Header/Header";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { customerList } from "../../helpers/Static/Links";

class CustomerNew extends Component {
  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={customerList.overview} />
        </LeftLayout>
        <RightLayout>
          <Header
            titleFirst="Müşteriler"
            linkFirst="/customer"
            titleSecond="Yeni Müşteri Ekle"
          />
          {/* <CustomerForm /> */}
        </RightLayout>
      </>
    );
  }
}

export default CustomerNew;
