import { type Payload } from '@/typings/jwtDecode'
import { UserContext, UserDispatchContext } from './context'
import { type IUserContext } from 'Components/Layout/components/UserContextProvider/context/types'
import {
  clearAccessToken,
  getAccessToken,
  storeAccessToken
} from 'Service/accessToken'
import { jwtDecode } from 'jwt-decode'
import { useEffect, type PropsWithChildren, useState } from 'react'

export function UserContextProvider({
  children
}: PropsWithChildren): JSX.Element {
  const [user, setUser] = useState<null | IUserContext>(null)

  const handleLogout = (): void => {
    clearAccessToken()
    setUser(null)
  }

  const handleLogin = (token: string): void => {
    storeAccessToken(token)
    setUser(jwtDecode<IUserContext>(token))
  }

  useEffect(() => {
    const token = getAccessToken()

    if (token != null) {
      setUser(jwtDecode<Payload>(token))
    }
  }, [])

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={{handleLogin, handleLogout}}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}
