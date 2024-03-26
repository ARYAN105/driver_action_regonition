import React from "react";
import Github from "@/components/svg/github";
function Footer() {
  return (
    <div className="flex justify-center items-center gap-10 bg-black px-20 2xl:px-40 h-28">
      <div className="space-y-2 w-3/4 ">
        <p className="font-biryani font-semibold text-gray-200 text-sm">
          This Project has been developed as Final year project and team has
          decided to open source project so that further development can be made
          as team sa hit the wall. So please feel free to use it in good faith
        </p>
        <p className="font-biryani font-semibold text-gray-500 text-xs">
          @coppyright
        </p>
      </div>
      <Github />
    </div>
  );
}

export default Footer;
