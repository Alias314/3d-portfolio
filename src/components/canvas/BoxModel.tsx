import { Outlines, Text } from "@react-three/drei";
import { useState } from "react";

const BoxModel = ({ position, meshRef, title, handleOpen, setEnableTerrainClick }) => {  
  const [showOutline, setShowOutline] = useState(false);

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      castShadow
      onPointerDown={() => handleOpen()}
      onPointerEnter={() => {
        setShowOutline(true);
        setEnableTerrainClick(false);
      }}
      onPointerLeave={() => {
        setShowOutline(false);
        setEnableTerrainClick(true);
      }}
    >
      <boxGeometry />
      <meshStandardMaterial color={"gray"} />
      {showOutline && 
        <>
          <Outlines opacity={0} thickness={3} color={"#fff"} />
          
          <Text 
            position={[0, 1, 0]}
            fontSize={0.5}
            fontWeight={700}
            color={"white"}
          >
            {title}
          </Text>
        </>
      }
    </mesh>
  );
};

export default BoxModel;