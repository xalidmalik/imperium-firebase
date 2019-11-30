import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import { CardWrapper } from "../../components/Card/CardWrapper";
import { History } from "../../helpers/Static/History";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { reservationDetail } from "../../helpers/Static/Links";
import ReservationForm from "../../containers/Forms/ReservationForm";
import ReservationOverview from "../../containers/Overviews/ReservationOverview";
import moment from "moment";
import Header from "../../components/Header/Header";
import {
  HeaderReservationOverview,
  HeaderReservationEdit
} from "src/helpers/Static/Headers";
// import { format } from "date-fns";
import SecureStore from "secure-ls";

export const ReservationDetail: React.FC = () => {
  const [reservation, setReservation] = useState<any>();
  const sc = new SecureStore();

  useEffect(() => {
    const activeReservation = sc.get("SelectedReservation");
    if (activeReservation) {
      setReservation(activeReservation);
    }
  }, []);
  if (!reservation) return null;

  //   componentWillMount() {
  //     const activeReservation = JSON.parse(
  //       localStorage.getItem("SelectedReservation")
  //     );

  //     if (activeReservation) {
  //       console.log("istedigim :", activeReservation);

  //       let model = {
  //         BeginDateTime: new Date(activeReservation.ReservationStartDateTime),
  //         EndDateTime: new Date(activeReservation.ReservationEndDateTime),
  //         ReservationStatus: activeReservation.ReservationState,
  //         CustomerId: activeReservation.CustomerId,
  //         Price: activeReservation.ReservationPrice,
  //         KmStart: activeReservation.ReservationKmStart,
  //         KmEnd: activeReservation.ReservationKmEnd,
  //         CarId: activeReservation.CarId,
  //         PaymentType: activeReservation.ReservationPaymentType,
  //         FuelCount: activeReservation.ReservationFuelCount,
  //         Deposit: activeReservation.ReservationDeposit,
  //         AmountPaid: activeReservation.AmountPaid,
  //         IsApproval: true,
  //         AdditionalCustomerId: activeReservation.AdditionalCustomerId
  //       };

  //       // activeReservation.BeginDateTime = format(
  //       //   activeReservation.BeginDateTime,
  //       //   "DD MMM, YYYY HH:mm:ss"
  //       // );
  //       this.setState({ reservation: model });
  //     }
  //   }

  return (
    <>
      <LeftLayout>
        <SubLink base={reservationDetail.overview} />
        <SubLink base={reservationDetail.edit} />
      </LeftLayout>

      <RightLayout>
        <Switch>
          <Route
            exact
            path="/reservation/detail"
            render={() => (
              <>
                <Header
                  titleFirst={HeaderReservationOverview.titleFirst}
                  linkFirst={HeaderReservationOverview.linkFirst}
                  // titleSecond={`${customers.Name} ${customers.Surname}`}
                />
                <ReservationOverview data={reservation} />
              </>
            )}
          />
          <Route
            exact
            path="/reservation/detail/edit"
            render={() => (
              <>
                <Header
                  titleFirst={HeaderReservationEdit.titleFirst}
                  linkFirst={HeaderReservationEdit.linkFirst}
                  titleSecond={`${reservation.CustomerId.Name} ${reservation.CustomerId.Surname}`}
                  linkSecond={HeaderReservationEdit.linkSecond}
                  titleThird={HeaderReservationEdit.titleThird}
                  btnForm={HeaderReservationEdit.btnForm}
                  btnTitle={HeaderReservationEdit.btnTitle}
                />
                <ReservationForm activeReservation={reservation} />
              </>
            )}
          />
        </Switch>
      </RightLayout>
    </>
  );
};

export default ReservationDetail;
