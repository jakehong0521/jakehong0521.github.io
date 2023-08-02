// component
import Content from "components/Content.js";
import Cover from "components/Cover.js";
import Footer from "components/Footer.js";

export default function Home(): JSX.Element {
  return (
    <>
      <div style={{ height: "3000px" }}>
        <Cover />
      </div>
      <Content />
      <Footer />
    </>
  );
}
