import { Accordion, Badge, Box } from '@mantine/core'
import React from 'react'

function QuotationAccordionItem({ itemId, itemTitle, itemContent }: any) {
    return (
        <Accordion.Item value={itemId}>
            <Accordion.Control  >
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <span>{itemTitle}</span>
                    <Badge>TOTAL</Badge>
                </Box>
            </Accordion.Control>
            <Accordion.Panel>{itemContent}</Accordion.Panel>
        </Accordion.Item>

    )
}

export default QuotationAccordionItem