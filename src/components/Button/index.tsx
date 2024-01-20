import { Button } from 'Components/Button/styles'
import { type MouseEvent, useState, type ComponentPropsWithoutRef } from 'react'
import * as SC from './styles'

export function RippleButton({
  onClick,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'button'>): JSX.Element {
  const [showRipple, setShowRipple] = useState<boolean>(false)
  const [rippleInitialPosition, setRippleInitialPosition] = useState<{
    x: number
    y: number
  }>({ x: 0, y: 0 })
  const RIPPLE_DURATION = 200 

  const handleClickWithRipple = (e: MouseEvent<HTMLButtonElement>): void => {
    if (onClick != null) {
      onClick(e)
    }

    setShowRipple(true)
    setRippleInitialPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    })

    setTimeout(() => {
      setShowRipple(false)
    }, RIPPLE_DURATION)
  }

  return (
    <Button {...restProps} onClick={handleClickWithRipple}>
      {children}
      {showRipple && <SC.RippleElement {...rippleInitialPosition} />}
    </Button>
  )
}
