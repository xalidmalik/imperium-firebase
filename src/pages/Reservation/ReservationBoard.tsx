import React from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import ReservationTable from "../../containers/Table/ReservationTable";

const ReservationBoard: React.FC = () => {
  return (
    <RightLayout>
      <ReservationTable />
    </RightLayout>
  );
};

export default ReservationBoard;
