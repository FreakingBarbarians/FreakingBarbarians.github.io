import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './topbar.module.css'


let links = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Blargh",
      link: "/blog"
    },
    {
      name: "Contact",
      link: "/contact"
    },
  ]

class TopBar extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div className={container}>
                <ul className={navLinks}>
                {links.map((element) => <li key={element.link} className={navLinkItem}><Link className={navLinkText} to={element.link}>{element.name}</Link></li>)}
                </ul>
            </div>
        )
    }
}

export default TopBar