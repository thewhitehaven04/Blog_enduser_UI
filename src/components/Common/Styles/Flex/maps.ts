import type { TContainerAlignment, TContainerJustify, TContainerPadding, TContainerSpacing } from 'Components/Common/types'

export const MapSpacing: Record<TContainerSpacing, string> = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px'
}

export const MapPadding: Record<TContainerPadding, string> = {
  'xs': '8px',
  's': '16px',
  'm': '24px',
  'l': '32px'
}

export const MapAlignment: Record<TContainerAlignment, string> = {
  center: 'center',
  stretch: 'stretch',
  start: 'flex-start',
  end: 'flex-end',
  baseline: 'baseline'
}

export const MapJustify: Record<TContainerJustify, string> = {
  center: 'center',
  start: 'start',
  end: 'end',
  spread: 'space-around',
  evenly: 'space-evenly',
  between: 'space-between'
}