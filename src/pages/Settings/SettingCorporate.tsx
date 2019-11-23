import React from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import { CardWrapper } from "../../components/Card/CardWrapper";
// import DepartmentForm from "../../containers/Forms/DepartmentForm";
import Header from "../../components/Header/Header";

const SettingCorporate = () => {
  return (
    <>
      <LeftLayout>
        {/* <SubLink base={reservationList.overview} /> */}
      </LeftLayout>
      <RightLayout>
        <Header titleFirst="test" />
        {/* <DepartmentForm /> */}
      </RightLayout>
    </>
  );
};

export default SettingCorporate;
