import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
} from './layout.module.css'
import TopBar from './topbar'

const Layout = ({pageTitle, children }) => {
  return (
    <div className={container}>
      <TopBar></TopBar>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
    </div>
  )
}

export default Layout