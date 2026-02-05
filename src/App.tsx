import { Canvas } from "@react-three/fiber";
import Scene from "./scene/Scene";
import { useState } from "react";
import CV from "./components/modal/CV";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative w-screen h-screen">      
      <CV isOpen={isOpen} setIsOpen={setIsOpen} />
      <Canvas 
        camera={{ position: [3, 5, 3] }} 
        shadows 
        className={`${isOpen && "blur-xs"}`}
      >
        <Scene isOpen={isOpen} handleOpen={handleOpen} />
      </Canvas>
    </div>
  );
};

export default App;