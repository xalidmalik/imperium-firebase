import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CustomerForm from "../../containers/Forms/CustomerForm";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { customerList } from "../../helpers/Static/Links";
import { HeaderCustomerNew } from "src/helpers/Static/Headers";
import Header from "../../components/Header/Header";

class CustomerNew extends Component {
  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={customerList.overview} />
        </LeftLayout>
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
      </>
    );
  }
}

export default CustomerNew;
