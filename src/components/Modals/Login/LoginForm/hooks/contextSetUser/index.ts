import { useUserSetContext } from 'Components/Layout/components/UserContextProvider/hooks/contextUser'
import { type IUserContext } from 'Components/Layout/components/UserContextProvider/context/types'
import { type Dispatch } from 'react'

export function useSetUserContext(): Dispatch<IUserContext> {
  const dispatch = useUserSetContext()

  if (dispatch == null) {
    throw new Error('Dispatch context must not be undefined')
  }

  return dispatch
}