import { useCallback, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { styled } from 'styled-components'
import type { ToastProps } from './types'
import { types } from './types'

export const variants = {
  INFO: 'info',
  DANGER: 'danger',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const

export type Variants = (typeof variants)[keyof typeof variants]

const alertTypeMap = {
  [types.INFO]: variants.INFO,
  [types.SUCCESS]: variants.SUCCESS,
  [types.DANGER]: variants.DANGER,
  [types.WARNING]: variants.WARNING,
}

const StyledToast = styled.div`
  right: 16px;
  position: fixed;
  max-width: calc(100% - 32px);
  transition: all 250ms ease-in;
  width: 100%;
`

export const Toast: React.FC<React.PropsWithChildren<ToastProps>> = ({ toast, onRemove, style, ttl, ...props }) => {
  const timer = useRef<number>()
  const ref = useRef(null)
  const { id, title, description, type } = toast

  const handleRemove = useCallback(() => {
    onRemove(id)
  }, [id, onRemove])

  const handleMouseEnter = () => {
    clearTimeout(timer.current)
  }

  const handleMouseLeave = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = window.setTimeout(() => {
      handleRemove()
    }, ttl)
  }

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = window.setTimeout(() => {
      handleRemove()
    }, ttl)

    return () => {
      clearTimeout(timer.current)
    }
  }, [timer, ttl, handleRemove])

  return (
    <CSSTransition nodeRef={ref} style={style} timeout={250} {...props}>
      <StyledToast onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={ref}>
        <div className={`alert alert-${alertTypeMap[type]}`} onClick={handleRemove} title={title}>
          {description}
        </div>
      </StyledToast>
    </CSSTransition>
  )
}
