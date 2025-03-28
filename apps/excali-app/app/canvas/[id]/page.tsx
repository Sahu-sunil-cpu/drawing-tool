"use client"

import NavBar from "@/app/components/NavBar";
import { startDraw } from "@/app/draw";
import { Button } from "@repo/ui/button";
import { useEffect, useRef, useState } from "react"


const shape = ['arrow', 'circle', 'line', 'rectangle']
export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [clickedShape, setClickedShape] = useState('');
    useEffect(() => {
        if (canvasRef.current)
            startDraw(canvasRef.current, clickedShape);
    }, [canvasRef])


    // useEffect(() => {

    // }, [width])
    return <div>
        <canvas
        height={window.innerHeight}
        width={window.innerWidth}
        style={{ position: "fixed"}}
            //  className="bg-gray-800"
            ref={canvasRef}
        className="text-white"
        ></canvas>
        
        <NavBar/>
        {/* <div className="flex flex-row justify-between ">
            {shape.map((e) => <button key={e} onClick={() => setClickedShape(e)}>{e}</button>)}
           
        </div> */}



    </div>
}