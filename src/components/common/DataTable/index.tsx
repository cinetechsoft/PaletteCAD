import React from "react";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  RowData,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "@mantine/core";

interface DataTableProps {
  data: any[];
  columns: ColumnDef<any, any>[];
  refreshData?: () => void;
}
function DataTable({ data, columns, refreshData }: DataTableProps) {
  const rerender = React.useReducer(() => ({}), {})[1];

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <Table
        highlightOnHover
        withBorder
        withColumnBorders
        sx={{
          borderRadius: "15px",
          borderCollapse: "separate",
          borderSpacing: 0,
          "td,th": { borderLeft: "unset !important" },
        }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </Table>
      {/* <div>{table.getRowModel().rows.length} Rows</div>
            <div>
                <button onClick={() => rerender()}>Force Rerender</button>
            </div>
            <div>
                <button onClick={refreshData}>Refresh Data</button>
            </div>
            <pre>{JSON.stringify(sorting, null, 2)}</pre> */}
    </div>
  );
}

export default DataTable;
