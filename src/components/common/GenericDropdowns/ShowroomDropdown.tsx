import React, { useEffect } from 'react'
import { useGetAllShowroomsQuery, useLazyGetAllShowroomsByCityIDQuery } from '../../../services/api/master/showroomAPI';
import AutoCompleteField from '../Inputs/AutoCompleteField';
import { useFormContext } from 'react-hook-form';

function ShowroomDropdown({ name, cityFieldName }: { name: string; cityFieldName?: string }) {
    const [getAllShowroomsByCityID, { data: allShowroomsByFilter }] = useLazyGetAllShowroomsByCityIDQuery();
    const { data: allShowroomsWithoutFilter } = useGetAllShowroomsQuery();
    const allShowrooms = !!cityFieldName ? allShowroomsByFilter : allShowroomsWithoutFilter
    const { getValues, watch, setValue } = useFormContext();
    useEffect(() => {
        if (!!cityFieldName) {
            // setValue(name, { label: "", value: "" })
            const cityID = getValues(cityFieldName)
            getAllShowroomsByCityID(cityID)
        }
    }, [watch(cityFieldName ?? "")])

    const onItemSelect = (item: Showroom) => {
        setValue('showroomID', item.showroomId)
        setValue('showroomId', item.showroomId)
        setValue('showroomName', item.showroomName)
    }
    return (
        <AutoCompleteField label="Showroom" {...{ name, onItemSelect }} data={allShowrooms?.map(e => ({ ...e, value: `${e.showroomId}`, label: `${e.showroomName}` })) ?? []} />
    )
}

export default ShowroomDropdown