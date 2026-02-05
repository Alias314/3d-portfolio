import { Vector3 } from "three";
import { useRef, useState } from "react";
import PlayerModel from '../components/canvas/PlayerModel';
import BoxModel from '../components/canvas/BoxModel';
import useTerrainClick from '../components/hooks/useTerrainClick';
import TerrainModel from '../components/canvas/TerrainModel';
import usePlayerMovement from '../components/hooks/usePlayerMovement';
import useCameraMovement from "../components/hooks/useCameraMovement";
import GrassPatch from "../components/canvas/GrassPatch";

const Scene = ({ isOpen, handleOpen }) => {
  const modelRef = useRef();
  const boxMeshRef = useRef();
  const terrainRef = useRef();
  const pointerCoordinates = useRef(new Vector3());
  const [enableTerrainClick, setEnableTerrainClick] = useState(true);
  const speed = 1.5;

  const handlePointerCoordinates = (coordinates) => {
    pointerCoordinates.current.copy(coordinates);
  };

  useTerrainClick(terrainRef, enableTerrainClick, isOpen, handlePointerCoordinates);
  usePlayerMovement(speed, modelRef, pointerCoordinates);
  useCameraMovement(modelRef);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[-5, 10, 6]} />
      <gridHelper args={[100, 100]} />
      
      <TerrainModel terrainRef={terrainRef} />
      <BoxModel 
        position={[1.5, 0.55, -1]} 
        meshRef={boxMeshRef} 
        title={"Resume"}
        handleOpen={handleOpen}
        setEnableTerrainClick={setEnableTerrainClick}
      />
      <PlayerModel modelRef={modelRef} />

      <GrassPatch position={[1, 0, 0]} />
    </>
  );
};

export default Scene;