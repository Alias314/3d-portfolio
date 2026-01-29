import { DoubleSide } from "three";

const TerrainModel = ({ terrainRef }) => {
  return (
    <mesh ref={terrainRef} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color={"#fff"} side={DoubleSide} />
    </mesh>
  );
};

export default TerrainModel;
