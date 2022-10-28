const Footer = () => {
  return (
    <footer>
      <div className="mx-6 sm:m-auto sm:container  border-[#ECECEC] border-t-[1px] flex justify-between items-center h-[67px] lg:h-[100px] md:flex-row flex-col text-center md:text-left">
        <div>
          <p className="text-[#171821] text-[1.2rem] py-[20px] md:py-[0]">
            © 2022 We Love Ottawa. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <p className="text-[#171821] text-[1.2rem] px-[22.5px] border-[#ECECEC] md:border-r-[1px] border-r-0 py-[20px] md:py-[0]">
            PO BOX 1504, Manotick RPO IDA, Ontario, K4M 1L4 
          </p>
          <div className="h-[1px] w-[37px] bg-[#ECECEC] m-auto md:hidden"/>
          <a href="tel:613-424-5801" className="text-[#171821] text-[1.2rem] px-[22.5px] border-[#ECECEC] md:border-r-[1px] border-r-0 py-[20px] md:py-[0]">
            613-424-5801
          </a>
          <div className="h-[1px] w-[37px] bg-[#ECECEC] m-auto md:hidden"/>
          <a href="mailto:admin@love-ottawa.ca" className="text-[#171821] text-[1.2rem] md:pl-[22.5px] py-[20px] md:py-[0]">
            admin@love-ottawa.ca
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
