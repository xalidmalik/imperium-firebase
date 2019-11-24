import React from "react";
import Card from "../../components/Card/Card";
import { customer } from "../../helpers/Static/System";
import { defaultForm } from "../../helpers/Static/FormFields";
import FieldOutput from "../../components/FormElements/Output/FieldOutput";

const CustomerOverview: React.FC<any> = (cstmr: any) => {
  const { data }: any = cstmr;

  return (
    <>
      <Card base={customer.identity}>
        <FieldOutput base={defaultForm.Name} data={data.Name} />
        <FieldOutput base={defaultForm.Surname} data={data.Surname} />
        <FieldOutput base={defaultForm.TCNumber} data={data.TCNumber} />
        <FieldOutput base={defaultForm.Gender} data={data.Gender} />
        <FieldOutput base={defaultForm.BirthDate} data={data.BirthDate} />
        <FieldOutput base={defaultForm.BirthPlace} data={data.BirthPlace} />
        <FieldOutput base={defaultForm.BloodGroup} data={data.BloodGroup} />
        <FieldOutput base={defaultForm.MotherName} data={data.MotherName} />
        <FieldOutput base={defaultForm.FatherName} data={data.FatherName} />
      </Card>
      <Card base={customer.contact}>
        <FieldOutput base={defaultForm.FirstPhone} data={data.FirstPhone} />
        <FieldOutput
          base={defaultForm.EmergencyPhone}
          data={data.EmergencyPhone}
        />
        <FieldOutput
          base={defaultForm.EmergencyPhoneOwner}
          data={data.EmergencyPhoneOwner}
        />
        <FieldOutput base={defaultForm.Email} data={data.Email} />
        <FieldOutput base={defaultForm.WorkPhone} data={data.WorkPhone} />
        <FieldOutput base={defaultForm.WorkPlace} data={data.WorkPlace} />
        <FieldOutput base={defaultForm.Profession} data={data.Profession} />
        <FieldOutput base={defaultForm.Country} data={data.Country} />
        <FieldOutput base={defaultForm.City} data={data.City} />
        <FieldOutput base={defaultForm.County} data={data.County} />
        <FieldOutput base={defaultForm.Address} data={data.Address} />
      </Card>
      <Card base={customer.driveLicense}>
        <FieldOutput
          base={defaultForm.DrivingClasses}
          data={data.DrivingClasses}
        />
        <FieldOutput
          base={defaultForm.DrivingLicenseNumber}
          data={data.DrivingLicenseNumber}
        />
        <FieldOutput
          base={defaultForm.DrivingLicenseYear}
          data={data.DrivingLicenseYear}
        />
      </Card>
    </>
  );
};
export default CustomerOverview;
