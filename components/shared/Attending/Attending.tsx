import React from "react";
import { AttendingContent, CheckIconContent } from './attending.styles'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AttendingComponent = () => {
  return (
    <AttendingContent>
      <CheckIconContent>
        <FontAwesomeIcon icon={faCheck} />
      </CheckIconContent>
      Attending
    </AttendingContent>
  )
}