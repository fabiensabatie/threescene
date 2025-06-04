interface BallProps {
  radius: number;
}

export default function Ball({ radius }: BallProps) {
  return (
    <mesh castShadow>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshStandardMaterial />
      {/* <meshNormalMaterial wireframe /> */}
    </mesh>
  )
} 