import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const usePlayerMovement = (speed, meshRef, pointerCoordinates) => {
  const currentPos = new Vector3();
  const targetPos = new Vector3();
  const direction = new Vector3();
  
  useFrame((_, delta) => {
    currentPos.set(meshRef.current.position.x, 0, meshRef.current.position.z);
    targetPos.set(pointerCoordinates.current.x, 0, pointerCoordinates.current.z);

    if (currentPos.distanceTo(targetPos) < 0.01) return;
    direction.subVectors(targetPos, currentPos).normalize();
    meshRef.current.position.x += direction.x * delta * speed;
    meshRef.current.position.z += direction.z * delta * speed;
    meshRef.current.lookAt(targetPos);
  });
};

export default usePlayerMovement;