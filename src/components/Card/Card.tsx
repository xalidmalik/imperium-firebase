import React from "react";
import { CardWrapper } from "./CardWrapper";
import { ICard } from "src/helpers/Types/FormValidation";

const Card = (props: ICard) => {
  return (
    <CardWrapper>
      <div className="w-2/5 rounded-l-lg p-8 text-left">
        <h2 className="text-xl font-sans font-bold">{props.base.title}</h2>
        <p className=" text-sm">{props.base.desc}</p>
      </div>
      <div className="w-3/5 bg-gray-100 rounded-r-lg p-8 text-left">
        {props.children}
      </div>
    </CardWrapper>
  );
};

export default Card;
