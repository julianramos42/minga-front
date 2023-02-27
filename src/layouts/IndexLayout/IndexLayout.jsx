import React from 'react'
import Header from '../../components/Header/Header'

export default function IndexLayout({children}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
