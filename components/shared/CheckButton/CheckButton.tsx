import React from 'react'
import { ButtonContent, CheckIconContent } from './check-button.styles'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CheckButtonType } from '../../../types'
export const CheckButton = (props: CheckButtonType) => {
  const {label, checked} = props
  return (
    <ButtonContent checked={checked}>
      <CheckIconContent checked={checked}>
        <FontAwesomeIcon icon={faCheck} />
      </CheckIconContent>
      {label}
    </ButtonContent>
  )
}