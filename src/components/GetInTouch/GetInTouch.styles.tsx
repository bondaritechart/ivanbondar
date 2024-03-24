import { WidgetWrapper } from 'components/ui/WidgetWrapper/WidgetWrapper'
import styled from 'styled-components'

export const GetInTouchWrapper = styled(WidgetWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

GetInTouchWrapper.defaultProps = {
  padding: 'spacing56',
  height: 56,
}

export const Icon = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.decorativeBorders};
  border-radius: ${({ theme }) => theme.radius.radius16};
  padding: ${({ theme }) => theme.spacing.spacing12 + ' ' + theme.spacing.spacing24};
`
