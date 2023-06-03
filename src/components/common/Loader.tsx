import { LoadingOverlay } from '@mantine/core'
import React from 'react'

function Loader() {
    return (
        <LoadingOverlay
            loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }}
            overlayOpacity={0.3}
            overlayColor="#c5c5c5"
            visible
        />
    )
}

export default Loader