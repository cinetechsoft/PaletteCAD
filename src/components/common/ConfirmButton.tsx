import { Button, ButtonProps } from '@mantine/core'
import React, { useEffect, useRef, useState } from 'react'

function ConfirmButton(props: any) {
    const [confirmed, setConfirmed] = useState(false)
    const ref = useRef(null)
    const handleOutsideClick = (event) => {
        if (ref?.current && !ref?.current?.contains(event.target)) {
            setConfirmed(false)
        }
    }
    useEffect(() => {
        window.addEventListener("click", handleOutsideClick)

        return () => {
            window.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    return (
        <Button {...{ ...props, ref }} onClick={(e) => {
            if (!confirmed) {
                setConfirmed(true)
                return;
            }
            props.onClick && props.onClick(e)
            setConfirmed(false)
        }}>{confirmed ? "Are you sure ?" : props.label}</Button>
    )
}

export default ConfirmButton