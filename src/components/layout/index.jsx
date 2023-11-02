

import React from 'react'
import Header from '../Header'
import { LayoutWrapper } from './styles'

const Layout = ({children}) => {
  return (
    <LayoutWrapper>
     <Header/>
     {children}
     <p>footer</p>
    </LayoutWrapper>
  )
}

export default Layout
