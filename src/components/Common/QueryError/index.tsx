import { type IQueryErrorProps } from 'Components/Common/QueryError/types'

export function QueryError({ errorText }: IQueryErrorProps): JSX.Element {
  return <span>An error took place when fetching data: {errorText}</span>
}
