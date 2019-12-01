import React from "react";
import { RightLayout } from "../../components/Layouts/Layouts";
import { CardWrapper } from "../../components/Card/CardWrapper";
import Header from "../../components/Header/Header";
import { HeaderSettingBoard } from "src/helpers/Static/Headers";

const SettingBoard: React.FC = () => {
  return (
    <RightLayout>
      <Header titleFirst={HeaderSettingBoard.titleFirst} />
      <CardWrapper classes="w-card bg-white w-full rounded-lg shadow-base mb-4 overflow-hidden"></CardWrapper>
    </RightLayout>
  );
};

export default SettingBoard;
