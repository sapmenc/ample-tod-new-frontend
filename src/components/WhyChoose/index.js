import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { chooseIcon } from "@/assets/Images";
function WhyChoose() {
  return (
    <div className="bg-new_primary px-12 sm:px-16 flex flex-col items-center pb-32 relative">
      {/* choose icon */}
      <div className="mt-[30px] md:mt-[50px] lg:mt-[60px] w-[75px] md:w-[150px] lg:w-[200px]">
        <Image
          width={1500}
          height={6800}
          object-fit="contain"
          src={chooseIcon}
          className="w-full h-full 3xl:w-full"
          alt="desktop hero banner"
        />
      </div>

      {/* headline */}
      <div className="text-white font-extrabold text-center text-[35px] md:text-[45px] md:max-w-[750px] leading-[40px] md:leading-[50px] mt-[20px] md:mt-[30px] lg:mt-[50px]">
        WHY CHOOSE US?
      </div>

      {/* para 1 */}
      <div className="text-center text-white font-bold mt-[30px] md:mt-[40px]">
        When you choose Ample as your IT strategic services staffing partner you
        are assured of a guaranteed response to 100% of the requisitions you
        submit. We ensure that the teams of highly speciapzed individuals that
        we supply make an immediate impact on your business. Deciding to use
        Ample's strategic staffing services also provides you with additional
        benefits that include,
      </div>

      {/* attributes */}
      <div>
        <div className="text-white text-center pst-disc mt-[50px] md:mt-[45px] flex flex-col gap-1">
          <p>
            <span className="font-bold">&#x2022;</span> Consistent consultant
            retention throughout your project with less than 10% turnover
          </p>
          <p>
            <span className="font-bold">&#x2022;</span> Dedicated account
            management and recruitment through data-driven service level
            agreements
          </p>
          <p>
            <span className="font-bold">&#x2022;</span> Process efficiency
            through effective co-employment exposure
          </p>
          <p>
            <span className="font-bold">&#x2022;</span> Cost-efficiency through
            leveraged volume for below-market pricing
          </p>
          <p>
            <span className="font-bold">&#x2022;</span> Faster response rate by
            ensuring that resumes are available within hours
          </p>
          <p>
            <span className="font-bold">&#x2022;</span> Higher candidate
            acceptance rate through pre-screening of candidates
          </p>
          <p>
            <span className="font-bold">&#x2022;</span> Fewer hassles through
            the use of paperless process and single point of contact methods
          </p>
          <p>
            <span className="font-bold">&#x2022;</span> Technology support
            through the supply of tools for recruiter work flow management,
            repository management and reporting
          </p>
          <p>
            <span className="font-bold">&#x2022;</span> Additional Support
            through deployment of Transition Teams and Onsite Presence
          </p>
        </div>
      </div>

      {/* para 2 */}
      <div className="text-center text-white font-bold mt-[30px] md:mt-[40px]">
        OUR COMPREHENSIVE IT STAFFING SOLUTIONS INCLUDE SCREENING RECRUITING,
        HIRING, DEPLOYMENT, ADMINISTRATION, AND ONGOING MANAGEMENT OF TECHNICAL
        RESOURCES. OUR CLIENTS ARE ALSO OFFERED THE CHOICE OF APPOINTING US AS
        AN ONSITE OR OFFSITE MANAGED SERVICES PROVIDER WHERE WE WILL BE DIRECTLY
        RESPONSIBLE IN MANAGING AND STAFFING A CLIENTGROUP OR FUNCTION.
      </div>

      {/* para 3 */}
      <div className="mt-[25px] text-center text-white text-sm">
        At VYSE, we are committed to providing consistent, cost-effective IT
        staffing, using pre-tested processes and procedures. This has enabled us
        to provide superior quapty technical resources to major IT service
        providers and large corporate houses.
      </div>

      {/* ready to join */}
      <div className="absolute -bottom-32 sm:-bottom-20 xl:-bottom-16 w-[70vw] bg-[#17293d] shadow-lg shadow-[#17293d]/100 rounded-3xl p-5 lg:p-10 flex flex-col lg:flex-row lg:justify-between gap-4">
        <h1 className="font-bold text-white text-[30px] md:text-[35px] text-center">
          READY TO JOIN THE TEAM?
        </h1>
        <span className="group md:cursor-pointer text-new_primary bg-white justify-between flex items-center font-bold py-4 px-4 rounded-lg w-[90%] self-center max-w-[300px]">
          <h1 className="md:group-hover:scale-105 duration-200 text-2xl">
            Let's connect
          </h1>
          <div className="h-5 w-5 md:group-hover:scale-105">
            <ChevronRightIcon className="w-full h-full" />
          </div>
        </span>
      </div>
    </div>
  );
}

export default WhyChoose;
