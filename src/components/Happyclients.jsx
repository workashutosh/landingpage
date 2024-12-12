import human from '../images/human.webp';



const Happyclients = () => {
    return (
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="relative h-96">
          <img src={human} alt="" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
  
        {/* Stats Overlay Container */}
        <div className="absolute top-0 md:top-40 left-0 right-0 z-20 text-white px-10 py-5">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
               <div className="md:border-r">
                 <h3 className="text-3xl font-bold">92%</h3>
                 <p>Positive feedback</p>
               </div>
               <div className="md:border-r">
                 <h3 className="text-3xl font-bold">5,000+</h3>
                 <p>Happy Clients</p>
               </div>
               <div className="md:border-r">
                 <h3 className="text-3xl font-bold">100,000+</h3>
                 <p>Man Hours of Experience</p>
               </div>
               <div>
                 <h3 className="text-3xl font-bold">+7</h3>
                 <p>Years of Services</p>
               </div>
             </div>
        </div>


      </div>
    );
  };
  
  export default Happyclients;
  