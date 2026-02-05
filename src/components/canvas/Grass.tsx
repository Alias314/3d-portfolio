import { useTexture } from '@react-three/drei';
import vertexShader from '../../shaders/grass/vertex.glsl';
import fragmentShader from '../../shaders/grass/fragment.glsl';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { DoubleSide } from 'three';

const Grass = ({ position, rotation }) => {
  const shaderRef = useRef();
  const texture = useTexture("grass-alpha-map.png");

  const uniforms = useMemo(() => ({
    uTexture: { value: texture },
    uTime: { value: 0 }
  }), [texture]);
  
  useFrame((state) => {
    if (!shaderRef.current) return;
    uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh position={position} rotation={rotation} >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        depthWrite={false}
        side={DoubleSide}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Grass;