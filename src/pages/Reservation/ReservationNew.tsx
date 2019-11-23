import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
// import ReservationForm from "../../containers/Forms/ReservationForm";
import Header from "../../components/Header/Header";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { reservationList } from "../../helpers/Static/Links";
import CustomerForm from "../../containers/Forms/CustomerForm";
import RightModal from "../../components/Modal/RightModal";

export class ReservationNew extends Component {
  modalHandler = () => {};
  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={reservationList.overview} />
        </LeftLayout>
        <RightLayout>
          <Header titleFirst="test" />
          {/* <ReservationForm /> */}
        </RightLayout>
        {/* <RightModal>
          <HeaderCustomerNew />
          <CustomerForm />
        </RightModal> */}
      </>
    );
  }
}

export default ReservationNew;
