import styled from 'styled-components';

export const TodayContainer = styled.div`
  width: calc(100% - 267px);
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 540px) {
    display: block;
  }
`
export const DateLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #1F2937;
`

export const TodayEventContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  padding-top: 16px;
`

export const Hr = styled.div`
  width: 100%;
  border:solid 1px #D1D5DB;
  padding-top: 9px;
  border-top: none;
  border-left: none;
  border-right: none;
`