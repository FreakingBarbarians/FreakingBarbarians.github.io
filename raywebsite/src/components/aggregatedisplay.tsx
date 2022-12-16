import * as React from 'react'
import { Link } from 'gatsby'
import {
  horizontalContainer,
  bottomAlignedContainer
} from './aggregatedisplay.module.css'

import './aggregatedisplay.css'

import TopBar from './topbar'

const AggregateDisplay = ({slug, title, date, html}) => {
  return (
    <div>
        <div className={horizontalContainer}>
          <span className={bottomAlignedContainer}><h4>{title}</h4></span>
          <span className={bottomAlignedContainer}>{date}</span>
          <span className={bottomAlignedContainer}>{slug}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
        <hr></hr>
    </div>
  )
}

export default AggregateDisplay