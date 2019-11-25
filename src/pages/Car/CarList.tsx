import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CarTable from "../../containers/Table/CarTable";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { carList } from "../../helpers/Static/Links";

const CarList: React.FC = () => {
  return (
    <>
      <LeftLayout>
        <SubLink base={carList.overview} />
      </LeftLayout>
      <RightLayout>
        <CarTable />
      </RightLayout>
    </>
  );
};

export default CarList;
