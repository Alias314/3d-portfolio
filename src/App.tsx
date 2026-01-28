import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Scene from "./scene/Scene";

function App() {
  return (
    <div className="relative w-screen h-screen">      
      <Canvas camera={{ position: [3, 5, 3] }} shadows>
        <Scene />
      </Canvas>
    </div>
  );
};

export default App;