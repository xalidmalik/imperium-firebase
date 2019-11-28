import React, { useEffect, useState } from "react";
import CarOverview from "../../containers/Overviews/CarOverview";
import { Route, Switch } from "react-router-dom";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { carDetail } from "../../helpers/Static/Links";
import CarForm from "../../containers/Forms/CarForm";
import moment from "moment";
import Header from "../../components/Header/Header";
import { ICar } from "../../helpers/Database/CarInterfaces";
import SecureStore from "secure-ls";
import { HeaderCarOverview } from "src/helpers/Static/Headers";

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
    console.log("data mata", car),
    (
      <>
        <LeftLayout>
          <SubLink base={carDetail.overview} />
          <SubLink base={carDetail.edit} />
        </LeftLayout>

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
                  <Header titleFirst="demo" />
                  <CarForm activeCar={car} />
                </>
              )}
            />
          </Switch>
        </RightLayout>
      </>
    )
  );
};

export default CarDetail;
