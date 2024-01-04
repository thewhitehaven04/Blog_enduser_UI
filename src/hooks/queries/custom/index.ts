import {
  type QueryClient,
  type UndefinedInitialDataOptions,
  useQuery,
  type DefaultError,
  type QueryKey
} from '@tanstack/react-query'
import { type IDataResponse } from 'Client/base/types/responses'
import { useState } from 'react'

export function useQueryCustom<
  T,
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = IDataResponse<T>,
  TQueryKey extends QueryKey = QueryKey
>(
  options: UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient
): void {
  const [serverErrors, setServerErrors] = useState<boolean | null>(null)

  const query = useQuery(options, queryClient)
  const { data } = query

  if (data != null && data.) {
    setServerErrors(errors)
  }
}
