import React from 'react'
import './registerFieldset.css'
import Image from '../Image/Image'
import Legend from '../Legend/Legend'
import Input from '../Input/Input'

export default function RegisterFieldset({id,legendText,inputType,inputName,inputId,imgSrc,imgAlt}) {
  return (
    <fieldset id={id}>
        <Legend text={legendText} />
        <Input type={inputType} name={inputName} id={inputId} />
        <Image src={imgSrc} alt={imgAlt} />
    </fieldset>
  )
}
