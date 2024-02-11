import { type UseQueryResult } from '@tanstack/react-query'
import { type ISuccessfulResponse } from 'Client/base/types/responses'
import { SectionLoading } from 'Components/Common/SectionLoading'
import { EToastType } from 'Hooks/context/toaster/types'
import { useToasterEnqueue } from 'Hooks/toasterEnqueue'
import { useEffect, type FC } from 'react'

export function withLoadingOnFetch<T>(component: FC<{ value: T }>) {
  return function ({
    isFetching,
    isSuccess,
    error,
    data
  }: UseQueryResult<ISuccessfulResponse<T>, Error>) {
    const { toast } = useToasterEnqueue()

    useEffect(() => {
        if (error != null) {
          toast({ type: EToastType.ERROR, text: error.message })
        }
    }, [error, toast])

    if (isSuccess) {
      return component({ value: data.data })
    } else if (isFetching) {
      return <SectionLoading />
    }

    return null
  }
}
