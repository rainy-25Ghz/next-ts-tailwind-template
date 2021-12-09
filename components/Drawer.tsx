import { AnimatePresence, motion } from "framer-motion";
import React, { CSSProperties } from "react";
const frame = {
    width: "100vw" /* 375px */,
    height: 773,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#1b1a18",
    overflow: "visible",
    borderRadius: 43,
} as CSSProperties;
interface Props {}
export const transition = {
    type: "spring",
    delay: 0,
    stiffness: 500,
    damping: 60,
    mass: 1,
};
export const Drawer = (props: Props) => {
    return (
        <motion.div
            style={frame}
            exit={{ transform: "translateY(-773px)"  }}
            transition={{ ...transition}}
            className=" absolute  -top-20  text-white "
        >
            Hello
        </motion.div>
    );
};
