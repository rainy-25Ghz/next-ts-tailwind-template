import React from "react";

interface Props {
    children: React.ReactNode;
}

export const MenuItem = (props: Props) => {
    return (
        <li>
            <div>{props.children}</div>
        </li>
    );
};
