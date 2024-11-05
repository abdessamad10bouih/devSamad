import { Copy } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function BorderControll() {
  const [color, setColor] = useState("border-color");
  const [topright, setTopright] = useState("0");
  const [bottomright, setBottomright] = useState("0");
  const [bottomleft, setBottomleft] = useState("0");
  const [topleft, setTopleft] = useState("0");
  const [width, setWidth] = useState("300")
  const [fill, setFill] = useState("background-color")
  const [height, setHeight] = useState("300")
  const [borderWieght, setborderWieght] = useState("");
  const [borderstyle, setBorderStyle] = useState(["solid", "dashed", "dotted"]);
  const [style, setStyle] = useState("solid");
  const cssCode = useRef(null);

  const handleCopying = () => {
    const text = cssCode.current.textContent;
    window.navigator.clipboard.writeText(text);
    toast.success("Copied");
  };


  const codecss = `border: ${borderWieght}px ${style} ${color};\nborder-radius: ${topright}px ${bottomright}px ${bottomleft}px ${topleft}px;\nwidth: ${width}px;\nheight: ${height}px;\nbackground-color: ${fill};`;
  return (
    <div className="w-full h-full flex sm:flex-col">
      <div className="w-1/2 sm:w-full sm:h-[60vh] h-full flex items-center justify-center p-12">
        <div
          style={{
            border: `${borderWieght}px ${style} ${color}`,
            borderRadius: `${topright}px ${bottomright}px ${bottomleft}px ${topleft}px`,
            borderStyle: style,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: fill
          }}
          className="border-2"
        ></div>
      </div>
      <div className="w-1/2 h-full sm:h-1/2 sm:w-full sm:gap-5 flex items-center justify-center flex-col p-4">
        <div className="w-full rounded-md flex items-center p-5 justify-between shadow">
          <p ref={cssCode}>Border: {borderWieght}px {style} {color}; <br />  border-radius: {topright}px {bottomright}px {bottomleft}px {topleft}px; <br /> width: {width}px; <br />height: {height}px; <br />background-color: {fill};</p>
          <Copy onClick={handleCopying} className="cursor-pointer" />
        </div>
        <div className="w-full h-20 space-x-5 flex items-center justify-between">
          <div className="w-[50%] h-14 border rounded-md flex items-center px-2">
            <input
              type="number"
              min="1"
              max="100"
              value={borderWieght}
              onChange={(e) => setborderWieght(e.target.value)}
              className="w-full h-full focus:outline-none"
              placeholder="border weight"
            />
            <h1>Px</h1>
          </div>
          <div className="w-[50%] h-14 gap-5 rounded-md flex items-center px-2">
            <div className="w-full h-full border px-3 rounded-md flex items-center justify-center">
              <input
                type="number"
                min="1"
                max="100"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full h-full focus:outline-none placeholder:text-sm"
                placeholder="border width"
              />
              <h1>Px</h1>
            </div>
            <div className="w-full h-full border px-3 rounded-md flex items-center justify-center">
              <input
                type="number"
                min="1"
                max="100"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full h-full focus:outline-none placeholder:text-sm"
                placeholder="border Height"
              />
              <h1>Px</h1>
            </div>

          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-5">
          <div className="w-[50%] h-14 border gap-5 rounded-md flex items-center px-2">
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
              className="w-20 h-full bg-none"
            />
            <input
              type="text"
              value={color}
              className="w-full h-full focus:outline-none"
              onChange={(e) => setColor(e.target.value)}
              placeholder="border-color"
            />
          </div>
          <div className="w-[50%] h-14 border gap-5 rounded-md flex items-center px-2">
            <input
              type="color"
              onChange={(e) => setFill(e.target.value)}
              value={fill}
              className="w-20 h-full bg-none"
            />
            <input
              type="text"
              value={fill}
              className="w-full h-full focus:outline-none"
              onChange={(e) => setFill(e.target.value)}
              placeholder="background-color"
            />
          </div>
        </div>
        <div className="w-full h-40 sm:gap-2 flex flex-col">
          <div className="w-full h-full flex items-center space-x-5 justify-between">
            <div className="w-[50%] h-14 border rounded-md flex items-center px-2">
              <input
                value={topleft}
                onChange={(e) => setTopleft(e.target.value)}
                type="text"
                className="w-full h-full focus:outline-none"
                placeholder="Top Left"
              />
              <h1>Px</h1>
            </div>
            <div className="w-[50%] h-14 border rounded-md flex items-center px-2">
              <input
                value={topright}
                onChange={(e) => setTopright(e.target.value)}
                type="text"
                className="w-full h-full focus:outline-none"
                placeholder="Top Right"
              />
              <h1>Px</h1>
            </div>
          </div>
          <div className="w-full h-full flex items-center space-x-5 justify-between">
            <div className="w-[50%] h-14 border rounded-md flex items-center px-2">
              <input
                value={bottomleft}
                onChange={(e) => setBottomleft(e.target.value)}
                type="text"
                className="w-full h-full focus:outline-none"
                placeholder="Bottom Left"
              />
              <h1>Px</h1>
            </div>
            <div className="w-[50%] h-14 border rounded-md flex items-center px-2">
              <input
                value={bottomright}
                onChange={(e) => setBottomright(e.target.value)}
                type="text"
                className="w-full h-full focus:outline-none"
                placeholder="Bottom Right"
              />
              <h1>Px</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-20 sm:h-28 flex items-center space-x-3">
          <h1>Border Style</h1>
          <select onChange={(e) => setStyle(e.target.value)} name="borderstyle" className="w-[60%] h-[50%] border outline-none border-teal-500 shadow" id="borderstyle">
            {borderstyle.map((style, index) => (<option key={index} value={style}>{style}</option>))}
          </select>
        </div>
        <div className="w-full h-20 flex flex-col justify-center">
          <h1 className=""> All corners</h1>
          <input
            type="range"
            min="0"
            max={(width / 2)}
            value={[topleft]}
            onChange={(e) => {
              setTopleft(e.target.value),
                setTopright(e.target.value),
                setBottomright(e.target.value),
                setBottomleft(e.target.value);
            }}
            className="w-full accent-teal-500"
          />
        </div>
      </div>
    </div>
  );
}

export default BorderControll;
