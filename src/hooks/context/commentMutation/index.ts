import type { ICommentMutationContext } from 'Components/ContextProviders/CommentMutation/types'
import { createContext, useContext } from 'react'

export const CommentMutationContext = createContext<ICommentMutationContext | null>(null)

export function UseCommentMutationContext(): ICommentMutationContext {
  const context = useContext(CommentMutationContext)

  if (context != null) {
    return context 
  }
  
  throw new Error('CommentMutationContext must be used within the respective provider!')
}