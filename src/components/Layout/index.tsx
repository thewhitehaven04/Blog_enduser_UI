import { Outlet } from 'react-router'
import * as SC from './styles'
import { Row } from 'Components/Common/Styles/Flex/Row'
import {
  useUserContext,
  useUserSetContext
} from './components/UserContextProvider/hooks/contextUser'
import { useState } from 'react'
import { LoginForm } from 'Components/Modals/Login/LoginForm'
import { EModalShown } from 'Components/Layout/types'
import { SignUpForm } from 'Components/Modals/SignUp/SignupForm'
import { UserInformation } from 'Components/Layout/components/UserInformation'
import { RippleButton } from 'Components/Common/Button'
import { LinkLikeButton } from 'Components/Common/LinkLikeButton/styles'
import { clearAccessToken } from 'Service/accessToken'

export function AppLayout(): JSX.Element {
  const [showModalType, setShowModalType] = useState<EModalShown>(
    EModalShown.OFF
  )

  const user = useUserContext()
  const setUser = useUserSetContext()

  const handleShowLoginModal = (): void => {
    setShowModalType(EModalShown.LOGIN)
  }

  const handleShowSignUpModal = (): void => {
    setShowModalType(EModalShown.SIGNUP)
  }

  const handleClose = (): void => {
    setShowModalType(EModalShown.OFF)
  }

  const handleLogout = (): void => {
    clearAccessToken()
    setUser(null)
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
      <SC.TopbarWrapper $alignment='center' $justify='between' $pad='xs'>
        <Row $justify='start'>
          <SC.HeaderLink to='/posts'>All posts</SC.HeaderLink>
        </Row>
        <Row $justify='end'>
          {user != null ? (
            <Row $spacing='l'>
              <UserInformation {...user} />
              <RippleButton onClick={handleLogout}>Logout</RippleButton>
            </Row>
          ) : (
            <Row $spacing='s'>
              <RippleButton type='button' onClick={handleShowLoginModal}>
                Login
              </RippleButton>
              <RippleButton type='button' onClick={handleShowSignUpModal}>
                Sign up
              </RippleButton>
            </Row>
          )}
        </Row>
      </SC.TopbarWrapper>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </>
  )
}
