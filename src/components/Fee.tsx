import { useState } from "react";
import { Link } from "react-router";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PrintIcon from "@mui/icons-material/Print";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const feeBreakdown = [
  { nature: "Semester Tuition Fee (Spring 2025)", amount: 102000, status: "Unpaid" },
  { nature: "Examination Fee", amount: 11000, status: "Unpaid" },
  { nature: "Students Activities & Societies", amount: 1100, status: "Unpaid" },
  { nature: "Library & IT Infrastructure", amount: 5700, status: "Unpaid" },
];

const pastPayments = [
  { billNo: "FB-2024-F-8821", session: "Fall 2024", date: "15-Aug-2024", amount: 98000, bank: "KuickPay (HBL)", status: "Paid" },
  { billNo: "FB-2024-S-4412", session: "Spring 2024", date: "10-Feb-2024", amount: 92000, bank: "Meezan Bank", status: "Paid" },
  { billNo: "FB-2023-F-1102", session: "Fall 2023", date: "05-Sep-2023", amount: 115000, bank: "Allied Bank", status: "Paid" },
];

const Fee = () => {
  const [voucherGenerated, setVoucherGenerated] = useState(false);

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Finance & Accounts Department
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Fee Management & Challan
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Current Semester Dues, Online Vouchers & Payment History
            </p>
          </div>

          <Link
            to="/dashboard/finantial-ledger"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors self-start sm:self-auto"
          >
            <span>View Full Financial Ledger</span>
            <ArrowForwardIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Fee Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Dues Card & Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          {/* Outstanding Balance Banner */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-100">
                Net Outstanding Balance
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-1 tracking-tight">
                PKR 119,800.00
              </h2>
              <p className="text-xs text-amber-100 mt-1">Due Date: 30-May-2025 • Spring 2025</p>
            </div>

            <button
              type="button"
              onClick={() => setVoucherGenerated(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-amber-900 font-bold text-xs shadow-md hover:bg-amber-50 transition-colors"
            >
              <ReceiptLongIcon className="w-4 h-4 text-amber-600" />
              <span>Generate Bank Voucher</span>
            </button>
          </div>

          {voucherGenerated && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between gap-3 animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Challan <strong>#SSUET-2025S-77291</strong> generated successfully. You can pay via KuickPay Consumer ID: <strong>992023075</strong> or at any Allied Bank / Meezan Bank branch.
                </span>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="shrink-0 font-bold underline flex items-center gap-1 hover:text-emerald-950"
              >
                <PrintIcon className="w-3.5 h-3.5" />
                <span>Print Challan</span>
              </button>
            </div>
          )}

          {/* Fee Itemization Table */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Spring 2025 Dues Breakdown</h3>
              <span className="text-xs text-slate-500">4 Items</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider text-[11px] border-b border-slate-200">
                    <th className="py-3 px-4">Fee Nature / Head</th>
                    <th className="py-3 px-4 text-right">Amount (PKR)</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {feeBreakdown.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-medium text-slate-800 flex items-center gap-2">
                        <AccountBalanceWalletIcon className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.nature}</span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900">
                        {item.amount.toLocaleString()}.00
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-700">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Col: Payment Channels & Instructions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 space-y-4">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-3">
              Payment Methods & Instructions
            </h3>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <p className="font-bold text-slate-800">1. KuickPay Online (Recommended)</p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Pay through mobile banking (Easypaisa, JazzCash, Nayapay, or any 1Link bank app) using Bill Payment &gt; Kuickpay &gt; ID: <strong>992023075</strong>.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <p className="font-bold text-slate-800">2. Bank Over-The-Counter</p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Print the generated 3-ply bank voucher and deposit at any Allied Bank (ABL) or Meezan Bank branch across Pakistan.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <p className="font-bold text-slate-800">3. SSUET Finance Counter</p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Pay order / Bank Draft drawn in favor of <em>Sir Syed University of Engineering & Technology</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Previous Paid Records */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-3">
              Recent Paid Receipts
            </h3>

            <div className="divide-y divide-slate-100 mt-2 text-xs">
              {pastPayments.map((p, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-slate-800">{p.session}</p>
                    <p className="text-[11px] text-slate-400">{p.billNo} • {p.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-slate-900">PKR {p.amount.toLocaleString()}</p>
                    <span className="text-[10px] text-emerald-600 font-semibold">{p.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fee;
