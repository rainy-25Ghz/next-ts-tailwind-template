import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { transition } from "./Drawer";
import { Portal } from "./Portal";

interface Props {
    children: React.ReactNode;
}

export const Menu = (props: Props) => {
    return (
        <Portal className="w-screen h-screen flex justify-center items-center">
            <motion.ul
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="menu"
                transition={{ type: "spring", duration: 0.2 }}
                style={{ zIndex: "999!important;" }}
            >
                {props.children}
            </motion.ul>
        </Portal>
    );
};
