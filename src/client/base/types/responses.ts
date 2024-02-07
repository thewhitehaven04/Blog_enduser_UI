import { type IPaginationDto } from 'Client/base/types/pagination'

export interface IGenericError {
  message: string
}

interface IErrorResponse {
  success: false
  errors: IGenericError[] 
}

export interface ISuccessfulResponse<T> {
  success: true
  data: T
}

export type TGenericResponse<T = null> = ISuccessfulResponse<T> | IErrorResponse

export interface ISuccessfulPaginatedResponse<T> {
  success: true
  data: T[]
  pagination: IPaginationDto
}

export type TPaginatedResponse<T> =
  | ISuccessfulPaginatedResponse<T>
  | IErrorResponse
