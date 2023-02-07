import { searchUser } from "@models/users";

export default async function handler(req, res) {
  const user = await searchUser();
  console.log(user);
  res.status(200).json({
    result: 200,
    message: "successfully get sources",
    payload: {
      sources: [
        {
          description: "Month End Accrual Entry",
          sources_name: "Accrual",
        },
        {
          description: "Adjusting Journal Entry",
          sources_name: "Adjustment",
        },
        {
          description: "Allocation",
          sources_name: "Allocation",
        },
        {
          description: "Borrowed and Lent",
          sources_name: "Borrowed and Lent",
        },
        {
          description: "Budget",
          sources_name: "Budget",
        },
        {
          description: "Carry Forward Journal Entry",
          sources_name: "Carry Forward",
        },
        {
          description: "Chargebacks",
          sources_name: "Chargebacks",
        },
        {
          description: "Consolidation",
          sources_name: "Consolidation",
        },
        {
          description: "Credit Memo Applications",
          sources_name: "Credit Memo Applications",
        },
        {
          description: "Credit Memos",
          sources_name: "Credit Memos",
        },
        {
          description: "Debit Memos",
          sources_name: "Debit Memos",
        },
        {
          description: "Deferred Depreciation",
          sources_name: "Deferred Depreciation",
        },
        {
          description: "Fixed Asset Depreciation",
          sources_name: "Depreciation",
        },
        {
          description: "Discounts",
          sources_name: "Discounts",
        },
        {
          description: "Gain or Loss from Foreign Currency",
          sources_name: "Exchange Gain/Loss",
        },
        {
          description: "Shipping Charges",
          sources_name: "Freight",
        },
        {
          description: "Statistical Entry for Headcount",
          sources_name: "Headcount",
        },
        {
          description: "Labor Cost",
          sources_name: "Labor Cost",
        },
        {
          description: "MFIN -  Matel",
          sources_name: "MTL",
        },
        {
          description: "OPM Inventory Movement - Intra Company",
          sources_name: "OPM Inv Move-Intra",
        },
        {
          description: "OPM Inventory Movement - Inter Company",
          sources_name: "OPM Inv Move-Inter",
        },
        {
          description: "OPM Inventory Adjustments",
          sources_name: "OPM Inv Adjustments",
        },
        {
          description: "OPM Batch Unrelease",
          sources_name: "OPM Batch Unrelease",
        },
        {
          description: "OPM Batch Certification",
          sources_name: "OPM Batch Certif",
        },
        {
          description: "OPM Resource Step Certification",
          sources_name: "OPM Resource Step",
        },
        {
          description: "OPM Batch Close",
          sources_name: "OPM Batch Close",
        },
        {
          description: "OPM Inventory Receipts",
          sources_name: "OPM Inv Receipts",
        },
        {
          description: "OPM Inventory Returns",
          sources_name: "OPM Inv Returns",
        },
        {
          description: "OPM Inventory Receipt Adjustment",
          sources_name: "OPM Inv Receipt Adj",
        },
        {
          description: "OPM Cost Revaluation",
          sources_name: "OPM Cost Revaluation",
        },
        {
          description: "OPM Shipments - Intra Company plant",
          sources_name: "OPM Shipments-Intra",
        },
        {
          description: "OPM Shipments - Inter Company plant",
          sources_name: "OPM Shipments-Inter",
        },
        {
          description: "OPM Shipments",
          sources_name: "OPM Shipments",
        },
        {
          description: "All other categories",
          sources_name: "Other",
        },
        {
          description: "Cash Disbursements",
          sources_name: "Payments",
        },
        {
          description: "Payroll Distribution Entry",
          sources_name: "Payroll",
        },
        {
          description: "Provider Cost Reclassification",
          sources_name: "Prov Cost Reclass",
        },
        {
          description: "Accounts Payable Invoices",
          sources_name: "Purchase Invoices",
        },
        {
          description: "Purchase Orders",
          sources_name: "Purchases",
        },
        {
          description: "Rate Adjustments",
          sources_name: "Rate Adjustments",
        },
        {
          description: "Cash Receipts",
          sources_name: "Receipts",
        },
        {
          description: "Reclassification Journal Entry",
          sources_name: "Reclass",
        },
        {
          description: "Reconciled Disbursements",
          sources_name: "Reconciled Payments",
        },
        {
          description: "Requisitions",
          sources_name: "Requisitions",
        },
        {
          description: "Revaluation Journal Entry",
          sources_name: "Revaluation",
        },
        {
          description: "Revenue",
          sources_name: "Revenue",
        },
        {
          description: "Accounts Receivable Invoices",
          sources_name: "Sales Invoices",
        },
        {
          description: "Tax Journal Entry",
          sources_name: "Tax",
        },
        {
          description: "Trade Receipts",
          sources_name: "Trade Receipts",
        },
        {
          description: "Treasury",
          sources_name: "Treasury",
        },
        {
          description: "Usage Cost",
          sources_name: "Usage Cost",
        },
        {
          description: "Work in Process",
          sources_name: "WIP",
        },
        {
          description: "Addition",
          sources_name: "Addition",
        },
        {
          description: "Retirement",
          sources_name: "Retirement",
        },
        {
          description: "Transfer",
          sources_name: "Transfer",
        },
        {
          description: "Depreciation Adjustment",
          sources_name: "Depreciation Adjustment",
        },
        {
          description: "CIP Addition",
          sources_name: "CIP Addition",
        },
        {
          description: "CIP Adjustment",
          sources_name: "CIP Adjustment",
        },
        {
          description: "CIP Retirement",
          sources_name: "CIP Retirement",
        },
        {
          description: "CIP Reclassification",
          sources_name: "CIP Reclassification",
        },
        {
          description: "CIP Transfer",
          sources_name: "CIP Transfer",
        },
        {
          description: "AX Inventory Entry",
          sources_name: "AX Inventory",
        },
        {
          description: "AX Payables Entry",
          sources_name: "AX Payables",
        },
        {
          description: "AX Receivables Entry",
          sources_name: "AX Receivables",
        },
        {
          description: "Inventory",
          sources_name: "Inventory",
        },
        {
          description: "Burden Cost",
          sources_name: "Burden Cost",
        },
        {
          description: "Miscellaneous Transaction",
          sources_name: "Miscellaneous Transaction",
        },
        {
          description: "Move/Merge",
          sources_name: "Move/Merge",
        },
        {
          description: "Cross Currency",
          sources_name: "Cross Currency",
        },
        {
          description: "Bank Collection Remittance",
          sources_name: "Remittance",
        },
        {
          description: "Bank Collection Write-off",
          sources_name: "Bank Write-off",
        },
        {
          description: "Bank Collection Receipts",
          sources_name: "Bank Receipts",
        },
        {
          description: "Bank Collection Charges",
          sources_name: "Bank Charges",
        },
        {
          description: "Bank Collection Cancellation",
          sources_name: "Cancellation",
        },
        {
          description: "Bank Collection Confirmation",
          sources_name: "Confirmation",
        },
        {
          description: "Reporting Currency Open Balances",
          sources_name: "MRC Open Balances",
        },
        {
          description: "Income Statement Close",
          sources_name: "Income Statement Close",
        },
        {
          description: "Balance Sheet Close",
          sources_name: "Balance Sheet Close",
        },
        {
          description: "Intercompany Elimination",
          sources_name: "Elimination",
        },
        {
          description: "Budget - Indexation",
          sources_name: "Budget - Indexation",
        },
        {
          description: "Budget - Next Year Carry Forward",
          sources_name: "Budget - Next Year",
        },
        {
          description: "Budget - Reprofile",
          sources_name: "Budget - Reprofile",
        },
        {
          description: "Budget - Spreadsheet",
          sources_name: "Budget - Upload",
        },
        {
          description: "Internal Trading Cross Charge Category",
          sources_name: "Internal Charge",
        },
        {
          description: "Reverse",
          sources_name: "Reverse",
        },
        {
          description: "Renewal",
          sources_name: "Renewal",
        },
        {
          description: "Miscellaneous",
          sources_name: "Miscellaneous",
        },
        {
          description: "Income Offset",
          sources_name: "Income Offset",
        },
        {
          description: "Oracle Labor Distribution",
          sources_name: "OLD",
        },
        {
          description: "OPM Inventory Transfers",
          sources_name: "OPM Inv Transfers",
        },
        {
          description: "PO Receipts of Process Items",
          sources_name: "PO Receipts (OPM)",
        },
        {
          description: "Customer Returns of Process Items",
          sources_name: "Cust Returns (OPM)",
        },
        {
          description: "Internal Order Receipts of Process Items",
          sources_name: "Internal Receipts",
        },
        {
          description: "Internal Order Shipments of Process Items",
          sources_name: "Internal Shipments",
        },
        {
          description: "Inflation Acct Deprn",
          sources_name: "Inflation Acct Deprn",
        },
        {
          description: "Inflation Acct Reval",
          sources_name: "Inflation Acct Reval",
        },
        {
          description: "Inflation Acct Trans",
          sources_name: "Inflation Acct Trans",
        },
        {
          description: "Property Manager Lease Expense",
          sources_name: "Lease Expense",
        },
        {
          description: "Property Manager Lease Revenue",
          sources_name: "Lease Revenue",
        },
        {
          description: "Bills Receivable",
          sources_name: "Bills Receivable",
        },
        {
          description: "Campaigns",
          sources_name: "Campaigns",
        },
        {
          description: "Fixed Budgets",
          sources_name: "Fixed Budgets",
        },
        {
          description: "Accrual Budgets",
          sources_name: "Accrual Budgets",
        },
        {
          description: "Claims",
          sources_name: "Claims",
        },
        {
          description: "Deductions",
          sources_name: "Deductions",
        },
        {
          description: "Settlement of Claims/Deductions",
          sources_name: "Settlement",
        },
        {
          description: "OPM/OM Shipments",
          sources_name: "OPM/OM Shipments",
        },
        {
          description: "Release",
          sources_name: "Release",
        },
        {
          description: "Rebook",
          sources_name: "Rebook",
        },
        {
          description: "Booking",
          sources_name: "Booking",
        },
        {
          description: "OrangE - Termination",
          sources_name: "Termination",
        },
        {
          description: "Asset Disposition",
          sources_name: "Asset Disposition",
        },
        {
          description: "Charge transactions from Student Finance",
          sources_name: "Charges",
        },
        {
          description: "Credit transactions from Student Finance",
          sources_name: "Credits",
        },
        {
          description: "Aid transactions from Student Finance",
          sources_name: "Aids",
        },
        {
          description: "Deposit transactions from Student Finance",
          sources_name: "Deposits",
        },
        {
          description: "Refund transactions from Student Finance",
          sources_name: "Refund Offset",
        },
        {
          description: "Application Fee transactions from Admissions",
          sources_name: "Application Fee",
        },
        {
          description: "Public Sector Budget",
          sources_name: "HR Budget",
        },
        {
          description: "Syndication",
          sources_name: "Syndication",
        },
        {
          description: "Loss Provision",
          sources_name: "Loss Provision",
        },
        {
          description: "Contract Commitment - Confirmed",
          sources_name: "Confirmed",
        },
        {
          description: "Contract Commitment - Provisional",
          sources_name: "Provisional",
        },
        {
          description: "Price Protection",
          sources_name: "Price Protection",
        },
        {
          description: "MFIN - INSENTIF BOOKING KBM",
          sources_name: "KBM",
        },
        {
          description: "MFIN - REWARD KORMAX",
          sources_name: "RKM",
        },
        {
          description: "MANTABS -  VOID ANGSURAN",
          sources_name: "VOID-ANGSURAN",
        },
        {
          description: "MFIN -  INSENTIF CROV PARETO JAWA 1",
          sources_name: "CVP",
        },
        {
          description: "MFIN -  INSENTIF CROW PARETO JAWA 1",
          sources_name: "CWP",
        },
        {
          description: "MFIN -  INSENTIF KBM PARETO JAWA 1",
          sources_name: "KBP",
        },
        {
          description: "MFIN -  INSENTIF KORMAX PARETO JAWA 1",
          sources_name: "KMP",
        },
        {
          description: "MFIN -  INSENTIF MAX PARETO JAWA 1",
          sources_name: "MPA",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF BOOKING MANTIS",
          sources_name: "CJH",
        },
        {
          description: "MFIN -  Accrual Insentif ROS",
          sources_name: "ROS",
        },
        {
          description: "OrangE - Bonus Regional",
          sources_name: "Bonus Regional",
        },
        {
          description: "MFIN - REWARD MAX",
          sources_name: "RMX",
        },
        {
          description: "MFIN - PEMBAYARAN GROUP VIRTUAL ACCOUNT MANTIS",
          sources_name: "KVA",
        },
        {
          description: "Upfront Tax on Lease Management Contracts",
          sources_name: "Lease Tax",
        },
        {
          description: "Lease Funding",
          sources_name: "Lease Funding",
        },
        {
          description: "Performance Obligation",
          sources_name: "Perf Obligation",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF TEBAR JALA",
          sources_name: "TJH",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF KOLEKTOR CO 30 BARU",
          sources_name: "IK2",
        },
        {
          description: "MFIN - MEC PENYELESAIAN TITIPAN WO",
          sources_name: "TTJBYRWO",
        },
        {
          description: "MFIN -  Promosi Cashback Endorse IG",
          sources_name: "CBIG",
        },
        {
          description: "MFIN -  INSENTIF BESTIE JAWA 2",
          sources_name: "PBC",
        },
        {
          description: "MFIN - MEC PENERIMAAN VOSPAY",
          sources_name: "ARV",
        },
        {
          description: "MFIN - MICRO BANK IN",
          sources_name: "BI",
        },
        {
          description: "MFIN - MICRO PEMBAYARAN KASIR",
          sources_name: "BKSR",
        },
        {
          description: "MFIN - MICRO BANK OUT",
          sources_name: "BO",
        },
        {
          description: "MFIN - MICRO BATAL BOOKING",
          sources_name: "BTLB",
        },
        {
          description: "MFIN - MEC PEMBAYARAN PO VENDOR",
          sources_name: "CAIRDANA",
        },
        {
          description: "MFIN - MEC PENERIMAAN DP",
          sources_name: "DPR",
        },
        {
          description: "MFIN - MICRO BANK IN",
          sources_name: "KI",
        },
        {
          description: "MFIN - MICRO KAS OUT",
          sources_name: "KO",
        },
        {
          description: "MFIN - MICRO PELUNASAN DIPERCEPAT",
          sources_name: "LNSD",
        },
        {
          description: "MFIN - MICRO PENYELESAIAN TITIPAN",
          sources_name: "PTTP",
        },
        {
          description: "MFIN - MEC TERIMA SETORAN DARI CABANG",
          sources_name: "SETOR",
        },
        {
          description: "MFIN - MEC PENERIMAAN ANGSURAN AUTODEBET",
          sources_name: "TOPUP",
        },
        {
          description: "MFIN - MEC PENYELESAIAN TITIPAN",
          sources_name: "TTJBYR",
        },
        {
          description: "MFIN - MEC BARANG MASUK STOCK",
          sources_name: "STOCK",
        },
        {
          description: "MFIN -  INSENTIF CROV OKR JAWA 1",
          sources_name: "CVO",
        },
        {
          description: "MFIN -  INSENTIF CRS OKR JAWA 1",
          sources_name: "CSO",
        },
        {
          description: "MFIN -  INSENTIF KBM OKR JAWA 1",
          sources_name: "KBO",
        },
        {
          description: "MFIN -  INSENTIF KORMAX OKR JAWA 1",
          sources_name: "KMO",
        },
        {
          description: "MFIN -  INSENTIF CROW OKR JAWA 1",
          sources_name: "CWO",
        },
        {
          description: "MFIN -  INSENTIF MAGNET OKR JAWA 1",
          sources_name: "MGO",
        },
        {
          description: "MFIN -  INSENTIF PINCAB OKR JAWA 1",
          sources_name: "POK",
        },
        {
          description: "MFIN -  INSENTIF MAX OKR JAWA 1",
          sources_name: "MAO",
        },
        {
          description: "MFIN -  INSENTIF MAGNET OKR JAWA 2",
          sources_name: "MBO",
        },
        {
          description:
            "Reclassification Journal Entry - Related to Cash & Bank",
          sources_name: "CF",
        },
        {
          description: "MFIN -  Pembayaran Insentif Dealer",
          sources_name: "PFP",
        },
        {
          description: "MFIN -  Konfirmasi Pembayaran Insentif Dealer",
          sources_name: "KFP",
        },
        {
          description: "Tax collected at Source",
          sources_name: "India Tax Collected",
        },
        {
          description: "AP Accounting for Financials for India",
          sources_name: "AP Accounting",
        },
        {
          description: "AP Cancellation Event for Financials for India",
          sources_name: "AP Cancel",
        },
        {
          description: "AP Invoice Validation for Financials for India",
          sources_name: "AP Validate",
        },
        {
          description: "AR Accounting for Financials for India",
          sources_name: "AR Accounting",
        },
        {
          description: "AR Credit Memo Accounting for Financials for India",
          sources_name: "AR CM Account",
        },
        {
          description: "AR Credit Memo Complete event for Financials for India",
          sources_name: "AR CM Complete",
        },
        {
          description: "AR Invoice Complete event for Financials for India",
          sources_name: "AR Complete",
        },
        {
          description: "AR Debit Memo Accounting for Financials for India",
          sources_name: "AR DM Account",
        },
        {
          description: "AR Debit Memo Complete event for Financials for India",
          sources_name: "AR DM Complete",
        },
        {
          description: "BOE for Financials for India",
          sources_name: "Bill of Entry",
        },
        {
          description: "Receipt Correction for Financials for India",
          sources_name: "Correction",
        },
        {
          description: "PO Receipt,Delivery Event for Financials for India",
          sources_name: "Delivery",
        },
        {
          description: "Exemption Tracking for Financials for India",
          sources_name: "Exemption Tracking",
        },
        {
          description: "Interorg Receipt for Financials for India",
          sources_name: "Interorg Receipt",
        },
        {
          description: "Interorg Shipment for Financials for India",
          sources_name: "Interorg Ship",
        },
        {
          description: "Manual Entry for Financials for India",
          sources_name: "Manual Entry",
        },
        {
          description: "Matching Receipt for Financials for India",
          sources_name: "Match Receipt",
        },
        {
          description: "PO Receipt,Receiving event for Financials for India",
          sources_name: "PO Receiving",
        },
        {
          description: "Payment creation for Financials for India",
          sources_name: "Payment Save",
        },
        {
          description: "Payment Void for Financials for India",
          sources_name: "Payment Void",
        },
        {
          description: "Prepayment Application for Financials for India",
          sources_name: "Prepay Apply",
        },
        {
          description: "Prepayment Unapplication for Financials for India",
          sources_name: "Prepay Unapply",
        },
        {
          description: "AR Receipt Application for Financials for India",
          sources_name: "Receipt Apply",
        },
        {
          description: "Advance Receipt Create for Financials for India",
          sources_name: "Receipt Create",
        },
        {
          description: "Advance Receipt Reversal for Financials for India",
          sources_name: "Receipt Reverse",
        },
        {
          description: "AR Receipt Unapplication for Financials for India",
          sources_name: "Receipt Unapply",
        },
        {
          description:
            "PO Receipt,Return to Receive Event for Financials for India",
          sources_name: "Return Receive",
        },
        {
          description: "PO Receipt,Return to Vendor for Financials for India",
          sources_name: "Return Vendor",
        },
        {
          description: "Ship Confirm for Financials for India",
          sources_name: "Ship Confirm",
        },
        {
          description: "Settlement for Financials for India",
          sources_name: "Tax Settlement",
        },
        {
          description: "Unordered Receipt for Financials for India",
          sources_name: "Unordered Receipt",
        },
        {
          description: "MFIN - MEC PEMBAYARAN GERAI DI CABANG",
          sources_name: "GRCBGI",
        },
        {
          description: "MFIN - MEC PEMBAYARAN GERAI DI PUSAT",
          sources_name: "GRPST",
        },
        {
          description: "MFIN - MEC PEMBAYARAN GERAI DI CABANG",
          sources_name: "GRCBGP",
        },
        {
          description: "MFIN - MEC PEMBAYARAN GERAI DI CABANG",
          sources_name: "GRCBGA",
        },
        {
          description: "MFIN -  PEMBAYARAN DEALER VIA PREPAYMENT",
          sources_name: "PPY",
        },
        {
          description: "MFIN - SERAH TERIMA KORMAX",
          sources_name: "SKM",
        },
        {
          description: "MFIN - SERAH TERIMA FRONT OFFICE",
          sources_name: "SFO",
        },
        {
          description: "MFIN -  Accrual Insentif Bonus Remedial",
          sources_name: "BIR",
        },
        {
          description: "MFIN -  Promosi Cashback Mansyur",
          sources_name: "CBM",
        },
        {
          description: "MFIN -  Serah Terima Ass ke Kons",
          sources_name: "CAK",
        },
        {
          description: "MFIN -  Biaya Tarik Barang Matel",
          sources_name: "BTK",
        },
        {
          description: "MFIN -  Serah Terima Biaya Matel",
          sources_name: "STIM",
        },
        {
          description: "MFIN -  Jurnal Accrue dan Reverse Bunga Bank",
          sources_name: "BAR",
        },
        {
          description: "",
          sources_name: "India Tax At Source",
        },
        {
          description: "Property Manager Lease Revision",
          sources_name: "PN LEASE REVISION",
        },
        {
          description: "Property Manager Lease Termination",
          sources_name: "PN TERMINATION",
        },
        {
          description: "Property Manager Expense Lease Booking",
          sources_name: "PN LEASE BOOKING",
        },
        {
          description: "MFIN - MICRO PENCAIRAN KOMISI KE DISTRIBUTOR",
          sources_name: "KOM",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF GRACE PERIOD",
          sources_name: "IGP",
        },
        {
          description: "MFIN - PEMBAYARAN VIA ATJ",
          sources_name: "ATJ",
        },
        {
          description: "MFIN - PEMBAYARAN VIA DJI",
          sources_name: "DJI",
        },
        {
          description: "MFIN -  Accrual THR CRO",
          sources_name: "THC",
        },
        {
          description: "MFIN -  Serah Terima THR CRO",
          sources_name: "PHC",
        },
        {
          description: "MFIN -  Penyelesaian Titipan Konsumen",
          sources_name: "PTKKB",
        },
        {
          description: "MFIN -  Konfirmasi AP Dealer",
          sources_name: "KAP",
        },
        {
          description: "MFIN - Accrued Pendapatan Bunga Konsumen",
          sources_name: "ACP",
        },
        {
          description: "Inflation Acc Deprn",
          sources_name: "Inflation Acc Deprn",
        },
        {
          description: "Inflation Acc Reval",
          sources_name: "Inflation Acc Reval",
        },
        {
          description: "Inflation Acc Trans",
          sources_name: "Inflation Acc Trans",
        },
        {
          description: "MFIN -  Konfirmasi Pencairan Ass",
          sources_name: "KCK",
        },
        {
          description: "MFIN -  Cair Ass dari Maskapai",
          sources_name: "CMB",
        },
        {
          description: "MFIN -  Pelunasan Khusus",
          sources_name: "ARPK",
        },
        {
          description: "MFIN - INSENTIF FEE TAGIHAN GC VA",
          sources_name: "PFT",
        },
        {
          description: "Internal Trading Cross Charges",
          sources_name: "Cross Charges",
        },
        {
          description: "Bank Transfer for Brazil",
          sources_name: "BR Bank Transfer",
        },
        {
          description: "Bank Statements(1)",
          sources_name: "Bank Statements(1)",
        },
        {
          description: "Bank Transfers(1)",
          sources_name: "Bank Transfers(1)",
        },
        {
          description: "Bill of Entry India",
          sources_name: "Bill of Entry India",
        },
        {
          description:
            "Federal Budget Authority and Fund Distribution Transactions",
          sources_name: "Budget Distribution",
        },
        {
          description: "Federal Budgetary Re-programming Transactions",
          sources_name: "Budget Reprogram",
        },
        {
          description: "CIP Revaluation",
          sources_name: "CIP Revaluation",
        },
        {
          description: "Global Intercompany Allocations",
          sources_name: "Global Intercompany",
        },
        {
          description: "India Oracle Process Manufacturing Entry",
          sources_name: "India Process Entry",
        },
        {
          description: "Intercompany Transfer",
          sources_name: "Intercompany Transfer",
        },
        {
          description: "Miscellaneous Receipts",
          sources_name: "Misc Receipts",
        },
        {
          description: "Move/Merge Reversal",
          sources_name: "Move/Merge Reversal",
        },
        {
          description: "OSP Issue India",
          sources_name: "OSP Issue India",
        },
        {
          description: "OSP Receipt India",
          sources_name: "OSP Receipt India",
        },
        {
          description: "Allocations transferred from Oracle Intercompany",
          sources_name: "Internal Charges",
        },
        {
          description: "Oracle Loans",
          sources_name: "Oracle Loans",
        },
        {
          description: "Property Manager Lease Expense Adjustment",
          sources_name: "Lease Expense Adj",
        },
        {
          description: "Property Manager Lease Revenue Adjustment",
          sources_name: "Lease Revenue Adj",
        },
        {
          description: "Oracle Proposed Grants",
          sources_name: "Proposed Grants",
        },
        {
          description: "OPM Batch Release",
          sources_name: "OPM Batch Release",
        },
        {
          description: "RMA receipts India",
          sources_name: "RMA receipts India",
        },
        {
          description: "Receiving",
          sources_name: "Receiving",
        },
        {
          description: "Receiving India",
          sources_name: "Receiving India",
        },
        {
          description: "Register Entry India",
          sources_name: "Register India",
        },
        {
          description: "Bank Collection Rejection",
          sources_name: "Rejection",
        },
        {
          description: "Revaluation Journal Entry for Profit/Loss Accounts",
          sources_name: "Revalue Profit/Loss",
        },
        {
          description: "Total Burdened Cost",
          sources_name: "Total Burdened Cost",
        },
        {
          description: "Treasury Confirmation",
          sources_name: "Treasury Confirm",
        },
        {
          description: "OPM Inventory Receipt Voids",
          sources_name: "OPM Inv Rcpt Voids",
        },
        {
          description: "Fee Waiver transactions from Student Finance",
          sources_name: "Waiver",
        },
        {
          description: "MANTABS -  Accrual Bulanan CRS",
          sources_name: "ACCRU-MONTHLY-CRS",
        },
        {
          description: "MANTABS -  Accrual Bulanan Magnet",
          sources_name: "ACCRU-MONTHLY-MAGNET",
        },
        {
          description: "MANTABS -  Accrual Bulanan MAX",
          sources_name: "ACCRU-MONTHLY-MAX",
        },
        {
          description: "MANTABS -  Accrual Bulanan Visit",
          sources_name: "ACCRU-MONTHLY-CROV",
        },
        {
          description: "MANTABS -  Accrual Bulanan Walk In",
          sources_name: "ACCRU-MONTHLY-CROW",
        },
        {
          description: "MANTABS -  Accrual Ins. FrontOffice",
          sources_name: "ACCRU-INCENTIVE-FO",
        },
        {
          description: "MANTABS -  ACCRUAL INSENTIF BLN CROV",
          sources_name: "ACCRU-MONTH-INC-CROV",
        },
        {
          description: "MANTABS -  ACCRUAL INSENTIF BLN CROW",
          sources_name: "ACCRU-MONTH-INC-CROW",
        },
        {
          description: "MANTABS -  Accrual Insentif CRO",
          sources_name: "ACCRU-INC-CRO",
        },
        {
          description: "MANTABS -  ACCRUAL INSENTIF HARIAN MAX",
          sources_name: "ACCRU-DAILY-INC-MAX",
        },
        {
          description: "MANTABS -  Accrual Insentif KPM1",
          sources_name: "ACCRU-INC-KPM1",
        },
        {
          description: "MANTABS -  Accrual Insentif KPM2",
          sources_name: "ACCRU-INC-KPM2",
        },
        {
          description: "MANTABS -  Accrual Insentif Magnet",
          sources_name: "ACCRU-INC-MAGNET",
        },
        {
          description: "MANTABS -  Accrual Insentif MAX",
          sources_name: "ACCRU-INC-MAX",
        },
        {
          description: "MANTABS -  ACCRUAL INSENTIF RO MAGNET",
          sources_name: "ACCRU-INC-MAGNET-RO",
        },
        {
          description: "MANTABS - ACCRUAL BONUS COLLECTION KOLEKTOR",
          sources_name: "ACCRU-BONUS-COLLECTOR",
        },
        {
          description: "MANTABS - ACCRUAL BONUS COLLECTION KORWIL",
          sources_name: "ACCRU-BONUS-KORWIL",
        },
        {
          description: "MANTABS - ACCRUAL BONUS PELUNASAN KASUR",
          sources_name: "ACCRU-BONUS-KASUR",
        },
        {
          description: "MANTABS - ACCRUAL BONUS PELUNASAN SURVEYOR",
          sources_name: "ACCRU-BONUS-SURVEYOR",
        },
        {
          description: "MANTABS - ACCRUAL INSENTIF BOOKING HEAD SALES",
          sources_name: "ACCRU-INC-HEADSALES",
        },
        {
          description: "MANTABS - ACCRUAL INSENTIF HARIAN CRO VISIT",
          sources_name: "ACCRU-DAILY-INC-CROV",
        },
        {
          description: "MANTABS - ACCRUAL INSENTIF HARIAN CRO WALKIN",
          sources_name: "ACCRU-DAILY-INC-CROW",
        },
        {
          description: "MANTABS - ACCRUAL INSENTIF KOLEKTOR CO 30",
          sources_name: "ACCRU-INC-COLLECTOR",
        },
        {
          description: "Bank Account Transfers",
          sources_name: "Bank Transfers",
        },
        {
          description: "Bank Statements",
          sources_name: "Bank Statements",
        },
        {
          description: "MFIN - OPBAL",
          sources_name: "MFIN - OPBAL",
        },
        {
          description: "MFIN - PEMBAYARAN IDS",
          sources_name: "BIDS",
        },
        {
          description: "MANTABS - ACCRUAL INSENTIF KORWIL CO 30",
          sources_name: "ACCRU-INC-KORWIL",
        },
        {
          description: "MANTABS -  Bonus Penjualan Sales",
          sources_name: "BOINS-MONTHLY-SALES",
        },
        {
          description: "MANTABS -  INSENTIF HARIAN CROW",
          sources_name: "BOINS-DAILY-CROW",
        },
        {
          description: "MANTABS -  Serah Terima Bulanan MAX",
          sources_name: "BOINS-MONTHLY-MAX",
        },
        {
          description: "MANTABS -  Serah Terima Harian KPM1",
          sources_name: "BOINS-DAILY-KPM1",
        },
        {
          description: "MANTABS -  Serah Terima Harian KPM2",
          sources_name: "BOINS-DAILY-KPM2",
        },
        {
          description: "MANTABS -  Serah Terima Harian MAX",
          sources_name: "BOINS-DAILY-MAX",
        },
        {
          description: "MANTABS -  Serah Terima MAX",
          sources_name: "BOINS-WEEKLY-MAX",
        },
        {
          description: "MANTABS - BERKAS INSENTIF SURVEYOR",
          sources_name: "BOINS-MONTHLY-SUVEYOR",
        },
        {
          description: "MANTABS - BERKAS INSENTIF SURVEYOR (lama)",
          sources_name: "BOINS-MONTHLY-SURV-COMP",
        },
        {
          description: "MANTABS - BONUS PELUNASAN KASUR",
          sources_name: "BOINS-MONTHLY-KASUR-LUNAS",
        },
        {
          description: "MANTABS - INS TARIK BARANG",
          sources_name: "BOINS-INC-REPOSES",
        },
        {
          description: "MANTABS - INSENTIF KASUR",
          sources_name: "BOINS-INC-KASUR",
        },
        {
          description: "MANTABS - INSENTIF SURVEYOR",
          sources_name: "BOINS-INC-SURVEYOR",
        },
        {
          description: "MANTABS - Serah Terima Harian MAGNET",
          sources_name: "BOINS-DAILY-MAGNET",
        },
        {
          description: "MANTABS - SerahTerima Bulanan Visit",
          sources_name: "BOINS-MONTHLY-CROV",
        },
        {
          description: "MANTABS - SERTERIMA TUNJHARIAN CROV",
          sources_name: "BOINS-DAILY-CROV",
        },
        {
          description: "MANTABS - TARIF BONUS PENJUALAN",
          sources_name: "BOINS-SALES",
        },
        {
          description: "MANTABS -  Cair Dari Ass",
          sources_name: "CLAIM-FROM-INSURANCE",
        },
        {
          description: "MANTABS -  Cair Ke Kons.",
          sources_name: "CLAIM-TO-KONSUMEN",
        },
        {
          description: "MANTABS -  Petty Cash",
          sources_name: "OPEX-PETTY-CASH",
        },
        {
          description: "MANTABS -  Setor Ke Bank",
          sources_name: "OPEX-SETOR-BANK",
        },
        {
          description: "MANTABS -  Setor KeBank AntarCabang",
          sources_name: "OPEX-SETOR-ANTAR-CABANG",
        },
        {
          description: "MANTABS -  Biaya",
          sources_name: "PAYME-BIAYA-LAIN-LAIN",
        },
        {
          description: "MANTABS -  Matel",
          sources_name: "PAYME-MATEL",
        },
        {
          description: "MANTABS -  Pemb. Angs.",
          sources_name: "RECEI-ANGSURAN",
        },
        {
          description: "MANTABS -  Pemb. Dealer",
          sources_name: "PAYME-DEALER",
        },
        {
          description: "MANTABS -  PEMBAYARAN DEALER VIA PREPAYMENT",
          sources_name: "PAYME-DEALER-PREPAYMENT",
        },
        {
          description: "MANTABS - ADJUSTMENT/EDIT PIDC",
          sources_name: "PAYME-DEALER-TAC",
        },
        {
          description: "MANTABS - BAYAR ANGSURAN PINJAMAN BANK",
          sources_name: "PAYME-BANK-ANGS",
        },
        {
          description: "MANTABS - BAYAR AP PREPAID",
          sources_name: "PAYME-DEALER-PREPAID",
        },
        {
          description: "MANTABS - MEC PEMBAYARAN PO VENDOR",
          sources_name: "PAYME-MEC-VENDOR",
        },
        {
          description: "MANTABS - PELUNASAN PINJAMAN BANK",
          sources_name: "PAYME-BANK-PELUNASAN",
        },
        {
          description: "MANTABS -  Pelunasan",
          sources_name: "RECEI-PELUNASAN-ANGS",
        },
        {
          description: "MANTABS -  Pemb. Via Kantor Pos",
          sources_name: "RECEI-ANGS-POS",
        },
        {
          description: "MANTABS -  Penyelesaian Titipan Kon",
          sources_name: "RECEI-TITIPAN-SELESAI",
        },
        {
          description: "MANTABS -  Titipan Kons.",
          sources_name: "RECEI-TITIPAN",
        },
        {
          description: "MANTABS - BAYAR DENDA VIA TRANSFER",
          sources_name: "RECEI-DENDA-TRANSFER",
        },
        {
          description: "MANTABS - MEC BARANG MASUK STOCK",
          sources_name: "RECEI-MEC-STOK",
        },
        {
          description: "MANTABS - MEC PEMBAYARAN GERAI DI CABANG",
          sources_name: "RECEI-MEC-ANGS-ALFAMART",
        },
        {
          description: "MANTABS - MEC PEMBAYARAN GERAI DI CABANG",
          sources_name: "RECEI-MEC-ANGS-INDOMARET",
        },
        {
          description: "MANTABS - MEC PEMBAYARAN GERAI DI CABANG",
          sources_name: "RECEI-MEC-ANGS-POS",
        },
        {
          description: "MANTABS - MEC PEMBAYARAN GERAI DI PUSAT",
          sources_name: "RECEI-MEC-ANGS-TRF",
        },
        {
          description: "MANTABS - MEC PENERIMAAN ANGSURAN AUTODEBET",
          sources_name: "RECEI-MEC-ANGS-AUTO",
        },
        {
          description: "MANTABS - MEC PENERIMAAN DP",
          sources_name: "RECEI-MEC-DP",
        },
        {
          description: "MANTABS - MEC PENERIMAAN VOSPAY",
          sources_name: "RECEI-MEC-ANGS-VOSPAY",
        },
        {
          description: "MANTABS - MEC PENYELESAIAN TITIPAN",
          sources_name: "RECEI-MEC-TITIPAN-SELESAI",
        },
        {
          description: "MANTABS - MEC TERIMA SETORAN DARI CABANG",
          sources_name: "RECEI-MEC-STOR-CAB",
        },
        {
          description: "India delivery entries for Interorg transfer",
          sources_name: "Inventory India",
        },
        {
          description: "India VAT entry for Interorg transfer",
          sources_name: "VAT India",
        },
        {
          description: "India Standard cost entry for Interorg transfer",
          sources_name: "MMT",
        },
        {
          description: "India Bill of entries",
          sources_name: "BOE",
        },
        {
          description: "OrangE - Salary",
          sources_name: "Salary",
        },
        {
          description: "OrangE - Outstanding Transaction",
          sources_name: "Outstanding Transaction",
        },
        {
          description: "OrangE - Tax Adjustment",
          sources_name: "Tax Adjustment",
        },
        {
          description: "OrangE - Pesangon",
          sources_name: "Pesangon",
        },
        {
          description: "OrangE - Fasilitas",
          sources_name: "Fasilitas",
        },
        {
          description: "OrangE - Insentif",
          sources_name: "Insentif",
        },
        {
          description: "OrangE - Bonus",
          sources_name: "Bonus",
        },
        {
          description: "OrangE - THR",
          sources_name: "THR",
        },
        {
          description: "OrangE - Sewa Kendaraan",
          sources_name: "Sewa Kendaraan",
        },
        {
          description: "MFIN - MICRO PEMBAYARAN VA DI CABANG",
          sources_name: "VACBGM",
        },
        {
          description: "MFIN - RESCHEDULE (RELAKSASI GRACE PERIOD)",
          sources_name: "RSD",
        },
        {
          description: "MFIN - RESTRUKTUR (RELAKSASI PERPANJANG TENOR)",
          sources_name: "RST",
        },
        {
          description: "MFIN - PEMBAYARAN VIA IDS",
          sources_name: "AID",
        },
        {
          description: "MANTABS - MICRO PELUNASAN DIPERCEPAT",
          sources_name: "RECEI-MICRO-PELUNASAN",
        },
        {
          description: "MANTABS - MICRO PEMBAYARAN KASIR",
          sources_name: "RECEI-MICRO-CASHIER",
        },
        {
          description: "MANTABS - MICRO PENYELESAIAN TITIPAN",
          sources_name: "RECEI-MICRO-TITIP-SELESAI",
        },
        {
          description: "MANTABS - PEMBAYARAN ALFAMART",
          sources_name: "RECEI-ANGS-ALFAMART",
        },
        {
          description: "MANTABS - PEMBAYARAN INDOMARET",
          sources_name: "RECEI-ANGS-INDOMARET",
        },
        {
          description: "MANTABS - PEMBAYARAN OL CABANG",
          sources_name: "RECEI-CAB-LAIN",
        },
        {
          description: "MANTABS - PEMBAYARAN OL CABANG(TRANSFER)",
          sources_name: "RECEI-TRF-CAB-LAIN",
        },
        {
          description: "MANTABS - TERIMA UANG DARI CABANG",
          sources_name: "RECEI-FROM-CABANG",
        },
        {
          description: "MANTABS - TERIMA UANG PINJAMAN BANK",
          sources_name: "RECEI-FUNDING-BANK",
        },
        {
          description: "MANTABS -  Jual Tarik Brg",
          sources_name: "REPOS-SALES",
        },
        {
          description: "MANTABS -  Tarik Brg",
          sources_name: "REPOS-IN",
        },
        {
          description: "MANTABS -  Booking",
          sources_name: "SALES-BOOKING",
        },
        {
          description: "MANTABS -  Write Off",
          sources_name: "WRITE-OFF",
        },
        {
          description: "MANTABS - PENERIMAAN DAN PENGELUARAN KAS BANK",
          sources_name: "KAS-BANK",
        },
        {
          description: "MFIN -  Booking via Agen Mantis",
          sources_name: "ARM",
        },
        {
          description: "MFIN -  Pemb. Dealer Booking via Mantis",
          sources_name: "APM",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF TEBAR JALA KOMISI PASIF",
          sources_name: "TJB",
        },
        {
          description:
            "MFIN - ACCRUAL INSENTIF BOOKING MANTIS TEBAR JALA KOMISI PASIF",
          sources_name: "CJB",
        },
        {
          description: "MFIN - GRIYA PEMBAYARAN GERAI IDS",
          sources_name: "IDS",
        },
        {
          description: "MFIN -  Accrual Insentif Tebar Jala ROS",
          sources_name: "TRS",
        },
        {
          description: "MFIN -  MEC Tarik Brg WO",
          sources_name: "ARTWO",
        },
        {
          description: "MFIN -  Kas Bon Biaya Tarik Barang",
          sources_name: "UMTB",
        },
        {
          description: "MFIN -  Penyelesaian Kas Bon Biaya TB",
          sources_name: "PNYUMTB",
        },
        {
          description: "MFIN -  Pengembalian Kas Bon Biaya TB",
          sources_name: "PNYUMTBKB",
        },
        {
          description: "MFIN - PEMBAYARAN VIRTUAL ACCOUNT MANTIS",
          sources_name: "AVA",
        },
        {
          description: "MFIN -  Booking MAPAN",
          sources_name: "ARBP",
        },
        {
          description: "MFIN - INSENTIF PROGRAM CAMPAIGN MAGNET",
          sources_name: "PCM",
        },
        {
          description: "MFIN - PROGRAM BOSSI CABANG",
          sources_name: "BSA",
        },
        {
          description: "MFIN - PROGRAM BOSSI PUSAT",
          sources_name: "BSP",
        },
        {
          description: "MFIN - ACCRUAL GEBYAR PERAK CRO",
          sources_name: "GPC",
        },
        {
          description: "MFIN - SERAH TERIMA GEBYAR PERAK CRO",
          sources_name: "GSC",
        },
        {
          description: "MFIN - PROGRAM GEBYAR PERAK MAX",
          sources_name: "GPM",
        },
        {
          description: "MFIN -  Reklas Pemb. Dealer Booking via Mantis",
          sources_name: "RAP",
        },
        {
          description: "Lease Accrual",
          sources_name: "Lease Accrual",
        },
        {
          description: "Channel Revenue Management Claim",
          sources_name: "Channel Claim",
        },
        {
          description: "Channel Revenue Management Accrual",
          sources_name: "Channel Accrual",
        },
        {
          description: "Revenue accounting entries for the revenue contract.",
          sources_name: "Revenue Contract",
        },
        {
          description: "MFIN - PEMBAYARAN ALFAMART",
          sources_name: "AAM",
        },
        {
          description: "MFIN -  Accrual Insentif KPM2",
          sources_name: "AC2",
        },
        {
          description: "MFIN -  Accrual Bulanan Magnet",
          sources_name: "ACB",
        },
        {
          description: "MFIN -  Accrual Insentif Magnet",
          sources_name: "ACC",
        },
        {
          description: "MFIN -  Cair Dari Ass",
          sources_name: "ACK",
        },
        {
          description: "MFIN -  Accrual Insentif MAX",
          sources_name: "ACM",
        },
        {
          description: "MFIN -  Accrual Insentif CRO",
          sources_name: "ACO",
        },
        {
          description: "MFIN -  Accrual Insentif KPM1",
          sources_name: "ACS",
        },
        {
          description: "MFIN -  ACCRUAL INSENTIF BLN CROV",
          sources_name: "ACVB",
        },
        {
          description: "MFIN -  ACCRUAL INSENTIF BLN CROW",
          sources_name: "ACWB",
        },
        {
          description: "MFIN - ADJUSTMENT/EDIT PIDC",
          sources_name: "AEP",
        },
        {
          description: "MFIN - PEMBAYARAN INDOMARET",
          sources_name: "AIM",
        },
        {
          description: "MFIN -  Pemb. Via Kantor Pos",
          sources_name: "AKP",
        },
        {
          description: "MFIN - PEMBAYARAN OL CABANG(TRANSFER)",
          sources_name: "AOL",
        },
        {
          description: "MFIN -  Pemb. Dealer",
          sources_name: "APB",
        },
        {
          description: "MFIN -  Pemb. Angs.",
          sources_name: "ARA",
        },
        {
          description: "MFIN -  Booking",
          sources_name: "ARB",
        },
        {
          description: "MFIN - TB DITERUSKAN",
          sources_name: "ARD",
        },
        {
          description: "MFIN -  Jual Tarik Brg",
          sources_name: "ARJ",
        },
        {
          description: "MFIN -  Cair Ke Kons.",
          sources_name: "ARK",
        },
        {
          description: "MFIN -  ACCRUAL INSENTIF RO MAGNET",
          sources_name: "ARO",
        },
        {
          description: "MFIN -  Pelunasan",
          sources_name: "ARP",
        },
        {
          description: "MFIN -  Tarik Brg",
          sources_name: "ART",
        },
        {
          description: "MFIN - BATAL TB",
          sources_name: "ARX",
        },
        {
          description: "MFIN -  Accrual Bulanan MAX",
          sources_name: "AXB",
        },
        {
          description: "MFIN - ACCRUAL BONUS COLLECTION KORWIL",
          sources_name: "BCK",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF BOOKING HEAD SALES",
          sources_name: "BHS",
        },
        {
          description: "MFIN - TARIF BONUS PENJUALAN",
          sources_name: "BP2",
        },
        {
          description: "MFIN -  Bonus Penjualan Sales",
          sources_name: "BPS",
        },
        {
          description: "MFIN - INSENTIF SURVEYOR",
          sources_name: "BS2",
        },
        {
          description: "MFIN - BERKAS INSENTIF SURVEYOR",
          sources_name: "BSV",
        },
        {
          description: "MFIN - ACCRUAL BONUS COLLECTION KOLEKTOR",
          sources_name: "CLS",
        },
        {
          description: "MFIN - PEMBAYARAN OL CABANG",
          sources_name: "COL",
        },
        {
          description: "MFIN -  Accrual Bulanan CRS",
          sources_name: "CRS",
        },
        {
          description: "MFIN -  Accrual Bulanan Visit",
          sources_name: "CVB",
        },
        {
          description: "MFIN -  Accrual Bulanan Walk In",
          sources_name: "CWB",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF HARIAN CRO VISIT",
          sources_name: "ICV",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF HARIAN CRO WALKIN",
          sources_name: "ICW",
        },
        {
          description: "MFIN -  Accrual Ins. FrontOffice",
          sources_name: "IFO",
        },
        {
          description: "MFIN -  ACCRUAL INSENTIF HARIAN MAX",
          sources_name: "IHM",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF KOLEKTOR CO 30",
          sources_name: "IKK",
        },
        {
          description: "MFIN - ACCRUAL INSENTIF KORWIL CO 30",
          sources_name: "ITK",
        },
        {
          description: "MFIN - JURNAL MEMORIAL",
          sources_name: "JM",
        },
        {
          description: "MFIN - KAS BANK",
          sources_name: "KB",
        },
        {
          description: "MFIN - BERKAS INSENTIF SURVEYOR (lama)",
          sources_name: "KLB",
        },
        {
          description: "MFIN - INSENTIF KASUR",
          sources_name: "KSR",
        },
        {
          description: "MFIN - ACCRUAL BONUS PELUNASAN KASUR",
          sources_name: "KSV",
        },
        {
          description: "MFIN - INSENTIF TB",
          sources_name: "PTB",
        },
        {
          description: "MFIN -  Petty Cash",
          sources_name: "PTC",
        },
        {
          description: "MFIN -  Penyelesaian Titipan Kon",
          sources_name: "PTK",
        },
        {
          description: "MFIN -  Setor Ke Bank",
          sources_name: "SKB",
        },
        {
          description: "MFIN -  Serah Terima Bulanan MAX",
          sources_name: "SMB",
        },
        {
          description: "MFIN -  Serah Terima MAX",
          sources_name: "SMH",
        },
        {
          description: "MFIN -  INSENTIF HARIAN CROW",
          sources_name: "SOH",
        },
        {
          description: "MFIN -  Setor KeBank AntarCabang",
          sources_name: "SOL",
        },
        {
          description: "MFIN -  Serah Terima Harian KPM2",
          sources_name: "SS2",
        },
        {
          description: "MFIN -  Serah Terima Harian KPM1",
          sources_name: "SSH",
        },
        {
          description: "MFIN -  Serah Terima Harian MAX",
          sources_name: "STH",
        },
        {
          description: "MFIN - Serah Terima Harian MAGNET",
          sources_name: "STM",
        },
        {
          description: "MFIN - SERTERIMA TUNJHARIAN CROV",
          sources_name: "STV",
        },
        {
          description: "MFIN - SERTERIMA TUNJHARIAN CROW",
          sources_name: "STW",
        },
        {
          description: "MFIN - ACCRUAL BONUS PELUNASAN SURVEYOR",
          sources_name: "SVS",
        },
        {
          description: "MFIN -  Titipan Kons.",
          sources_name: "TTK",
        },
        {
          description: "MFIN -  Write Off",
          sources_name: "WRO",
        },
        {
          description:
            "Created when contracts move from booked to evergreen status",
          sources_name: "Evergreen",
        },
        {
          description:
            "Portal's Unbilled Unearned Report from Integrated Revenue Management",
          sources_name: "Unbilled unearned",
        },
        {
          description:
            "Portal's Unbilled Earned Report from Integrated Revenue Management",
          sources_name: "Unbilled earned",
        },
        {
          description:
            "Portal's Billed Unearned Report from Integrated Revenue Management",
          sources_name: "Billed unearned",
        },
        {
          description:
            "Portal's Billed Earned Report from Integrated Revenue Management",
          sources_name: "Billed earned",
        },
        {
          description:
            "Portal's Prior Billed Earned Report from Integrated Revenue Management",
          sources_name: "Prior billed earned",
        },
        {
          description:
            "Portal's Billed Report from Integrated Revenue Management",
          sources_name: "Billed",
        },
        {
          description:
            "Portal's Unbilled Report from Integrated Revenue Management",
          sources_name: "Unbilled",
        },
        {
          description: "MFIN - JURNAL CORE LAMA",
          sources_name: "KB1",
        },
        {
          description: "MFIN - JURNAL MEMORIAL CORE LAMA",
          sources_name: "JM1",
        },
        {
          description: "MFIN - BONUS PELUNASAN KASUR",
          sources_name: "KS2",
        },
        {
          description: "MFIN - INS TARIK BARANG",
          sources_name: "PT2",
        },
        {
          description: "MFIN - BAYAR AP PREPAID",
          sources_name: "PAM",
        },
        {
          description: "MFIN - BAYAR DENDA VIA TRANSFER",
          sources_name: "BDD",
        },
        {
          description: "MFIN - SerahTerima Bulanan Visit",
          sources_name: "SVB",
        },
        {
          description: "MFIN -  Biaya",
          sources_name: "BLL",
        },
        {
          description: "MFIN - TERIMA UANG ANGSURAN VIA POS",
          sources_name: "POS",
        },
        {
          description: "MFIN - TERIMA UANG DARI CABANG",
          sources_name: "KU",
        },
        {
          description: "MFIN - PELUNASAN PINJAMAN BANK",
          sources_name: "PLN",
        },
        {
          description: "MFIN - BAYAR ANGSURAN PINJAMAN BANK",
          sources_name: "ANG",
        },
        {
          description: "MFIN - TERIMA UANG PINJAMAN BANK",
          sources_name: "FUN",
        },
        {
          description: "MFIN - MEC PEMBAYARAN GERAI IDS DI CABANG",
          sources_name: "GRCIDS",
        },
        {
          description: "MANTABS -  Reschedule",
          sources_name: "COLL-RSD",
        },
        {
          description: "MANTABS -  Restruktur",
          sources_name: "COLL-RST",
        },
        {
          description: "MFIN -  Reward Magnet Indotim",
          sources_name: "RMI",
        },
        {
          description: "MFIN -  Promosi Cashback Berkah Melimpah",
          sources_name: "CBIB",
        },
        {
          description: "MFIN -  PEMBAYARAN DEALER VIA PREPAYMENT ( MANTIS )",
          sources_name: "PPYM",
        },
      ],
    },
  });
}
