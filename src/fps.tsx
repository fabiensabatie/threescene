import React from 'react'
import { Environment, PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Game from './Game'

export default function FpsGame() {
  const rootStyle: React.CSSProperties = {
    height: '100%',
    margin: 0,
    background: '#000000'
  }

  const canvasStyle: React.CSSProperties = {
    width: '100%',
    height: '100%'
  }

  return (
    <div style={rootStyle}>
      <Canvas shadows style={canvasStyle}>
        <directionalLight
          intensity={1}
          castShadow={true}
          shadow-bias={-0.00015}
          shadow-radius={4}
          shadow-blur={10}
          shadow-mapSize={[2048, 2048]}
          position={[85.0, 80.0, 70.0]}
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
        />
        <Environment files="https://content.mext.app/courses/68413038bd1af4c76c20a154/model/rustig_koppie_puresky_1k.hdr" background />
        <Game />
        <PointerLockControls />
      </Canvas>
    </div>
  )
} 
