import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Alert from '../../components/Alert/Alert'

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Alert />
    </>
  )
}
