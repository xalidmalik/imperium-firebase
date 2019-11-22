import React from "react";
import { History } from "../../helpers/Static/History";
import { IHeaderValidation } from "helpers/Types/HeaderValidation";
import HeaderWrapper from "./HeaderWrapper";

export const Headers = (props: IHeaderValidation) => {
  return (
    <HeaderWrapper>
      {props.linkFirst ? (
        <h2
          className="text-2xl font-bold leading-none justify-between cursor-pointer text-orange-400"
          onClick={() => History.push(props.linkFirst)}
        >
          {props.titleFirst}
        </h2>
      ) : (
        <h2 className="text-2xl font-bold leading-none justify-between">
          {props.titleFirst}
        </h2>
      )}
      <span className="text-2xl font-bold leading-none mx-2">></span>
      {props.linkFirst ? (
        props.linkSecond ? (
          <>
            <h2
              className="text-2xl font-bold leading-none justify-between cursor-pointer text-orange-400"
              onClick={() => History.push(props.linkSecond)}
            >
              {props.titleSecond}
            </h2>
            <span className="text-2xl font-bold leading-none mx-2 ">></span>
            <h2 className="text-2xl font-bold leading-none justify-between">
              {props.titleThird}
            </h2>
          </>
        ) : (
          <h2 className="text-2xl font-bold leading-none justify-between">
            {props.titleSecond}
          </h2>
        )
      ) : null}
      {props.btnTitle ? (
        <button
          type="submit"
          form={props.btnForm}
          className="btn-style-1 ml-auto "
        >
          {props.btnTitle}
        </button>
      ) : null}
    </HeaderWrapper>
  );
};
