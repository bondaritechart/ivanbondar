import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { Game } from 'app/(puzzles)/puzzles/word-search/WordSearch.types'

// Font.register({
//   family: 'futura',
//   src: '/fonts/futura_bold.ttf',
// })

interface WordSearchPdfProps {
  games: Game[]
}

export const WordSearchPdf = ({ games }: WordSearchPdfProps) => {
  const puzzleLength = games.length ? games[0].grid.length : 30
  const CELL_SIZE = 13.5
  const SOLUTION_CELL_SIZE = 10
  const SIZE = CELL_SIZE * puzzleLength
  const SOLUTION_SIZE = SOLUTION_CELL_SIZE * puzzleLength
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      borderColor: '#00ff00',
      borderWidth: 0,
    },
    solutions: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5,
    },
    words: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: SIZE,
      gap: 5,
    },
    game: {
      margin: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 10,
      alignContent: 'center',
      borderWidth: 0,
      borderColor: '#ff0000',
    },
    solutionGame: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 5,
      alignContent: 'center',
      borderWidth: 0,
      borderColor: '#ff0000',
      width: SOLUTION_SIZE,
    },
    answersWrap: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5,
      justifyContent: 'space-around',
    },
    tableContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 1,
      borderWidth: 1,
      borderColor: '#000000',
      width: SIZE,
      borderRadius: 5,
    },
    solutionTableContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 1,
      borderWidth: 1,
      borderColor: '#000000',
      width: SOLUTION_SIZE,
      borderRadius: 0,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      width: SIZE,
    },
    solutionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      width: SOLUTION_SIZE,
    },
    cell: {
      width: CELL_SIZE,
      height: CELL_SIZE,
      boxSizing: 'border-box',
      borderWidth: 0,
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      textAlign: 'center',
    },
    solutionCell: {
      width: SOLUTION_CELL_SIZE,
      height: SOLUTION_CELL_SIZE,
      boxSizing: 'border-box',
      borderWidth: 0,
      borderColor: '#000000',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      textAlign: 'center',
    },
    cellText: {
      fontSize: 10,
      textTransform: 'uppercase',
    },
    solutionCellText: {
      fontSize: SOLUTION_CELL_SIZE - 1,
      textTransform: 'uppercase',
    },
    wordText: {
      fontSize: 9,
      textTransform: 'uppercase',
      // fontFamily: 'futura',
    },
    title: {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: 12,
    },
    solutionTitle: {
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: SOLUTION_CELL_SIZE + 2,
    },
    word: {
      width: SIZE / 4 - 15,
      textAlign: 'center',
    },
    solutionsWrapper: {
      marginTop: 20,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      gap: 20,
      borderWidth: 0,
      borderColor: 'yellow',
    },
  })
  console.log('games', games)

  return (
    <Document>
      {games.map((game, index) => {
        return (
          <Page key={index} size="A4">
            <View style={styles.game}>
              <Text style={styles.title} key={game.theme.theme}>
                {game.theme.theme}
              </Text>
              <View style={styles.container}>
                <View style={styles.tableContainer}>
                  {game.grid.map((row, j) => {
                    return (
                      <View key={j} style={styles.row}>
                        {row.map((cell) => {
                          return (
                            <View key={cell} style={styles.cell}>
                              <Text style={styles.cellText}>{cell}</Text>
                            </View>
                          )
                        })}
                      </View>
                    )
                  })}
                </View>
              </View>
              <View style={styles.words}>
                {game.theme.words.map((word) => (
                  <View style={styles.word} key={word}>
                    <Text style={styles.wordText}>{word}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Page>
        )
      })}
      <Page size="A4">
        <View style={styles.solutionsWrapper}>
          {games.map((game, index) => {
            return (
              <View wrap={false} key={index} style={styles.solutionGame}>
                <Text style={styles.solutionTitle} key={game.theme.theme}>
                  {game.theme.theme}
                </Text>
                <View style={styles.container}>
                  <View style={styles.solutionTableContainer}>
                    {game.solution.map((row, j) => {
                      return (
                        <View key={j} style={styles.solutionRow}>
                          {row.map((cell) => {
                            return (
                              <View key={cell} style={styles.solutionCell}>
                                <Text style={styles.solutionCellText}>{cell}</Text>
                              </View>
                            )
                          })}
                        </View>
                      )
                    })}
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </Page>
    </Document>
  )
}
