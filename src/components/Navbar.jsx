import twm from '../images/twm.webp';

const Navbar = () => {
  return (
    <nav className="z-[100]">
        <div className=" justify-start shadow-sm ">
            <img src={twm} alt="twm" className=" ml-2 w-[120px] p-1" />
        </div>
    </nav>
  )
}

export default Navbar