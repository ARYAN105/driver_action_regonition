import React from "react";
import { Separator } from "@/components/ui/separator";
export default function CodeBlock(props) {
  const { fileName, code } = props.file;
  return (
    <div className="bg-gray-200 px-8 pb-4 rounded-md w-4/5">
      <p className="border-gray-200 pt-2 border">
        <code>{fileName}</code>
      </p>
      <pre className="text-gray-500 text-sm leading-6 ">
        <code>{code}</code>
      </pre>
    </div>
  );
}
