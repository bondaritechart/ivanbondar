import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { TableStyled, Td, Th, Thead, Tr } from 'components/ui/Table/Table.styles'
import { Text } from 'components/ui/Text/Text'

interface TableProps<T> {
  data: T[]
  columns: Array<ColumnDef<T, any>>
}

export const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    // rowCount: dataQuery.data?.rowCount, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    // state: {
    //   pagination,
    // },
    // onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    // manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return (
    <TableStyled>
      <Thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <Th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <Text type="smallBold">{flexRender(header.column.columnDef.header, header.getContext())}</Text>
                  )}
                </Th>
              )
            })}
          </Tr>
        ))}
      </Thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <Td key={cell.id}>
                    <Text type="small">{flexRender(cell.column.columnDef.cell, cell.getContext())}</Text>
                  </Td>
                )
              })}
            </Tr>
          )
        })}
      </tbody>
    </TableStyled>
  )
}
