type ValueInitializer<T> = T | (() => T)

export const getValueFromLocalStorage = <T>(
  key: string,
  initialValue: ValueInitializer<T>
): T => {
  const storedValue = JSON.parse(localStorage.getItem(key) || 'null')

  if (typeof storedValue !== 'undefined') return storedValue
  if (typeof initialValue === 'function') return (initialValue as () => T)()

  return initialValue
}
