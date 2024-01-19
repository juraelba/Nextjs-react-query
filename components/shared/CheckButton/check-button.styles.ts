import styled from 'styled-components'

export const ButtonContent = styled.button<{
  checked: boolean;
}>`
  display: flex;
  justify-content: center;
  background: #F5F3FF;
  cursor: pointer;
  border: 1px solid #DBDCFF;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 6px 16px 6px 12px;
  color: ${(props) => props.checked === true ? '#4F46E5' : '#1F2937'}
`

export const CheckIconContent = styled.div<{
  checked: boolean;
}>`
  padding-right : 6px;
  display: ${(props) => props.checked === true ? 'block' : 'none'}
`