import React from 'react'
import { useGetAllShowroomsQuery } from '../../../services/api/master/showroomAPI';
import AutoCompleteField from '../Inputs/AutoCompleteField';
import { useFormContext } from 'react-hook-form';

function ShowroomDropdown({ name }: { name: string; }) {
    const { data: allShowrooms } = useGetAllShowroomsQuery();
    const { setValue } = useFormContext()
    const onItemSelect = (item: Showroom) => {
        setValue('showroomID', item.showroomId)
        setValue('showroomName', item.showroomName)
    }
    return (
        <AutoCompleteField label="Showroom" {...{ name, onItemSelect }} data={allShowrooms?.map(e => ({ ...e, value: `${e.showroomId}`, label: `${e.showroomName}` })) ?? []} />
    )
}

export default ShowroomDropdown