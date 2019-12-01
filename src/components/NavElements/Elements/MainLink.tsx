import React from "react";
import { NavLink } from "react-router-dom";
import { INavLinks } from "../../../helpers/Types/FormValidation";

const MainLink: React.FC<any> = (props: INavLinks) => {
  return (
    <NavLink
      exact
      to={{
        pathname: props.base.link,
        state: {
          index: props.base.index
        }
      }}
      className={`h-16 flex text-gray-900 py-2 border-l-4 border-white ${
        props.classes ? props.classes : "bg-white"
      }`}
      activeClassName="bg-gray-100 border-orange-400"
    >
      <span className="w-8 block mr-4 ml-3 p-1 my-auto">{props.base.icon}</span>
      <span className="flex leading-none items-center justify-center">
        {props.base.title}
      </span>
    </NavLink>
  );
};

export default MainLink;
