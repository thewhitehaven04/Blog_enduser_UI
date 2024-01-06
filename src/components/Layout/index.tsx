import { Outlet } from 'react-router'
import * as SC from './styles'
import { Row } from 'Components/Common/Row/styles'

export function AppLayout(): JSX.Element {
  return (
    <>
      <nav>
        <Row>
          <span>Placeholder</span>
        </Row>
      </nav>
      <SC.Main>
        <Outlet />
      </SC.Main>
    </>
  )
}
