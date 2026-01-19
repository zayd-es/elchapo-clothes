import React from "react";

const Headlines = ({ title, subtitle }) => {
  return (
    <div className="flex items-center  justify-center flex-col my-12 ">
      <p className="font-poppins text-lg">{subtitle}</p>
      <h2 className=" font-oswald text-center text-5xl uppercase  font-extrabold ">
        {title}
      </h2>
    </div>
  );
};

export default Headlines;
