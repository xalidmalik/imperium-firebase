import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { customer } from "../../helpers/Static/System";
import { defaultForm } from "../../helpers/Static/FormFields";
// import FieldOutput from "../../components/FormElements/Outputs/FieldOutput";
// import CheckboxOutput from "../../components/FormElements/Outputs/CheckboxOutput";

class ReservationOverview extends Component {
  render() {
    const { data }: any = this.props;
    console.log("dawd", data);
    return (
      <>
        <Card base={customer.identity}>
          {/* <FieldOutput base={defaultForm.Name} data={data.Name} /> */}
          {/* <FieldOutput base={defaultForm.Surname} data={data.Surname} />
          <FieldOutput base={defaultForm.Tc} data={data.Tc} />
          <FieldOutput
            base={defaultForm.Gender}
            data={StringGenderType(data.Gender)}
          />
          <FieldOutput base={defaultForm.BirthDate} data={data.BirthDate} />
        </Card>
        <Card base={customer.contact}>
          <FieldOutput base={defaultForm.MobilePhone} data={data.MobilePhone} />
          <FieldOutput base={defaultForm.Email} data={data.EMail} />

          <CheckboxOutput
            base={defaultForm.CanSendSms}
            data={data.CanSendSms}
          /> */}
        </Card>
      </>
    );
  }
}
export default ReservationOverview;
