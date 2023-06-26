import { Accordion } from '@mantine/core'
import React from 'react'
import QuotationAccordionItem from './QuotationAccordionItem'
import QuotationItemsTable from './QuotationItemsTable'

function QuotationAccordion({ quotationItems }: { quotationItems: Quotation }) {
    const quotationsObject = Object.keys(quotationItems ?? {})
    return (
        <Accordion defaultValue={quotationsObject?.[0]}>
            {quotationsObject.filter(e => quotationItems?.[e]?.length > 0).map(quote => <QuotationAccordionItem {...{ itemId: quote, itemTitle: quotationItems?.[quote]?.[0]?.type ?? quote, itemContent: <QuotationItemsTable items={quotationItems?.[quote]} /> }} />)}
        </Accordion>
    )
}

export default QuotationAccordion