import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import ReservationTable from "../../containers/Table/ReservationTable";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { reservationList } from "../../helpers/Static/Links";

class ReservationList extends Component {
  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={reservationList.overview} />
        </LeftLayout>
        <RightLayout>
          <ReservationTable />
        </RightLayout>
      </>
    );
  }
}

export default ReservationList;
