import React, { Component } from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import CarForm from "../../containers/Forms/CarForm";

import Header from "src/components/Header/Header";
import { HeaderCarNew } from "src/helpers/Static/Headers";

const CarNew: React.FC = () => {
  return (
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
  );
};

export default CarNew;
