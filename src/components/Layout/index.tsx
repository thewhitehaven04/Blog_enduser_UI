import { Outlet } from 'react-router'
import * as SC from './styles'
import { Row } from 'Components/Common/Styles/Row/styles'
import { useUserContext } from 'Hooks/context/user'
import { useState } from 'react'
import { LoginForm } from 'Components/Login/LoginForm'
import { EModalShown } from 'Components/Layout/types'
import { SignUpForm } from 'Components/SignUp/SignupForm'
import { UserInformation } from 'Components/UserInformation'
import { Button } from 'Components/Button/styles'

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
      <SC.TopbarWrapper $alignment='center' $justify='between'>
        <Row $justify='start'>
          <SC.HeaderLink to='/posts'>All posts</SC.HeaderLink>
        </Row>
        <Row $justify='end'>
          {user != null ? (
            <UserInformation {...user} />
          ) : (
            <SC.ButtonWrapper>
              <Button type='button' onClick={handleShowLoginModal}>
                Login
              </Button>
              <Button type='button' onClick={handleShowSignUpModal}>
                Sign up
              </Button>
            </SC.ButtonWrapper>
          )}
        </Row>
      </SC.TopbarWrapper>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </>
  )
}
