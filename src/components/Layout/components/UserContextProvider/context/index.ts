import type {
  IUserContext,
  IUserDispatchContext
} from 'Components/Layout/components/UserContextProvider/context/types'
import { createContext } from 'react'

export const UserContext = createContext<IUserContext | null>(null)

export const UserDispatchContext = createContext<IUserDispatchContext | undefined>(
  undefined
)
