import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
import SaveIcon from "@mui/icons-material/Save";

const Profile = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  const [guardianInfo, setGuardianInfo] = useState({
    relation: "Father",
    guardianName: "Muhammad Jamil",
    cellNumber: "+92 300 1234567",
    cnic: "42101-1234567-1",
    occupation: "Civil Engineer & Contractor",
    email: "muhammad.jamil@gmail.com",
  });

  const [addressInfo, setAddressInfo] = useState({
    permanentAddress: "House 142, Block 13-D, Gulshan-e-Iqbal, Karachi",
    presentAddress: "House 142, Block 13-D, Gulshan-e-Iqbal, Karachi",
    personalEmail: "riyanjamil220@gmail.com",
    officialEmail: "2023F-BSE-075@ssuet.edu.pk",
    cellNumber: "+92 333 9876543",
    cnic: "42101-9876543-1",
  });

  const handleGuardianChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGuardianInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setToastOpen(true);
  };

  return (
    <div className="space-y-6 pb-12">
      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={() => setToastOpen(false)} severity="success" variant="filled">
          Profile information updated successfully!
        </Alert>
      </Snackbar>

      {/* Profile Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-4 ring-indigo-50 shrink-0 bg-slate-100">
            <img
              src={`${baseUrl}images/avatar.png`}
              alt="Riyan Jamil"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `${baseUrl}images/dp.png`;
              }}
            />
          </div>

          <div className="flex-1 text-center sm:text-left space-y-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Riyan Jamil</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                Active Student
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-indigo-600">
              BS Software Engineering (Morning) • Batch 2023F
            </p>
            <p className="text-xs text-slate-500">
              Department of Computer & Information Systems Engineering • SSUET Karachi
            </p>

            <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2">
              <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-semibold">
                ID: 2023F-BSE-075
              </span>
              <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs">
                Enrollment: 2959/SE/2023F
              </span>
              <span className="px-3 py-1 rounded-xl bg-indigo-50 text-indigo-700 text-xs font-semibold">
                Section B • 4th Semester
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Academic & Basic Particulars */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
          <PersonIcon className="w-4 h-4 text-indigo-600" />
          <h2 className="text-sm font-bold text-slate-800">Student Personal Particulars</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Full Legal Name</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">Riyan Jamil</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Father's Name</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">Muhammad Jamil</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Date of Birth</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">10-Nov-2004</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Gender</span>
            <span className="font-semibold text-slate-900 mt-0.5 block">Male</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">CNIC / Form B</span>
            <span className="font-semibold text-slate-900 font-mono mt-0.5 block">42101-9876543-1</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Official University Email</span>
            <span className="font-semibold text-indigo-600 truncate mt-0.5 block">2023F-BSE-075@ssuet.edu.pk</span>
          </div>
        </div>
      </div>

      {/* Forms Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Guardian Information */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
              <ContactPhoneIcon className="w-4 h-4 text-indigo-600" />
              <h2 className="text-sm font-bold text-slate-800">Guardian / Next of Kin Details</h2>
            </div>

            <form onSubmit={handleSave} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Relationship</label>
                <select
                  name="relation"
                  value={guardianInfo.relation}
                  onChange={handleGuardianChange}
                  className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Guardian">Legal Guardian</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Guardian Name</label>
                <input
                  type="text"
                  name="guardianName"
                  value={guardianInfo.guardianName}
                  onChange={handleGuardianChange}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Cell Number</label>
                  <input
                    type="text"
                    name="cellNumber"
                    value={guardianInfo.cellNumber}
                    onChange={handleGuardianChange}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">CNIC Number</label>
                  <input
                    type="text"
                    name="cnic"
                    value={guardianInfo.cnic}
                    onChange={handleGuardianChange}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    value={guardianInfo.occupation}
                    onChange={handleGuardianChange}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={guardianInfo.email}
                    onChange={handleGuardianChange}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <SaveIcon className="w-3.5 h-3.5" />
                  <span>Update Guardian Info</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact & Residential Address */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
              <HomeIcon className="w-4 h-4 text-indigo-600" />
              <h2 className="text-sm font-bold text-slate-800">Residential & Communication Address</h2>
            </div>

            <form onSubmit={handleSave} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Permanent Address</label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={addressInfo.permanentAddress}
                  onChange={handleAddressChange}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Present / Mailing Address</label>
                <input
                  type="text"
                  name="presentAddress"
                  value={addressInfo.presentAddress}
                  onChange={handleAddressChange}
                  className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Personal Contact Number</label>
                  <input
                    type="text"
                    name="cellNumber"
                    value={addressInfo.cellNumber}
                    onChange={handleAddressChange}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Personal Email</label>
                  <input
                    type="email"
                    name="personalEmail"
                    value={addressInfo.personalEmail}
                    onChange={handleAddressChange}
                    className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <SaveIcon className="w-3.5 h-3.5" />
                  <span>Save Address Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
