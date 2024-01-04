import { number, object } from 'yup'

export const PaginationSchema = object({
  offset: number()
    .integer()
    .min(0, 'Offset must be a non-negative integer number')
    .default(0),
  count: number()
    .integer()
    .min(1, 'Count must be a positive integer number')
    .default(5)
})