import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

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
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                  )}
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
