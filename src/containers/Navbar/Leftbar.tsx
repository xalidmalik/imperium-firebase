import React, { useContext, useEffect } from "react";
import MainLink from "../../components/NavElements/Elements/MainLink";
import { mainLink } from "../../helpers/Static/Links";
import { Route, Switch, useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";

const Leftbar = () => {
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
  return (
    <header className="w-20 h-full bg-gray-900 text-red-100 fixed top-0 left-0 z-40 shadow-header ">
      <nav className="flex-col flex justify-between h-full">
        <div className="w-20 h-20 flex bg-gray-900">
          <h1 className="flex leading-none m-auto">Account</h1>
        </div>
        <div>
          {transition.map(({ key, item, props }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <Route exact path="/" render={() => <h1>D</h1>} />
                <Route exact path="/customer" render={() => <h1>C</h1>} />
                <Route exact path="/car" render={() => <h1>Car</h1>} />
              </Switch>
            </animated.div>
          ))}
          <MainLink base={mainLink.dashboard} />
          <MainLink base={mainLink.customer} />
          <MainLink base={mainLink.car} />
          <MainLink base={mainLink.reservation} />
          <MainLink base={mainLink.accounting} />
        </div>
        <div>
          <MainLink base={mainLink.settings} />
          <div
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
            className="w-20 h-20 flex bg-gray-900 hover:bg-red-500 cursor-pointer"
          >
            <h1 className="flex leading-none m-auto">Çıkış</h1>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Leftbar;
