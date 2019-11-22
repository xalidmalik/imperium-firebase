import React from "react";
import { useSpring, animated } from "react-spring";
import { Logo } from "../../helpers/Static/Icons";
import { History } from "../../helpers/Static/History";

export const LeftLayout = (props: any) => {
  const LeftTransition = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
    config: { mass: 1, tension: 300, friction: 40 },
    delay: 200
  });
  return (
    <animated.div
      style={LeftTransition}
      className="w-left fixed h-full w-60 left-0 bottom-0 bg-white shadow-base"
    >
      <span
        className="h-20 w-full flex mx-auto py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
        onClick={() => History.push("/")}
      >
        {Logo}
      </span>
      {props.children}
    </animated.div>
  );
};
export const RightLayout = (props: any) => {
  return (
    <div className="w-right ml-60 w-full overflow-auto">
      <div className="z-40 pt-4 px-4 container">{props.children}</div>
    </div>
  );
};
