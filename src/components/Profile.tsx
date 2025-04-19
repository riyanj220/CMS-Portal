import { Button } from "@mui/material";

const Profile = () => {
  return (
    <div className="max-w-8xl mx-auto p-7 bg-white rounded-lg shadow-md">
      {/* Profile Title */}
      <div className="flex justify-center text-xl font-semibold text-gray-800 mb-4 sm:text-3xl">
        Student Profile | BS-Software Engineering-Morning
      </div>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-300 mb-6" />

      {/* Profile Data */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Row 1 */}
        <div className="flex justify-between w-full sm:w-1/2 text-lg text-gray-700">
          <div>Full Name:</div>
          <div className="font-semibold">RYAN JAMIL</div>
        </div>

        <div className="flex justify-between w-full sm:w-1/2 text-lg text-gray-700">
          <div>Registration No:</div>
          <div className="font-semibold">2023F-BSE-075</div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between w-full sm:w-1/2 text-lg text-gray-700">
          <div>Date Of Birth:</div>
          <div className="font-semibold">25-Oct-2004</div>
        </div>

        <div className="flex justify-between w-full sm:w-1/2 text-lg text-gray-700">
          <div>Gender:</div>
          <div className="font-semibold">Male</div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-between w-full sm:w-1/2 text-lg text-gray-700">
          <div>NIC #:</div>
          <div className="font-semibold">42101-7903983-9</div>
        </div>
      </div>

      {/* Flex container for the Guardian Information card and another card */}
      <div className="flex flex-wrap gap-6 mt-8">
        {/* Guardian Information Card */}
        <div className="w-full sm:w-1/2 p-6 bg-white rounded-lg shadow-md mb-6">
          <div className="text-xl font-semibold text-gray-800 mb-4 text-center">Guardian Information</div>
          <hr className="border-t-2 border-gray-300 mb-6" />

          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Relation: *</label>
              <select className="border border-gray-300 p-2 rounded-md mt-2">
                <option>Father</option>
                <option>Mother</option>
                <option>Guardian</option>
              </select>
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Guardian Name: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Name"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Cell #: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Cell Number"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">CNIC/NICOP/NTN #: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter CNIC/NICOP/NTN #"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Occupation: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Occupation"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Email: *</label>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Guardian Email"
              />
            </div>
            <div>
              <Button size="large" variant="contained">Save</Button>
            </div>
          </div>
        </div>

        {/* Second Card: Residential Address & Personal Information */}
        <div className="w-full sm:w-1/2 p-6 bg-white rounded-lg shadow-md mb-6">
          <div className="text-xl font-semibold text-gray-800 mb-4 text-center">Residential Address</div>
          <hr className="border-t-2 border-gray-300 mb-6" />

          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Permanent Address: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter your Permanent Address"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Present Address: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter your Present Address"
              />
            </div>
          </div>

          <div className="text-xl font-semibold text-gray-800 mb-4 mt-8 text-center">Personal Information</div>
          <hr className="border-t-2 border-gray-300 mb-6" />

          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Cell #: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Cell Number"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Personal Email: *</label>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Personal Email"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">Official Email: *</label>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Official Email"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-lg text-gray-700">CNIC #: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter CNIC Number"
              />
            </div>
            <div>
              <Button size="large" variant="contained">Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
