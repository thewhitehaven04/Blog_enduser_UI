import { type IDataResponse } from 'Client/base/types/responses'
import { QueryError } from 'Components/Common/QueryError'
import { type TQueryState } from 'Components/HOC/WithLoadingOnFetch/types'
import { type FC } from 'react'

export function WithLoadingOnFetch<T>(
  component: FC<{ value: T }>,
  state: TQueryState<IDataResponse<T>>
) {
  return function () {
    const { isPending, error, data } = state

    if (!isPending && error == null) {
      return component({ value: data })
    } else if (isPending) {
      return <span>Loading</span>
    }

    return <QueryError errorText={error} />
  }
}
