import React from "react";
import { CardWrapper } from "./CardWrapper";
import { ICard } from "src/helpers/Types/FormValidation";

const CardInfo: React.FC<any> = (props: any) => {
  return (
    <CardWrapper
      classes={`bg-white rounded-lg flex shadow-base h-36 mb-4 overflow-hidden ${props.classes}`}
    >
      <div className="w-2/5 rounded-l-lg p-8 text-left">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <p className="text-base">{props.date}</p>
      </div>
      <div
        className={`w-3/5 bg-${props.color} rounded-r-lg p-8 text-left flex`}
      >
        <div className="items-center m-auto">
          <h2 className=" text-5xl font-bold leading-none">
            {props.desc} <span>&#8378;</span>
          </h2>
        </div>
      </div>
    </CardWrapper>
  );
};

export default CardInfo;
