import { Button } from "@mui/material";
import { useState } from "react";

const Profile = () => {
  // State to handle the form data
  const [guardianInfo, setGuardianInfo] = useState({
    guardianName: "Muhammad Jamil",
    cellNumber: "123456789011",
    cnic: "12345678911",
    occupation: "construction",
    email: "abc@gmail.com",
  });

  const [addressInfo, setAddressInfo] = useState({
    permanentAddress: "ABC street New York",
    presentAddress: "ABC street New York",
    personalEmail: "riyanjamil220@gmail.com",
    officialEmail: "2023F-BSE-075@ssuet.edu.pk",
    cellNumber: "123456789011",
    cnic: "42101-7905363-3",
  });

  // Handle the onChange for form fields
  const handleGuardianChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuardianInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-8xl mx-auto p-5 bg-white rounded-lg shadow-md overflow-x-auto sm:p-7">
      {/* Profile Title */}
      <div className="flex justify-center text-center text-lg font-semibold text-gray-800 mb-4 sm:text-2xl md:text-3xl">
        Student Profile | BS-Software Engineering-Morning
      </div>

      {/* Divider Line */}
      <hr className="border-t-2 border-gray-300 mb-6" />

      {/* Profile Data */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6">
        {/* Row 1 */}
        <div className="flex justify-between w-full sm:w-1/2 text-sm text-gray-700 md:text-lg">
          <div>Full Name:</div>
          <div className="font-semibold">RYAN JAMIL</div>
        </div>

        <div className="flex justify-between w-full sm:w-1/2 text-sm text-gray-700 md:text-lg">
          <div>Registration No:</div>
          <div className="font-semibold">2023F-BSE-075</div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between w-full sm:w-1/2 text-sm text-gray-700 md:text-lg">
          <div>Date Of Birth:</div>
          <div className="font-semibold">25-Oct-2004</div>
        </div>

        <div className="flex justify-between w-full sm:w-1/2 text-sm text-gray-700 md:text-lg">
          <div>Gender:</div>
          <div className="font-semibold">Male</div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-between w-full sm:w-1/2 text-sm text-gray-700 md:text-lg">
          <div>NIC #:</div>
          <div className="font-semibold">42101-7905363-3</div>
        </div>
      </div>

      {/* Flex container for the Guardian Information card and another card */}
      <div className="flex flex-wrap gap-3 mt-10 md:flex-nowrap md:gap-6">
        {/* Guardian Information Card */}
        <div className="w-full sm:w-1/2 bg-white rounded-lg mb-6 md:p-6">
          <div className="text-lg font-semibold text-gray-800 mb-4 text-center md:text-xl">Guardian Information</div>
          <hr className="border-t-2 border-gray-300 mb-6" />

          <div className="flex flex-wrap gap-3 justify-center md:gap-6">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Relation: *</label>
              <select className="border border-gray-300 p-2 rounded-md mt-2">
                <option>Father</option>
                <option>Mother</option>
                <option>Guardian</option>
              </select>
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Guardian Name: *</label>
              <input
                type="text"
                name="guardianName"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Name"
                value={guardianInfo.guardianName}
                onChange={handleGuardianChange}
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Cell #: *</label>
              <input
                type="text"
                name="cellNumber"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Cell Number"
                value={guardianInfo.cellNumber}
                onChange={handleGuardianChange}
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">CNIC/NICOP/NTN #: *</label>
              <input
                type="text"
                name="cnic"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter CNIC/NICOP/NTN #"
                value={guardianInfo.cnic}
                onChange={handleGuardianChange}
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Occupation: *</label>
              <input
                type="text"
                name="occupation"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Occupation"
                value={guardianInfo.occupation}
                onChange={handleGuardianChange}
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Email: *</label>
              <input
                type="email"
                name="email"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Guardian Email"
                value={guardianInfo.email}
                onChange={handleGuardianChange}
              />
            </div>

            <div className="w-full flex justify-center mt-6">
              <Button size="large" variant="contained">Save</Button>
            </div>
          </div>
        </div>

        {/* Second Card: Residential Address & Personal Information */}
        <div className="w-full sm:w-1/2 bg-white rounded-lg mb-6 md:p-6">
          <div className="text-lg font-semibold text-gray-800 mb-4 text-center md:text-xl">Residential Address</div>
          <hr className="border-t-2 border-gray-300 mb-6" />

          <div className="flex flex-wrap gap-3 md:gap-6">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Permanent Address: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter your Permanent Address"
                value={addressInfo.permanentAddress}
                onChange={handleAddressChange}
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Present Address: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter your Present Address"
                value={addressInfo.presentAddress}
                onChange={handleAddressChange}
              />
            </div>
          </div>

          <div className="text-lg font-semibold text-gray-800 mb-4 mt-8 text-center md:text-xl">Personal Information</div>
          <hr className="border-t-2 border-gray-300 mb-6" />

          <div className="flex flex-wrap gap-3 md:gap-6">
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Cell #: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Cell Number"
                value={addressInfo.cellNumber}
                onChange={handleAddressChange}
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Personal Email: *</label>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Personal Email"
                value={addressInfo.personalEmail}
                onChange={handleAddressChange}
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">Official Email: *</label>
              <input
                type="email"
                value={addressInfo.officialEmail}
                disabled
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter Official Email"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-700 md:text-lg">CNIC #: *</label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md mt-2"
                placeholder="Please enter CNIC Number"
                value={addressInfo.cnic}
                onChange={handleAddressChange}
              />
            </div>

            <div className="w-full flex justify-center mt-6">
              <Button size="large" variant="contained">Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;