import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`
export const PageContainer = styled.div`
  display: block;
  width: 1140px;
  @media only screen and (max-width: 1200px) {
    padding: 0 20px;
  }
`
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 34px;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    display: block;
    padding-top: 34px;
  }
`