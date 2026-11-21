import { Link } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const ledgerData = [
  {
    feeNature: "Tuition Fee - Spring 2025",
    session: "Spring 2025",
    date: "19-Apr-2025",
    debit: 102000,
    credit: 0,
    status: "Due",
  },
  {
    feeNature: "Students Activities Fee",
    session: "Spring 2025",
    date: "19-Apr-2025",
    debit: 1100,
    credit: 0,
    status: "Due",
  },
  {
    feeNature: "Examination Fee",
    session: "Fall 2024",
    date: "10-Dec-2024",
    debit: 5200,
    credit: 5200,
    status: "Paid",
  },
  {
    feeNature: "Tuition Fee - Fall 2024",
    session: "Fall 2024",
    date: "10-Aug-2024",
    debit: 98000,
    credit: 98000,
    status: "Paid",
  },
];

const FinancialLedgerCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-slate-800">Financial Ledger</h2>
            <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
              Balance: PKR 119,800
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">Summary of dues, vouchers, and credit entries</p>
        </div>

        <Link
          to="/dashboard/finantial-ledger"
          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition-colors shrink-0 self-start sm:self-auto"
        >
          <span>Full Statement</span>
          <ArrowForwardIcon className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto mt-3 -mx-5 px-5">
        <table className="w-full text-left text-xs whitespace-nowrap">
          <thead>
            <tr className="border-b border-slate-100 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-3">Transaction / Nature</th>
              <th className="py-3 px-3">Session</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3 text-right">Debit (PKR)</th>
              <th className="py-3 px-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {ledgerData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-3 font-medium text-slate-800 flex items-center gap-2">
                  <AccountBalanceWalletIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{row.feeNature}</span>
                </td>
                <td className="py-3 px-3 text-slate-500">{row.session}</td>
                <td className="py-3 px-3 text-slate-500">{row.date}</td>
                <td className="py-3 px-3 text-right font-mono font-semibold text-slate-900">
                  {row.debit.toLocaleString()}
                </td>
                <td className="py-3 px-3 text-right">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      row.status === "Paid"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialLedgerCard;
