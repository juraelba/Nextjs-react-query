import React from 'react'
import { SelectContent } from './select.styles'
interface propsType {
  options: string[]
  width: number
}
export const Select = (props: propsType) => {
  return (
    <SelectContent width={props.width}>
      {props.options.map((item, index) => (
        <option key={index} value={index}>{item}</option>
      ))}
    </SelectContent>
  )
}