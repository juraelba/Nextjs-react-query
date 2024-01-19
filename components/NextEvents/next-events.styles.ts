import styled from 'styled-components';

export const NextEventsContainer = styled.div`
  width: 267px;
  @media only screen and (max-width: 768px) {
    padding-top: 20px;
    width: 100%;
  }
`
export const EventLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #1F2937;
`

export const NextEventContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 17px;
  gap: 17px;
`