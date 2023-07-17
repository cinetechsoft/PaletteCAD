import { Accordion } from '@mantine/core'
import React from 'react'
import QuotationAccordionItem from './QuotationAccordionItem'
import QuotationItemsTable from './QuotationItemsTable'

function QuotationAccordion({ quotationItems }: { quotationItems: Quotation }) {

    return (
        <Accordion defaultValue={quotationItems?.[0].groupType}>
            {quotationItems?.filter(e => e?.items?.length > 0).map(quote => <QuotationAccordionItem {...{ itemId: quote.groupType, items: quote?.items, itemTitle: quote.groupType, itemContent: <QuotationItemsTable prefix={quote.groupType} items={quote?.items} /> }} />)}
        </Accordion>
    )
}

export default QuotationAccordion