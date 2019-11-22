import React from "react";
import { LeftLayout, RightLayout } from "components/Layouts/Layouts";
import { dashboardList } from "../../helpers/Static/Links";
import SubLink from "../../components/NavElements/Elements/SubLink";
// import DashboardCalendar from "../containers/Dashboard/DashboardCalendar";
import { CardWrapper } from "../../components/Card/CardWrapper";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  return (
    <>
      <LeftLayout>
        <SubLink base={dashboardList.overview} />
      </LeftLayout>
      <RightLayout>
        <Header />
        <CardWrapper classes="w-card bg-white w-full rounded-lg shadow-base mb-4 overflow-hidden">
          {/* <DashboardCalendar /> */}
        </CardWrapper>
      </RightLayout>
    </>
  );
};

export default Dashboard;
