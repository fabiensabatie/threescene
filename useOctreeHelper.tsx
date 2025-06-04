import { useEffect } from 'react'
import { OctreeHelper } from 'three/examples/jsm/helpers/OctreeHelper'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { Octree } from 'three/examples/jsm/math/Octree'

export default function useOctreeHelper(octree: Octree): void {
  //console.log('in useOctreeHelper')
  const { scene } = useThree()
  useEffect(() => {
    console.log('new OctreeHelper')
    const helper = new OctreeHelper(octree, 'hotpink')
    helper.name = 'octreeHelper'
    scene.add(helper)
    return () => {
      console.log('removing OctreeHelper')
      scene.remove(helper)
    }
  }, [octree, scene])

  useControls('Octree Helper', {
    visible: {
      value: false,
      onChange: (v: boolean) => {
        const octreeHelper = scene.getObjectByName('octreeHelper')
        if (octreeHelper) {
          octreeHelper.visible = v
        }
        //if (document.getElementById('Octree Helper.visible')) document.getElementById('Octree Helper.visible').blur()
      }
    }
  })
} 