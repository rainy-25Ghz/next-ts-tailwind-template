import React, { ReactNode, useRef, useState } from "react";
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
    const [mount, setMount] = useState(false);
    const container = useRef<HTMLElement>();
    React.useEffect(() => {
        setMount(true);
        container.current = document.createElement(tagName);
        container.current.classList.add(...className.split(" "));
        document.body.appendChild(container.current);
        return () => {
            setMount(false);
            document.body.removeChild(container.current);
        };
    }, []);
    return mount ? ReactDom.createPortal(children, container.current) : null;
};
