import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Indexes from "./indexes";

const INDEX_LIST = [
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
  {
    Title: "Introduction",
    List: [
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
      {
        id: "background",
        title: "background",
      },
    ],
  },
];

export default function Indices() {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    console.log("vsihal");
    setFilter(e.target.value);
  };
  return (
    <>
      <div className="text-right space-y-6 bg-gray-200 rounded-bl-2xl w-1/4 h-full text-black overflow-y-scroll">
        <div className="z-20 absolute flex justify-between bg-black/10 backdrop-blur-sm py-6 pr-6 pl-3 w-1/4 h-20">
          <div className="flex justify-start items-center gap-4">
            <div className="flex">
              <div className="flex justify-center items-center bg-white hover:bg-white shadow-md px-2 rounded-l-md rounded-r-none">
                <Search className="text-gray-200 cursor-text" />
              </div>

              <Input
                type="text"
                className="rounded-l-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md placeholder:text-gray-300"
                placeholder="Quick Search..."
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="font-extrabold font-libre text-3xl text-black">Index</p>
        </div>
        <div className="relative z-10 flex flex-col justify-end">
          <ul className="px-6 2xl:px-20 pt-20">
            {INDEX_LIST.map((index) => {
              const filterIndex = {
                ...index,
                List: index.List.filter((obj) => obj.title.includes(filter)),
              };
              return filterIndex.List.length ? (
                <Indexes index={filterIndex} />
              ) : null;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
