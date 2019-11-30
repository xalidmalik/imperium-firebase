import React from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import CarTable from "../../containers/Table/CarTable";

const CarBoard: React.FC = () => {
  return (
    <RightLayout>
      <CarTable />
    </RightLayout>
  );
};

export default CarBoard;
