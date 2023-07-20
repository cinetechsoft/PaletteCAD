import React, { useEffect } from 'react'
import AutoCompleteField from '../Inputs/AutoCompleteField';
import { useFormContext } from 'react-hook-form';
import { useLazyGetCustomersByCustomerByShowroomIDQuery, useLazyGetCustomerByCustomerIDQuery } from '../../../services/api/master/customerAPI';

function CustomerDropdown({ name, showroomID }: { name: string; showroomID: string }) {
    const [getAllCustomersByShowroomID, { data: allCustomers }] = useLazyGetCustomersByCustomerByShowroomIDQuery();
    const [getCustomerByID, { data: customer }] = useLazyGetCustomerByCustomerIDQuery();
    const { getValues, watch, setValue } = useFormContext();
    useEffect(() => {
        const state = getValues(showroomID)
        getAllCustomersByShowroomID(state)
    }, [watch(showroomID)])

    const onItemSelect = (item: Customer) => {
        getCustomerByID(item.custID).then(res => {
            console.log(res)
            if (res.data?.custID) {
                Object.keys(res.data).forEach(e => {
                    setValue(e, res?.data?.[e])
                })
            }
        })
    }
    return (
        <AutoCompleteField label="Customer" {...{ name, onItemSelect }} data={allCustomers?.map(e => ({ ...e, value: `${e.custID}`, label: `${e.custName}` })) ?? []} />
    )
}

export default CustomerDropdown