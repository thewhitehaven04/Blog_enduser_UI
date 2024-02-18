import type { IUserContext } from 'Components/Layout/components/UserContextProvider/context/types'
import { createContext, type Dispatch } from 'react'


export const UserContext = createContext<IUserContext | null>(null)

export const UserSetContext = createContext<Dispatch<IUserContext | null> | undefined>(
  undefined
)