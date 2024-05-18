'use client'

import { PropsWithChildren } from 'react'

import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { PerPageEnum, SudokuPuzzle } from 'app/(website)/puzzles/sudoku/Sudoku.types'
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type'

interface PuzzlePdfProps extends PropsWithChildren {
  difficulty: Difficulty
  currentPosition: number
  puzzles: SudokuPuzzle[]
  perPage: PerPageEnum
}

const SIZES_MAP = {
  [PerPageEnum.NINE]: {
    cellSize: 20,
    fontSize: 12,
    titleSize: 14,
    borderWidth: 2,
  },
  [PerPageEnum.SIX]: {
    cellSize: 26,
    fontSize: 16,
    titleSize: 14,
    borderWidth: 3,
  },
  [PerPageEnum.FOUR]: {
    cellSize: 30,
    fontSize: 18,
    borderWidth: 3,
    titleSize: 18,
  },
  [PerPageEnum.TWO]: {
    cellSize: 40,
    fontSize: 20,
    borderWidth: 3,
    titleSize: 18,
  },
  [PerPageEnum.ONE]: {
    cellSize: 60,
    fontSize: 36,
    borderWidth: 3,
    titleSize: 18,
  },
}

export const PuzzlePdf = ({ difficulty, currentPosition, puzzles, perPage }: PuzzlePdfProps) => {
  const sizes = SIZES_MAP[perPage]

  const styles = StyleSheet.create({
    layout: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 15,
      alignItems: 'center',
      alignContent: 'center',
    },
    puzzleWrapper: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: sizes.cellSize * 9,
    },
    tableContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5,
      flexGrow: 1,
    },
    title: {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: sizes.titleSize,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      width: sizes.cellSize * 9,
    },
    cell: {
      width: sizes.cellSize,
      height: sizes.cellSize,
      boxSizing: 'border-box',
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      flexGrow: 1,
      borderColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      textAlign: 'center',
    },
    cellText: {
      fontSize: sizes.fontSize,
      fontWeight: 'semibold',
    },
    answersCellText: {
      fontSize: 6,
    },
    answersCell: {
      width: 9,
      height: 9,
    },
    answersTitle: {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 8,
    },
    answersRow: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 81,
    },
    answerPuzzleWrapper: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: 81,
    },
  })

  return (
    <Document>
      <Page size="A4">
        <View style={styles.layout}>
          {puzzles.map((puzzle, index) => (
            <View wrap={false} style={styles.puzzleWrapper} key={index + 'asd'}>
              <Text style={styles.title}>
                {difficulty} #{index + currentPosition}
              </Text>
              <View style={styles.tableContainer}>
                {puzzle.matrixPuzzle.map((cell, i) => {
                  return (
                    <View style={styles.row} key={i}>
                      {cell.map((value, j) => {
                        const style = { ...styles.cell }
                        if (j % 3 === 0 && j !== 0) {
                          style.borderLeftWidth = sizes.borderWidth
                        }

                        if (i % 3 === 0 && i !== 0) {
                          style.borderTopWidth = sizes.borderWidth
                        }

                        if (j === 8) {
                          style.borderRightWidth = 1
                        }

                        if (i === 8) {
                          style.borderBottomWidth = 1
                        }

                        return (
                          <View style={style} key={j}>
                            <Text style={styles.cellText}>{value}</Text>
                          </View>
                        )
                      })}
                    </View>
                  )
                })}
              </View>
            </View>
          ))}
        </View>
      </Page>
      <Page>
        <View style={{ ...styles.layout, gap: 5 }}>
          {puzzles.map((puzzle, index) => (
            <View wrap={false} style={styles.answerPuzzleWrapper} key={index + 'dasdasd'}>
              <Text style={styles.answersTitle}>
                {difficulty} #{index + currentPosition}
              </Text>
              <View style={styles.tableContainer}>
                {puzzle.matrixSolution.map((cell, i) => {
                  return (
                    <View style={styles.answersRow} key={i}>
                      {cell.map((value, j) => {
                        const style = { ...styles.cell, ...styles.answersCell }
                        if (j % 3 === 0 && j !== 0) {
                          style.borderLeftWidth = 1
                        }

                        if (i % 3 === 0 && i !== 0) {
                          style.borderTopWidth = 1
                        }

                        if (j === 8) {
                          style.borderRightWidth = 1
                        }

                        if (i === 8) {
                          style.borderBottomWidth = 1
                        }

                        return (
                          <View style={style} key={j}>
                            <Text style={styles.answersCellText}>{value}</Text>
                          </View>
                        )
                      })}
                    </View>
                  )
                })}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
