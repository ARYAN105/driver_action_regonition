import React from "react";
import { Separator } from "@/components/ui/separator";
import { Terminal } from "lucide-react";
import CodeBlock from "./codeblock";
import { code1 } from "@/codes/codes";
import Callout from "./callout";

export default function Block(props) {
  return (
    <div className="space-y-16" {...props}>
      <span className="space-y-6">
        <span className="space-y-4">
          <h2 className="font-bold font-libre text-3xl text-Lora">Code</h2>
          <Separator className="bg-Lora" />
        </span>
        <p className="w-full font-biryani text-gray-200">
          Following is the documnetation of the code which contains the client side, server side and the database side code which includes the API calls and the database operations.
          client side contains the GUI interface of the project, server side contains the API calls and the database side contains the database operations.
          
        </p>
      </span>
      <CodeBlock file={code1} />
      <Callout logo={<Terminal className="w-6 h-6" />} callout="Heads up!" />
    </div>
  );
}
