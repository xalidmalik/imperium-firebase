import React from "react";
import OutputLayout from "../Layouts/OutputLayout";

const ContactOutput = (props: any) => {
    return (
        <OutputLayout title={props.base.title}>
            <span
                className={`${props.classes || "min-h-8 px-4  w-full rounded-none border-b border-gray-500 bg-white items-center flex text-xs"} `}
            >
                {props.data}
            </span>
        </OutputLayout>
    );
};

export default ContactOutput;
