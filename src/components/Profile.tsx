import { Button } from "@mui/material";
import { useState } from "react";

const Profile = () => {
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
    cnic: "42111-111111-1",
  });

  const handleGuardianChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuardianInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-10">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Student Profile | BS-Software Engineering - Morning
      </h1>
      <hr className="mb-10 border-gray-300" />

      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base text-gray-700 mb-12">
        {[
          { label: "Full Name", value: "RYAN JAMIL" },
          { label: "Registration No", value: "2023F-BSE-075" },
          { label: "Date Of Birth", value: "10-Nov-2004" },
          { label: "Gender", value: "Male" },
          { label: "NIC #", value: "42111-111111-1" },
        ].map(({ label, value }) => (
          <div className="flex justify-between bg-white p-4 shadow rounded-md" key={label}>
            <span className="font-medium text-gray-600">{label}:</span>
            <span className="font-semibold text-gray-800">{value}</span>
          </div>
        ))}
      </div>

      {/* Details Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Guardian Info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Guardian Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Relation:</label>
              <select className="w-full border rounded-md p-2">
                <option>Father</option>
                <option>Mother</option>
                <option>Guardian</option>
              </select>
            </div>

            {[
              { name: "guardianName", label: "Guardian Name", type: "text" },
              { name: "cellNumber", label: "Cell #", type: "text" },
              { name: "cnic", label: "CNIC/NICOP/NTN #", type: "text" },
              { name: "occupation", label: "Occupation", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label className="block mb-1 text-sm font-medium text-gray-700">{label}:</label>
                <input
                  type={type}
                  name={name}
                  value={guardianInfo[name as keyof typeof guardianInfo]}
                  onChange={handleGuardianChange}
                  className="w-full border rounded-md p-2"
                  placeholder={`Enter ${label}`}
                />
              </div>
            ))}

            <div className="text-center pt-4">
              <Button variant="contained" size="large">Save</Button>
            </div>
          </div>
        </div>

        {/* Address & Personal Info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Residential Address</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Permanent Address:</label>
              <input
                type="text"
                name="permanentAddress"
                value={addressInfo.permanentAddress}
                onChange={handleAddressChange}
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Present Address:</label>
              <input
                type="text"
                name="presentAddress"
                value={addressInfo.presentAddress}
                onChange={handleAddressChange}
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-center text-gray-800 mt-8 mb-4">Personal Information</h2>
          <div className="space-y-4">
            {[
              { name: "cellNumber", label: "Cell #", type: "text" },
              { name: "personalEmail", label: "Personal Email", type: "email" },
              { name: "officialEmail", label: "Official Email", type: "email", disabled: true },
              { name: "cnic", label: "CNIC #", type: "text" },
            ].map(({ name, label, type, disabled }) => (
              <div key={name}>
                <label className="block mb-1 text-sm font-medium text-gray-700">{label}:</label>
                <input
                  type={type}
                  name={name}
                  value={addressInfo[name as keyof typeof addressInfo]}
                  onChange={handleAddressChange}
                  className="w-full border rounded-md p-2"
                  disabled={disabled}
                />
              </div>
            ))}

            <div className="text-center pt-4">
              <Button variant="contained" size="large">Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;