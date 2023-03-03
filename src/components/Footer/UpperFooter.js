import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

function UpperFooter() {
  return (
    <div className="text-new_secondary text-lg gap-4 gap-y-8  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 3xl:text-2xl">
      {/* Firm 1 */}
      <div className="basis-full p-4 rounded-xl border-solid ">
        {/* Place */}
        <h1 className="text-new_primary font-bold">BANGALORE, KARNATAKA</h1>
        {/* Firm Name */}
        <p>Ample Enterprise Technologies</p>
        {/* Company Status */}
        <p>Private Limited.</p>
        {/* Address Line 1 */}
        <p>Sparkline Solutions #881, Suite 441</p>
        {/* Address Line 2 */}
        <p>100 Feet Road, Indiranagar</p>
        {/* Address Line 3 */}
        <p>Bangalore - 560038</p>
        {/* Phone */}
        <a href="tel:+91 9590402080">
          <div className="mt-2 flex items-center gap-2">
            <div className="h-6 w-6 p-1 rounded bg-new_primary text-white">
              <PhoneIcon className="w-full h-full" />
            </div>
            <p className="font-bold text-[15px]">+91 9590402080</p>
          </div>
        </a>
        {/* Email */}
        <a href="mailto:info@ampletechnologies.com">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 p-1 rounded bg-new_primary text-white">
              <EnvelopeIcon className="w-full h-full" />
            </div>
            <p className="font-bold text-[15px]">info@ampletechnologies.com</p>
          </div>
        </a>
      </div>

      {/* Firm 2 */}
      <div className="basis-full p-4 rounded-xl border-solid">
        {/* Place */}
        <h1 className="text-new_primary font-bold">MAHARASTRA, PUNE</h1>
        {/* Firm Name */}
        <p>Ample Enterprise Technologies</p>
        {/* Company Status */}
        <p>Private Limited.</p>
        {/* Address Line 1 */}
        <p>No. 450, Marvel Vista SahanjeyDukar Park</p>
        {/* Address Line 2 */}
        <p>4th Floor, Lulla Nagar Chowk</p>
        {/* Address Line 3 */}
        <p>Bibwewadi, Pune - 411037</p>
        {/* Phone */}
        <a href="tel:+91 9590402080">
          <div className="mt-2 flex items-center gap-2">
            <div className="h-6 w-6 p-1 rounded bg-new_primary text-white">
              <PhoneIcon className="w-full h-full" />
            </div>
            <p className="font-bold text-[15px]">+91 9373658060</p>
          </div>
        </a>
        {/* Email */}
        <a href="mailto:hr@ampletechnologies.com">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 p-1 rounded bg-new_primary text-white">
              <EnvelopeIcon className="w-full h-full" />
            </div>
            <p className="font-bold text-[15px]">hr@ampletechnologies.com</p>
          </div>
        </a>
      </div>

      {/* Firm 3 */}
      <div className="basis-full p-4 rounded-xl border-solid ">
        {/* Place */}
        <h1 className="text-new_primary font-bold">USA, HEADQUARTERS</h1>
        {/* Firm Name */}
        <p>Ample Enterprise Technologies</p>
        {/* Company Status */}
        <p>Private Limited.</p>
        {/* Address Line 1 */}
        <p>7901 4th St N, STE 300</p>
        {/* Address Line 2 */}
        <p>St. Petersburg, FL 33702</p>
      </div>

      {/* Firm 4 */}
      <div className="basis-full p-4 rounded-xl border-solid">
        {/* Place */}
        <h1 className="text-new_primary font-bold">UK, HEADQUARTERS</h1>
        {/* Firm Name */}
        <p>AMPLE TECHNOLOGIES</p>
        {/* Company Status */}
        <p>LIMITED.</p>
        {/* Address Line 1 */}
        <p>27 Old Gloucester Street</p>
        {/* Address Line 2 */}
        <p>LONDON WC1N 3AX</p>
        {/* Address Line 3 */}
        <p>UNITED KINGDOM</p>
      </div>
    </div>
  );
}

export default UpperFooter;
