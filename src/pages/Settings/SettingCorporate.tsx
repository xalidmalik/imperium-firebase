import React, { useEffect, useState } from "react";
import { RightLayout } from "../../components/Layouts/Layouts";

import Header from "../../components/Header/Header";
import DepartmentOverview from "src/containers/Overviews/DepartmentOverview";
import { IDepartment } from "src/helpers/Database/DepartmentInterface";
import { GetDepartment } from "src/firebase/database/Department";

const SettingCorporate: React.FC = () => {
  const [department, setDepartment] = useState<IDepartment[]>(
    new Array<IDepartment>()
  );

  const getDepartment = () => {
    GetDepartment("ayazarac").then((data: any) => {
      console.log("department :", data);
      setDepartment(data[0]);
    });
  };
  useEffect(() => {
    getDepartment();
  }, []);
  return (
    <RightLayout>
      <Header titleFirst="test" />
      {/* <DepartmentForm /> */}
      <DepartmentOverview data={department} />
    </RightLayout>
  );
};

export default SettingCorporate;
