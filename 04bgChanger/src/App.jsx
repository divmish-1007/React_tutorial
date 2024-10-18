import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
          <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
            <button 
            onClick={()=>setColor("red")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "red"}}
            >Red</button>
            <button 
            onClick={()=>setColor("green")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "green"}}
            >Green</button>
            <button 
            onClick={()=>setColor("yellow")}
            className=" outline-none px-4 py-1 rounded-full text-balance shadow-lg "
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button 
            onClick={()=>setColor("blue")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button 
            onClick={()=>setColor("orange")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "orange"}}
            >Orange</button>
            <button
            onClick={()=>setColor("skyblue")} 
            className=" outline-none px-4 py-1 rounded-full text-balance shadow-lg "
            style={{backgroundColor: "skyblue"}}
            >Skyblue</button>
            <button 
            onClick={()=>setColor("Black")}
            className=" outline-none px-4 py-1 rounded-full text-white shadow-lg "
            style={{backgroundColor: "Black"}}
            >Black</button>
            <button
            onClick={()=>setColor("pink")} 
            className=" outline-none px-4 py-1 rounded-full text-balance shadow-lg "
            style={{backgroundColor: "pink"}}
            >Pink</button>
            <button
            onClick={()=>setColor("lavender")} 
            className=" outline-none px-4 py-1 rounded-full text-balance shadow-lg "
            style={{backgroundColor: "lavender"}}
            >Lavender</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

// The code written below has more readability and flexibility

// import { useState } from "react";

// function App() {
//   const [color, setColor] = useState("olive");

//   // Array of colors for the buttons
//   const colors = [
//     { name: "Red", value: "red" },
//     { name: "Green", value: "green" },
//     { name: "Yellow", value: "yellow" },
//     { name: "Blue", value: "blue" },
//     { name: "Orange", value: "orange" },
//     { name: "Skyblue", value: "skyblue" },
//     { name: "Black", value: "black" },
//     { name: "Pink", value: "pink" },
//     { name: "Lavender", value: "lavender" },
//     { name: "White", value: "white" },
//   ];

//   return (
//     <>
//       <div
//         className="w-full h-screen duration-200"
//         style={{ backgroundColor: color }}
//       >
//         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
//           <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//             {/* Loop through the colors array and create buttons dynamically */}
//             {colors.map((col) => (
//               <button
//                 key={col.value}
//                 onClick={() => setColor(col.value)}
//                 className="outline-none px-4 py-1 rounded-full text-balance shadow-lg"
//                 style={{ backgroundColor: col.value }}
//               >
//                 {col.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

