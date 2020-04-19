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
import { GetRecords } from "./database";
import SettingCorporate from "./pages/Settings/SettingCorporate";
import MenuBar from "./containers/Navbar/MenuBar";
import AccountingBoard from "./pages/Accounting/AccountingBoard";
import AccountingNew from "./pages/Accounting/AccountingNew";
import SettingBoard from "./pages/Settings/SettingBoard";

const App: React.FC = () => {
  const [linkIndex, SetlinkIndex] = useState(false);
  const [up, SetUp] = useState(1);
  let context = useHistory<any>();
  const { location } = context;
  const transition = useTransition(location, (location) => location.pathname, {
    from: {
      transform: "translate3d(0,20%,0)",
      opacity: 0.8,
    },
    enter: {
      transform: "translate3d(0,0%,0)",
      opacity: 1,
    },
    leave: {
      transform: "translate3d(0,0%,0)",
      opacity: 0,
    },
    config: { mass: 1, tension: 300, friction: 40 },
  });

  useEffect(() => {
    GetRecords("Customer", "ayazarac");
  }, []);
  // TODO yapla
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
            <Route exact path="/settings" component={SettingBoard} />
            <Route path="/customer/new" component={CustomerNew} />
            <Route path="/car/new" component={CarNew} />
            <Route path="/reservation/new" component={ReservationNew} />
            <Route path="/accounting/new" component={AccountingNew} />
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
