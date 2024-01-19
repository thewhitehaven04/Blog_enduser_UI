import { type UseQueryResult } from '@tanstack/react-query'
import { type TGenericResponse } from 'Client/base/types/responses'
import { QueryError } from 'Components/Common/QueryError'
import { type FC } from 'react'

export function withLoadingOnFetch<T>(component: FC<{ value: T }>) {
  return function ({
    status,
    data,
    error
  }: UseQueryResult<TGenericResponse<T>, Error>) {
    if (status === 'success' && data?.success) {
      return component({ value: data.data })
    } else if (status === 'pending') {
      return <span>Loading</span>
    }

    return <QueryError errorText={error?.message ?? 'Unknown error'} />
  }
}
