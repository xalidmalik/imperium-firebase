import React from "react";
import { Route } from "react-router-dom";
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
import SettingCorporate from "./pages/Settings/SettingCorporate";
import AccountingBoard from "./pages/Accounting/AccountingBoard";
import AccountingNew from "./pages/Accounting/AccountingNew";
import SettingBoard from "./pages/Settings/SettingBoard";


const Routes = () => {
    return (
        <>
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
        </>
    )
};

export default Routes;
