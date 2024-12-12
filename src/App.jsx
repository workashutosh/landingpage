import Navbar from "./components/Navbar"
import FormContainer from "./components/FormContainer"
import Services from "./components/Services"
import Happyclients from "./components/Happyclients"
import Address from "./components/Address"

function App() {

  return (
    <>
      <div className=" m-0 p-0 font-lato">
        <Navbar /> 
        <FormContainer />
        <Services />
        <Happyclients />
        <Address />
      </div>
    </>
  )
}

export default App
