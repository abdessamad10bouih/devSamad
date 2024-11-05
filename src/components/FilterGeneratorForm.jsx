import { Copy, Image } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const listFilters = [
  { name: "blur", unit: "px" },
  { name: "brightness", unit: "%" },
  { name: "contrast", unit: "%" },
  { name: "grayscale", unit: "%" },
  { name: "hue-rotate", unit: "deg" },
  { name: "invert", unit: "%" },
  { name: "opacity", unit: "%" },
  { name: "saturate", unit: "%" },
  { name: "sepia", unit: "%" },
];

const FilterGeneratorForm = () => {
  const [degree, setDegree] = useState({
    blur: 0,
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    opacity: 100,
    saturate: 100,
    sepia: 0,
  });
  const [imgSrc, setImgSrc] = useState(null); // Store the image URL

  // Function to handle image upload
  const handleImageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgSrc(reader.result); // Set the image source to the result from FileReader
      };
    }
  };

  // Handle slider input change for filters
  const degreeChange = (e, filter) => {
    setDegree({
      ...degree,
      [filter]: e.target.value,
    });
  };

  // Create the CSS filter string based on current state
  const cssCode = listFilters
    .map((filter) => {
      const stateKey = filter.name === "hue-rotate" ? "hueRotate" : filter.name;
      return `${filter.name}(${degree[stateKey]}${filter.unit})`;
    })
    .join(" ");

  useEffect(() => {
    console.log(cssCode);
  }, [cssCode]);

  return (
    <div className="w-full flex h-full">
      <div className="w-full h-full flex items-center flex-col justify-center">
        {/* Image upload */}
        <label className="w-[70%] h-10 flex items-center gap-3 cursor-pointer" htmlFor="image">
          <Image />
          <h1>Upload Your Image</h1>
          <input type="file" id="image" onChange={handleImageChange} className="hidden" />
        </label>
        
        {/* Display the uploaded image or a default one */}
        <div
          className="w-[70%] h-[70%] rounded-md"
          style={{
            background: `url(${imgSrc || "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"}) no-repeat center`,
            backgroundSize: "cover",
            filter: cssCode, // Apply CSS filter here
          }}
        ></div>
      </div>
      
      {/* Filters panel */}
      <div className="w-full p-5 gap-2 h-full flex flex-col">
        <div className="w-full flex flex-col justify-start gap-3">
          <h1 className="w-full text-teal-500">Select filter</h1>
          {listFilters.map((filter) => (
            <div key={filter.name} className="w-full flex flex-col justify-center">
              <label htmlFor={filter.name}>
                {filter.name}: {degree[filter.name === "hue-rotate" ? "hueRotate" : filter.name]}
                {filter.unit}
              </label>
              <input
                value={degree[filter.name === "hue-rotate" ? "hueRotate" : filter.name]}
                onChange={(e) => degreeChange(e, filter.name === "hue-rotate" ? "hueRotate" : filter.name)}
                className="w-full accent-teal-500"
                min={filter.name === "hue-rotate" ? 0 : 0}
                max={filter.name === "hue-rotate" ? 360 : 100}
                type="range"
                name={filter.name}
                id={filter.name}
              />
            </div>
          ))}
        </div>

        {/* Display and Copy CSS filter */}
        <div className="w-full px-5 flex items-center h-20 bg-slate-50">
          <h1 className="text-xs font-mono">filter: {cssCode}</h1>
          <Copy
            className="cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(cssCode);
              toast.success("Copied!");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterGeneratorForm;
