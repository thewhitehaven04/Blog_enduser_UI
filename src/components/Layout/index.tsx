import { Outlet } from 'react-router'
import * as SC from './styles'
import { useState } from 'react'
import { LoginForm } from 'Components/Modals/Login/LoginForm'
import { EModalShown } from 'Components/Layout/types'
import { SignUpForm } from 'Components/Modals/SignUp/SignupForm'
import { HeaderBar } from './components/HeaderBar'
import { useUserContext } from './components/UserContextProvider/hooks/contextUser'

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
      <HeaderBar
        handleShowLoginModal={handleShowLoginModal}
        handleShowSignupModal={handleShowSignUpModal}
      />
      <SC.Main>
        <Outlet />
      </SC.Main>
    </>
  )
}
