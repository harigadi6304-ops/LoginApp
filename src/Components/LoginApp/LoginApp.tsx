import React, { useState } from "react";

const LoginApp: React.FC = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center p-20 rounded-2xl bg-linear-to-b from-[#2b2c49] to-[#b5b9ff] gap-3">
      <h1 className="text-5xl text-[#ffffff] font-bold font-[roboto]">
        {isLoggedin ? "Welcome Hari!" : "Please Login"}
      </h1>
      <button
        className="bg-[#f8fafc] px-3 py-1 box-border rounded-md text-[#303150] cursor-pointer"
        onClick={() => setIsLoggedin(!isLoggedin)}
      >
        {isLoggedin ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default LoginApp;
