import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fafafa;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1.7rem;
  border: 1px solid #9758a6;
  text-align: center;
  position: relative;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    height: 90px;
    h3 {
      color: #ff8c05;
      font-weight: bold;
    }
    p {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
`
export const Image = styled.img`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 90px;
`
