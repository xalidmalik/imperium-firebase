import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CustomerTable from "../../containers/Table/CustomerTable";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { customerList } from "../../helpers/Static/Links";

const CustomerList: React.FC = () => {
  return (
    <>
      <LeftLayout>
        <SubLink base={customerList.overview} />
      </LeftLayout>
      <RightLayout>
        <CustomerTable />
      </RightLayout>
    </>
  );
};

export default CustomerList;
