import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { customer } from "../../helpers/Static/System";
import { defaultForm } from "../../helpers/Static/FormFields";
import FieldOutput from "../../components/FormElements/Output/FieldOutput";
// import CheckboxOutput from "../../components/FormElements/Outputs/CheckboxOutput";

const ContractOverview: React.FC<any> = (props: any) => {
  const { data }: any = props;
  console.log("reservation overview", data);
  return (
    <>
      <Card base={customer.identity}>
        <FieldOutput base={defaultForm.Name} data={data.Customer.Name} />
        <FieldOutput base={defaultForm.Surname} data={data.Customer.Surname} />
        <FieldOutput
          base={defaultForm.TCNumber}
          data={data.Customer.TCNumber}
        />
        <FieldOutput base={defaultForm.Gender} data={data.Customer.Gender} />
        <FieldOutput
          base={defaultForm.BirthDate}
          data={data.Customer.BirthDate}
        />
        <FieldOutput
          base={defaultForm.BirthPlace}
          data={data.Customer.BirthPlace}
        />
        <FieldOutput
          base={defaultForm.BloodGroup}
          data={data.Customer.BloodGroup}
        />
        <FieldOutput
          base={defaultForm.MotherName}
          data={data.Customer.MotherName}
        />
        <FieldOutput
          base={defaultForm.FatherName}
          data={data.Customer.FatherName}
        />
      </Card>
      <Card base={customer.contact}>
        <FieldOutput
          base={defaultForm.FirstPhone}
          data={data.Customer.FirstPhone}
        />
        <FieldOutput
          base={defaultForm.EmergencyPhone}
          data={data.Customer.EmergencyPhone}
        />
        <FieldOutput
          base={defaultForm.EmergencyPhoneOwner}
          data={data.Customer.EmergencyPhoneOwner}
        />
        <FieldOutput base={defaultForm.Email} data={data.Customer.Email} />
        <FieldOutput
          base={defaultForm.WorkPhone}
          data={data.Customer.WorkPhone}
        />
        <FieldOutput
          base={defaultForm.WorkPlace}
          data={data.Customer.WorkPlace}
        />
        <FieldOutput
          base={defaultForm.Profession}
          data={data.Customer.Profession}
        />
        <FieldOutput base={defaultForm.Country} data={data.Customer.Country} />
        <FieldOutput base={defaultForm.City} data={data.Customer.City} />
        <FieldOutput base={defaultForm.County} data={data.Customer.County} />
        <FieldOutput base={defaultForm.Address} data={data.Customer.Address} />
      </Card>
    </>
  );
};

export default ContractOverview;
