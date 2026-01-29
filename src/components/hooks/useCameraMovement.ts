import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

const useCameraMovement = (playerModelRef) => {
  const { camera } = useThree();
  const nextPos = new Vector3();
  
  useFrame((_, delta) => {
    const playerPos = playerModelRef.current.position;
    nextPos.set(playerPos.x + 3, playerPos.y + 5, playerPos.z + 3);
    camera.position.lerp(nextPos, delta);
  });
};

export default useCameraMovement;