import { type Payload } from '@/typings/jwtDecode'
import { UserContext } from 'Context/user'
import { type IUserContext } from 'Context/user/types'
import { getAccessToken } from 'Service/accessToken'
import { jwtDecode } from 'jwt-decode'
import { useEffect, type PropsWithChildren, useState } from 'react'

export function UserContextProvider({
  children
}: PropsWithChildren): JSX.Element {
  const [user, setUser] = useState<null | IUserContext>(null)

  useEffect(() => {
    const token = getAccessToken()

    if (token != null) {
      setUser(jwtDecode<Payload>(token))
    }
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
