import { PuzzlesPageContent } from 'app/(puzzles)/puzzles/components/PageContent'
import { PageBaseProps } from 'typings/types'
import { AccessControl } from 'utils/AccessControl'

const PuzzlesPage = ({ searchParams }: PageBaseProps) => {
  const accessControl = new AccessControl({ searchParams })
  accessControl.basePageProtection()

  return <PuzzlesPageContent />
}

export default PuzzlesPage
