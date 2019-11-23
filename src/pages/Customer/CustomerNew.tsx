import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CustomerForm from "../../containers/Forms/CustomerForm";

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
          <CustomerForm />
        </RightLayout>
      </>
    );
  }
}

export default CustomerNew;
