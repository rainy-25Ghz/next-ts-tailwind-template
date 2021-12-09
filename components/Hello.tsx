import React from "react";
const frame = {
    width: 375,
    height: 773,
    backgroundColor: "#1b1a18",
    overflow: "visible",
    borderRadius: 43,
};
interface Props {}

export const Hello = (props: Props) => {
    return <div style={frame} className="absolute "></div>;
};
