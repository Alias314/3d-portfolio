import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react'

const useTerrainClick = ( terrainRef, handlePointerPosition ) => {
  const { raycaster, pointer, camera } = useThree();
  const intersects = useRef([]);

  useFrame(() => {
    raycaster.setFromCamera(pointer, camera);
    intersects.current = raycaster.intersectObject(terrainRef.current, true);
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.button === 0 && intersects.current[0] && handlePointerPosition(intersects.current[0].point);
    }

    window.addEventListener("mousedown", handleKeyDown);
    return () => window.removeEventListener("mousedown", handleKeyDown);
  }, []);
};

export default useTerrainClick;