import React from 'react'
import AutoCompleteField from '../Inputs/AutoCompleteField';
import { useGetAllStatesQuery } from '../../../services/api/master/stateAPI';
import { useFormContext } from 'react-hook-form';

function StateDropdown({ name }: { name: string }) {
    const { data: allStates } = useGetAllStatesQuery();
    const { setValue } = useFormContext()
    const onItemSelect = (item: State) => {
        setValue('stateID', item.stateId)
        setValue('stateName', item.stateName)
    }
    return (
        <AutoCompleteField label="State" {...{ name, onItemSelect }} data={allStates?.map(e => ({ ...e, value: `${e.stateId}`, label: `${e.stateName}` })) ?? []} />
    )
}

export default StateDropdown