import { type IPaginationDto } from 'Client/base/types/pagination'

export interface IGenericError {
  message: string
}

interface IErrorResponse {
  success: false
  errors: IGenericError[] 
}

interface ISuccessfulResponse<T> {
  success: true
  data: T
}

export interface IDataResponse<T> {
  success: true
  data: NonNullable<T>
}

export type TGenericResponse<T = null> = ISuccessfulResponse<T> | IErrorResponse

interface ISuccessfulPaginatedResponse<T> {
  success: true
  data: T[]
  pagination: IPaginationDto
}

export type TPaginatedResponse<T> =
  | ISuccessfulPaginatedResponse<T>
  | IErrorResponse
