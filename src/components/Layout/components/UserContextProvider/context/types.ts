export interface IUserContext {
  username: string
  email: string
}

export interface IUserDispatchContext {
  handleLogout: () => void
  handleLogin: (token: string) => void
}