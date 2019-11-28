import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { department } from "../../helpers/Static/System";
import { departmentForm } from "../../helpers/Static/FormFields";
import FieldOutput from "../../components/FormElements/Output/FieldOutput";
import CheckboxOutput from "../../components/FormElements/Output/CheckboxOutput";
import { ICar } from "../../helpers/Database/CarInterfaces";

const DepartmentOverview: React.FC<any> = (props: any) => {
  const { data } = props;
  return (
    console.log(data),
    (
      <>
        <Card base={department.corporateinfo}>
          {/* <FieldOutput base={departmentForm.VisualId} data={data.VisualId} /> */}
          <FieldOutput
            base={departmentForm.OfficialEmail}
            data={data.OfficialEmail}
          />
          <FieldOutput
            base={departmentForm.PublicSiteUrl}
            data={data.PublicSiteUrl}
          />
        </Card>
        <Card base={department.departmentinfo}>
          <FieldOutput base={departmentForm.Code} data={data.Code} />
          <FieldOutput base={departmentForm.TaxNumber} data={data.TaxNumber} />
          <FieldOutput
            base={departmentForm.TaxAdministration}
            data={data.TaxAdministration}
          />
          <FieldOutput
            base={departmentForm.DisplayName}
            data={data.DisplayName}
          />
          <FieldOutput base={departmentForm.Name} data={data.Name} />
        </Card>
        <Card base={department.contactinfo}>
          <FieldOutput base={departmentForm.Address} data={data.Address} />
          <FieldOutput base={departmentForm.Email} data={data.Email} />
          <FieldOutput base={departmentForm.Phone} data={data.Phone} />
          <FieldOutput base={departmentForm.FaxNo} data={data.FaxNo} />
        </Card>
        <Card base={department.socialmedia}>
          <FieldOutput
            base={departmentForm.InstagramUrl}
            data={data.InstagramUrl}
          />
          <FieldOutput
            base={departmentForm.FacebookUrl}
            data={data.FacebookUrl}
          />
        </Card>
      </>
    )
  );
};

export default DepartmentOverview;
