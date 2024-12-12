
const Address = () => {
  return (
    <div className="bg-[rgb(47,47,47)]">
        <p className="font-semibold text-xl py-4 p-2 text-white text-center">REGISTRATION GRANTED BY SEBI, MEMBERSHIP OF BASL (IN CASE OF IAS) AND CERTIFICATION FROM NISM IN NO WAY GUARANTEE PERFORMANCE OF THE INTERMEDIARY OR PROVIDE ANY ASSURANCE OF RETURNS TO INVESTORS</p>
        <hr className="bg-[#dd9933] h-2" />
        <div className="flex py-4  justify-between w-full">
            <div className="w-[50%] text-center p-4">
                <p className="text-xs text-[#dd9933] font-semibold">Office Adress</p>
                <p className="text-xs text-[#ffffff] font-semibold">SEBI NO : INH000018081</p>
                <p className="text-xs text-[#ffffff] font-semibold">Address : Maruti Nandan Apartment, Flat No 5, Wasan Nagar, Near Panini Society, Pathardi Phata, NASHIK, MAHARASHTRA, 422009
                Sales Office: Navi Mumbai</p>
            </div>
            <div className="w-[50%] text-center p-4">
                <p className="text-xs text-[#dd9933] font-semibold">Office Adress</p>
                <p className="text-xs text-[#ffffff] font-semibold">Name : RISHABH KUMAR SHARMA</p>
                <p className="text-xs text-[#ffffff] font-semibold">Phone: 9769960695</p>
            </div>
        </div>
        <div className="w-full flex py-4 justify-center">
                <p className="px-8  text-center flex items-center gap-2 text-[12px] font-semibold text-gray-500">
                    <a href="https://twmresearchalert.com/terms-and-conditions/" target="_blank"><span className=" border-[#dd9933] pr-2 border-r-2">T&C</span></a>
                    <a href="https://twmresearchalert.com/legal-disclaimer/" target="_blank"><span className=" border-[#dd9933] pr-2 border-r-2">Disclaimer</span></a>
                    <a href="https://scores.gov.in/scores/Welcome.html" target="_blank"><span className=" border-[#dd9933] pr-2 border-r-2">Grievance</span></a>
                    <span>SEBI Score</span>
                </p>
        </div>
        <p className="text-center text-xs py-4 text-white">Stock Market are inherite Market , Hence we do not claim any guaranteed product/assurance product</p>
    </div>
  )
}

export default Address