import React from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import DashboardCalendar from "../../containers/Dashboard/Calendar";
import { CardWrapper } from "../../components/Card/CardWrapper";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  return (
    <RightLayout>
      <Header
        titleFirst="Kontrol Paneli"
        btnLink="/reservation/new"
        btnTitle="Rezervasyon Yap"
      />
      <CardWrapper classes="w-card bg-white w-full rounded-lg shadow-base mb-4 overflow-hidden">
        <DashboardCalendar />
      </CardWrapper>
    </RightLayout>
  );
};

export default Dashboard;
