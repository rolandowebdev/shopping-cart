import { useEffect, useState } from 'react'
import { getValueFromLocalStorage } from '@/utilities/getValueLocalStorage'

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() =>
    getValueFromLocalStorage(key, initialValue)
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}
