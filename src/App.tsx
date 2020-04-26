import React, { useState, useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import MenuBar from "./containers/Navbar/MenuBar";
import Routes from "./Routes";

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

  // useEffect(() => {
  //   // GetRecords("Customer", "ayazarac");
  // }, []);
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
            <Routes />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

export default App;
