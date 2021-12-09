import { motion, AnimatePresence } from "framer-motion";
import { Router, useRouter } from "next/router";
import React from "react";
import { transition } from "../components/Drawer";

interface Props {}
const frame = {
    width: 313,
    height: 71,
    backgroundColor: "#1b1a18",
    overflow: "visible",
    borderRadius: 24,
};
export const White = (props: Props) => {
    let router = useRouter();
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            white
            <div className="absolute bottom-0 flex flex-row items-center justify-center">
                <motion.button
                    onClick={() => {
                        router.push("/");
                    }}
                    exit={{ opacity: 0 }}
                    transition={transition}
                    style={frame}
                    className=" mb-12 flex flex-row items-center justify-center text-white"
                >
                    Enter
                </motion.button>
            </div>
        </div>
    );
};

export default White;
