import React from "react";
import { NavLink } from "react-router-dom";
import { INavLinks } from "../../../helpers/Types/FormValidation";

const SubLink = (props: INavLinks) => {
  return (
    <NavLink
      exact
      to={props.base.link}
      className="h-16 flex bg-gray-100 text-gray-900 py-4 border-b border-gray-200"
      activeClassName="bg-orange-400 text-white"
    >
      <span className="w-8 block mx-4 my-auto">{props.base.icon}</span>
      <span className="flex leading-none items-center justify-center text-base">
        {props.base.title}
      </span>
    </NavLink>
  );
};

export default SubLink;
