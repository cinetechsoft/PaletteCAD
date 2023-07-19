import React, { useEffect } from 'react'
import AutoCompleteField from '../Inputs/AutoCompleteField';
import { useLazyGetAllCitiesByStateIDQuery } from '../../../services/api/master/cityAPI';
import { useFormContext } from 'react-hook-form';

function CityDropdown({ name, stateFieldName }: { name: string; stateFieldName: string }) {
    const [getAllCitiesByStateID, { data: allCities }] = useLazyGetAllCitiesByStateIDQuery();
    const { getValues, watch, setValue } = useFormContext();
    useEffect(() => {
        // getValues("cityID")setValue(name, { label: "", value: "" })
        const state = getValues(stateFieldName)
        getAllCitiesByStateID(state)
    }, [watch(stateFieldName)])

    const onItemSelect = (item: City) => {
        setValue('cityID', item.cityId)
        setValue('cityName', item.cityName)
    }
    return (
        <AutoCompleteField label="City" {...{ name, onItemSelect }} data={allCities?.map(e => ({ ...e, value: `${e.cityId}`, label: `${e.cityName}` })) ?? []} />
    )
}

export default CityDropdown