
const BoxModel = ({ position, meshRef }) => {  
  return (
    <mesh ref={meshRef} position={position} castShadow>
      <boxGeometry />
      <meshStandardMaterial color={"gray"} />
    </mesh>
  )
}

export default BoxModel;