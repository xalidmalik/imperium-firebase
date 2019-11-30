import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import ReservationForm from "../../containers/Forms/ReservationForm";
import Header from "../../components/Header/Header";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { reservationList } from "../../helpers/Static/Links";
import CustomerForm from "../../containers/Forms/CustomerForm";
import RightModal from "../../components/Modal/RightModal";
import { HeaderReservationNew } from "src/helpers/Static/Headers";

export class ReservationNew extends Component {
  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={reservationList.overview} />
        </LeftLayout>
        <RightLayout>
          <Header
            titleFirst={HeaderReservationNew.titleFirst}
            linkFirst={HeaderReservationNew.linkFirst}
            titleSecond={HeaderReservationNew.titleSecond}
            btnForm={HeaderReservationNew.btnForm}
            btnTitle={HeaderReservationNew.btnTitle}
          />
          <ReservationForm />
        </RightLayout>
        <RightModal>
          <CustomerForm />
        </RightModal>
      </>
    );
  }
}

export default ReservationNew;
