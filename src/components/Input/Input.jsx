import React from 'react'

export default function Input({className,type,name,id,value,placeholder,onChange,defaultValue}) {
  return (
    <input className={className} type={type} name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} />
  )
}
