import { Copy, X } from "lucide-react";
import React, { useState } from "react";
import { BlockPicker, SketchPicker } from "react-color";
import toast from "react-hot-toast";

const GradientForm = () => {
  const [colorStops, setColorStops] = useState([
    { color: "#3300ff", position: 0 },
    { color: "#090979", position: 50 },
    { color: "#020024", position: 100 },
  ]);

  const [degree, setDegree] = useState(0);

  const gradientStyle = {
    backgroundImage: `linear-gradient( ${degree}deg, ${colorStops.map((stop) => `${stop.color} ${stop.position}%`).join(', ')})`,
  }

  console.log(gradientStyle)
  const addColorFun = () => {
    setColorStops([...colorStops, { color: "", position: 0 }])

  }

  const [activeColor, setActiveColor] = useState(0);
  return (
    <div className="w-full flex flex-col items-center gap-2 justify-center p-14">
      <div className="w-[80%] h-[20vh] shadow rounded" style={gradientStyle}></div>
      <div className="w-[80%] flex flex-col h-[80vh] gap-2 shadow rounded">
        <div className="w-full h-[80%] flex">
          <div className="w-1/2 h-full overflow-y-auto p-3 flex flex-col gap-3 justify-center">
            <h1 className="text-2xl font-semibold">Color Stops</h1>
            {colorStops.map((colorStop, index) => (
              <>
                <div className="w-full flex gap-2 items-center">
                  <div
                    onClick={() => setActiveColor(index)}
                    className={`w-9 h-9 rounded-full ${
                      index === activeColor
                        ? "border-[3px] border-teal-500"
                        : ""
                    }`}
                    style={{ backgroundColor: colorStop.color }}
                  ></div>
                  <input
                    type="range"
                    onChange={(e) => {
                      const newColorStops = [...colorStops];
                      newColorStops[index].position = e.target.value;
                      setColorStops(newColorStops);
                    }}
                    value={[colorStop.position]}
                    min={0}
                    className="w-[60%] accent-teal-500"
                    max={100}
                  />
                  <button
                    onClick={() =>
                      setColorStops(colorStops.filter((_, i) => i !== index))
                    }
                    className="w-10 h-10 border flex items-center justify-center rounded-full bg-white"
                  >
                    <X />
                  </button>
                </div>
              </>
            ))}
            <button
              onClick={addColorFun}
              className="w-44 h-10 bg-teal-500 mt-3 hover:bg-teal-600 text-white rounded"
            >
              Add Color
            </button>
            
          <div className="w-full h-14 flex flex-col justify-center px-3">
            <h1 className="text-md text-teal-500 font-semibold">Degree <span className="font-bold text-lg">{degree}°</span></h1>
            <input
              type="range"
              onChange={(e) => {
                setDegree(e.target.value);
              }}
              value={degree}
              min={0}
              className="w-full accent-teal-500"
              max={180}
            />
          </div>
          </div>
          <div className="w-1/2 flex items-center justify-center h-full">
            <SketchPicker
              color={colorStops[activeColor].color}
              onChange={(color) => {
                const newColorStops = [...colorStops];
                newColorStops[activeColor].color = color.hex;
                setColorStops(newColorStops);
              }}
              
            />
          </div>
        </div>
        <div className="w-full h-[20%] bg-slate-100 rounded flex items-center justify-between px-5">
          <h1 className="font-mono text-xl">{gradientStyle.backgroundImage}</h1>
          <Copy
            className="cursor-pointer"
            onClick={() => {navigator.clipboard.writeText(gradientStyle.backgroundImage), toast.success("Copied")}}
          />
        </div>
      </div>
    </div>
  );
};

export default GradientForm;
