import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react";

function Main() {
  return (
    <div className="flex flex-col p-2 snap-start w-full h-screen bg-black">
      <div className="bg-gradient-to-r from-blue-950 flex-grow flex flex-col justify-end p-20 snap-start w-full rounded-3xl ">
        <h1 className="flex justify-center font-extrabold font-frank text-5xl text-cyan-300 mb-auto whitespace-nowrap">
          CONGONITIVE DRIVER ACTION RECOGNITION SYSTEM
        </h1>
      </div>
      {/* bg-gradient-to-r from-gray-200 to-gray-500*/}
      <div className=" bg-gray-200  text-center flex flex-col gap-12 p-10  w-full  h-full text-black mt-4 rounded-3xl">
        <span>
          <h2 className="font-extrabold font-libre text-4xl pb-4">Team</h2>
          <div className="flex justify-center">
            <ul className=" text-left space-y-1 font-biryani font-bold text-xl ">
              <li className="flex justify-between items-center ">
                <span>ADITYA ADHANE</span>
                <span className="ml-10">- 407A037</span>
              </li>
              <li className="flex justify-between items-center">
                <span>ARYAN GAIKAWAD</span>
                <span>- 407A037</span>
              </li>
              <li className="flex justify-between items-center">
                <span>VEDANT MORE</span>
                <span>- 407A037</span>
              </li>
              <li className="flex justify-between items-center">
                <span>VISHAL SANGOLE</span>
                <span>- 407A037</span>
              </li>
            </ul>
          </div>
        </span>
        {/*  <Icon icon="fa6-solid:car-side" width="40rem" height="1rem"  style={{color: 'black'}} /> */}
        <Separator className="bg-black w-auto " />
        <span>
          <h2 className="font-extrabold font-libre text-4xl">Guide</h2>
          <p className="font-biryani font-bold text-xl pt-4">S. P. JADHAV</p>
        </span>
      </div>
    </div>
  );
}

export default Main;
