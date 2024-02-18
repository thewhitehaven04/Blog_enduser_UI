import { UserContext } from 'Components/Layout/components/UserContextProvider/context'
import type {
  IUserContext,
  IUserDispatchContext
} from 'Components/Layout/components/UserContextProvider/context/types'
import { useContext } from 'react'
import { UserDispatchContext } from '../context'

export function useUserContext(): IUserContext | null {
  return useContext(UserContext)
}

export function useUserDispatchContext(): IUserDispatchContext {
  const userDispatchContext = useContext(UserDispatchContext)

  if (userDispatchContext != null) {
    return userDispatchContext
  }

  throw new Error('UserSet context must be used within UserSetContext provider')
}
