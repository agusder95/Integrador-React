

import React from 'react'
import Header from '../Header'
import { LayoutWrapper } from './styles'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <LayoutWrapper>
     <Header/>
     {children}
     <Footer/>
    </LayoutWrapper>
  )
}

export default Layout
