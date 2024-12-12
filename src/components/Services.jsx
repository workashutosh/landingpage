const serviceData1 = [
    {
      imgSrc: "/services/stock_cash.webp",
      title: "STOCK CASH ADVICE",
      description: `This package is suitable for small and medium Investor, who look for cash market related Recommendation in Indian stock market.
        We will provide 1-2 Cash Recommendation every day.
        We will provide 20-22 Cash Recommendation in a month.
        Recommendation via SMS OR Telephonic support.
        Timely Entry and Exit`,
    },
    {
      imgSrc: "/services/stock_future.webp",
      title: "STOCK FUTURE ADVICE",
      description: `This package is suitable for small and medium Investor, who invest in Future and options segment in Indian stock market.
        We will provide 1-2 Stock future Recommendation every day.
        We will provide 20-22 Stock Future Recommendation in a month.
        Recommendation via SMS OR Telephonic support.
        Timely Entry and Exit`,
    },
  ];

  const serviceData2 = [
    {
      imgSrc: "/services/stock_cash.webp",
      title: "NIFTY FUTURE ADVICE",
      description: `This package is suitable small and medium Investor, who want to invest in Nifty and Bank nifty futures.
                    We will provide you 3-4 Nifty and Bank Nifty Recommendation per week .
                    Recommendation via SMS OR Telephonic support.
                    Timely Entry and Exit`,
    },
    {
      imgSrc: "/services/stock_future.webp",
      title: "BANK NIFTY FUTURE ADVICE",
      description: `This package is suitable small and medium Investor, who want to invest in Nifty and Bank nifty futures.
                    We will provide you 3-4 Nifty and Bank Nifty Recommendation per week.
                    Recommendation via SMS OR Telephonic support.
                    Timely Entry and Exit`,
    },
  ];

  const serviceData3 = [
    {
      imgSrc: "/services/stock_cash.webp",
      title: "NIFTY OPTION ADVICE",
      description: `This package is suitable small and medium Investor, who want to invest in Nifty option and Bank nifty option.
                        We will provide you 3-4 Nifty and Bank Nifty Recommendation per week.
                        Recommendation via SMS OR Telephonic support.
                        Timely Entry and Exit`,
    },
    {
      imgSrc: "/services/stock_future.webp",
      title: "BANK NIFTY OPTION ADVICE",
      description: `This package is suitable small and medium Investor, who want to invest in Nifty option and Bank nifty option.
                    We will provide you 3-4 Nifty and Bank Nifty Recommendation per week.
                    Recommendation via SMS OR Telephonic support.
                    Timely Entry and Exit`,
    },
  ];

  const serviceData4 = [
    {
      imgSrc: "/services/stock_cash.webp",
      title: "STOCK OPTION ADVICE",
      description: `This package is suitable for the small and medium Investor, who look for Stock Option related Recommendation in Indian stock market.
                    We will provide 1-2 Option Recommendation every day.
                    We will provide 20-22 Option Recommendation in a month .
                    Recommendation via SMS OR Telephonic support.
                    Timely Entry and Exit`,
    },
  ];
  
  const Services = () => {
    return (
      <div>
        <div className="flex justify-center items-center p-4">
          <span className="text-center font-semibold text-[20px] mt-2 p-2 border-gray-300 border-b border-t">
            OUR SERVICES
          </span>
        </div>
        <div className="p-8 flex flex-col gap-3 justify-between">
          <div className="w-full text-sm text-gray-500 gap-4 flex flex-col md:flex-row justify-between">
            {serviceData1.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[50%] p-3   flex flex-col items-center"
              >
                <img src={service.imgSrc} alt={service.title} className="w-[100px]" />
                <h4 className="mt-1 text-red-500 font-semibold">{service.title}</h4>
                <p className="p-2 text-center">
                  {service.description.match(/.{1,90}/g).map((chunk, index) => (
                    <span key={index}>
                      {chunk.trim()}
                      <br />
                    </span>
                  ))}
                </p>

              </div>
            ))}
          </div>
          <div className="w-full text-sm text-gray-500  gap-4 flex flex-col md:flex-row justify-between">
            {serviceData2.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[50%] p-3  flex flex-col items-center"
              >
                <img src={service.imgSrc} alt={service.title} className="w-[100px]" />
                <h4 className="mt-1 text-red-500 font-semibold">{service.title}</h4>
                <p className="p-2 text-center">
                  {service.description.match(/.{1,90}/g).map((chunk, index) => (
                    <span key={index}>
                      {chunk.trim()}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full text-sm text-gray-500 gap-4 flex flex-col md:flex-row justify-between">
            {serviceData3.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[50%] p-3  flex flex-col items-center"
              >
                <img src={service.imgSrc} alt={service.title} className="w-[100px]" />
                <h4 className="mt-1 text-red-500 font-semibold">{service.title}</h4>
                <p className="p-2 text-center">
                  {service.description.match(/.{1,90}/g).map((chunk, index) => (
                    <span key={index}>
                      {chunk.trim()}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full text-sm text-gray-500 gap-4 flex flex-col md:flex-row justify-between">
            {serviceData4.map((service, index) => (
              <div
                key={index}
                className="w-full md:w-[50%] p-3  flex flex-col items-center"
              >
                <img src={service.imgSrc} alt={service.title} className="w-[100px]" />
                <h4 className="mt-1 text-red-500 font-semibold">{service.title}</h4>
                <p className="p-2 text-center">
                  {service.description.match(/.{1,90}/g).map((chunk, index) => (
                    <span key={index}>
                      {chunk.trim()}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;