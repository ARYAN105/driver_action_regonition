import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Model() {
  return (
    <div className="flex space-x-20 bg-gray-200 px-20 2xl:px-40 py-10 snap-center w-full h-screen">
      <div className="space-y-6 w-1/2 h-full">
        <form className="space-y-8 w-full max-w-fit">
          <Label
            htmlFor="picture"
            className="font-extrabold font-libre text-3xl text-black"
          >
            Upload Picture
          </Label>
          <span className="flex gap-8">
            <Input
              id="picture"
              type="file"
              className="space-x-2 file:border-0 file:bg-Lora hover:file:hover:bg-Dora file:mr-4 file:px-4 placeholder:px-2 file:py-[0.61rem] p-0 border-none file:font-semibold file:text-sm file:text-white overflow-clip"
              accept=".png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .webp"
            />
            <Button className="bg-Lora hover:bg-Dora font-libre">Submit</Button>
          </span>
        </form>
        <div className="bg-black rounded-2xl h-2/3"></div>
      </div>
      <div className="mx-auto w-1/2 h-full font-libre text-black text-center">
        <ul className="place-content-center gap-2 grid grid-cols-5 h-full font-bold text-frank text-lg">
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
          <li className="bg-white hover:bg-black py-10 rounded-lg w-full hover:text-gray-200 transition">
            Drunk
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Model;
