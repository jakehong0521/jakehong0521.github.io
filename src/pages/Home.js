import { Fragment, memo } from 'react'

// component
import Content from 'components/Content.js'
import Cover from 'components/Cover.js'
import Footer from 'components/Footer.js'

export default function Home(props) {
  return (
    <Fragment>
      <div style={{ height: '3000px' }}>
        <Cover />
      </div>
      <Content />
      <Footer />
    </Fragment>
  )
}
