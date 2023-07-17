import { Table } from '@mantine/core'
import React from 'react'
import DataTable from '../../../components/common/DataTable'
import { createColumnHelper } from '@tanstack/react-table'
import TextField from '../../../components/common/Inputs/TextField'
import NumberField from '../../../components/common/Inputs/NumberField'
interface QuotationItemsTableProps {
    items: any[],
    prefix: string
}
const columnHelper = createColumnHelper()
function QuotationItemsTable({ items, prefix }: QuotationItemsTableProps) {
    /* 
    {
      "roomName": "Single Room",
      "positionNo": 1,
      "positionName": "2_Shutter_Unit_with_2_Shelves",
      "objectName": "2_Shutter_Unit_with_2_Shelves",
      "articleNumber": "",
      "manufacturerName": "",
      "quantity": "1",
      "dimensions": {
        "length": "900",
        "width": "619.5",
        "thickness": "9",
        "unit": ""
      },
      "mrp": 0,
      "mrpWithPercent": 0,
      "total": 0
    }
    */
    return (
        <DataTable data={items} columns={[
            columnHelper.accessor("roomName", { cell: (info) => info.getValue() }),
            columnHelper.accessor("positionNo", { cell: (info) => info.getValue() }),
            columnHelper.accessor("positionName", { cell: (info) => info.getValue() }),
            columnHelper.accessor("objectName", { cell: (info) => info.getValue() }),
            columnHelper.accessor("articleNumber", { cell: (info) => info.getValue() }),
            columnHelper.accessor("manufacturerName", { cell: (info) => info.getValue() }),
            columnHelper.accessor("quantity", { cell: (info) => info.getValue() }),
            columnHelper.accessor("dimensions", { cell: (info) => JSON.stringify(info.getValue()) }),
            columnHelper.accessor("mrp", { cell: (info) => <NumberField name={`${prefix}.${info.cell.id.replace('_', '.')}`} placeholder={info.getValue()} /> }),

        ]} />
    )
}

export default QuotationItemsTable