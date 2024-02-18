import { UserContext } from 'Components/Layout/components/UserContextProvider/context'
import type { IUserContext } from 'Components/Layout/components/UserContextProvider/context/types'
import { useContext, type Dispatch } from 'react'
import { UserSetContext } from '../context'

export function useUserContext(): IUserContext | null {
  return useContext(UserContext)
}

export function useUserSetContext(): Dispatch<IUserContext | null> {
  const userSetContext = useContext(UserSetContext)

  if (userSetContext != null) {
    return userSetContext
  }

  throw new Error('UserSet context must be used within UserSetContext provider')
}
