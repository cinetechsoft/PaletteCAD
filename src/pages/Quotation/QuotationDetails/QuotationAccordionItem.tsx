import { Accordion, Badge, Box } from '@mantine/core'
import React from 'react'

function QuotationAccordionItem({ itemId, itemTitle, itemContent, items }: any) {
    return (
        <Accordion.Item value={itemId}>
            <Accordion.Control  >
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <span>{itemTitle}</span>
                    <Badge>₹ {items?.reduce((prev, curr) => prev + curr?.total, 0)}</Badge>
                </Box>
            </Accordion.Control>
            <Accordion.Panel>{itemContent}</Accordion.Panel>
        </Accordion.Item>

    )
}

export default QuotationAccordionItem