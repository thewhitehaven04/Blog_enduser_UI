import { Outlet } from 'react-router'
import * as SC from './styles'
import { Row } from 'Components/Common/Styles/Row/styles'
import { useUserContext } from 'Hooks/context/user'
import { useState } from 'react'
import { LoginForm } from 'Components/Login/LoginForm'

export function AppLayout(): JSX.Element {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false)

  const user = useUserContext()

  const handleLoginButtonClick = (): void => {
    setShowLoginForm(true)
  }

  const handleClose = (): void => {
    setShowLoginForm(false)
  }

  return (
    <>
      {showLoginForm && user == null && <LoginForm handleClose={handleClose} />}
      <nav>
        <Row>
          {user != null ? (
            <>
              <span>{user.email}</span>
              <span>{user.username}</span>{' '}
            </>
          ) : (
            <button type='button' onClick={handleLoginButtonClick}>
              Login
            </button>
          )}
        </Row>
      </nav>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </>
  )
}
