import { Outlet } from 'react-router'
import * as SC from './styles'
import { Row } from 'Components/Common/Styles/Row/styles'
import { useUserContext } from 'Hooks/context/user'
import { useState } from 'react'
import { LoginForm } from 'Components/Login/LoginForm'
import { Column } from 'Components/Common/Styles/Column/styles'

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
        <Row $justify='end'>
          {user != null ? (
            <Column $alignment='end'>
              <span>{user.email}</span>
              <span>{user.username}</span>{' '}
            </Column>
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
