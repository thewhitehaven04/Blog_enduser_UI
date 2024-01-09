import { Outlet } from 'react-router'
import * as SC from './styles'
import { Row } from 'Components/Common/Styles/Row/styles'
import { useUserContext } from 'Hooks/context/user'
import { useState } from 'react'
import { LoginForm } from 'Components/Login/LoginForm'
import { Column } from 'Components/Common/Styles/Column/styles'
import { EModalShown } from 'Components/Layout/types'
import { SignUpForm } from 'Components/SignUp/SignupForm'

export function AppLayout(): JSX.Element {
  const [showModalType, setShowModalType] = useState<EModalShown>(
    EModalShown.OFF
  )

  const user = useUserContext()

  const handleShowLoginModal = (): void => {
    setShowModalType(EModalShown.LOGIN)
  }

  const handleShowSignUpModal = (): void => {
    setShowModalType(EModalShown.SIGNUP)
  }

  const handleClose = (): void => {
    setShowModalType(EModalShown.OFF)
  }

  return (
    <>
      {showModalType === EModalShown.LOGIN && user == null && (
        <LoginForm
          closeHandler={handleClose}
          switchToSignUpHandler={handleShowSignUpModal}
        />
      )}
      {showModalType === EModalShown.SIGNUP && user == null && (
        <SignUpForm
          closeHandler={handleClose}
          switchToLoginHandler={handleShowLoginModal}
        />
      )}
      <nav>
        <Row $justify='end'>
          {user != null ? (
            <Column $alignment='end'>
              <span>{user.email}</span>
              <span>{user.username}</span>{' '}
            </Column>
          ) : (
            <button type='button' onClick={handleShowLoginModal}>
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
