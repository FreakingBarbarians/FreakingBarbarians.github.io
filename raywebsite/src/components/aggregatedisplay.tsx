import * as React from 'react'
import { Link } from 'gatsby'
import {
  horizontalContainer,
  bottomAlignedContainer,
  dateCSS,
  slugCSS,
  titleCSS,
  displayContainer
} from './aggregatedisplay.module.css'

import './aggregatedisplay.css'

import TopBar from './topbar'

const AggregateDisplay = ({slug, title, date, html}) => {
  return (
    <div>
        <div className={horizontalContainer}>
          <span className={bottomAlignedContainer}><Link to={slug} className={titleCSS}>{title}</Link></span>
          <span className={dateCSS}>{date}</span>
          <span className={slugCSS}><Link className={slugCSS} to={slug}>{slug}</Link></span>
        </div>
        <div className={displayContainer} dangerouslySetInnerHTML={{ __html: html }}></div>
        <hr></hr>
    </div>
  )
}

export default AggregateDisplay