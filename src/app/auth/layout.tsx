import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="h-screen bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-400 
    flex justify-center p-5 lg:p-0 overflow-y-auto"
    >
      <div className="bg-white w-full lg:w-2/3 m-auto lg:h-[90%] flex justify-center items-center rounded-lg shadow-lg">
        <div
          className="hidden lg:block w-[30%] h-full bg-gradient-to-br from-gray-900 via-indigo-900 to-cyan-400 
            rounded-l-lg"
        />
        <div className="w-full lg:w-[70%] h-full">{children}</div>
      </div>
    </div>
  );
}
