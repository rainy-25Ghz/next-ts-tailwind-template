import React from "react";
import { Portal } from "./Portal";

interface Props {
    children: React.ReactNode;
}

export const Menu = (props: Props) => {
    return (
        <Portal className="w-screen h-screen flex justify-center items-center">
            <ul className="menu" style={{ zIndex: "999!important;" }}>
                {" "}
                {props.children}
            </ul>
        </Portal>
    );
};
