import Navbar from "./components/Navbar"
import FormContainer from "./components/FormContainer"
import Services from "./components/Services"
import Happyclients from "./components/Happyclients"
import Address from "./components/Address"
import SEBIBanner from "./components/SebiBanner"
import SEBIEXBanner from "./components/ExpertBanner"

function App() {

  return (
    <>
      <div className=" m-0 p-0 font-lato">
        {/* <Navbar />  */}
        <FormContainer />
        <SEBIBanner />
        <Services />
        <SEBIEXBanner />
        <Happyclients />
        <Address />
      </div>
    </>
  )
}

export default App
