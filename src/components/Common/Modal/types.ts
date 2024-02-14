import { type ReactNode } from 'react'

export interface IModalProps {
  title: string
  subtitle?: string
  handleClose?: () => void
  children: ReactNode 
  containerWidthPx?: number
}