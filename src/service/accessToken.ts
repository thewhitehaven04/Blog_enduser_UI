const TOKEN_LOCAL_STORAGE_KEY = 'AppTokenString'

export function storeAccessToken(token: string): void {
  localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, token)
}

export function getAccessToken(): string | null {
  return localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY)
}

export function clearAccessToken(): void {
  localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY)
}