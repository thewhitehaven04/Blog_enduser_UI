import { RippleButton } from 'Components/Common/Button'
import { Row } from 'Components/Common/Styles/Flex/Row'
import { UserInformation } from '../UserInformation'
import {
  useUserContext,
  useUserDispatchContext
} from '../UserContextProvider/hooks/contextUser'
import type { IHeaderBarProps } from './types'
import * as SC from './styles'

export function HeaderBar({
  handleShowLoginModal,
  handleShowSignupModal
}: IHeaderBarProps): JSX.Element {
  const user = useUserContext()
  const { handleLogout } = useUserDispatchContext()

  return (
    <SC.TopbarWrapper>
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
            <RippleButton type='button' onClick={handleShowSignupModal}>
              Sign up
            </RippleButton>
          </Row>
        )}
      </Row>
    </SC.TopbarWrapper>
  )
}
