import styled from 'styled-components';

export const EventMobileContent = styled.div`
  width: 100%;
  display: block;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`
export const EventInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 12px 16px;
  gap: 4px;
`
export const EventDateContent = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #6B7280;
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
export const EventState = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #059669;
  padding-top: 8px;
`