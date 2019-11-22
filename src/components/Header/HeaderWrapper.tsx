import React from "react";
import { CardWrapper } from "../../components/Card/CardWrapper";

const HeaderWrapper = (props: any) => {
  return (
    <CardWrapper>
      <div className="px-4 h-16 w-full flex items-center">{props.children}</div>
    </CardWrapper>
  );
};

export default HeaderWrapper;
