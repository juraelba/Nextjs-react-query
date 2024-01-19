import styled from 'styled-components';

export const EventContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  @media only screen and (max-width: 540px) {
    display: flex;
    justify-content: center;
  }
`
export const EventMainContent = styled.div`
  display: flex;
  @media only screen and (max-width: 540px) {
    display: block;
  }
`
export const EventImageContent = styled.div`
  margin-right: 16px;
  @media only screen and (max-width: 540px) {
    display: flex;
    justify-content: center;
    padding-bottom: 14px;
    & span {
      width: 267px !important;
      height: 160px !important;
    } 
  }
`
export const EventInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const EventDateContent = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #6366F1;
`

export const EventTitleContent = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
  padding-top: 4px;
`
export const EventDescriptionContent = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #6B7280;
  padding-top: 4px;
`
export const EventStateContent = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  padding-top:8px;
`
export const EventTeamMatesContent = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6B7280;
  @media only screen and (max-width: 540px) {
    display: none;
  }
`

export const EventState = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #059669;
`
export const AttendingContent = styled.div`
  display: block;
  @media only screen and (max-width: 540px) {
    display: none;
  }
`
export const EventDotIcon = styled.div`
  display: block;
  @media only screen and (max-width: 540px) {
    display: none;
  }
`