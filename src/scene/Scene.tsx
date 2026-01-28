import { Vector3 } from "three";
import { useRef } from "react";
import { Text, Text3D } from "@react-three/drei";
import PlayerModel from '../components/canvas/PlayerModel';
import BoxModel from '../components/canvas/BoxModel';
import useTerrainClick from '../components/hooks/useTerrainClick';
import TerrainModel from '../components/canvas/TerrainModel';
import usePlayerMovement from '../components/hooks/usePlayerMovement';

const Scene = () => {
  const modelRef = useRef();
  const boxMeshRef = useRef();
  const terrainRef = useRef();
  const pointerCoordinates = useRef(new Vector3());
  const speed = 1.5;

  const handlepointerCoordinates = (coordinates) => {
    pointerCoordinates.current.copy(coordinates);
  }

  useTerrainClick(terrainRef, handlepointerCoordinates);
  usePlayerMovement(speed, modelRef, pointerCoordinates);
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[5, 10, 5]} />
      <gridHelper args={[100, 100]} />

      
      <TerrainModel terrainRef={terrainRef} />
      <BoxModel position={[1.5, 0.5, 0.5]} meshRef={boxMeshRef} />
      <PlayerModel modelRef={modelRef} pointerCoordinates={pointerCoordinates} />
    </>
  );
};

export default Scene;