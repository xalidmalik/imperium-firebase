import React from "react";
import { History } from "../../helpers/Static/History";
import { IHeaderValidation } from "../../helpers/Types/HeaderValidation";
import HeaderWrapper from "./HeaderWrapper";

const Header = (props: IHeaderValidation) => {
  return (
    <HeaderWrapper>
      {props.linkFirst ? (
        <>
          <h2
            className="text-2xl font-bold leading-none justify-between cursor-pointer text-orange-400"
            onClick={() => History.push(props.linkFirst)}
          >
            {props.titleFirst}
          </h2>
          <span className="text-2xl font-bold leading-none mx-2">></span>
        </>
      ) : (
        <h2 className="text-2xl font-bold leading-none justify-between">
          {props.titleFirst}
        </h2>
      )}

      {props.length ? (
        <>
          <span className="text-2xl font-bold leading-none mx-2">|</span>
          <h4 className="text-sm font-normal leading-none justify-between">
            Toplam : {props.length}
          </h4>
          <input
            onChange={e => props.OnChange && props.OnChange(e.target.value)}
            type="text"
            placeholder="Arama Yapınız..."
            className="px-4 py-2 w-80 rounded-lg border border-gray-300 bg-gray-100 shadow-base focus:shadow-none focus:outline-none ml-4"
          />
        </>
      ) : null}
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
      {props.btnForm ? (
        <button
          type="submit"
          form={props.btnForm}
          className="btn-style-1 ml-auto "
        >
          {props.btnTitle}
        </button>
      ) : null}
      {props.btnLink ? (
        <button
          onClick={() => History.push(props.btnLink)}
          className="btn-style-1 ml-auto "
        >
          {props.btnTitle}
        </button>
      ) : null}
      {props.btnCustom ? props.btnCustom : null}
    </HeaderWrapper>
  );
};

export default Header;
