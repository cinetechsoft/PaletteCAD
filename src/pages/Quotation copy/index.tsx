import React, { useEffect } from 'react'
import { useLazyGetQuotationByProjectIDQuery } from '../../services/api/quotationAPI'
import { useParams } from 'react-router-dom'

function Quotation() {
    const { projectID } = useParams()
    const [getQuotationByProjectID, { quotationData: data }] = useLazyGetQuotationByProjectIDQuery()
    useEffect(() => {
        getQuotationByProjectID(projectID)
    }, [])
    return (
        <div>
            {
                Object.keys(data ?? {})?.map(e => {
                    return (
                        <div>
                            {e}
                        </div>
                    )
                })}
        </div >
    )
}

export default Quotation