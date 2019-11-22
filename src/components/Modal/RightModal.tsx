import React, { Component } from "react";
import { Transition, animated } from "react-spring/renderprops";

class RightModal extends Component {
  state = {
    toggle: false
  };

  ToggleModalShow = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <Transition
        native
        unique
        reset
        items={this.state.toggle}
        from={{ opacity: 1, transform: "translate3d(100%,0,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
        leave={{ opacity: 1, transform: "translate3d(100%,0,0)" }}
        config={{ mass: 1, tension: 300, friction: 40 }}
      >
        {show =>
          show &&
          (props => (
            <animated.div
              style={props}
              className="w-right-modal ml-60 overflow-auto bg-gray-300 fixed top-0 right-0 shadow-base"
            >
              <div className="z-40 pt-4 px-4 container">
                {this.props.children}
              </div>
            </animated.div>
          ))
        }
      </Transition>
    );
  }
}

export default RightModal;
