import { useState } from "react";

function App() {
  const [color, setColor] = useState("Gray");
  const [textColor, setTextColor] = useState("White");
  return (
    <div
      className="w-full h-screen duration-200 flex justify-center flex-col"
      style={{ backgroundColor: color, color: textColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-1/6  inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
          <button
            className="outline-none px-3 py-1 text-white rounded-full shadow-lg cursor-pointer"
            onClick={() => {
              setColor("Royalblue");
              setTextColor("White");
            }}
            style={{ backgroundColor: "Royalblue" }}
          >
            Royal Blue
          </button>
          <button
            className="outline-none px-3 py-1 text-white rounded-full shadow-lg cursor-pointer"
            onClick={() => {
              setColor("Crimson");
              setTextColor("White");
            }}
            style={{ backgroundColor: "Crimson" }}
          >
            Crimson
          </button>
          <button
            className="outline-none px-3 py-1 text-black rounded-full shadow-lg cursor-pointer"
            onClick={() => {
              setColor("Lavender");
              setTextColor("Black");
            }}
            style={{ backgroundColor: "Lavender" }}
          >
            Lavender
          </button>
          <button
            className="outline-none px-3 py-1 text-black rounded-full shadow-lg cursor-pointer"
            onClick={() => {
              setColor("Pink");
              setTextColor("Black");
            }}
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            className="outline-none px-3 py-1 text-white rounded-full shadow-lg cursor-pointer"
            onClick={() => {
              setColor("Purple");
              setTextColor("White");
            }}
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            className="outline-none px-3 py-1 text-white rounded-full shadow-lg cursor-pointer"
            onClick={() => {
              setColor("Black");
              setTextColor("White");
            }}
            style={{ backgroundColor: "Black" }}
          >
           Black
          </button>
          <button
            className="outline-none px-3 py-1 text-black rounded-full shadow-lg cursor-pointer"
            onClick={() => {
              setColor("Yellowgreen");
              setTextColor("Black");
            }}
            style={{ backgroundColor: "Yellowgreen" }}
          >
            Yellow Green
          </button>
        </div>
      </div>
      <h1 className="flex justify-center text-3xl">
        Current Background Color : {color}
      </h1>
    </div>
  );
}

export default App;
