import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Leftbar from "containers/Navbar/Leftbar";

const App: React.FC = () => {
  const { location } = useContext(__RouterContext);
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
            <Route path="/customer/new" component={CustomerNew} />
            <Route path="/customer/detail" component={CustomerDetail} />
            <Route exact path="/car" component={CarList} />
            <Route path="/car/new" component={CarNew} />
            <Route path="/car/detail" component={CarDetail} />
            <Route exact path="/reservation" component={ReservationList} />
            <Route path="/reservation/new" component={ReservationNew} />
            <Route path="/reservation/detail" component={ReservationDetail} />
            <Route exact path="/accounting" render={() => <h1>Muhasebe</h1>} />
            <Route path="/settings/corporate" component={SettingCorporate} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default App;
