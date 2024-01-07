import { type JwtPayload } from 'jwt-decode'

export interface Payload extends JwtPayload {
  id: string
  username: string
  email: string
}