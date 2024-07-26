'use client'

import { useQuery } from '@apollo/client'
import { createColumnHelper } from '@tanstack/react-table'
import { GET_ALL_EVENTS } from 'app/graphql/admin/queries/GetAllEvents'
import { Table } from 'components/ui'
import { Box } from 'components/ui/Box/Box'
import { AnalyticsEventFragment, GetAllEventsQuery } from 'typings/generated'

const columnHelper = createColumnHelper<AnalyticsEventFragment>()
const columns = [
  columnHelper.accessor('uuid', {
    header: 'UUID',
  }),
  columnHelper.accessor('event', {
    header: 'Event',
  }),
]

export default function Dashboard() {
  const { data } = useQuery<GetAllEventsQuery>(GET_ALL_EVENTS)

  return <Box>{data && <Table columns={columns} data={data.events} />}</Box>
}
