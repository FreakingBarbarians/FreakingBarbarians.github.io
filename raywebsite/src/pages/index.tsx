// Step 1: Import React
import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import '../styles/global.css'
// Step 2: Define your component

class IndexPage extends React.Component {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div>
        <Layout pageTitle = "Hi I'm Ray">
            <h4> And this is my website! </h4>
            <p>
              I built this over a few days during downtime visting my family for christmas. It's my first foray into web development, having lots of fun so far ^_^
              <br></br><br></br>
              Right now it just has my <b><Link to='\blog'>blargh</Link></b>, like a blog with a much lower <em>thought barrier</em> to entry.
              <br></br><br></br>
              I also wanted to host a lot of cool pictures here. Ther will be lots of pics my family dog <span style={{color: 'orange'}}>Kira</span>.
              <br></br><br></br>
              The contacts section is still under construction. If you're reading this chances are you're a close friend or family member so you wouldn't need it anyways. (or you're in graphics and wondering who's squatting on the domain name. In which case its me 😈).
              <br></br><br></br>
              Organization of this site will change and get better(?) As time goes on and my skills improve.
            </p>
        </Layout>
      </div>
    )
  }
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Does anyone read these?</title>

// Step 3: Export your component
export default IndexPage