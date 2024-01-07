import { type IUserContext } from 'Context/user/types'
import { type Dispatch, createContext } from 'react'

export const UserContext = createContext<IUserContext | null>(null)

export const UserSetContext = createContext<Dispatch<IUserContext> | undefined>(
  undefined
)
