import React from 'react'

export default function Overlay() {
  const instructionsStyle: React.CSSProperties = {
    color: 'white',
    position: 'absolute',
    left: '100px',
    top: '10px',
    fontFamily: 'monospace',
    textShadow: '1px 1px 2px black'
  }

  return (
    <div style={instructionsStyle}>
      W,A,S,D to move.
      <br />
      Space to jump.
      <br />
      Mouse click to shoot.
    </div>
  )
} 