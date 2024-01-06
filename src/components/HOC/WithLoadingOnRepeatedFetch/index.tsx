import {
  type InfiniteData,
  type UseInfiniteQueryResult
} from '@tanstack/react-query'
import { type IDataResponse } from 'Client/base/types/responses'
import { QueryError } from 'Components/Common/QueryError'
import { Fragment, type FC } from 'react'

export function withLoadingOnPageFetch<T>(component: FC<{ pageEntry: T }>) {
  return function ({
    status,
    data,
    error
  }: UseInfiniteQueryResult<InfiniteData<IDataResponse<T>, unknown>, Error>) {
    if (status === 'pending') return <span>Loading</span>
    else if (status === 'success') {
      return data.pages.map((page, index) =>
        page.success ? (
          <Fragment key={index}>{component({ pageEntry: page.data })}</Fragment>
        ) : (
          <QueryError
            key={index}
            errorText='Error when attempting to load page data'
          />
        )
      )
    }

    return <QueryError errorText={error.message ?? ''} />
  }
}
