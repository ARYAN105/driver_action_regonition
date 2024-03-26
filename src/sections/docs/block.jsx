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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          veniam recusandae accusantium itaque saepe ullam aliquam quibusdam
          consequuntur ducimus, corrupti cum, voluptate esse nemo commodi ad
          sed, quo repellendus neque?Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Officia delectus quo molestias fugit quas omnis
          incidunt dolores similique autem deleniti ratione laboriosam, ipsum
          maxime, ab suscipit facilis, magni eveniet
        </p>
      </span>
      <CodeBlock file={code1} />
      <Callout logo={<Terminal className="w-6 h-6" />} callout="Heads up!" />
    </div>
  );
}
