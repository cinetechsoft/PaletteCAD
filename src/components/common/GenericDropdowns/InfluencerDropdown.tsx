import React, { useEffect } from 'react'
import AutoCompleteField from '../Inputs/AutoCompleteField';
import { useLazyGetAllCitiesByStateIDQuery } from '../../../services/api/master/cityAPI';
import { useFormContext } from 'react-hook-form';
import { useGetAllInfluencersQuery } from '../../../services/api/master/influencerAPI';

function InfluencerDropdown({ name }: { name: string }) {
    const { data: allInfluencers } = useGetAllInfluencersQuery();
    const { getValues, watch, setValue } = useFormContext();

    const onItemSelect = (item: Influencer) => {
        setValue('influencerId', item.influencer_Mast_id)
        setValue('influencerName', item.influencer_Name)
    }
    return (
        <AutoCompleteField label="Influencer" {...{ name, onItemSelect }} data={allInfluencers?.map(e => ({ ...e, value: `${e.influencer_Mast_id}`, label: `${e.influencer_Name}` })) ?? []} />
    )
}

export default InfluencerDropdown