'use client'

import styled from 'styled-components'

export const TableSudoku = styled.table`
  border-collapse: collapse;
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
    width: 60px;
    height: 60px;
    text-align: center;
    font-size: 36px;
    font-weight: 500;
  }
`

export const TableSolutions = styled.table`
  border-collapse: collapse;
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
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
  }
`
