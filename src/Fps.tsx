import React from 'react'
import { Stats, Environment, PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Game from './Game'
import Overlay from './Overlay'
import { Leva } from 'leva'

export default function FpsGame() {
  const rootStyle: React.CSSProperties = {
    height: '100%',
    margin: 0,
    background: '#000000'
  }

  const canvasStyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh'
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
        <Environment files="/img/rustig_koppie_puresky_1k.hdr" background />
        <Game />
        <PointerLockControls />
        <Stats />
      </Canvas>
      <Overlay />
      <Leva />
    </div>
  )
} 