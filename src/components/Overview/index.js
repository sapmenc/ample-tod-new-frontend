import Image from "next/image";
import { ItWorkIcon } from "@/assets/Images";

function Overview() {
  return (
    <div className="flex justify-center w-full text-center my-14 md:my-20 p-8 md:16">
      <div className="md:max-w-[690px] flex flex-col items-center">
        <div>
          <Image
            width={150}
            height={150}
            object-fit="contain"
            src={ItWorkIcon}
            className="3xl:w-full"
            alt="workforce svg"
          />
        </div>
        <h1 className="text-new_primary font-extrabold text-[35px] md:text-[45px] tracking-wide mt-[22px] md:mt-[35px]">
          IT WORKFORCE
        </h1>
        <h2 className="mt-[18px] md:mt-[35px] text-sm text-new_secondary font-bold">
          WITH THE CURRENT IT MARKET ENVIRONMENT BEING HIGHLY VOLATILE AND
          COMPETITIVE
        </h2>
        <p className="mt-[16px] md:mt-[25px] text-sm  text-gray-500">
          IT has become extremely vital for companies to possess the ability to
          change the size and make-up of their IT workforce according to their
          present needs. At AMPLE, our IT strategic staffing solutions provide
          you with all required capabilities that are needed for your company's
          IT talent requirements,
        </p>
      </div>
    </div>
  );
}

export default Overview;
