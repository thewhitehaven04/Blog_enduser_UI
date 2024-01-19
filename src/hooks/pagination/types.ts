import { type SetURLSearchParams } from 'react-router-dom'

export interface IPaginationParams {
  count: number
  offset: number
}

export type TUsePagination = [IPaginationParams, SetURLSearchParams]