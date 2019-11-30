import React from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import AccountingTable from "src/containers/Table/AccountingTable";

const AccountingBoard: React.FC = () => {
  return (
    <RightLayout>
      <AccountingTable />
    </RightLayout>
  );
};

export default AccountingBoard;
