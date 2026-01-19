import React from "react";
import { Spinner } from "./ui/spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Spinner className="size-8" />
    </div>
  );
};

export default Loading;
