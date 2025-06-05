import { useMemo } from 'react'
import { Octree } from 'three/examples/jsm/math/Octree'
import { Scene } from 'three'

export default function useOctree(scene: Scene): Octree {
  //console.log('in useOctree')
  const octree = useMemo(() => {
    console.log('new Octree')
    return new Octree().fromGraphNode(scene)
  }, [scene])

  return octree
} 