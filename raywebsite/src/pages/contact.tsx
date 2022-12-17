import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact">
            <p>I'm still trying to figure out how email servers work...
            <br></br><br></br>
            In the meantime I recommend using your imagination.</p>
        </Layout>
    )
}

export const Head = () => <title>Please don't contact me ;w;</title>

export default ContactPage