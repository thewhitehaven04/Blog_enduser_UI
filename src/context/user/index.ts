import { type IUserContext } from 'Context/user/types'
import { createContext } from 'react'

export const UserContext = createContext<IUserContext | null>(null)