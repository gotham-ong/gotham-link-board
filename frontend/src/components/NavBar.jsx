import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
export default function NavBar() {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Gotham Link Board
      </h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Companhia</li>
        <li className="p-4">Sobre</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 w-[60%] border-r border-r-gray-900">
        <li className="p-4">Home</li>
        <li className="p-4">Companhia</li>
        <li className="p-4">Sobre</li>
        <li className="p-4">Contact</li>
      </div>
    </div>
  );
}
