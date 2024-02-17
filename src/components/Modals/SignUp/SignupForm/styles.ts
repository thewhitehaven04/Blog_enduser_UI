import { Column } from 'Components/Common/Styles/Column'
import styled from 'styled-components'

export const FormContent = styled.div`
  grid-area: content;
  padding: 8px;

  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const FormErrors = styled.div`
  grid-area: errors;
`

export const FormFields = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`