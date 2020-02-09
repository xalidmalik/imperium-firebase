import React, { Component } from "react";
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
  CursorMarker
} from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import "moment/locale/tr";
import Img from "react-image";
// import { ImageUrl } from "../../helpers/Static/Extensions";
import { Link } from "react-router-dom";
import GetCalendar from "src/helpers/CalendarLogic";

// import LoadingOverlay from "react-loading-overlay";

class Calendar extends Component {
  keys = {
    groupIdKey: "id",
    groupTitleKey: "title",
    groupRightTitleKey: "rightTitle",
    itemIdKey: "id",
    itemTitleKey: "title",
    itemDivTitleKey: "title",
    itemGroupKey: "group",
    itemTimeStartKey: "start",
    itemTimeEndKey: "end",
    groupLabelKey: "title"
  };

  state: any = {
    calendarItems: null,
    isLoading: true,
    showModal: null
  };

  componentDidMount() {
    GetCalendar().then(calen => {
      this.setState({
        calendarItems: calen,
        isLoading: false
      });
    });
  }

  groupRenderer = ({ group }) => {
    return (
      <>
        <div
          className={`rounded mr-4 w-28 min-w-28 flex items-center justify-center text-white text-xl`}
        >
          <Img src={group.visualId} />
        </div>
        <div className="block">
          <span className="flex leading-none text-sm">{group.title}</span>
          <h5 className="flex text-lg font-bold leading-normal ">
            {group.modelName}
          </h5>
          <span className="text-sm flex leading-none">{`Plaka: 37 AA 337`}</span>
        </div>
      </>
    );
  };

  itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps
  }) => {
    console.log("context", getItemProps);
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();

    return (
      <div
        {...getItemProps({
          className: "bg-gray-500",
          style: {
            color: "white",
            borderWidth: 0,
            borderRadius: "0.5rem",
            borderLeftWidth: 0,
            borderRightWidth: 0,
            border: "none",
            background: itemContext.selected
              ? "linear-gradient(to right, #f6ad55 , #ed8936)"
              : "linear-gradient(to right, #63b3ed , #4299e1)"
          }
        })}
        onMouseOver={() => {
          this.setState({ showModal: true });
          itemContext.selected = true;
        }}
        onMouseLeave={() => {
          this.setState({ showModal: false });
          itemContext.selected = false;
        }}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          className="text-sm pl-4 py-2"
          style={{
            height: itemContext.dimensions.height,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            backgroundColor: "#1a202c",
            lineHeight: "100%",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem"
          }}
        >
          {item.title}
        </div>
        {this.state.showModal ? (
          <div className="p-4 rounded-b-lg min-w-28 absolute z-50 bg-gray-200 text-gray-900 shadow-lg">
            <p className="leading-none text-sm"> {item.title}</p>
            <Link
              className="w-12 h-12 text-gray-600 block rounded-lg hover:text-med-500"
              to={{
                pathname: "/reservation"
              }}
            >
              <span className="w-12 block my-auto">Tikla</span>
            </Link>
          </div>
        ) : (
          ""
        )}

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };

  render() {
    if (this.state.isLoading) {
      return <div />;
    }

    return (
      // <LoadingOverlay
      //   active={this.state.isLoading}
      //   spinner
      //   text="Yükleniyor..."
      // >
      <Timeline
        sidebarWidth={304}
        lineHeight={96}
        clickTolerance={10}
        itemTouchSendsClick={false}
        stackItems
        itemHeightRatio={0.75}
        showCursorLine
        canMove={false}
        canResize={false}
        groups={this.state.calendarItems.Groups}
        items={this.state.calendarItems.Items}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
        itemRenderer={this.itemRenderer}
        groupRenderer={this.groupRenderer}
      >
        <TimelineHeaders className="h-20">
          <SidebarHeader>
            {({ getRootProps }) => {
              return (
                <div {...getRootProps()} className="bg-gray-900">
                  <h2 className="text-xl font-bold leading-none justify-between items-center h-full flex text-white ml-4">
                    Araba Listesi
                  </h2>
                </div>
              );
            }}
          </SidebarHeader>
          <DateHeader unit="primaryHeader" className="bg-gray-900 cl-up" />
          <DateHeader className="cl-down" />
        </TimelineHeaders>
      </Timeline>
      // </LoadingOverlay>
    );
  }
}

export default Calendar;
