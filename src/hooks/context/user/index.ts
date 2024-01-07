import { UserContext } from 'Context/user'
import { type IUserContext } from 'Context/user/types'
import { useContext } from 'react'

export function useUserContext(): IUserContext | null {
  return useContext(UserContext)
}
