import React from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import ReservationForm from "../../containers/Forms/ReservationForm";
import Header from "../../components/Header/Header";

import CustomerForm from "../../containers/Forms/CustomerForm";
import RightModal from "../../components/Modal/RightModal";
import { HeaderReservationNew } from "src/helpers/Static/Headers";

const ReservationNew: React.FC = () => {
  return (
    <>
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
};

export default ReservationNew;
