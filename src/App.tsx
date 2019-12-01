import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Dashboard from "./pages/Dashboard/Dashboard";
import CustomerNew from "./pages/Customer/CustomerNew";
import CustomerBoard from "./pages/Customer/CustomerBoard";
import CustomerDetail from "./pages/Customer/CustomerDetail";
import CarBoard from "./pages/Car/CarBoard";
import CarNew from "./pages/Car/CarNew";
import CarDetail from "./pages/Car/CarDetail";
import ReservationBoard from "./pages/Reservation/ReservationBoard";
import ReservationNew from "./pages/Reservation/ReservationNew";
import ReservationDetail from "./pages/Reservation/ReservationDetail";
import { GetRecords, IncrenmentRowVersion } from "./database";
import SettingCorporate from "./pages/Settings/SettingCorporate";
import MenuBar from "./containers/Navbar/MenuBar";
import AccountingBoard from "./pages/Accounting/AccountingBoard";

const App: React.FC = () => {
  const [linkIndex, SetLinkIndex] = useState(0);
  let context = useHistory<any>();
  const { location } = context;
  const transition = useTransition(location, location => location.pathname, {
    from: {
      opacity: 1,
      transform: "translate3d(0,-100%,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0%,0)"
    },
    leave: {
      opacity: 1,
      transform: "translate3d(0,100%,0)"
    },
    config: { mass: 1, tension: 300, friction: 40 }
  });

  useEffect(() => {
    // IncrenmentRowVersion("RowVersion", "Car", "ayazarac");
    GetRecords("Customer", "ayazarac").then(va =>
      console.log("Benim geriye donen degerim: ", va)
    );
  }, []);

  // useEffect(() => {
  //   console.log("dene", AniChange());
  //   const ada = AniChange();
  // });

  // const AniChange = () => {
  //   if (location.state == undefined) {
  //     console.log("ilk");
  //   } else if (location.state.index && location.state.index > linkIndex) {
  //     return {
  //       from: {
  //         opacity: 1,
  //         transform: "translate3d(0,-100%,0)"
  //       },
  //       enter: {
  //         opacity: 1,
  //         transform: "translate3d(0,0%,0)"
  //       },
  //       leave: {
  //         opacity: 1,
  //         transform: "translate3d(0,100%,0)"
  //       },
  //       config: { mass: 1, tension: 300, friction: 40 }
  //     };
  //   } else if (location.state.index && location.state.index < linkIndex) {
  //     return {
  //       from: {
  //         opacity: 1,
  //         transform: "translate3d(0,200%,0)"
  //       },
  //       enter: {
  //         opacity: 1,
  //         transform: "translate3d(0,0%,0)"
  //       },
  //       leave: {
  //         opacity: 1,
  //         transform: "translate3d(0,-200%,0)"
  //       },
  //       config: { mass: 1, tension: 300, friction: 40 }
  //     };
  //     SetLinkIndex(location.state.index);
  //   }
  // };

  return (
    <>
      <MenuBar />
      {transition.map(({ key, item, props }) => (
        <animated.div
          key={key}
          style={props}
          className="fixed w-layout bg-gray-200 ml-72 flex h-full"
        >
          <Switch location={item}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/customer" component={CustomerBoard} />
            <Route exact path="/car" component={CarBoard} />
            <Route exact path="/reservation" component={ReservationBoard} />
            <Route exact path="/accounting" component={AccountingBoard} />
            <Route path="/customer/new" component={CustomerNew} />
            <Route path="/car/new" component={CarNew} />
            <Route path="/reservation/new" component={ReservationNew} />
            <Route path="/customer/detail" component={CustomerDetail} />
            <Route path="/car/detail" component={CarDetail} />
            <Route path="/reservation/detail" component={ReservationDetail} />
            <Route path="/settings/corporate" component={SettingCorporate} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default App;
