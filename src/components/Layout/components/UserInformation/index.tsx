import { Column } from 'Components/Common/Styles/Column'
import { type IUserInformation } from 'Components/Layout/components/UserInformation/types'
import * as SC from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'

export function UserInformation({
  email,
  username
}: IUserInformation): JSX.Element {
  return (
    <SC.Wrapper>
      <SC.UserIconWrapper>
        <FontAwesomeIcon size='lg' icon={faUser} />
      </SC.UserIconWrapper>
      <Column $alignment='start'>
        <span>{email}</span>
        <span>{username}</span>
      </Column>
    </SC.Wrapper>
  )
}
