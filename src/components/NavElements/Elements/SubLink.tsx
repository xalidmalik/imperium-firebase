import React from "react";
import { NavLink } from "react-router-dom";
import { INavLinks } from "../../../helpers/Types/FormValidation";

const SubLink = (props: INavLinks) => {
  return (
    <NavLink
      exact
      to={props.base.link}
      className="h-12 flex bg-gray-100 text-gray-900 py-2 border-l-4 border-gray-200"
      activeClassName="border-orange-400 text-white"
    >
      <span className="w-8 block mr-4 ml-3 p-1 my-auto">{props.base.icon}</span>
      <span className="flex leading-none items-center justify-center text-base">
        {props.base.title}
      </span>
    </NavLink>
  );
};

export default SubLink;
