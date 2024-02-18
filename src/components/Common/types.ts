export type TContainerAlignment = 'center' | 'stretch' | 'start' | 'end' | 'baseline'

export type TContainerJustify =
  | 'spread'
  | 'evenly'
  | 'between'
  | 'start'
  | 'end'
  | 'center'

export type TContainerSpacing = 'xs' | 's' | 'm' | 'l'

export type TContainerPadding = 'xs' | 's' | 'm' | 'l'

export interface IContainerProps {
  $alignment?: TContainerAlignment
  $justify?: TContainerJustify
  $spacing?: TContainerSpacing 
  $pad?: TContainerPadding
  $wrap?: boolean
}
