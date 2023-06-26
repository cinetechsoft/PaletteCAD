import { Table } from '@mantine/core'
import React from 'react'
import DataTable from '../../../components/common/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
interface QuotationItemsTableProps {
    items: unknown[]
}
const columnHelper = createColumnHelper<Connector>()
function QuotationItemsTable({ items }: QuotationItemsTableProps) {

    return (
        <DataTable data={items} columns={[
            // columnHelper.accessor("roomName", { cell: (info) => info.getValue() }),
            columnHelper.accessor("positionName", { cell: (info) => info.getValue() }),
            columnHelper.accessor("articleNumber", { cell: (info) => info.getValue() }),
            columnHelper.accessor("quantity", { cell: (info) => info.getValue() }),
            columnHelper.accessor("totalMeter", { cell: (info) => info.getValue() }),
            columnHelper.accessor("thickness", { cell: (info) => info.getValue() }),
            columnHelper.accessor("rawLengthDimension", { cell: (info) => info.getValue() }),
            columnHelper.accessor("rawWidthDimension", { cell: (info) => info.getValue() }),
            columnHelper.accessor("finishedLengthDimensions", { cell: (info) => info.getValue() }),
            columnHelper.accessor("finishedWidthDimension", { cell: (info) => info.getValue() }),
            columnHelper.accessor("mrpLookup", { cell: (info) => info.getValue() }),

        ]} />
    )
}

export default QuotationItemsTable