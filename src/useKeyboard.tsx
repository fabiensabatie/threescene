import { useEffect, useRef } from 'react'

interface KeyMap {
  [key: string]: boolean;
}

export default function useKeyboard(): KeyMap {
  const keyMap = useRef<KeyMap>({})

  useEffect(() => {
    const onDocumentKey = (e: KeyboardEvent) => {
      keyMap.current[e.code] = e.type === 'keydown'      
    }
    document.addEventListener('keydown', onDocumentKey)
    document.addEventListener('keyup', onDocumentKey)
    return () => {
      document.removeEventListener('keydown', onDocumentKey)
      document.removeEventListener('keyup', onDocumentKey)
    }
  })

  return keyMap.current
} 