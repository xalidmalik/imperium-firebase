import React, { useEffect, useState } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import { CardWrapper } from "../../components/Card/CardWrapper";
import DepartmentForm from "../../containers/Forms/DepartmentForm";
import Header from "../../components/Header/Header";
import DepartmentOverview from "src/containers/Overviews/DepartmentOverview";
import { IDepartment } from "src/helpers/Database/DepartmentInterface";
import { GetRecords } from "../../database";

const SettingCorporate: React.FC = () => {
  const [department, setDepartment] = useState<IDepartment[]>(
    new Array<IDepartment>()
  );

  const getDepartment = () => {
    GetRecords("Department", "ayazarac").then(data => {
      console.log("department :", data);
      setDepartment(data[0]);
    });
  };
  useEffect(() => {
    getDepartment();
  }, []);
  return (
    <>
      <LeftLayout>
        {/* <SubLink base={reservationList.overview} /> */}
      </LeftLayout>
      <RightLayout>
        <Header titleFirst="test" />
        {/* <DepartmentForm /> */}
        <DepartmentOverview data={department} />
      </RightLayout>
    </>
  );
};

export default SettingCorporate;
