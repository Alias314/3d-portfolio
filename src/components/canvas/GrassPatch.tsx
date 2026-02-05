import { useEffect, useState } from 'react'
import Grass from './grass';
import { getRandomCoordinate, getRandomRotation } from '../../utils/math';
import { useFrame } from '@react-three/fiber';
import { Clock } from 'three';

const GrassPatch = ({ position }) => {
  const [grassList, setGrassList] = useState([]);
  const amountGrass = 1000;

  useEffect(() => {
    const newGrassList = Array.from({ length: amountGrass }, (_, index) => {
      return {
        id: index,
        position: getRandomCoordinate(10), 
        rotation: getRandomRotation(360) 
      }
    });

    setGrassList(newGrassList);
  }, []);

  return (
    <group position={position}>
      {grassList.map((grass) => (
        <Grass 
          key={grass.id}
          position={grass.position}
          rotation={grass.rotation}
        />
      ))}
    </group>
  );
};

export default GrassPatch;