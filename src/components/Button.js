import React from 'react'
// IMPORT STYLES
import './Button.css'

const STYLES = ['btn--primary', 'btn--secondary', 'btn--toggle', 'btn--nav']

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  btnId,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      id={btnId}
    >
      {children}
    </button>
  )
}
