import styled from 'styled-components';

export const HeadContainer = styled.div`
  width: 100%;
`
export const PageTitle = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #1F2937;
`
export const MeetUpContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 540px) {
    display: block;
  }
`

export const StyledButton = styled.button`
  background: #4F46E5;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
  @media only screen and (max-width: 540px) {
    margin-top: 20px;
  }
`

export const CheckButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 16px;
  @media only screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`

export const SelectGroupContent = styled.div`
  display: flex;
  @media only screen and (max-width: 540px) {
    display: block;
  }
`