import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CarForm from "../../containers/Forms/CarForm";
import { carList } from "../../helpers/Static/Links";
import SubLink from "../../components/NavElements/Elements/SubLink";

class CarNew extends Component {
  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={carList.overview} />
        </LeftLayout>
        <RightLayout>
          <CarForm />
        </RightLayout>
      </>
    );
  }
}

export default CarNew;
