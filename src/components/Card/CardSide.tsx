import React from "react";
import { CardWrapper } from "./CardWrapper";
import { ICard } from "src/helpers/Types/FormValidation";

const CardSide = (props: ICard) => {
    return (
        <CardWrapper classes={` ${props.classes || "w-card bg-white w-full rounded-lg flex shadow-base mb-4"} `}>
            {props.children}
        </CardWrapper>
    );
};

export default CardSide;
