import React, { Component } from "react";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import CarForm from "../../containers/Forms/CarForm";
import { carList } from "../../helpers/Static/Links";
import SubLink from "../../components/NavElements/Elements/SubLink";
import Header from "src/components/Header/Header";
import { HeaderCarNew } from "src/helpers/Static/Headers";

class CarNew extends Component {
  render() {
    return (
      <>
        <LeftLayout>
          <SubLink base={carList.overview} />
        </LeftLayout>
        <RightLayout>
          <Header
            titleFirst={HeaderCarNew.titleFirst}
            linkFirst={HeaderCarNew.linkFirst}
            titleSecond={HeaderCarNew.titleSecond}
            btnForm={HeaderCarNew.btnForm}
            btnTitle={HeaderCarNew.btnTitle}
          />
          <CarForm />
        </RightLayout>
      </>
    );
  }
}

export default CarNew;
