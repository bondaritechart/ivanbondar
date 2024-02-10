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
