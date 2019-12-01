import React from "react";
import { CardWrapper } from "./CardWrapper";
import { ICard } from "src/helpers/Types/FormValidation";

const CardInfo: React.FC<any> = (props: any) => {
  return (
    <CardWrapper
      classes={`bg-white rounded-lg shadow-base mb-4 p-4 overflow-hidden ${props.classes}`}
    >
      <p className="text-base">{props.title}</p>
      <h2 className="text-2xl font-bold">{props.desc}</h2>
      {/* <div className="w-3/5 bg-gray-100 rounded-r-lg p-8 text-left">
        {props.children}
      </div> */}
    </CardWrapper>
  );
};

export default CardInfo;
