import React, { Component } from "react";
// import CarOverview from "../../containers/Details/CarOverview";
import { Route, Switch } from "react-router-dom";
import { LeftLayout, RightLayout } from "../../components/Layouts/Layouts";
import SubLink from "../../components/NavElements/Elements/SubLink";
import { carDetail } from "../../helpers/Static/Links";
// import CarForm from "../../containers/Forms/CarForm";
import moment from "moment";
import Header from "../../components/Header/Header";

export class CarDetail extends Component {
  state = {
    car: []
  };
  //   componentWillMount() {
  //     const activeCar = JSON.parse(localStorage.getItem("SelectedCar"));
  //     if (activeCar) {
  //       console.log("active car :", activeCar);
  //       activeCar.FuelType = activeCar.FuelType.toString();
  //       activeCar.GearType = activeCar.GearType.toString();
  //       activeCar.Classes = activeCar.Classes.toString();
  //       this.setState({ car: activeCar });
  //     }
  //   }
  render() {
    const { car } = this.state;
    return (
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
                  <Header titleFirst="demo" />
                  {/* <CarOverview data={car} /> */}
                </>
              )}
            />
            <Route
              exact
              path="/car/detail/edit"
              render={() => (
                <>
                  <Header titleFirst="demo" />
                  {/* <CarForm activeCar={car} /> */}
                </>
              )}
            />
          </Switch>
        </RightLayout>
      </>
    );
  }
}

export default CarDetail;
