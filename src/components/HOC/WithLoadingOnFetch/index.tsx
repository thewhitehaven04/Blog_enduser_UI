import { type UseQueryResult } from '@tanstack/react-query'
import { type TGenericResponse } from 'Client/base/types/responses'
import { QueryError } from 'Components/Common/QueryError'
import { SectionLoading } from 'Components/Common/SectionLoading'
import { type FC } from 'react'

export function withLoadingOnInitialFetch<T>(component: FC<{ value: T }>) {
  return function ({
    isSuccess,
    isLoading,
    data,
    error
  }: UseQueryResult<TGenericResponse<T>, Error>) {
    if (isSuccess && data?.success) {
      return component({ value: data.data })
    } else if (isLoading) {
      return <SectionLoading />
    }

    return <QueryError errorText={error?.message ?? 'Something went wrong'} />
  }
}
