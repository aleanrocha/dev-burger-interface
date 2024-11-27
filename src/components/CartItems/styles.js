import styled from 'styled-components'
import { Trash } from '@phosphor-icons/react'

export const Container = styled.div`
  overflow-x: auto;
  background-color: #fafafa;
  border-radius: 0.7rem;
  width: 100%;
  max-width: 768px;
`

export const ProductImage = styled.img`
  width: 80px;
  border-radius: 1rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    background-color: #9758a6;
    color: #fff;
    border: none;
    font-weight: bold;
    font-size: 1.5rem;
    transition: 0.3s;
    &:hover {
      background-color: #6f357c;
    }
  }
`
export const TrashStyled = styled(Trash)`
  font-size: 1.3rem;
  font-weight: bold;
  color: red;
  cursor: pointer;
`

export const EmptyTrash = styled.p`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 3rem 1rem;
  background-color: #fafafa;
  color: #9758a6;
`
