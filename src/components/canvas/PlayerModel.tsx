import { useFBX } from "@react-three/drei";

const PlayerModel = ({ modelRef }) => {
  const yBot = useFBX("/YBot.fbx");

  return (
    <primitive 
      ref={modelRef} 
      object={yBot} 
      scale={0.01} 
      position={[0, 0, 0]} 
    />
  );
};

export default PlayerModel;