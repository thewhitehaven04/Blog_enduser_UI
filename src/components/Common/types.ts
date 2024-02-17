export type TContainerAlignment = 'center' | 'stretch' | 'start' | 'end'

export type TContainerJustify =
  | 'spread'
  | 'evenly'
  | 'between'
  | 'start'
  | 'end'
  | 'center'

export type TContainerGap = 'xs' | 's' | 'm' | 'l'

export type TContainerPadding = 'xs' | 's' | 'm' | 'l'

export interface IContainerProps {
  $alignment?: TContainerAlignment
  $justify?: TContainerJustify
  $gap?: TContainerGap 
  $pad?: TContainerPadding
}
