import { UserSetContext } from 'Context/user'
import { type IUserContext } from 'Context/user/types'
import { type Dispatch, useContext } from 'react'

export function useSetUserContext(): Dispatch<IUserContext> {
  const dispatch = useContext(UserSetContext)

  if (dispatch == null) {
    throw new Error('Dispatch context must not be undefined')
  }

  return dispatch
}