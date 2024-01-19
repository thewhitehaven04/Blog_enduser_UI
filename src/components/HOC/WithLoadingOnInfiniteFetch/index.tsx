import { type TPaginatedResponse } from 'Client/base/types/responses'
import { QueryError } from 'Components/Common/QueryError'
import { type TUseAccumulatedQueryResult } from 'Hooks/queries/comments/types'
import { type FC } from 'react'

export function withLoadingOnAccumulatedPageFetch<T>(component: FC<T>) {
  return function ({
    status,
    accumulatedPage,
    error
  }: TUseAccumulatedQueryResult<TPaginatedResponse<T>>) {
    if (status === 'pending') return <span>Loading</span>
    else if (status === 'success' && accumulatedPage?.success === true) {
      return accumulatedPage.data.map((entry) => component(entry))
    }

    return <QueryError errorText={error?.message ?? ''} />
  }
}
