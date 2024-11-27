import styled from 'styled-components'

export const Root = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  @media screen and (max-width: 580px) {
    display: block;
    overflow-x: auto;
  }
`

export const Header = styled.thead``

export const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: #484848;
  color: #fff;
  border-bottom: 1.5px solid #cdcdcd;
`

export const Tr = styled.tr`
  color: #484848;
  padding: 1rem;
  font-weight: 500;
  line-height: 115%;
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`

export const Td = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  &:nth-last-child(2) {
    font-weight: bold;
    min-width: 140px;
  }
`

export const Tbody = styled.tbody`
  padding: 0 1rem;
`
