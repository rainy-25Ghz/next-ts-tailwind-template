import { motion, usePresence } from "framer-motion";
import React, { CSSProperties } from "react";
import { transition } from "./Drawer";
const frame = {
    width: 301,
    height: 71,
    backgroundColor: "#1b1a18",
    overflow: "visible",
    borderRadius: 24,
    bottom: "23px",
} as CSSProperties;
interface Props {
    onClick?: () => void;
}

export const Button = (props: Props) => {
    return (
        <div className=" w-screen absolute bottom-0 flex flex-row justify-center mb-6">
            <motion.button
                layout
                className="text-white flex justify-center items-center "
                style={frame}
                exit={{ transform: "translateY(-24px)", width: 313 }}
                onClick={props.onClick}
                transition={transition}
                
            >
                Next
            </motion.button>
        </div>
    );
};
