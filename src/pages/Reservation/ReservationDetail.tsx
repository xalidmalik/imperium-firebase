import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { RightLayout } from "../../components/Layouts/Layouts";

import ReservationForm from "../../containers/Forms/ReservationForm";
import ReservationOverview from "../../containers/Overviews/ReservationOverview";
import Header from "../../components/Header/Header";
import {
  HeaderReservationOverview,
  HeaderReservationEdit
} from "src/helpers/Static/Headers";
// import { format } from "date-fns";
import SecureStore from "secure-ls";
import moment from "moment";
import PrintComponents from "react-print-components";
import ContractOverview from "src/containers/Overviews/ContractOverview";

export const ReservationDetail: React.FC = () => {
  const [reservation, setReservation] = useState<any>();
  const sc = new SecureStore();

  useEffect(() => {
    const activeReservation = sc.get("SelectedReservation");
    if (activeReservation) {
      activeReservation.BeginDateTime = new Date(
        moment(activeReservation.BeginDateTime).toDate()
      );
      activeReservation.EndDateTime = new Date(
        moment(activeReservation.EndDateTime).toDate()
      );
      setReservation(activeReservation);
    }
  }, []);
  if (!reservation) return null;

  return (
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
                titleSecond={`${reservation.Customer.Name} ${reservation.Customer.Surname}`}
                btnCustom={
                  <PrintComponents
                    trigger={
                      <button className="btn-style-1 ml-auto ">Yazdir</button>
                    }
                  >
                    <ContractOverview data={reservation} />
                  </PrintComponents>
                }
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
                titleSecond={`${reservation.Customer.Name} ${reservation.Customer.Surname}`}
                linkSecond={HeaderReservationEdit.linkSecond}
                titleThird={HeaderReservationEdit.titleThird}
                btnForm={HeaderReservationEdit.btnForm}
                btnTitle={HeaderReservationEdit.btnTitle}
              />
              <ReservationForm activeReservation={reservation} />
            </>
          )}
        />
        <Route
          exact
          path="/reservation/detail/contract"
          render={() => (
            <>
              <ContractOverview data={reservation} />
            </>
          )}
        />
      </Switch>
    </RightLayout>
  );
};

export default ReservationDetail;
