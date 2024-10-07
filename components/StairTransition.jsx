"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
//components
import Stairs from "./Stairs";


const StairTransition = () => {
    const pathname=usePathname();
  return (
    <>
    <AnimatePresence mode="wait">
<div key={pathname}>
    <div className="fixed top-0 left-0 right-0 z-40 flex w-screen h-screen pointer-events-none">
        <Stairs/>
    </div>
</div>
    </AnimatePresence>
    </>
  );
};

export default StairTransition;