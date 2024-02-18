import { Column } from 'Components/Common/Styles/Flex/Column'
import { type IUserInformation } from 'Components/Layout/components/UserInformation/types'
import * as SC from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser'
import { Row } from 'Components/Common/Styles/Flex/Row'

export function UserInformation({
  email,
  username
}: IUserInformation): JSX.Element {
  return (
    <Row $alignment='center' $spacing='s'>
      <SC.UserIconWrapper>
        <FontAwesomeIcon size='lg' icon={faUser} cursor='pointer'/> 
      </SC.UserIconWrapper>
      <Column $alignment='start'>
        <span>{email}</span>
        <span>{username}</span>
      </Column>
    </Row>
  )
}
