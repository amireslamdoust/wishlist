import { useEffect } from 'react'

export const useKeyDown = (handleKeydown: any) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown, false)
    return () => {
      document.removeEventListener('keydown', handleKeydown, false)
    }
  }, [handleKeydown])
}
