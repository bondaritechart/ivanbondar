'use client'

import styled from 'styled-components'

export const TableSudoku = styled.table`
  border-collapse: collapse;
  background: white;
  tr {
    &:nth-child(3),
    &:nth-child(6) {
      border-bottom: 3px solid black;
    }
  }
  td {
    &:nth-child(3),
    &:nth-child(6) {
      border-right: 3px solid black;
    }
    border: 1px solid black;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 36px;
    font-weight: 500;
  }
`

export const TableSolutions = styled.table`
  border-collapse: collapse;
  background: white;
  tr {
    &:nth-child(3),
    &:nth-child(6) {
      border-bottom: 3px solid black;
    }
  }
  td {
    &:nth-child(3),
    &:nth-child(6) {
      border-right: 3px solid black;
    }
    border: 1px solid black;
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
`
