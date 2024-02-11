import { type UseQueryResult } from '@tanstack/react-query'
import { type ISuccessfulResponse } from 'Client/base/types/responses'
import { SectionLoading } from 'Components/Common/SectionLoading'
import { type FC } from 'react'

export function withLoadingOnInitialFetch<T>(component: FC<{ value: T }>) {
  return function ({
    isSuccess,
    data
  }: UseQueryResult<ISuccessfulResponse<T>, Error>) {
    if (isSuccess) {
      return component({ value: data.data })
    } 
    
    return <SectionLoading />
  }
}
