import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { customer } from "../../helpers/Static/System";
import { defaultForm } from "../../helpers/Static/FormFields";
import FieldOutput from "../../components/FormElements/Output/FieldOutput";
import CheckboxOutput from "../../components/FormElements/Output/CheckboxOutput";

class CustomerOverview extends Component {
  render() {
    const { data }: any = this.props;
    console.log("data :", data);
    return (
      <>
        <Card base={customer.identity}>
          <FieldOutput base={defaultForm.Name} data={data.Name} />
          <FieldOutput base={defaultForm.Surname} data={data.Surname} />
          <FieldOutput base={defaultForm.Tc} data={data.Tc} />
          <FieldOutput base={defaultForm.Gender} data={data.Gender} />
          <FieldOutput
            base={defaultForm.BirthOfDateTime}
            data={data.BirthOfDateTime}
          />
          <FieldOutput base={defaultForm.Nationality} data={data.Nationality} />
          <FieldOutput base={defaultForm.BloodGroup} data={data.BloodGroup} />
          <FieldOutput
            base={defaultForm.NameOfMother}
            data={data.NameOfMother}
          />
          <FieldOutput
            base={defaultForm.NameOfFather}
            data={data.NameOfFather}
          />
        </Card>
        <Card base={customer.contact}>
          <FieldOutput base={defaultForm.FirstPhone} data={data.FirstPhone} />
          <FieldOutput base={defaultForm.SecondPhone} data={data.SecondPhone} />
          <FieldOutput
            base={defaultForm.SecondPhoneOwner}
            data={data.SecondPhoneOwner}
          />
          <FieldOutput base={defaultForm.Email} data={data.Email} />
          <FieldOutput base={defaultForm.WorkPhone} data={data.WorkPhone} />
          <FieldOutput base={defaultForm.WorkPlace} data={data.WorkPlace} />
          <FieldOutput base={defaultForm.Profession} data={data.Profession} />
          <FieldOutput base={defaultForm.CountryCode} data={data.CountryCode} />
          <FieldOutput base={defaultForm.CityId} data={data.CityId} />
          <FieldOutput base={defaultForm.CountyId} data={data.CountyId} />
          <FieldOutput base={defaultForm.Address} data={data.Address} />
        </Card>
        <Card base={customer.driveLicense}>
          <FieldOutput
            base={defaultForm.DrivingClasses}
            data={data.DrivingClasses}
          />
          <FieldOutput
            base={defaultForm.SerialNumberOfDrivingLicense}
            data={data.SerialNumberOfDrivingLicense}
          />
          <FieldOutput base={defaultForm.LicenseYear} data={data.LicenseYear} />
        </Card>
      </>
    );
  }
}
export default CustomerOverview;
