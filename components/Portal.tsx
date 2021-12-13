import React, { ReactNode, useRef } from "react";
import ReactDom from "react-dom";
interface Props {
    children: ReactNode;
    className?: string;
    tagName?: string;
}

export const Portal = ({
    children,
    className = "menu-portal",
    tagName = "div",
}: Props) => {
    const container = useRef<HTMLElement>();
    React.useEffect(() => {
        container.current = document.createElement(tagName);
        container.current.classList.add(...className.split(" "));
        document.body.appendChild(container.current);
        return () => {
            document.body.removeChild(container.current);
        };
    }, []);
    return container.current?ReactDom.createPortal(children, container.current):null;
};
