import React, { useContext, useEffect } from "react";
import MainLink from "../../components/NavElements/Elements/MainLink";
import SubLink from "../../components/NavElements/Elements/SubLink";
import {
  mainLink,
  customerDetail,
  carDetail,
  reservationDetail
} from "../../helpers/Static/Links";
import { Route, Switch, useHistory } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { LeftLayout } from "src/components/Layouts/Layouts";

const MenuBar = () => {
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

  const DefaultLink = () => {
    return (
      <>
        <MainLink base={mainLink.dashboard} />
        <MainLink base={mainLink.customer} />
        <MainLink base={mainLink.car} />
        <MainLink base={mainLink.reservation} />
        <MainLink base={mainLink.accounting} />
        <MainLink base={mainLink.settings} />
      </>
    );
  };
  return (
    <LeftLayout>
      <Switch>
        <Route exact path="/" component={DefaultLink} />

        <Route exact path="/customer" component={DefaultLink} />
        <Route exact path="/car" component={DefaultLink} />
        <Route exact path="/reservation" component={DefaultLink} />
        <Route exact path="/accounting" component={DefaultLink} />
        <Route path="/settings/corporate" component={DefaultLink} />
        <Route
          path="/customer/detail"
          render={() => (
            <>
              <MainLink base={mainLink.customer} classes="border-orange-400" />
              <SubLink base={customerDetail.overview} />
              <SubLink base={customerDetail.edit} />
            </>
          )}
        />

        <Route
          path="/car/detail"
          render={() => (
            <>
              <MainLink base={mainLink.car} />
              <SubLink base={carDetail.overview} />
              <SubLink base={carDetail.edit} />
            </>
          )}
        />
        <Route
          path="/reservation/detail"
          render={() => (
            <>
              <MainLink base={mainLink.reservation} />
              <SubLink base={reservationDetail.overview} />
              <SubLink base={reservationDetail.edit} />
            </>
          )}
        />
        <Route path="/customer/new" />
        <Route path="/car/new" />
        <Route path="/reservation/new" />
      </Switch>
    </LeftLayout>

    // <header className="w-20 h-full bg-gray-900 text-red-100 fixed top-0 left-0 z-40 shadow-header ">
    //   <nav className="flex-col flex justify-between h-full">
    //     <div className="w-20 h-20 flex bg-gray-900">
    //       <h1 className="flex leading-none m-auto">Account</h1>
    //     </div>
    //     <div>
    //       {transition.map(({ key, item, props }) => (
    //         <animated.div key={key} style={props}>
    //           <Switch location={item}>
    //             <Route exact path="/" render={() => <h1>D</h1>} />
    //             <Route exact path="/customer" render={() => <h1>C</h1>} />
    //             <Route exact path="/car" render={() => <h1>Car</h1>} />
    //           </Switch>
    //         </animated.div>
    //       ))}
    //
    //     </div>
    //     <div>
    //       <MainLink base={mainLink.settings} />
    //       <div
    //         onClick={() => {
    //           localStorage.removeItem("token");
    //           window.location.reload();
    //         }}
    //         className="w-20 h-20 flex bg-gray-900 hover:bg-red-500 cursor-pointer"
    //       >
    //         <h1 className="flex leading-none m-auto">Çıkış</h1>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default MenuBar;
