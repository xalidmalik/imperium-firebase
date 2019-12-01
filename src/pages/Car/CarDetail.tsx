import React, { useEffect, useState } from "react";
import CarOverview from "../../containers/Overviews/CarOverview";
import { Route, Switch } from "react-router-dom";
import { RightLayout } from "../../components/Layouts/Layouts";
import CarForm from "../../containers/Forms/CarForm";
import Header from "../../components/Header/Header";
import SecureStore from "secure-ls";
import { HeaderCarOverview, HeaderCarEdit } from "src/helpers/Static/Headers";

const CarDetail: React.FC = () => {
  const [car, setCar] = useState<any>();
  const sc = new SecureStore();

  useEffect(() => {
    const activeCar = sc.get("SelectedCar");
    if (activeCar) {
      setCar(activeCar);
    }
  }, []);
  if (!car) return null;
  return (
    <RightLayout>
      <Switch>
        <Route
          exact
          path="/car/detail"
          render={() => (
            <>
              <Header
                titleFirst={HeaderCarOverview.titleFirst}
                linkFirst={HeaderCarOverview.linkFirst}
                titleSecond={`${car.BrandName} ${car.ModelName}`}
              />
              <CarOverview data={car} />
            </>
          )}
        />
        <Route
          exact
          path="/car/detail/edit"
          render={() => (
            <>
              <Header
                titleFirst={HeaderCarEdit.titleFirst}
                linkFirst={HeaderCarEdit.linkFirst}
                titleSecond={`${car.BrandName} ${car.ModelName}`}
                linkSecond={HeaderCarEdit.linkSecond}
                titleThird={HeaderCarEdit.titleThird}
                btnForm={HeaderCarEdit.btnForm}
                btnTitle={HeaderCarEdit.btnTitle}
              />
              <CarForm activeCar={car} />
            </>
          )}
        />
      </Switch>
    </RightLayout>
  );
};

export default CarDetail;
