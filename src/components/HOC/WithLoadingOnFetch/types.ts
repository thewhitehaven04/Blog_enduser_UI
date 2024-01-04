interface TSuccessfulQueryState<T> {
  isPending: false
  data: T
  error: null
}

interface TErroneousQueryState {
  isPending: false
  data: null
  error: string
}

interface TLoadingQueryState {
  isPending: true
  data: null
  error: null
}

export type TQueryState<T> =
  | TSuccessfulQueryState<T>
  | TErroneousQueryState
  | TLoadingQueryState