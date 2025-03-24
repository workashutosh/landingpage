import human from '../images/human.webp';

const Happyclients = () => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="relative h-screen md:h-96">
        <img src={human} alt="Happy Clients" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Content Overlay Container */}
      <div className="absolute top-0 left-0 right-0 z-20 text-white px-4 md:px-10 py-8 md:py-5 flex flex-col items-center">
        {/* Value Proposition Headline */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">
          Trusted by Thousands for Proven Results
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center max-w-5xl w-full">
          <div className="md:border-r border-white/30">
            <h3 className="text-3xl md:text-4xl font-bold text-[#ff9900]">92%</h3>
            <p className="text-sm md:text-base">Positive Feedback</p>
          </div>
          <div className="md:border-r border-white/30">
            <h3 className="text-3xl md:text-4xl font-bold text-[#ff9900]">5,000+</h3>
            <p className="text-sm md:text-base">Happy Clients</p>
          </div>
          <div className="md:border-r border-white/30">
            <h3 className="text-3xl md:text-4xl font-bold text-[#ff9900]">100,000+</h3>
            <p className="text-sm md:text-base">Man Hours of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#ff9900]">7+</h3>
            <p className="text-sm md:text-base">Years of Service</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-8 md:mt-12 text-center max-w-2xl">
          <p className="text-lg md:text-xl italic mb-4">
            "Their expertise turned my investments into consistent profits. Highly recommend!"
          </p>
          <p className="text-[#ff9900] text-sm md:text-base">
            - Anita S., Loyal Client
          </p>
        </div>

        {/* Subtle CTA */}
        <div className="mt-6">
          <a
            href="#booking" // Replace with actual link or form trigger
            className="inline-block bg-[#ff9900] text-white font-medium py-2 px-6 rounded-md hover:bg-[#e68a00] transition-colors duration-300"
          >
            Join Our Success Stories
          </a>
        </div>
      </div>
    </div>
  );
};

export default Happyclients;