

import { useState } from "react";
import { Lock, Hand, MousePointer, Square, Circle, ArrowRight, Minus, Pencil, Image, Layers, BrainCircuit, MousePointer2Icon, HandIcon, HandPlatter, LucideHandMetal, HandCoins, HandHeart } from "lucide-react";

export default function NavBar() {


    return <div className="absolute top-4 left-[500px]">
        <div className="">
        <Toolbar/>
        </div>
   
    </div>
}

const Toolbar = () => {
  const [active, setActive] = useState("select");
  
  return (
    <div className="flex items-center gap-2 bg-[#232329] text-white p-1 rounded-md shadow-lg w-fit mx-auto ">
      <button className="p-2.5 hover:bg-gray-700 rounded-lg focus:bg-[#403e6a]">
        <Lock size={16} />
      </button>
      <button className="p-2.5 hover:bg-gray-700 rounded-lg focus:bg-[#403e6a]">
        <Hand size={16} />
      </button>
      <button
        className={`p-2.5 rounded-lg hover:bg-gray-700  focus:bg-[#403e6a] `}
        onClick={() => setActive("select")}
       
      >
        <MousePointer size={14} fill="white" />
      </button>
      <button className="p-2.5 hover:bg-gray-700 rounded-lg  focus:bg-[#403e6a]">
        <Square size={16} />
      </button>
      <button className="p-2.5 hover:bg-gray-700 rounded-lg  focus:bg-[#403e6a]">
        <Circle size={16} />
      </button>
      <button className="p-2.5 hover:bg-gray-700 rounded-lg  focus:bg-[#403e6a]">
        <ArrowRight size={16} />
      </button>
      <button className="p-2.5 hover:bg-gray-700 rounded-lg  focus:bg-[#403e6a]">
        <Minus size={16} />
      </button>
      <button className="p-2.5 hover:bg-gray-700 rounded-lg  focus:bg-[#403e6a]">
        <Pencil size={16} />
      </button>
      <button className="p-2.5 hover:bg-gray-700 rounded-lg  focus:bg-[#403e6a]">
        <Image size={16} />
      </button>
      <button className="p-2.5 hover:bg-gray-700 rounded-lg  focus:bg-[#403e6a]">
        <Layers size={16} />
      </button>
      <button className="p-2.5  hover:bg-gray-700 rounded-lg flex items-center gap-1  focus:bg-[#403e6a]">
        <BrainCircuit size={16} /> <span className="text-xs">AI</span>
      </button>
    </div>
  );
};


