import { type UseInfiniteQueryResult } from '@tanstack/react-query'
import { QueryError } from 'Components/Common/QueryError'
import { type IPaginatedData } from 'Components/HOC/WithLoadingOnInfiniteFetch/types'
import { Fragment, type FC } from 'react'

export function withLoadingOnPageFetch<T>(component: FC<T[]>) {
  return function ({
    status,
    data,
    error
  }: UseInfiniteQueryResult<IPaginatedData<T>, Error>) {
    if (status === 'pending') return <span>Loading</span>
    else if (status === 'success') {
      return data.pages.map((page, index) => (
        <Fragment key={index}>{component(page)}</Fragment>
      ))
    }

    return <QueryError errorText={error.message ?? ''} />
  }
}
