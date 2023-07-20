import React from 'react'
import { useFormContext } from 'react-hook-form'

function ProjectCustomerDetails() {
    const { getValues } = useFormContext()
    const { custName,
        custAddress,
        custContactNo,
        custContactPer }: Partial<Project> = getValues()
    return (
        <div>{JSON.stringify({
            custName,
            custAddress,
            custContactNo,
            custContactPer
        })}</div>
    )
}

export default ProjectCustomerDetails