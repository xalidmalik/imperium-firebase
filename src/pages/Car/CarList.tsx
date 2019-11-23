import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CarTable from "../../containers/Table/CarTable";
import { carListHeader } from "../../helpers/Static/ListHeader";
import { carList } from "../../helpers/Static/Links";
import SubLink from "../../components/NavElements/Elements/SubLink";

class CarList extends Component {
  componentDidMount() {
    localStorage.removeItem("SelectedCar");
  }

  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={carList.overview} />
        </LeftLayout>
        <RightLayout>
          <CarTable />
        </RightLayout>
      </>
    );
  }
}

export default CarList;
