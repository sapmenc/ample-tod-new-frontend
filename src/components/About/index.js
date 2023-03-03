import Image from "next/image";
import { strategicIcon } from "@/assets/Images";

function About() {
  return (
    <div className="px-12 sm:px-16 flex flex-col items-center">
      {/* strategy image */}
      <div className="mt-[30px] md:mt-[50px] lg:mt-[60px] w-[75px] md:w-[150px] lg:w-[200px]">
        <Image
          width={1500}
          height={6800}
          object-fit="contain"
          src={strategicIcon}
          className="w-full h-full 3xl:w-full"
          alt="desktop hero banner"
        />
      </div>

      {/* headline */}
      <div className="text-new_primary font-extrabold text-center text-[35px] md:text-[45px] md:max-w-[750px] leading-[40px] md:leading-[50px] mt-[20px] md:mt-[30px] lg:mt-[50px]">
        STRATEGIC STAFFING FOR A BROAD RANGE OF IT FUNCTIONS
      </div>

      {/* attributes */}
      <div className="w-full px-4 md:p-0 flex md:justify-center mt-[50px] md:mt-[85px]">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-5 list-disc text-gray-500 text-sm">
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Project/Program Management
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Software Development
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Business Analysis/IT Strategy
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            IT Infrastructure Support
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Testing/Quality Assurance
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Design and Engineering Support
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Application Maintenance and Enhancement
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            System Implementation and Integration
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Web Development and Maintenance
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Technical Writing
          </li>
          <li className=" md:max-w-[35vw] xl:max-w-[20vw] break-words">
            Help Desk
          </li>
        </ul>
      </div>

      {/* para 1  */}
      <div className="text-center text-new_secondary font-bold mt-[50px] md:mt-[75px]">
        OUR COMPREHENSIVE IT STAFFING SOLUTIONS INCLUDE SCREENING, RECRUITING,
        HIRING, DEPLOYMENT, ADMINISTRATION, AND ONGOING MANAGEMENTO TECHNICAL
        RESOURCES. OUR CLIENTS ARE ALSO OFFERED THE CHOICE OFAPPOINTING US AS AN
        ONSITE OR OFFSITE MANAGED SERVICES PROVIDER WHEREWE WILL BE DIRECTLY
        RESPONSIBLE IN MANAGING AND STAFFING A CLIENTGROUP OR FUNCTION.
      </div>

      {/* para 2 */}
      <div className="mt-[25px] text-center text-gray-700 text-sm">
        At VYSE, we are committed to providing consistent, cost-effective IT
        staffing, using pre-tested processes and procedures. This has enabled us
        to provide superior quality technical resources to major IT service
        providers and large corporate houses.
      </div>
    </div>
  );
}

export default About;
