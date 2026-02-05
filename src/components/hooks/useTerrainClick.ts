import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react'

const useTerrainClick = ( terrainRef, enableTerrainClick, isOpen, handlePointerPosition ) => {
  const { raycaster, pointer, camera } = useThree();
  const intersects = useRef([]);

  useFrame(() => {
    raycaster.setFromCamera(pointer, camera);
    intersects.current = raycaster.intersectObject(terrainRef.current, true);
  });

  useEffect(() => {
    if (isOpen || !enableTerrainClick) return;
    const handleKeyDown = (e) => {
      e.button === 0 && intersects.current[0] && handlePointerPosition(intersects.current[0].point);
    }

    window.addEventListener("mousedown", handleKeyDown);
    return () => window.removeEventListener("mousedown", handleKeyDown);
  }, [isOpen, enableTerrainClick]);
};

export default useTerrainClick;