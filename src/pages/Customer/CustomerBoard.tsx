import React from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import CustomerTable from "../../containers/Table/CustomerTable";

const CustomerBoard: React.FC = () => {
  return (
    <RightLayout>
      <CustomerTable />
    </RightLayout>
  );
};

export default CustomerBoard;
