export enum EToastType {
  SUCCESS,
  ERROR,
  INFO
}

export interface IToastInstance {
  type: EToastType
  text: string
}
