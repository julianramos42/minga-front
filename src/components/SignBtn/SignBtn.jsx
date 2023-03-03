import React from 'react'
import './signBtn.css'
import Input from '../Input/Input'

export default function SignBtn({text}) {
  return (
    <Input className='sign' type='submit' value={text} />
  )
}
