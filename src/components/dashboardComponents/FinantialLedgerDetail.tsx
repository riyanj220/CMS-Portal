import { useState } from "react";
import { Link } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PrintIcon from "@mui/icons-material/Print";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

interface LedgerRow {
  date: string;
  type: string;
  billNo: string;
  nature: string;
  session: string;
  debit: number;
  credit: number;
  balance: number;
}

const ledgerRows: LedgerRow[] = [
  { date: "19-Apr-2025", type: "Charge", billNo: "FB-2025S-101", nature: "Tuition Fee", session: "Spring 2025", debit: 102000, credit: 0, balance: 119800 },
  { date: "19-Apr-2025", type: "Charge", billNo: "FB-2025S-102", nature: "Students Activities", session: "Spring 2025", debit: 1100, credit: 0, balance: 17800 },
  { date: "19-Apr-2025", type: "Charge", billNo: "FB-2025S-103", nature: "Examination Fee", session: "Spring 2025", debit: 11000, credit: 0, balance: 16700 },
  { date: "19-Apr-2025", type: "Charge", billNo: "FB-2025S-104", nature: "IT & Infrastructure", session: "Spring 2025", debit: 5700, credit: 0, balance: 5700 },
  { date: "15-Aug-2024", type: "Payment", billNo: "KP-992023075", nature: "Online Payment (KuickPay)", session: "Fall 2024", debit: 0, credit: 98000, balance: 0 },
  { date: "10-Aug-2024", type: "Charge", billNo: "FB-2024F-882", nature: "Tuition Fee", session: "Fall 2024", debit: 98000, credit: 0, balance: 98000 },
  { date: "10-Feb-2024", type: "Payment", billNo: "MB-2024S-004", nature: "Bank Deposit (Meezan)", session: "Spring 2024", debit: 0, credit: 92000, balance: 0 },
  { date: "05-Feb-2024", type: "Charge", billNo: "FB-2024S-441", nature: "Tuition Fee", session: "Spring 2024", debit: 92000, credit: 0, balance: 92000 },
  { date: "05-Sep-2023", type: "Payment", billNo: "ABL-2023F-11", nature: "Admission Dues (Allied Bank)", session: "Fall 2023", debit: 0, credit: 115000, balance: 0 },
  { date: "01-Sep-2023", type: "Charge", billNo: "FB-2023F-001", nature: "Admission & 1st Semester Fee", session: "Fall 2023", debit: 115000, credit: 0, balance: 115000 },
];

export default function FinantialLedgerDetail() {
  const [filterSession, setFilterSession] = useState("All");

  const filtered = filterSession === "All"
    ? ledgerRows
    : ledgerRows.filter((r) => r.session === filterSession);

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="Back to Dashboard"
            >
              <ArrowBackIcon className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Student Accounts Statement
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Financial Ledger Statement
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Complete debit/credit transaction history and vouchers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              <PrintIcon className="w-3.5 h-3.5" />
              <span>Print Statement</span>
            </button>
          </div>
        </div>
      </div>

      {/* Student Statement Metadata Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Student Name & ID</span>
            <span className="font-bold text-slate-900 mt-0.5 block text-sm">Riyan Jamil</span>
            <span className="font-mono text-indigo-600 font-semibold text-xs">2023F-BSE-075</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Academic Program</span>
            <span className="font-bold text-slate-900 mt-0.5 block text-sm">BS Software Engineering</span>
            <span className="text-slate-500 text-xs">Batch 2023F • Morning</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-slate-400 font-medium block text-[11px]">Report Generated Date</span>
            <span className="font-bold text-slate-900 mt-0.5 block text-sm">15-May-2025</span>
            <span className="text-slate-500 text-xs">10:45:22 AM PKT</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
            <span className="text-amber-700 font-semibold block text-[11px]">Current Outstanding Balance</span>
            <span className="font-extrabold text-amber-900 mt-0.5 block text-xl font-mono">
              PKR 119,800.00
            </span>
            <span className="text-amber-700 text-xs font-medium">Due for Spring 2025</span>
          </div>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AccountBalanceWalletIcon className="w-4 h-4 text-indigo-600" />
            <h2 className="text-sm font-bold text-slate-800">Ledger Audit Entries</h2>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <label className="text-slate-500 font-medium">Filter Session:</label>
            <select
              value={filterSession}
              onChange={(e) => setFilterSession(e.target.value)}
              className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="All">All Sessions</option>
              <option value="Spring 2025">Spring 2025</option>
              <option value="Fall 2024">Fall 2024</option>
              <option value="Spring 2024">Spring 2024</option>
              <option value="Fall 2023">Fall 2023</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Voucher / Bill No</th>
                <th className="py-3 px-4">Description / Fee Nature</th>
                <th className="py-3 px-4">Session</th>
                <th className="py-3 px-4 text-right">Debit (PKR)</th>
                <th className="py-3 px-4 text-right">Credit (PKR)</th>
                <th className="py-3 px-4 text-right">Running Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((r, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-slate-700">{r.date}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                        r.type === "Payment"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {r.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500">{r.billNo}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{r.nature}</td>
                  <td className="py-3.5 px-4 text-slate-500">{r.session}</td>
                  <td className="py-3.5 px-4 text-right font-mono font-medium text-slate-900">
                    {r.debit > 0 ? r.debit.toLocaleString() + ".00" : "-"}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-medium text-emerald-700">
                    {r.credit > 0 ? r.credit.toLocaleString() + ".00" : "-"}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900">
                    {r.balance.toLocaleString()}.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
