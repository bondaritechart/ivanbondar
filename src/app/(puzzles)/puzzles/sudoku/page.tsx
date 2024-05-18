import { SudokuPageContent } from 'app/(puzzles)/puzzles/sudoku/components/SudokuPageContent'
import { PageBaseProps } from 'typings/types'
import { AccessControl } from 'utils/AccessControl'

const SudokuPage = ({ searchParams }: PageBaseProps) => {
  const accessControl = new AccessControl({ searchParams })
  accessControl.basePageProtection()

  return <SudokuPageContent />
}

export default SudokuPage
