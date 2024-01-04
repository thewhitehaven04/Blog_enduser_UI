export interface IGenericError {
  message: string
} 

export type TResponseError = IGenericError[]

interface IErrorResponse {
  success: false
  errors: TResponseError 
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