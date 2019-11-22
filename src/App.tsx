import React, { useContext, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Leftbar from "./containers/Navbar/Leftbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import CustomerList from "./pages/Customer/CustomerList";
import { GetRecords, IncrenmentRowVersion } from "./database";

const App: React.FC = () => {
  let context = useHistory<any>();
  const { location } = context;
  const transition = useTransition(location, location => location.pathname, {
    from: {
      opacity: 1,
      transform: "translate3d(-20%,0,0)"
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)"
    },
    leave: {
      opacity: 1,
      transform: "translate3d(-20%,0,0)"
    },
    config: { mass: 1, tension: 300, friction: 40 }
  });

  useEffect(() => {
    // IncrenmentRowVersion("RowVersion", "Car", "ayazarac");
    GetRecords("Car", "ayazarac").then(va =>
      console.log("Benim geriye donen degerim: ", va)
    );
  }, []);

  return (
    <>
      <Leftbar />
      {transition.map(({ key, item, props }) => (
        <animated.div
          key={key}
          style={props}
          className="fixed w-layout bg-gray-200 ml-20 flex h-full"
        >
          <Switch location={item}>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/customer" component={CustomerList} />
            {/* <Route path="/customer/new" component={CustomerNew} />
            <Route path="/customer/detail" component={CustomerDetail} />
            <Route exact path="/car" component={CarList} />
            <Route path="/car/new" component={CarNew} />
            <Route path="/car/detail" component={CarDetail} />
            <Route exact path="/reservation" component={ReservationList} />
            <Route path="/reservation/new" component={ReservationNew} />
            <Route path="/reservation/detail" component={ReservationDetail} /> */}
            <Route
              exact
              path="/reservation/new"
              render={() => <h1>Muhasebe</h1>}
            />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default App;
