import {
  type TUsePagination,
  type IPaginationParams
} from 'Hooks/pagination/types'
import { PaginationSchema } from 'Hooks/pagination/validation'
import { useSearchParams } from 'react-router-dom'

export function usePagination(): TUsePagination {
  const [searchParams, setSearchParams] = useSearchParams()

  const validatedSearchParams: IPaginationParams =
    PaginationSchema.validateSync(Object.fromEntries(searchParams.entries()))
  return [validatedSearchParams, setSearchParams]
}
