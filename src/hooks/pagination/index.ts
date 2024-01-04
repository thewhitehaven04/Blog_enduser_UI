import { type IPaginationParams } from 'Hooks/pagination/types'
import { PaginationSchema } from 'Hooks/pagination/validation'
import { useSearchParams } from 'react-router-dom'

export function usePagination(): IPaginationParams {
  const [searchParams] = useSearchParams()

  return PaginationSchema.validateSync(
    Object.fromEntries(searchParams.entries())
  )
}