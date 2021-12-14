import React from "react";

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

export const MenuItem = (props: Props) => {
    return (
        <li>
            <div className="inner" onClick={props.onClick}>
                {props.children}
            </div>
        </li>
    );
};
