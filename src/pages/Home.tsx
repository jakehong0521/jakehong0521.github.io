// component
import Content from "../components/Content"
import Cover from "../components/Cover"
import Footer from "../components/Footer"

export default function Home(): JSX.Element {
  return (
    <>
      <div style={{ height: "3000px" }}>
        <Cover />
      </div>
      <Content />
      <Footer />
    </>
  )
}
