import { useState } from "react";
import { Index } from "./pages/Index/Index";
import Navbar from "./component/Navbar";


function App() {
  return (
    <div className="flex justify-betwee min-h-screen  bg-slate-300">
      <div >
        <Navbar />
      </div>
      <div >
        <Index />
      </div>
    </div>
  )
}

export default App;
