import { useState } from "react"
import { useFormInput } from "../../hooks/useFormInput"

export default function Form(){
    const firstNameProps = useFormInput("Lucas")
    const lasttNameProps = useFormInput("Kaique")

    return(
        <>
        <label>
            First name:
            <input {...firstNameProps} />
        </label>

        <label>
            Last name:
            <input {...lasttNameProps} />
        </label>
        <p>
            <b>
                Bom dia, {firstNameProps.value} {lasttNameProps.value}!
            </b>
        </p>
        </>
    )
}
