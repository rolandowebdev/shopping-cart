import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react'
import { useLocalStorage } from '@/hooks'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContextProps = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export const useShoppingCart = () => useContext(ShoppingCartContext)

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const getItemQuantity = useCallback(
    (id: number) => cartItems.find((item) => item.id === id)?.quantity || 0,
    [cartItems]
  )

  const increaseCartQuantity = useCallback(
    (id: number) => {
      setCartItems((currentItems) => {
        if (currentItems.find((item) => item.id === id) == null)
          return [...currentItems, { id, quantity: 1 }]
        return currentItems.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity + 1 }
          return item
        })
      })
    },
    [setCartItems]
  )

  const decreaseCartQuantity = useCallback(
    (id: number) => {
      setCartItems((currentItems) => {
        if (currentItems.find((item) => item.id === id)?.quantity === 1)
          return currentItems.filter((item) => item.id !== id)
        return currentItems.map((item) => {
          if (item.id === id) return { ...item, quantity: item.quantity - 1 }
          return item
        })
      })
    },
    [setCartItems]
  )

  const removeFromCart = useCallback(
    (id: number) => {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.id !== id)
      )
    },
    [setCartItems]
  )

  const value = useMemo(
    () => ({
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      cartItems,
      cartQuantity,
    }),
    [
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      cartItems,
      cartQuantity,
    ]
  )

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
