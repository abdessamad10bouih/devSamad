import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import ShinyButton from "@/components/ui/shiny-button";
import PulsatingButton from "@/components/ui/pulsating-button";
import toast from "react-hot-toast";

function Pallets() {
  const [pallets, setPallets] = useState([]);
  const [savedPallets, setSavedPallets] = useState([]);
  const [page, setPage] = useState("all");

  // console.log("Pallets:", pallets);
  // console.log("Saved Pallets:", savedPallets);
  const generateRandomHex = () => {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      // console.log(color)
    }
    return color;
  };

  useEffect(() => {
    const saved = localStorage.getItem("savedPallets");
    if (saved) {
      setSavedPallets(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        fetchPalette();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchPalette = async () => {
    try {
      const randomHex = generateRandomHex();
      const res = await axios.get(
        `https://www.thecolorapi.com/scheme?hex=${randomHex}&mode=monochrome&count=`
      );

      //   console.log("Palette fetched:", res.data);

      if (res.data.colors) {
        setPallets((prevPallets) => [...prevPallets, res.data.colors]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPalette();
  }, []);

  const savePalette = (palette) => {
    const updatedSavedPallets = [...savedPallets, palette];
    setSavedPallets(updatedSavedPallets);
    localStorage.setItem("savedPallets", JSON.stringify(updatedSavedPallets));
    toast.success("Saved");
  };

  return (
    <div className="w-full px-5 pb-5 flex flex-col items-center">
      <div className="w-full h-16 flex items-center justify-center gap-5">
        <PulsatingButton
          onClick={() => setPage("all")}
          className={
            page === "all" ? "bg-teal-500 h-7" : "bg-white text-teal-500 h-7"
          }
          pulseColor={page === "all" ? "teal" : "none"}
        >
          All
        </PulsatingButton>
        <PulsatingButton
          onClick={() => setPage("saved")}
          className={
            page === "saved" ? "bg-teal-500 h-7" : "bg-white text-teal-500 h-7"
          }
          pulseColor={page === "saved" ? "teal" : "none"}
        >
          saved
        </PulsatingButton>
      </div>
      {page === "all" && (
        <div className="w-full flex flex-wrap gap-4 items-center justify-center">
          {pallets.length > 0 ? (
            pallets.map((palette, index) => (
              <Cards
                clickedFun={() => {savePalette(palette)}}
                tab={"all"}
                key={index}
                colors={palette.map((color) => color.hex.value)}
              />
            ))
          ) : (
            <p>Loading palettes...</p>
          )}
        </div>
      )}
      {page === "saved" && (
        <div className="w-full flex flex-wrap gap-4 items-center justify-center">
          {savedPallets.length > 0 ? (
            savedPallets.map((savedP, index) => (
              <Cards
                key={index}
                colors={savedP.map((color) => color.hex.value)}
              />
            ))
          ) : (
            <p>Back to all palettes and save them here</p>
          )}
        </div>
      )}

      {page === "all" && (
        <ShinyButton
          onClick={fetchPalette}
          className="bg-teal-500/80 text-white mt-5"
        >
          Load More
        </ShinyButton>
      )}
      {page === "saved" && (
        savedPallets.length > 0 && (
          <ShinyButton
          onClick={() => setSavedPallets([])}
          className="bg-teal-500/80 text-white mt-5"
        >
          Clear
        </ShinyButton>
        )
      )}
    </div>
  );
}

export default Pallets;
