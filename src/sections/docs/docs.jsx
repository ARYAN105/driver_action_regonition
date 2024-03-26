import React, { useState } from "react";
import Block from "./block";
import Indices from "./indices";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { ChevronsLeft } from "lucide-react";
function Docs() {
  const [showIndices, setShowIndices] = useState(true);
  const toggle = () => {
    setShowIndices((current) => !current);
  };
  return (
    <div className="flex bg-black snap-center h-screen">
      <div
        className={twMerge(
          "space-y-6 bg-black rounded-tr-xl h-full overflow-y-scroll relative",
          showIndices && "w-3/4"
        )}
      >
        {" "}
        <div className="top-0 sticky flex flex-col items-end">
          <div className="bg-gray-200/10 backdrop-blur-sm py-6 w-full h-20">
            <p className="px-20 2xl:px-40 font-extrabold font-libre text-3xl text-gray-200">
              DOCUMENTATION
            </p>
          </div>
          <Button
            className="bg-gray-200/10 hover:bg-gray-200/20 ml-full px-1 rounded-none rounded-bl-lg w-8"
            onClick={toggle}
          >
            <ChevronsLeft
              className={twMerge("text-gray-200", showIndices && "rotate-180")}
            />
          </Button>
        </div>
        <div className="px-20 2xl:px-40">
          <Block id="block" />
        </div>
      </div>
      {showIndices && <Indices setShowIndices={setShowIndices} />}
    </div>
  );
}

export default Docs;
