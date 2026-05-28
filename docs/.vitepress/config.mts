import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ERPNext",
  description: "ERPNext docs",
  base: "/erpnext-vitepress-docs/",
  cleanUrls: true,
  mpa: true,
  ignoreDeadLinks: true,
  markdown: {
    html: false,
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/erpnext-vitepress-docs/favicon.png",
      },
    ],
  ],
  themeConfig: {
    logo: {
      light: "/erpnext-logo.png",
      dark: "/erpnext-logo-light.png",
    },
    nav: [
      {
        text: "Learn",
        link: "https://school.frappe.io/lms/courses?category=ERPNext",
      },
      {
        text: "Discuss",
        link: "https://discuss.frappe.io/c/erpnext/6",
      },
      {
        text: "Website",
        link: "https://frappe.io/erpnext",
      },
    ],
    sidebar: {
      "/erpnext/": [
        {
          text: "Introduction",
          link: "/erpnext/introduction/",
          items: [
            {
              text: "Why should businesses use an ERP?",
              link: "/erpnext/why-ERP",
            },
            {
              text: "Do I Need ERPNext?",
              link: "/erpnext/do-i-need-an-erp",
            },
            {
              text: "Open Source",
              link: "/erpnext/open-source",
            },
            {
              text: "The Project Champion",
              link: "/erpnext/the-champion",
            },
            {
              text: "Concepts and Terms",
              link: "/erpnext/concepts-and-terms",
            },
            {
              text: "Getting Started with ERPNext",
              link: "/erpnext/getting-started-with-erpnext",
            },
          ],
          collapsed: true,
        },
        {
          text: "Setup",
          link: "/erpnext/setting-up",
          items: [
            {
              text: "Company",
              link: "/erpnext/company-setup",
            },
            {
              text: "Country",
              link: "/erpnext/country",
            },
            {
              text: "Core Settings",
              items: [
                {
                  text: "System Settings",
                  link: "/erpnext/system-settings",
                },
                {
                  text: "Global Defaults",
                  link: "/erpnext/global-defaults",
                },
                {
                  text: "Session Defaults",
                  link: "/erpnext/session-defaults",
                },
                {
                  text: "Domain Settings",
                  link: "/erpnext/domain-settings",
                },
                {
                  text: "Set Language",
                  link: "/erpnext/set-language",
                },
                {
                  text: "Set Precision",
                  link: "/erpnext/set-precision",
                },
                {
                  text: "Show or Hide Modules",
                  link: "/erpnext/show-hide-modules",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Data Management",
          link: "/erpnext/data-management/introduction",
          items: [
            {
              text: "Import",
              items: [
                {
                  text: "Data Import",
                  link: "/erpnext/data-import",
                },
                {
                  text: "Chart Of Accounts Importer",
                  link: "/erpnext/chart-of-accounts-importer",
                },
              ],
              collapsed: true,
            },
            {
              text: "Export",
              items: [
                {
                  text: "Data Export",
                  link: "/erpnext/data-export",
                },
                {
                  text: "Downloading Backups",
                  link: "/erpnext/download-backup",
                },
              ],
              collapsed: true,
            },
            {
              text: "Bulk Operations",
              items: [
                {
                  text: "Bulk Update",
                  link: "/erpnext/bulk-update",
                },
                {
                  text: "Bulk Rename",
                  link: "/erpnext/bulk-rename",
                },
                {
                  text: "Delete Company Transactions",
                  link: "/erpnext/delete_company_transactions",
                },
              ],
              collapsed: true,
            },
            {
              text: "Personal Data",
              items: [
                {
                  text: "Personal Data Download",
                  link: "/erpnext/personal-data-download",
                },
                {
                  text: "Personal Data Deletion",
                  link: "/erpnext/personal-data-deletion",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Export Data for Specific Year or Filter",
                  link: "/erpnext/export-data-for-specific-year-or-filter",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Users and Permissions",
          link: "/erpnext/users-and-permissions/",
          items: [
            {
              text: "User Management",
              items: [
                {
                  text: "Adding Users",
                  link: "/erpnext/adding-users",
                },
                {
                  text: "Role Based Permissions",
                  link: "/erpnext/role-based-permissions",
                },
                {
                  text: "User Permissions",
                  link: "/erpnext/user-permissions",
                },
                {
                  text: "Administrator",
                  link: "/erpnext/administrator",
                },
                {
                  text: "Sharing",
                  link: "/erpnext/sharing",
                },
                {
                  text: "Change User Password",
                  link: "/erpnext/change-password",
                },
                {
                  text: "Disable Any User",
                  link: "/erpnext/how-to-disable-users-in-the-erpnext-system",
                },
              ],
              collapsed: true,
            },
            {
              text: "Roles and Permissions",
              items: [
                {
                  text: "Role Based Permissions",
                  link: "/erpnext/permissions",
                },
                {
                  text: "Role and Role Profile",
                  link: "/erpnext/role-and-role-profile",
                },
                {
                  text: "Role Permission for Page and Report",
                  link: "/erpnext/role-permission-for-page-and-report",
                },
                {
                  text: "Field Level Permission Management",
                  link: "/erpnext/changing-the-properties-of-a-field-based-on-role",
                },
                {
                  text: "Access Log",
                  link: "/erpnext/access-log",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Setup Two Factor Authentication",
                  link: "/erpnext/setup-two-factor-authentication",
                },
                {
                  text: "Change existing user's email ID",
                  link: "/erpnext/how-to-change-a-users-email-id",
                },
                {
                  text: "Difference Between System User and Website User",
                  link: "/erpnext/difference-between-system-user-and-website-user",
                },
                {
                  text: "Setting Up Email Signature in ERPNext",
                  link: "/erpnext/setting-up-email-signature-in-erpnext",
                },
                {
                  text: "Edit Export/Print permissions for reports",
                  link: "/erpnext/how-to-grant-permissions-for-reports",
                },
                {
                  text: "User Permission based on Hierarchy",
                  link: "/erpnext/user-permission-based-on-hierarchy",
                },
                {
                  text: "Maximum User Limit Issue",
                  link: "/erpnext/how-to-fix-the-reached-maximum-user-limit-for-your-subscription-issue",
                },
                {
                  text: "Perm Level Error",
                  link: "/erpnext/perm-level-error-in-permission-manager",
                },
                {
                  text: "Permission Error Problems",
                  link: "/erpnext/report-permission-error",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Accounting",
          link: "/erpnext/erpnext/modules/erpnext/accounting/introduction/",
          items: [
            {
              text: "Setup",
              items: [
                {
                  text: "Fiscal Year",
                  link: "/erpnext/fiscal-year",
                },
                {
                  text: "Opening Invoice Creation Tool",
                  link: "/erpnext/opening-invoice-creation-tool",
                },
                {
                  text: "Opening Balance in Accounts",
                  link: "/erpnext/opening-balance",
                },
                {
                  text: "Setting Up Taxes",
                  link: "/erpnext/setting-up-taxes",
                },
              ],
              collapsed: true,
            },
            {
              text: "Features",
              items: [
                {
                  text: "Chart of Accounts",
                  link: "/erpnext/chart-of-accounts",
                  items: [],
                  collapsed: true,
                },
                {
                  text: "Taxes & Compliance",
                  items: [
                    {
                      text: "Tax Category",
                      link: "/erpnext/tax-category",
                    },
                    {
                      text: "Finance Book",
                      link: "/erpnext/finance-book",
                    },
                    {
                      text: "Tax Rule",
                      link: "/erpnext/tax-rule",
                    },
                    {
                      text: "Tax Templates",
                      items: [
                        {
                          text: "Item Tax Template",
                          link: "/erpnext/item-tax-template",
                        },
                        {
                          text: "Types in Tax Template",
                          link: "/erpnext/types-in-tax-template",
                        },
                        {
                          text: "Purchase Taxes and Charges Template",
                          link: "/erpnext/purchase-taxes-and-charges-template",
                        },
                        {
                          text: "Sales Taxes and Charges Template",
                          link: "/erpnext/sales-taxes-and-charges-template",
                        },
                      ],
                      collapsed: true,
                    },
                    {
                      text: "Tax Withholding",
                      items: [
                        {
                          text: "Tax Withholding Category",
                          link: "/erpnext/tax-withholding-category",
                        },
                      ],
                      collapsed: true,
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Sales",
                  items: [
                    {
                      text: "Sales Invoice",
                      link: "/erpnext/sales-invoice",
                    },
                    {
                      text: "Credit Note",
                      link: "/erpnext/credit-note",
                    },
                    {
                      text: "Sales Interest / Dunning",
                      link: "/erpnext/dunning",
                    },
                    {
                      text: "Loyalty Program",
                      link: "/erpnext/loyalty-program",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Purchase",
                  items: [
                    {
                      text: "Purchase Invoice",
                      link: "/erpnext/purchase-invoice",
                    },
                    {
                      text: "Debit Note",
                      link: "/erpnext/debit-note",
                    },
                    {
                      text: "Purchase Return",
                      link: "/erpnext/v12/user/manual/en/stock/purchase-return",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Banking",
                  items: [
                    {
                      text: "Bank",
                      link: "/erpnext/bank",
                    },
                    {
                      text: "Bank Account",
                      link: "/erpnext/bank-account",
                    },
                    {
                      text: "Bank Guarantee",
                      link: "/erpnext/bank-guarantee",
                    },
                    {
                      text: "Invoice Discounting",
                      link: "/erpnext/invoice_discounting",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Payments",
                  items: [
                    {
                      text: "Payment Request",
                      link: "/erpnext/payment-request",
                    },
                    {
                      text: "Payment Order",
                      link: "/erpnext/payment-order",
                    },
                    {
                      text: "Payment Entry",
                      link: "/erpnext/payment-entry",
                    },
                    {
                      text: "Payment Terms",
                      link: "/erpnext/payment-terms",
                    },
                    {
                      text: "Payment Terms Template",
                      link: "/erpnext/payment-terms-template",
                    },
                    {
                      text: "Payment Reconciliation",
                      link: "/erpnext/payment-reconciliation",
                    },
                    {
                      text: "Semi-Auto Payment Reconciliation",
                      link: "/erpnext/semi-auto-payment-reconciliation",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "General Ledger & Journal",
                  items: [
                    {
                      text: "Journal Entry",
                      link: "/erpnext/journal-entry",
                    },
                    {
                      text: "Journal Entry Template",
                      link: "/erpnext/journal-entry-template",
                    },
                    {
                      text: "Inter Company Journal Entry",
                      link: "/erpnext/inter-company-journal-entry",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Deferred Accounting",
                  items: [
                    {
                      text: "Deferred Revenue",
                      link: "/erpnext/deferred-revenue",
                    },
                    {
                      text: "Deferred Expense",
                      link: "/erpnext/deferred-expense",
                    },
                    {
                      text: "Deferred Accounting",
                      link: "/erpnext/deferred-accounting",
                    },
                    {
                      text: "Process Deferred Accounting",
                      link: "/erpnext/process-deferred-accounting",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Multi Currency",
                  items: [
                    {
                      text: "Currency",
                      link: "/erpnext/currency",
                    },
                    {
                      text: "Currency Exchange",
                      link: "/erpnext/currency-exchange",
                    },
                    {
                      text: "Multi Currency Accounting",
                      link: "/erpnext/multi-currency-accounting",
                    },
                    {
                      text: "Multi Currency Setup",
                      link: "/erpnext/multi-currency-setup",
                    },
                    {
                      text: "Exchange Rate Revaluation",
                      link: "/erpnext/exchange-rate-revaluation",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Accounting Segments",
                  items: [
                    {
                      text: "Cost Center",
                      link: "/erpnext/cost-center",
                    },
                    {
                      text: "Accounting Dimensions Filters",
                      link: "/erpnext/accounting-dimension-filter",
                    },
                    {
                      text: "Cost Center Allocation",
                      link: "/erpnext/cost_center_allocation",
                    },
                    {
                      text: "Accounting Dimensions",
                      link: "/erpnext/accounting-dimensions",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Capital & Equity",
                  items: [
                    {
                      text: "Shareholder Management",
                      link: "/erpnext/shareholder-management",
                    },
                    {
                      text: "Shareholder",
                      link: "/erpnext/shareholder",
                    },
                    {
                      text: "Share Transfer",
                      link: "/erpnext/share-transfer",
                    },
                    {
                      text: "Share Reports",
                      link: "/erpnext/share-reports",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Budgeting",
                  items: [
                    {
                      text: "Budget",
                      link: "/erpnext/budget",
                    },
                    {
                      text: "Budget Revision",
                      link: "/erpnext/budget-revision",
                    },
                    {
                      text: "Budget Variance Report",
                      link: "/erpnext/budget-variance-report",
                    },
                    {
                      text: "Cost Center and Budgeting",
                      link: "/erpnext/cost-center-and-budgeting",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Subscription",
                  items: [
                    {
                      text: "Subscription Plan",
                      link: "/erpnext/subscription-plan",
                    },
                    {
                      text: "Subscription Management",
                      link: "/erpnext/subscription-management",
                    },
                    {
                      text: "Upgrade Subscription Plan and Buy Add-ons",
                      link: "/erpnext/how-to-upgrade-subscription-plan-and-buy-add-ons",
                    },
                    {
                      text: "Update Subscription Payment Method",
                      link: "/erpnext/update-subscription-payment-method",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Advances",
                  items: [
                    {
                      text: "Advance Payment Entry",
                      link: "/erpnext/advance-payment-entry",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Fiscal Year & Closing",
                  items: [
                    {
                      text: "Accounting Period",
                      link: "/erpnext/accounting-period",
                    },
                    {
                      text: "Period Closing Voucher",
                      link: "/erpnext/period-closing-voucher",
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
            {
              text: "Reports",
              items: [
                {
                  text: "Accounting Reports",
                  link: "/erpnext/accounting-reports",
                },
                {
                  text: "General Ledger",
                  link: "/erpnext/general-ledger",
                },
                {
                  text: "Payment Ledger",
                  link: "/erpnext/payment_ledger",
                },
                {
                  text: "Accounts Receivable and Payable",
                  link: "/erpnext/accounts-receivable-and-payable",
                },
                {
                  text: "Financial Report Template",
                  link: "/erpnext/financial-report-template",
                },
                {
                  text: "Deferred Revenue/Expense Report",
                  link: "/erpnext/expense_report",
                },
                {
                  text: "Payment Terms Status Report",
                  link: "/erpnext/payment_terms_status_report",
                },
                {
                  text: "Using Custom API Rows in Financial Report Template",
                  link: "/erpnext/using-custom-api-rows-in-financial-report-template",
                },
              ],
              collapsed: true,
            },
            {
              text: "Tools",
              items: [
                {
                  text: "Bank Reconciliation",
                  link: "/erpnext/bank-reconciliation",
                },
                {
                  text: "Process Statement Of Accounts",
                  link: "/erpnext/process-statement-of-accounts",
                },
              ],
              collapsed: true,
            },
            {
              text: "Settings",
              items: [
                {
                  text: "Accounts Settings",
                  link: "/erpnext/accounts-settings",
                },
                {
                  text: "Subscription Settings",
                  link: "/erpnext/subscription-settings",
                },
                {
                  text: "Currency Exchange Settings",
                  link: "/erpnext/currency-exchange-settings",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Discount Accounting",
                  link: "/erpnext/discount_accounting",
                },
                {
                  text: "UnReconcile",
                  link: "/erpnext/unreconciliation",
                },
                {
                  text: "Bank Transaction",
                  link: "/erpnext/bank-transaction",
                },
                {
                  text: "Include Tax or Charge in Valuation or Total?",
                  link: "/erpnext/difference-in-total-and-valuation-in-tax-and-charges",
                },
                {
                  text: "Tax on another tax amount",
                  link: "/erpnext/tax-on-another-tax-amount",
                },
                {
                  text: "Tax Inclusive Accounting",
                  link: "/erpnext/tax-inclusive-accounting",
                },
                {
                  text: "Manage Foreign Exchange Difference",
                  link: "/erpnext/manage-foreign-exchange-difference",
                },
                {
                  text: "Apply Tax on Another Tax or Charge",
                  link: "/erpnext/how-to-apply-tax-on-tax",
                },
                {
                  text: "Accounting Entries",
                  link: "/erpnext/accounting-entries",
                },
                {
                  text: "Mode of Payment",
                  link: "/erpnext/mode-of-payment",
                },
                {
                  text: "Additional Charges in Payment",
                  link: "/erpnext/handing-deductions-in-payment-entry",
                },
                {
                  text: "Handling Excess Customer Payments",
                  link: "/erpnext/handling-excess-customer-payments",
                },
                {
                  text: "ERPNext QuickBooks Migrator",
                  link: "/erpnext/quickbooks-migrator",
                },
                {
                  text: "Immutable Ledger",
                  link: "/erpnext/immutable-ledger-in-erpnext",
                },
                {
                  text: "Rebuild Tree",
                  link: "/erpnext/rebuild-tree",
                },
                {
                  text: "Common Party Accounting",
                  link: "/erpnext/common_party_accounting",
                },
                {
                  text: "Advance In Separate Party Account",
                  link: "/erpnext/advance-in-separate-party-account",
                },
                {
                  text: "Stock Transfer with GST",
                  link: "/erpnext/stock-transfer-with-gst",
                },
                {
                  text: "GST for multiple branches",
                  link: "/erpnext/gst-for-multiple-branches",
                },
                {
                  text: "Generate GSTR-1 JSON File",
                  link: "/erpnext/update-gstr-1-data-in-gst-offline-tool",
                },
                {
                  text: "Naming Series as Per GST Rules",
                  link: "/erpnext/naming-series-as-per-gst-rules",
                },
                {
                  text: "Merging Accounts",
                  link: "/erpnext/merging-accounts",
                },
                {
                  text: "Changing Parent Account",
                  link: "/erpnext/changing-parent-account",
                },
                {
                  text: "Freeze an Account",
                  link: "/erpnext/freeze-account",
                },
                {
                  text: "Freeze Accounting Entries",
                  link: "/erpnext/freeze-accounting-entries",
                },
                {
                  text: "Common Receivable Account",
                  link: "/erpnext/common-receivable-account",
                },
                {
                  text: "Freeze Exchange Rate",
                  link: "/erpnext/exchange-rate-field-frozen",
                },
                {
                  text: "Default Receivable / Payable Account",
                  link: "/erpnext/default-receivable-payable-account",
                },
                {
                  text: "Allocating Credit Note and Payment",
                  link: "/erpnext/allocating-credit-note-and-payment",
                },
                {
                  text: "Reconcile Advance Payment made to the Supplier",
                  link: "/erpnext/reconcile-advance-payment-made-to-the-supplier",
                },
                {
                  text: "Balance in Temporary Account",
                  link: "/erpnext/balance-in-temporary-account",
                },
                {
                  text: "Closing Accounting Books in ERPNext in v15",
                  link: "/erpnext/closing-accounting-books-in-erpnext",
                },
                {
                  text: "Purchase Invoice - Account Type Error",
                  link: "/erpnext/purchase-invoice-account-type-error",
                },
                {
                  text: "Fixing Fiscal Year Error",
                  link: "/erpnext/fiscal-year-error",
                },
                {
                  text: "Round off Account Validation Message",
                  link: "/erpnext/round-off-account-validation",
                },
                {
                  text: "Delete entries linked with GL entries",
                  link: "/erpnext/delete-entries-linked-with-gl-entries",
                },
                {
                  text: "Invoice rounding issue",
                  link: "/erpnext/invoice-rounding-issue",
                },
                {
                  text: "Customise Cash Flow Report",
                  link: "/erpnext/customise-cash-flow-report",
                },
                {
                  text: "Difference Entry",
                  link: "/erpnext/difference-entry-button",
                },
                {
                  text: "Post Dated Cheque Entry",
                  link: "/erpnext/post-dated-cheque-entry",
                },
                {
                  text: "Adjusting Withhold Amount",
                  link: "/erpnext/adjusting-withhold-amount",
                },
                {
                  text: "Single Payment Again Multiple Invoices",
                  link: "/erpnext/single-payment-multiple-invoices",
                },
                {
                  text: "Withdrawing Salary from Owner's Equity Account",
                  link: "/erpnext/withdrawing-salary-from-owners-equity-account",
                },
                {
                  text: "Invoice Discount in Payment Entry",
                  link: "/erpnext/managing-invoice-discount-in-the-payment-entry",
                },
                {
                  text: "Adding reference to Journal Entry",
                  link: "/erpnext/adding-reference-to-journal-entry",
                },
                {
                  text: "Book discount allowed and received separately",
                  link: "/erpnext/book-discount-allowed-and-received-separately",
                },
                {
                  text: "Accounting for Bad Debts",
                  link: "/erpnext/accounting-for-bad-debts",
                },
                {
                  text: "Book Petty Cash Entry",
                  link: "/erpnext/petty-cash-entry-in-erpnext",
                },
                {
                  text: "Debit Note for price adjustment",
                  link: "/erpnext/debit-note-for-price-adjustment",
                },
                {
                  text: "Payment Entry for Capital Account",
                  link: "/erpnext/payment-entry-for-capital-account",
                },
                {
                  text: "Managing Transactions In Multiple Currency",
                  link: "/erpnext/accounts/articles/managing-transactions-in-multiple-currencies",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Assets",
          link: "/erpnext/assets/intro/",
          items: [
            {
              text: "Setup",
              items: [
                {
                  text: "Asset Category",
                  link: "/erpnext/asset-category",
                },
                {
                  text: "Asset Location",
                  link: "/erpnext/asset-location",
                },
                {
                  text: "Purchasing an Asset",
                  link: "/erpnext/purchasing-an-asset",
                },
                {
                  text: "Asset",
                  link: "/erpnext/asset",
                },
              ],
              collapsed: true,
            },
            {
              text: "Features",
              items: [
                {
                  text: "Depreciation",
                  items: [
                    {
                      text: "Depreciation Methods",
                      link: "/erpnext/depreciation-methods",
                    },
                    {
                      text: "Daily Depreciation Calculation",
                      link: "/erpnext/daily-depreciation",
                    },
                    {
                      text: "Asset Shift Allocation",
                      link: "/erpnext/asset-shift-allocation",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Maintenance",
                  items: [
                    {
                      text: "Asset Maintenance",
                      link: "/erpnext/asset-maintenance",
                    },
                    {
                      text: "Asset Maintenance Team",
                      link: "/erpnext/asset-maintenance-team",
                    },
                    {
                      text: "Asset Maintenance Log",
                      link: "/erpnext/asset-maintenance-log",
                    },
                    {
                      text: "Asset Movement",
                      link: "/erpnext/asset-movement",
                    },
                    {
                      text: "Asset Repair",
                      link: "/erpnext/asset-repair",
                    },
                    {
                      text: "Asset Value Adjustment",
                      link: "/erpnext/asset-value-adjustment",
                    },
                    {
                      text: "Asset Capitalization",
                      link: "/erpnext/asset-capitalization",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Disposal",
                  items: [
                    {
                      text: "Selling an Asset",
                      link: "/erpnext/selling-an-asset",
                    },
                    {
                      text: "Scrapping an Asset",
                      link: "/erpnext/scrapping-an-asset",
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
            {
              text: "Reports",
              items: [
                {
                  text: "Asset Reports",
                  link: "/erpnext/asset-reports",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Moving Asset from Stock Item to Fixed Asset Item",
                  link: "/erpnext/moving-asset-from-stock-item-to-fixed-asset-item",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Buying",
          link: "/erpnext/buying/introduction/",
          items: [
            {
              text: "Setup",
              items: [
                {
                  text: "Supplier Essentials",
                  link: "/erpnext/supplier-essentials",
                },
                {
                  text: "Supplier Group",
                  link: "/erpnext/supplier-group",
                },
                {
                  text: "Supplier",
                  link: "/erpnext/supplier",
                },
                {
                  text: "Buying Settings",
                  link: "/erpnext/buying-settings",
                },
              ],
              collapsed: true,
            },
            {
              text: "Features",
              items: [
                {
                  text: "Purchase Transactions",
                  link: "/erpnext/purchase-transactions",
                },
                {
                  text: "Material Request",
                  link: "/erpnext/material-request",
                },
                {
                  text: "Purchase Return",
                  link: "/erpnext/purchase-return",
                },
                {
                  text: "Request for Quotation",
                  link: "/erpnext/request-for-quotation",
                },
                {
                  text: "Supplier Quotation",
                  link: "/erpnext/supplier-quotation",
                },
                {
                  text: "Purchase Order",
                  link: "/erpnext/purchase-order",
                },
                {
                  text: "Create Supplier Quotation through Supplier Portal",
                  link: "/erpnext/how-to-create-a-supplier-quotation-through-the-supplier-portal",
                },
                {
                  text: "Supplier Scorecard",
                  link: "/erpnext/supplier-scorecard",
                },
                {
                  text: "Customer Portal",
                  link: "/erpnext/customer-portal",
                },
              ],
              collapsed: true,
            },
            {
              text: "Reports",
              items: [
                {
                  text: "Buying Reports",
                  link: "/erpnext/buying_reports",
                },
                {
                  text: "Procurement Tracker Report",
                  link: "/erpnext/procurement-tracker-report",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Maintaining Supplier's Item Code In the Item master",
                  link: "/erpnext/maintaining-suppliers-part-no-in-item",
                },
                {
                  text: "Purchasing in Different UoM",
                  link: "/erpnext/purchasing-in-different-unit",
                },
                {
                  text: "Amending Purchase Order after Submit",
                  link: "/erpnext/amending-purchase-order-after-submit",
                },
                {
                  text: "Calculating Freight in taxes in ERPNext",
                  link: "/erpnext/calculatin-freight-in-taxes-in-erpnext",
                },
                {
                  text: "Fetch shipping charges based item's value or weight",
                  link: "/erpnext/can-we-fetch-shipping-charges-based-items-value-or-weight-in-po",
                },
                {
                  text: "Purchase invoice for Services",
                  link: "/erpnext/item-creation-not-required-in-purchase-invoice",
                },
                {
                  text: "Procurement Cycle Overview",
                  link: "/erpnext/procurement-cycle-overview",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Selling",
          link: "/erpnext/selling/introduction/",
          items: [
            {
              text: "Setup",
              items: [
                {
                  text: "Selling Essentials",
                  link: "/erpnext/selling-essentials",
                },
                {
                  text: "Customer",
                  link: "/erpnext/customer",
                },
                {
                  text: "Customer Group",
                  link: "/erpnext/customer-group",
                },
                {
                  text: "Territory",
                  link: "/erpnext/territory",
                },
                {
                  text: "Contact",
                  link: "/erpnext/contact",
                },
                {
                  text: "Address",
                  link: "/erpnext/address",
                },
                {
                  text: "Address Template",
                  link: "/erpnext/address-template",
                },
                {
                  text: "Terms And Conditions",
                  link: "/erpnext/terms-and-conditions",
                },
                {
                  text: "Selling Settings",
                  link: "/erpnext/selling-settings",
                },
              ],
              collapsed: true,
            },
            {
              text: "Features",
              items: [
                {
                  text: "Selling Transactions",
                  link: "/erpnext/selling-transactions",
                },
                {
                  text: "Quotation",
                  link: "/erpnext/quotation",
                },
                {
                  text: "Sales Order",
                  link: "/erpnext/sales-order",
                },
                {
                  text: "Blanket Order",
                  link: "/erpnext/blanket-order",
                },
                {
                  text: "Drop Ship",
                  link: "/erpnext/drop-shipping-in-erpnext",
                },
                {
                  text: "Credit Limit",
                  link: "/erpnext/credit-limit",
                },
                {
                  text: "Sales Partner",
                  link: "/erpnext/sales-partner",
                },
                {
                  text: "Sales Return",
                  link: "/erpnext/sales-return",
                },
                {
                  text: "Inter Company Invoices",
                  link: "/erpnext/inter-company-invoices",
                },
                {
                  text: "Sales Person",
                  link: "/erpnext/sales-person",
                },
                {
                  text: "Calculate Incentive For Sales Team",
                  link: "/erpnext/calculate-incentive-for-sales-team",
                },
                {
                  text: "Promotional Scheme",
                  link: "/erpnext/promotional-scheme",
                },
                {
                  text: "Sales Cycle Integration",
                  link: "/erpnext/sales-integration",
                },
              ],
              collapsed: true,
            },
            {
              text: "Reports",
              items: [
                {
                  text: "Sales Reports",
                  link: "/erpnext/sales-analytics",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Sales Invoice without an Item",
                  link: "/erpnext/sales-invoice-without-an-item",
                },
                {
                  text: "Sales Person Target Allocation",
                  link: "/erpnext/sales-person-target-allocation",
                },
                {
                  text: "Setting Company Sales Goal",
                  link: "/erpnext/setting-company-sales-goal",
                },
                {
                  text: "Sales Commission",
                  link: "/erpnext/how-to-give-commission-to-sales-partner",
                },
                {
                  text: "Setting up",
                  link: "/erpnext/setting-up-buy-1-get-1-free-pricing-rule",
                },
                {
                  text: "Selling in Different UoM",
                  link: "/erpnext/Selling-in-different-UOM",
                },
                {
                  text: "Change the Rate of Items in the Sales Cycle",
                  link: "/erpnext/need-to-change-rate-of-items-during-sales-cycle",
                },
                {
                  text: "Drop Ship Between Subsidiary Companies",
                  link: "/erpnext/assistance-sales-purchase-between-companies",
                },
                {
                  text: "Request for Raw Materials from Sales Order",
                  link: "/erpnext/request-for-raw-materials-from-sales-order",
                },
                {
                  text: "Applying a Discount",
                  link: "/erpnext/applying-discount",
                },
                {
                  text: "Amending Sales Order after Submit",
                  link: "/erpnext/amending-sales-order-after-submit",
                },
                {
                  text: "Close Sales Order",
                  link: "/erpnext/close-sales-order",
                },
                {
                  text: "Short Close Multiple Orders",
                  link: "/erpnext/how-to-short-close-multiple-orders-in-erpnext",
                },
                {
                  text: "Incoterm and Named Place",
                  link: "/erpnext/incoterm-and-named-place",
                },
                {
                  text: "Sales Persons in the Sales Transactions",
                  link: "/erpnext/sales-persons-in-the-sales-transactions",
                },
                {
                  text: "Sales Return Management",
                  link: "/erpnext/sales-return-use-cases",
                },
                {
                  text: "Adding Margin",
                  link: "/erpnext/adding-margin",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Stock",
          link: "/erpnext/stock/",
          items: [
            {
              text: "Warehouse",
              link: "/erpnext/warehouse",
            },
            {
              text: "Setup",
              items: [
                {
                  text: "Stock Masters",
                  link: "/erpnext/stock-masters",
                },
                {
                  text: "Item",
                  items: [
                    {
                      text: "Item Group",
                      link: "/erpnext/item-group",
                    },
                    {
                      text: "Unit of Measure (UoM)",
                      link: "/erpnext/uom",
                    },
                    {
                      text: "Serial and Batch",
                      link: "/erpnext/serial-and-batch",
                    },
                    {
                      text: "Item Variants",
                      link: "/erpnext/item-variants",
                    },
                    {
                      text: "Item Attribute",
                      link: "/erpnext/item-attribute",
                    },
                    {
                      text: "Brand",
                      link: "/erpnext/brand",
                    },
                    {
                      text: "Manufacturer",
                      link: "/erpnext/manufacturer",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Item Pricing",
                  items: [
                    {
                      text: "Pricing",
                      link: "/erpnext/pricing",
                    },
                    {
                      text: "Price Lists",
                      link: "/erpnext/price-lists",
                    },
                    {
                      text: "Item Price",
                      link: "/erpnext/item-price",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Opening Stock",
                  link: "/erpnext/opening-stock",
                },
                {
                  text: "Stock Settings",
                  link: "/erpnext/stock-settings",
                },
                {
                  text: "Stock Accounting",
                  items: [
                    {
                      text: "Accounting Of Inventory Stock",
                      link: "/erpnext/accounting-of-inventory-stock",
                    },
                    {
                      text: "Perpetual Inventory",
                      link: "/erpnext/perpetual-inventory",
                    },
                    {
                      text: "Periodic Inventory",
                      link: "/erpnext/periodic-inventory",
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
            {
              text: "Features",
              items: [
                {
                  text: "Stock Transactions",
                  link: "/erpnext/stock-transactions",
                },
                {
                  text: "Purchase Receipt",
                  link: "/erpnext/purchase-receipt",
                },
                {
                  text: "Delivery Note",
                  link: "/erpnext/delivery-note",
                },
                {
                  text: "Stock Entry",
                  link: "/erpnext/stock-entry",
                },
                {
                  text: "Product Bundle",
                  link: "/erpnext/product-bundle",
                },
                {
                  text: "Stock Reconciliation",
                  link: "/erpnext/stock-reconciliation",
                },
                {
                  text: "Stock Reservation",
                  link: "/erpnext/stock-reservation",
                },
                {
                  text: "Pricing Rule",
                  link: "/erpnext/pricing-rule",
                },
                {
                  text: "Stock Inspection",
                  link: "/erpnext/stock-inspection",
                },
                {
                  text: "Serialized & Batches Inventory",
                  items: [
                    {
                      text: "Batch",
                      link: "/erpnext/batch",
                    },
                    {
                      text: "Serial Number",
                      link: "/erpnext/serial-no",
                    },
                    {
                      text: "Serial and Batch Bundle",
                      link: "/erpnext/serial-and-batch-bundle",
                    },
                  ],
                  collapsed: true,
                },
                {
                  text: "Shipping Rule",
                  link: "/erpnext/shipping-rule",
                },
                {
                  text: "Delivery Trip",
                  link: "/erpnext/delivery-trip",
                },
                {
                  text: "Track Purchases In Accounts",
                  link: "/erpnext/track-purchases-in-accounts",
                },
                {
                  text: "Landed Cost Voucher",
                  link: "/erpnext/stock-transactions-landed-cost-voucher",
                },
                {
                  text: "Quality Inspection",
                  link: "/erpnext/quality-inspection",
                },
                {
                  text: "Stock Adjustment / COGS with Negative Stock",
                  link: "/erpnext/stock-adjustment-cogs-with-negative-stock",
                },
                {
                  text: "Stock Closing Entry",
                  link: "/erpnext/stock-closing-entry",
                },
                {
                  text: "Disassembly Order",
                  link: "/erpnext/disassembly-order",
                },
                {
                  text: "Inventory Account",
                  link: "/erpnext/inventory-account",
                },
                {
                  text: "Inventory Dimension",
                  link: "/erpnext/inventory_dimension",
                },
                {
                  text: "Managing Batch wise Inventory",
                  link: "/erpnext/managing-batch-wise-inventory",
                },
                {
                  text: "Retaining Sample Stock",
                  link: "/erpnext/retain-sample-stock",
                },
                {
                  text: "Auto Creation of Material Request",
                  link: "/erpnext/auto-creation-of-material-request",
                },
                {
                  text: "Item Alternative",
                  link: "/erpnext/item-alternative",
                },
                {
                  text: "Shipment",
                  link: "/erpnext/shipment",
                },
                {
                  text: "Installation Note",
                  link: "/erpnext/installation-note",
                },
                {
                  text: "Pick List",
                  link: "/erpnext/pick-list",
                },
                {
                  text: "Putaway Rule",
                  link: "/erpnext/putaway-rule",
                },
                {
                  text: "Packing Slip",
                  link: "/erpnext/packing-slip",
                },
                {
                  text: "Landed cost Voucher",
                  link: "/erpnext/landed-cost-voucher",
                },
                {
                  text: "Rules",
                  link: "/erpnext/rules",
                },
                {
                  text: "Projected Quantity",
                  link: "/erpnext/projected-quantity",
                },
              ],
              collapsed: true,
            },
            {
              text: "Tools",
              items: [
                {
                  text: "Stock Reposting Settings",
                  link: "/erpnext/stock-reposting-settings",
                },
                {
                  text: "Repost Item Valuation",
                  link: "/erpnext/repost-item-valuation",
                },
              ],
              collapsed: true,
            },
            {
              text: "Reports",
              items: [
                {
                  text: "Stock Ledger Report",
                  link: "/erpnext/stock-ledger",
                },
                {
                  text: "Stock Level Report",
                  link: "/erpnext/stock-level-report",
                },
                {
                  text: "Quick Stock Balance",
                  link: "/erpnext/quick-stock-balance",
                },
                {
                  text: "Closing Stock Balance",
                  link: "/erpnext/closing-stock-balance",
                },
                {
                  text: "Stock Value and Account Value Comparison Report",
                  link: "/erpnext/stock-value-account-value-comparison",
                },
                {
                  text: "Stock Ledger Variance Report",
                  link: "/erpnext/stock-reposting",
                },
                {
                  text: "Serial No and Batch Traceability Report",
                  link: "/erpnext/serial-and-batch-traceability-report",
                },
                {
                  text: "Negative Batch Report",
                  link: "/erpnext/stock/reports/negative-batch-report",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Change Valuation Method",
                  link: "/erpnext/change-valuation-method",
                },
                {
                  text: "Managing Fractions in UOM",
                  link: "/erpnext/managing-fractions-in-uom",
                },
                {
                  text: "Serial Number Naming",
                  link: "/erpnext/serial-no-naming",
                },
                {
                  text: "Delivery Note Negative Stock Error",
                  link: "/erpnext/delivery-note-stock-error",
                },
                {
                  text: "Maintain Stock field Frozen in the Item master",
                  link: "/erpnext/maintain-stock-field-frozen-in-item-master",
                },
                {
                  text: "Cannot enable Serial and Batch Number",
                  link: "/erpnext/not-able-to-select-has-serial-no-batch-option-in-item-list",
                },
                {
                  text: "Stock Balance and Stock Account Balance Syncing",
                  link: "/erpnext/stock-balance-and-stock-account-balance-not-in-sync",
                },
                {
                  text: "Linking stock warehouse and accounts",
                  link: "/erpnext/warehouse-ledger-link",
                },
                {
                  text: "Allow Over Delivery/Billing",
                  link: "/erpnext/allow-over-delivery-billing-against-sales-order-upto-certain-limit",
                },
                {
                  text: "Item Codification",
                  link: "/erpnext/item-codification",
                },
                {
                  text: "Track Items Using Barcode",
                  link: "/erpnext/track-items-using-barcode",
                },
                {
                  text: "Item Valuation Setup and Transactions",
                  link: "/erpnext/item-valuation-transactions",
                },
                {
                  text: "FIFO and Moving Average calculation difference",
                  link: "/erpnext/calculation-of-valuation-rate-in-fifo-and-moving-average",
                },
                {
                  text: "Serialised Item Valuation Rate calculation",
                  link: "/erpnext/how-is-valuation-rate-of-serialised-item-calculated-in-erpnext",
                },
                {
                  text: "Perpetual Inventory for Non-stock Item",
                  link: "/erpnext/perpetual-inventory-for-non-stock-item",
                },
                {
                  text: "Material Transfer from Delivery Note and Purchase Receipt",
                  link: "/erpnext/material-transfer-from-delivery-note",
                },
                {
                  text: "Migrate To Perpetual Inventory",
                  link: "/erpnext/migrate-to-perpetual-inventory",
                },
                {
                  text: "Purpose of Stock Received but not Billed",
                  link: "/erpnext/stock-received-but-not-billed",
                },
                {
                  text: "Opening Stock Balance Entry for Serialized and Batch Item",
                  link: "/erpnext/opening-stock-balance-entry-for-serialized-and-batch-item",
                },
                {
                  text: "Stock Entry Purpose",
                  link: "/erpnext/stock-entry-purpose",
                },
                {
                  text: "Repack Entry",
                  link: "/erpnext/repack-entry",
                },
                {
                  text: "Delivery from Sales Invoice",
                  link: "/erpnext/update-stock-option-in-sales-invoice",
                },
                {
                  text: "Return Rejected Items",
                  link: "/erpnext/return-rejected-item",
                },
                {
                  text: "Purpose of Stock Delivered But Not Billed",
                  link: "/erpnext/purpose-of-stock-delivered-but-not-billed",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Point of Sale",
          link: "/erpnext/point-of-sale",
          items: [
            {
              text: "Getting Started",
              link: "/erpnext/point-of-sale/setup",
            },
            {
              text: "POS Profile",
              link: "/erpnext/pos-profile",
            },
            {
              text: "POS Workflows",
              link: "/erpnext/pos-workflows",
            },
            {
              text: "POS Invoice Consolidation",
              link: "/erpnext/pos-invoice-consolidation",
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Loyalty points redemption in POS",
                  link: "/erpnext/loyalty-points-redemption-in-pos",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Manufacturing",
          link: "/erpnext/manufacturing/introduction/",
          items: [
            {
              text: "Setup",
              items: [
                {
                  text: "Bill Of Materials",
                  link: "/erpnext/bill-of-materials",
                },
                {
                  text: "Workstation Type",
                  link: "/erpnext/workstation_type",
                },
                {
                  text: "Operation",
                  link: "/erpnext/operation",
                },
                {
                  text: "Workstation",
                  link: "/erpnext/workstation",
                },
                {
                  text: "Routing",
                  link: "/erpnext/routing",
                },
              ],
              collapsed: true,
            },
            {
              text: "Features",
              items: [
                {
                  text: "Production and Material Planning",
                  link: "/erpnext/production-and-material-planning",
                },
                {
                  text: "Track Semi-Finished Goods",
                  link: "/erpnext/track-semi-finished-goods",
                },
                {
                  text: "Stock Reservation for Work Order",
                  link: "/erpnext/stock-reservation-for-work-order",
                },
                {
                  text: "Stock Reservation for Production Plan",
                  link: "/erpnext/stock-reservation-for-production-plan",
                },
                {
                  text: "Material Requirements Planning (MRP)",
                  link: "/erpnext/material-requirements-planning-mrp",
                },
                {
                  text: "Capacity Planning based on Work Order",
                  link: "/erpnext/capacity-planning",
                },
                {
                  text: "Capacity Planning based on Production Order",
                  link: "/erpnext/capacity-planning-based-on-production-order",
                },
                {
                  text: "Capacity Planning",
                  link: "/erpnext/production-and-material-planning-capacity-planning",
                },
                {
                  text: "Downtime Entry",
                  link: "/erpnext/downtime-entry",
                },
                {
                  text: "Secondary Items",
                  link: "/erpnext/secondary-items",
                },
              ],
              collapsed: true,
            },
            {
              text: "Tools",
              items: [
                {
                  text: "BOM Update Tool",
                  link: "/erpnext/bom-update-tool",
                },
                {
                  text: "BOM Comparison Tool",
                  link: "/erpnext/bom-comparison-tool",
                },
                {
                  text: "Multi-level BOM Creator",
                  link: "/erpnext/bom-creator",
                },
              ],
              collapsed: true,
            },
            {
              text: "Important DocTypes",
              items: [
                {
                  text: "Production Plan",
                  link: "/erpnext/production-plan",
                },
                {
                  text: "Work Order",
                  link: "/erpnext/work-order",
                },
                {
                  text: "Job Card",
                  link: "/erpnext/job-card",
                },
                {
                  text: "Plant Floor",
                  link: "/erpnext/plant-floor",
                },
              ],
              collapsed: true,
            },
            {
              text: "Reports",
              items: [
                {
                  text: "Manufacturing Reports",
                  link: "/erpnext/manufacturing-reports",
                },
                {
                  text: "Work Order Summary",
                  link: "/erpnext/work-order-summary",
                },
                {
                  text: "BOM Search",
                  link: "/erpnext/bom-search",
                },
                {
                  text: "Job Card Summary",
                  link: "/erpnext/job-card-summary",
                },
                {
                  text: "BOM Stock Report",
                  link: "/erpnext/bom-stock-report",
                },
                {
                  text: "BOM Operations Time",
                  link: "/erpnext/bom-operation-time",
                },
                {
                  text: "BOM Explorer",
                  link: "/erpnext/bom_explorer",
                },
                {
                  text: "Open Work Order Report",
                  link: "/erpnext/open-work-orders",
                },
                {
                  text: "Forecasting Using Exponential Smoothing",
                  link: "/erpnext/demand-driven-forecasting",
                },
                {
                  text: "Production Planning Report",
                  link: "/erpnext/production-planning-report",
                },
                {
                  text: "Quality Inspection Summary",
                  link: "/erpnext/quality-inspction-summary",
                },
                {
                  text: "Production Analytics",
                  link: "/erpnext/production-analytics",
                },
                {
                  text: "Downtime Analysis",
                  link: "/erpnext/downtime-analysis",
                },
                {
                  text: "Work Order Consumed Materials",
                  link: "/erpnext/work-order-consumed-materials",
                },
                {
                  text: "Returned Materials Against Work Order",
                  link: "/erpnext/returned_materials_against_work_order",
                },
                {
                  text: "Issued Items Against Work Order",
                  link: "/erpnext/consumed-materials-in-production",
                },
                {
                  text: "BOM Stock Analysis",
                  link: "/erpnext/bom-stock-analysis",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "BOM Costing in different Currency",
                  link: "/erpnext/bom-costing-in-different-currency",
                },
                {
                  text: "Managing Multi-level BOM",
                  link: "/erpnext/managing-multi-level-bom",
                },
                {
                  text: "Raw material valuation",
                  link: "/erpnext/valuation-based-on-field-in-bom",
                },
                {
                  text: "Material consumption",
                  link: "/erpnext/material_consumption",
                },
                {
                  text: "Manufacturing without creating BOM",
                  link: "/erpnext/manufacturing-without-creating-bom",
                },
                {
                  text: "Multiple finished goods with single raw material",
                  link: "/erpnext/how-to-handle-a-scenario-of-1-raw-material-multiple-finish-goods",
                },
                {
                  text: "Customer Provided Items",
                  link: "/erpnext/customer-provided-items",
                },
                {
                  text: "Production Scrap Management",
                  link: "/erpnext/scrap-management",
                },
              ],
              collapsed: true,
            },
            {
              text: "Manufacturing Settings",
              link: "/erpnext/manufacturing-settings",
            },
          ],
          collapsed: true,
        },
        {
          text: "Quality",
          link: "/erpnext/quality-management",
          items: [
            {
              text: "Setup",
              items: [
                {
                  text: "Quality Goal",
                  link: "/erpnext/quality_goal",
                },
                {
                  text: "Quality Procedure",
                  link: "/erpnext/quality_procedure",
                },
              ],
              collapsed: true,
            },
            {
              text: "Features",
              items: [
                {
                  text: "Quality Review",
                  link: "/erpnext/quality_review",
                },
                {
                  text: "Quality Action",
                  link: "/erpnext/quality_action",
                },
                {
                  text: "Non Conformance",
                  link: "/erpnext/non-conformance",
                },
                {
                  text: "Quality Feedback Template",
                  link: "/erpnext/quality-feedback-template",
                },
                {
                  text: "Quality Feedback",
                  link: "/erpnext/quality_feedback",
                },
                {
                  text: "Quality Meeting",
                  link: "/erpnext/quality_meeting",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Subcontracting",
          link: "/erpnext/subcontracting-in-erpnext",
          items: [
            {
              text: "Subcontracting",
              link: "/erpnext/subcontracting",
            },
            {
              text: "Subcontracting Inward",
              link: "/erpnext/subcontracting-inward",
            },
            {
              text: "Reports",
              link: "/erpnext/subcontracting/reports",
            },
          ],
          collapsed: true,
        },
        {
          text: "Projects",
          link: "/erpnext/erpnext/modules/erpnext/project/introduction/",
          items: [
            {
              text: "Setup",
              items: [
                {
                  text: "Getting Started",
                  link: "/erpnext/projects/introduction/getting-started",
                },
                {
                  text: "Project Settings",
                  link: "/erpnext/projects/project-settings",
                },
                {
                  text: "Project Type",
                  link: "/erpnext/project-type",
                },
                {
                  text: "Project Template",
                  link: "/erpnext/project-template",
                },
                {
                  text: "Activity Type",
                  link: "/erpnext/activity-type",
                },
                {
                  text: "Activity Cost",
                  link: "/erpnext/activity-cost",
                },
              ],
              collapsed: true,
            },
            {
              text: "Project & Task",
              items: [
                {
                  text: "Project",
                  link: "/erpnext/project/",
                },
                {
                  text: "Tasks",
                  link: "/erpnext/tasks",
                },
                {
                  text: "Project Views",
                  link: "/erpnext/project-views",
                },
                {
                  text: "Project Update",
                  link: "/erpnext/project-update",
                },
                {
                  text: "Project from Customer Portal",
                  link: "/erpnext/project-customer-portal",
                },
              ],
              collapsed: true,
            },
            {
              text: "Timesheet & Billing",
              items: [
                {
                  text: "Time Tracking",
                  link: "/erpnext/time-tracking",
                },
                {
                  text: "Timesheet",
                  link: "/erpnext/timesheets",
                },
                {
                  text: "Time Based Payout",
                  link: "/erpnext/time-based-payout",
                },
                {
                  text: "Sales Invoice from Timesheet",
                  link: "/erpnext/sales-invoice-from-timesheet",
                },
                {
                  text: "Salary Slip from Timesheet",
                  link: "/erpnext/salary-slip-from-timesheet",
                },
              ],
              collapsed: true,
            },
            {
              text: "Costing & Expenses",
              items: [
                {
                  text: "Project Costing",
                  link: "/erpnext/project-costing",
                },
                {
                  text: "Project Profitability",
                  link: "/erpnext/project-profitability",
                },
                {
                  text: "Project and Managing Expenses",
                  link: "/erpnext/project-expense-claims",
                },
              ],
              collapsed: true,
            },
            {
              text: "Reports",
              items: [
                {
                  text: "Project Reports",
                  link: "/erpnext/project-reports",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Make A Colorful Gantt Chart",
                  link: "/erpnext/make-a-colorful-gantt-chart",
                },
                {
                  text: "Bulk Assign Tasks in a Project",
                  link: "/erpnext/bulk-assign-tasks-in-a-project",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "CRM",
          link: "/erpnext/crm/introduction/",
          items: [
            {
              text: "Setup",
              items: [
                {
                  text: "CRM Masters",
                  link: "/erpnext/crm-masters",
                },
                {
                  text: "Lead Source",
                  link: "/erpnext/lead_source",
                },
                {
                  text: "Opportunity Type",
                  link: "/erpnext/opportunity_type",
                },
                {
                  text: "Campaign",
                  link: "/erpnext/campaign",
                },
                {
                  text: "CRM Settings",
                  link: "/erpnext/crm_settings",
                },
              ],
              collapsed: true,
            },
            {
              text: "Features",
              items: [
                {
                  text: "Lead",
                  link: "/erpnext/lead",
                },
                {
                  text: "Opportunity",
                  link: "/erpnext/opportunity",
                },
                {
                  text: "Appointment",
                  link: "/erpnext/appointment",
                },
                {
                  text: "Sales Stage",
                  link: "/erpnext/sales_stage",
                },
                {
                  text: "Contract",
                  link: "/erpnext/contract",
                },
                {
                  text: "Email Campaign",
                  link: "/erpnext/email-campaign",
                },
                {
                  text: "Newsletter",
                  items: [
                    {
                      text: "Email Group",
                      link: "/erpnext/email_group",
                    },
                    {
                      text: "Newsletter",
                      link: "/erpnext/newsletter",
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
            {
              text: "Tools",
              items: [
                {
                  text: "Appointment Booking Settings",
                  link: "/erpnext/appointment-booking-settings",
                },
                {
                  text: "Social Media Settings",
                  link: "/erpnext/social-media-settings",
                },
                {
                  text: "Twitter Settings",
                  link: "/erpnext/twitter-settings",
                },
                {
                  text: "LinkedIn Settings",
                  link: "/erpnext/linkedin-settings",
                },
              ],
              collapsed: true,
            },
            {
              text: "Reports",
              items: [
                {
                  text: "CRM Reports",
                  link: "/erpnext/crm_reports",
                },
                {
                  text: "Sales Pipeline",
                  link: "/erpnext/sales-pipeline",
                },
                {
                  text: "CRM Analytics",
                  link: "/erpnext/sales_funnel",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Difference between Lead, Contact, and Customer",
                  link: "/erpnext/difference_between_lead_contact_and_customer",
                },
                {
                  text: "Automate Lead Creation",
                  link: "/erpnext/automate_lead_capturing",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Support",
          link: "/erpnext/support/",
          items: [
            {
              text: "Support Issues",
              link: "/erpnext/support-issues",
            },
            {
              text: "Support Settings",
              link: "/erpnext/support-settings",
            },
            {
              text: "Service Level Agreement",
              link: "/erpnext/service-level-agreement",
            },
            {
              text: "Support Reports",
              link: "/erpnext/support_reports",
            },
            {
              text: "Warranty",
              link: "/erpnext/warranty",
            },
            {
              text: "Warranty Claim",
              link: "/erpnext/warranty-claim",
            },
            {
              text: "Issue",
              link: "/erpnext/issue",
            },
            {
              text: "Issue Type",
              link: "/erpnext/issue-type-and-priority",
            },
            {
              text: "Maintenance",
              link: "/erpnext/maintenance",
            },
            {
              text: "Maintenance Visit",
              link: "/erpnext/maintenance-visit",
            },
            {
              text: "Maintenance Schedule",
              link: "/erpnext/maintenance-schedule",
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Automating Issue Assignments in ERPNext",
                  link: "/erpnext/automating-issue-assignments-to-support-team-in-erpnext",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Data Model",
          link: "/erpnext/building-data-model/",
          items: [
            {
              text: "DocType",
              items: [
                {
                  text: "Naming Series",
                  link: "/erpnext/naming-series",
                },
                {
                  text: "Document Naming Settings",
                  link: "/erpnext/document-naming-settings",
                },
                {
                  text: "Document Naming Rule",
                  link: "/erpnext/document-naming",
                },
              ],
              collapsed: true,
            },
            {
              text: "Field Types",
              items: [
                {
                  text: "Geolocation Field",
                  link: "/erpnext/geolocation-field",
                },
                {
                  text: "Table MultiSelect Field",
                  link: "/erpnext/table-multiselect-field",
                },
                {
                  text: "Dynamic Link Fields",
                  link: "/erpnext/dynamic-link-fields",
                },
                {
                  text: "Signature Field",
                  link: "/erpnext/electronic-signature",
                },
                {
                  text: "Creating Custom Link Field",
                  link: "/erpnext/creating-custom-link-field",
                },
              ],
              collapsed: true,
            },
            {
              text: "Working with Documents",
              items: [
                {
                  text: "Document Versioning",
                  link: "/erpnext/document-versioning",
                },
                {
                  text: "Renaming Documents",
                  link: "/erpnext/renaming-documents",
                },
                {
                  text: "Duplicate Records",
                  link: "/erpnext/duplicate-record",
                },
                {
                  text: "Edit Submitted Document",
                  link: "/erpnext/edit-submitted-document",
                },
                {
                  text: "Delete Submitted Document",
                  link: "/erpnext/delete-submitted-document",
                },
                {
                  text: "Deleting and Restoring Documents",
                  link: "/erpnext/restore-deleted-erpnext",
                },
                {
                  text: "Restore Deleted Documents",
                  link: "/erpnext/how-to-restore-deleted-documents-in-erpnext",
                },
                {
                  text: "Copy Pasting Multiple Records From Excel",
                  link: "/erpnext/copy-pasting-multiple-records-from-excel",
                },
                {
                  text: "Checking Link Between Documents",
                  link: "/erpnext/check-link-between-documents",
                },
                {
                  text: "Manage Tree Structure Masters",
                  link: "/erpnext/managing-tree-structure-masters",
                },
                {
                  text: "Tree Master Renaming",
                  link: "/erpnext/tree-master-renaming",
                },
              ],
              collapsed: true,
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Set Current Value for Naming Series",
                  link: "/erpnext/naming-series-current-value",
                },
                {
                  text: "Company-wise Naming Series",
                  link: "/erpnext/company-wise-naming-series",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Customization",
          link: "/erpnext/customize-erpnext/",
          items: [
            {
              text: "Custom Field",
              link: "/erpnext/custom-field",
            },
            {
              text: "Customize Form",
              link: "/erpnext/customize-form",
            },
            {
              text: "Document Title",
              link: "/erpnext/document-title",
            },
            {
              text: "Customizing Workspace",
              link: "/erpnext/workspace",
            },
            {
              text: "Customizing Module Visibility",
              link: "/erpnext/customizing-module-visibility",
            },
            {
              text: "Set default values for any field",
              link: "/erpnext/setting-default-values-for-any-field-in-erpnext",
            },
            {
              text: "Fetching Data from a Document",
              link: "/erpnext/fetching-data-from-a-document",
            },
            {
              text: "Fetching data from a linked master",
              link: "/erpnext/how-to-add-master-link-and-fetch-data-from-the-same",
            },
            {
              text: "Data Visibility in Child Tables",
              link: "/erpnext/customizing-data-visibility-in-child-table",
            },
            {
              text: "Sorting Order in List View",
              link: "/erpnext/customizing-sorting-order-in-the-list-view",
            },
            {
              text: "Search Record by Specific Field",
              link: "/erpnext/search-record-by-specific-field",
            },
            {
              text: "Disable Rounded Total",
              link: "/erpnext/disable-rounded-total",
            },
            {
              text: "Document Title with multiple fields",
              link: "/erpnext/document-title-with-multiple-fields",
            },
            {
              text: "Edit a Field after Submission",
              link: "/erpnext/editing-a-field-after-submission",
            },
            {
              text: "Maximum Number of Fields in a Form",
              link: "/erpnext/maximum-number-of-fields-in-a-form",
            },
            {
              text: "Custom Scripts",
              items: [
                {
                  text: "Client Scripts",
                  link: "/erpnext/client-scripts",
                },
                {
                  text: "Filter Options in Select Field",
                  link: "/erpnext/filter-options-in-select-field",
                },
                {
                  text: "Fetch value in a child table field from Master",
                  link: "/erpnext/fetch-value-in-child-table-field",
                },
                {
                  text: "Fetching Values From Master",
                  link: "/erpnext/fetch-values-from-master",
                },
                {
                  text: "Fetch the entire address text on a custom field",
                  link: "/erpnext/fetch-the-entire-address-text-on-a-custom-field",
                },
                {
                  text: "Generate Item Code Based On Custom Logic",
                  link: "/erpnext/generate-item-code-based-on-custom-logic",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Configurations",
          link: "/erpnext/configurations/",
          items: [
            {
              text: "Printing",
              items: [
                {
                  text: "Print Format",
                  link: "/erpnext/print-format",
                },
                {
                  text: "Print Format Builder",
                  link: "/erpnext/print-format-builder",
                },
                {
                  text: "Print Settings",
                  link: "/erpnext/print-settings",
                },
                {
                  text: "Print Style",
                  link: "/erpnext/print-style",
                },
                {
                  text: "Printing and Branding",
                  link: "/erpnext/print",
                },
                {
                  text: "Letter Head",
                  link: "/erpnext/letter-head",
                },
                {
                  text: "Print Headings",
                  link: "/erpnext/print-headings",
                },
                {
                  text: "Cheque Print Template",
                  link: "/erpnext/cheque-print-template",
                },
                {
                  text: "Raw Printing",
                  link: "/erpnext/raw-printing",
                },
                {
                  text: "Customize Print Format",
                  link: "/erpnext/records-print-format",
                },
                {
                  text: "Custom Translations in Print Formats",
                  link: "/erpnext/custom-translations",
                },
                {
                  text: "Help Articles",
                  items: [
                    {
                      text: "Add/Remove Fields from Print Format",
                      link: "/erpnext/add-remove-fields-from-print-format",
                    },
                    {
                      text: "Customize tables within your Print Format Builder",
                      link: "/erpnext/customise-your-items-tables-within-your-print-format-builder",
                    },
                    {
                      text: "Customizing Field Visibility in Print Format",
                      link: "/erpnext/making-fields-visible-in-print-format",
                    },
                    {
                      text: "Remove Description in Print Format",
                      link: "/erpnext/removing-description-removed-item-code-and-name",
                    },
                    {
                      text: "Remove Link at the Bottom of the Print Page",
                      link: "/erpnext/remove-link-at-the-bottom-of-the-print-page",
                    },
                    {
                      text: "Print",
                      link: "/erpnext/centavo-being-printed-in-words-for-usd",
                    },
                    {
                      text: "Fetch child table values using Jinja tags",
                      link: "/erpnext/fetch-child-table-values-using-jinja-tags",
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
            {
              text: "Reporting",
              items: [
                {
                  text: "Using Prepared Report",
                  link: "/erpnext/prepared-report",
                },
                {
                  text: "Making Custom Reports",
                  link: "/erpnext/making-custom-reports",
                },
                {
                  text: "Deleting Custom Reports",
                  link: "/erpnext/deleting-custom-reports",
                },
                {
                  text: "Letter Head in the Report",
                  link: "/erpnext/letter-head-in-the-report",
                },
                {
                  text: "Add columns in Standard Report and Export",
                  link: "/erpnext/how-to-add-columns-in-the-standard-report-and-export",
                },
                {
                  text: "Energy Point System",
                  link: "/erpnext/energy-point-system",
                },
              ],
              collapsed: true,
            },
            {
              text: "Email & Notifications",
              items: [
                {
                  text: "Email Settings",
                  link: "/erpnext/email",
                },
                {
                  text: "Email Domain",
                  link: "/erpnext/email-domain",
                },
                {
                  text: "Email Account",
                  link: "/erpnext/email-account",
                },
                {
                  text: "Email Template",
                  link: "/erpnext/email-template",
                },
                {
                  text: "Email Digest",
                  link: "/erpnext/email-digest",
                },
                {
                  text: "Email Dropbox",
                  link: "/erpnext/email-dropbox",
                },
                {
                  text: "Email Inbox",
                  link: "/erpnext/email-inbox",
                },
                {
                  text: "Linking Emails to Documents",
                  link: "/erpnext/linking-emails-to-document",
                },
                {
                  text: "Sending Email from any Document",
                  link: "/erpnext/sending-email",
                },
                {
                  text: "Auto Email Reports",
                  link: "/erpnext/auto-email-reports",
                },
                {
                  text: "Notification",
                  link: "/erpnext/notifications",
                },
                {
                  text: "Document Follow",
                  link: "/erpnext/document-follow",
                },
                {
                  text: "SMS Settings",
                  link: "/erpnext/sms-setting",
                },
                {
                  text: "Help Articles",
                  items: [
                    {
                      text: "Include Document Link in Notification Email",
                      link: "/erpnext/include-document-link-in-notification-email",
                    },
                    {
                      text: "Adding Attachments to Outgoing Messages",
                      link: "/erpnext/adding-attachments-to-outgoing-messages",
                    },
                    {
                      text: "Configuring A Reply-To Email Address",
                      link: "/erpnext/configuring-a-reply-to-email-address-in-erpnext",
                    },
                    {
                      text: "Setting up Sendgrid SMTP Email in ERPNext",
                      link: "/erpnext/setting-up-sendgrid-smtp-email-in-erpnext",
                    },
                    {
                      text: "Email Error in Sending or Receiving",
                      link: "/erpnext/email-error",
                    },
                    {
                      text: "What if Emails are not being received by the Recipients?",
                      link: "/erpnext/what-if-emails-are-not-being-received-by-the-recipients",
                    },
                    {
                      text: "Sync DocTypes with Events Calendar",
                      link: "/erpnext/how-to-sync-doc-types-with-calendar",
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
            {
              text: "Workflows",
              items: [
                {
                  text: "Workflow",
                  link: "/erpnext/workflow",
                },
                {
                  text: "Workflow State",
                  link: "/erpnext/workflow-state",
                },
                {
                  text: "Workflow Actions",
                  link: "/erpnext/workflow-actions",
                },
                {
                  text: "Workflow Transition Tasks",
                  link: "/erpnext/workflow-transition-tasks",
                },
                {
                  text: "Authorization Rule",
                  link: "/erpnext/authorization-rule",
                },
                {
                  text: "Help Articles",
                  items: [
                    {
                      text: "Easy steps to setup Workflow",
                      link: "/erpnext/easy-steps-to-setup-workflow",
                    },
                    {
                      text: "Setting Workflows on Masters",
                      link: "/erpnext/setting-workflows-on-masters",
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
            {
              text: "Automation",
              items: [
                {
                  text: "Assignment Rule",
                  link: "/erpnext/assignment-rule",
                },
                {
                  text: "Auto Repeat",
                  link: "/erpnext/auto-repeat",
                },
                {
                  text: "Milestone Tracking",
                  link: "/erpnext/milestone-tracker",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Integrations",
          link: "/erpnext/erpnext-integrations/",
          items: [
            {
              text: "Integration Categories",
              link: "/erpnext/erpnext_integration",
            },
            {
              text: "Google Settings",
              link: "/erpnext/google_settings",
            },
            {
              text: "Setting up LDAP",
              link: "/erpnext/ldap-integration",
            },
            {
              text: "Google Calendar Integration",
              link: "/erpnext/google_calendar",
            },
            {
              text: "Setting up fairlogin",
              link: "/erpnext/fairlogin-integration",
            },
            {
              text: "Google Contacts Integration",
              link: "/erpnext/google_contacts",
            },
            {
              text: "Setting Up Dropbox Backups",
              link: "/erpnext/dropbox-backup",
            },
            {
              text: "Google Maps Integration",
              link: "/erpnext/google_maps",
            },
            {
              text: "Google Drive Integration",
              link: "/erpnext/google_drive",
            },
            {
              text: "Upload Backups to Amazon S3",
              link: "/erpnext/aws_s3",
            },
            {
              text: "Plaid Integration",
              link: "/erpnext/plaid_integration",
            },
            {
              text: "Shopify Integration",
              link: "/erpnext/shopify_integration",
            },
            {
              text: "WooCommerce Integration",
              link: "/erpnext/woocommerce_integration",
            },
            {
              text: "Amazon SP-API Integration",
              link: "/erpnext/amazon_integration",
            },
            {
              text: "ERPNext Integrations",
              link: "/erpnext/v14/user/manual/en/erpnext_integration",
            },
            {
              text: "Unicommerce Integration",
              link: "/erpnext/unicommerce_integration",
            },
            {
              text: "Zenoti Integration",
              link: "/erpnext/zenoti_integration",
            },
            {
              text: "ERPNext Shipping",
              link: "/erpnext/erpnext_shipping",
            },
            {
              text: "Setting up PayPal",
              link: "/erpnext/paypal-integration",
            },
            {
              text: "RazorPay Integration",
              link: "/erpnext/razorpay-integration",
            },
            {
              text: "Setting up GoCardless",
              link: "/erpnext/gocardless-integration",
            },
            {
              text: "Setting up Stripe",
              link: "/erpnext/stripe-integration",
            },
            {
              text: "Setting up Braintree",
              link: "/erpnext/braintree-integration",
            },
            {
              text: "Paytm Integration",
              link: "/erpnext/paytm-integration",
            },
            {
              text: "M-Pesa Integration",
              link: "/erpnext/mpesa-integration",
            },
            {
              text: "Exotel Integration",
              link: "/erpnext/exotel_integration",
            },
          ],
          collapsed: true,
        },
        {
          text: "Regional",
          link: "/erpnext/regional/",
          items: [
            {
              text: "Translations",
              link: "/erpnext/translations",
            },
            {
              text: "Requirements for France",
              link: "/erpnext/france",
            },
            {
              text: "Sales and Payment Transactions",
              link: "/erpnext/local_overrides",
            },
            {
              text: "Le Fichier des Écritures Comptables [FEC]",
              link: "/erpnext/fichier_des_ecritures_comptables",
            },
            {
              text: "India Compliance App",
              link: "/erpnext/india",
            },
            {
              text: "Lower Deduction Certificate",
              link: "/erpnext/lower-deduction-certificate",
            },
            {
              text: "TDS Setup for India",
              link: "/erpnext/tds-setup-india",
            },
            {
              text: "Requirements for Italy",
              link: "/erpnext/italy",
            },
            {
              text: "Importing e-Invoice from Supplier",
              link: "/erpnext/import-e-invoice",
            },
            {
              text: "Taxjar Integration",
              link: "/erpnext/taxjar_integration",
            },
            {
              text: "Requirements for United Arab Emirates",
              link: "/erpnext/united_arab_emirates",
            },
            {
              text: "UAE Regional Fields",
              link: "/erpnext/UAE-regional-fields",
            },
            {
              text: "UAE VAT 201 Report in ERPNext",
              link: "/erpnext/uae-vat-201-report",
            },
            {
              text: "VAT/EXCISE Tax Implementation for UAE/KSA",
              link: "/erpnext/uae-vat-setup",
            },
            {
              text: "Requirements for South Africa",
              link: "/erpnext/south_africa",
            },
            {
              text: "VAT Audit Report",
              link: "/erpnext/vat_audit_report",
            },
            {
              text: "KSA VAT Management and Reporting",
              link: "/erpnext/simplified_ksa_vat_management_and_reporting",
            },
            {
              text: "Regional Chart of Accounts",
              link: "/erpnext/regional/regional-chart-of-accounts",
            },
          ],
          collapsed: true,
        },
        {
          text: "E-commerce",
          link: "/erpnext/e-commerce/",
          items: [
            {
              text: "Set Up E-commerce",
              link: "/erpnext/set_up_e_commerce",
            },
            {
              text: "E Commerce Settings",
              link: "/erpnext/e_commerce_settings",
            },
            {
              text: "Website Item",
              link: "/erpnext/website_item",
            },
            {
              text: "Product Listing",
              link: "/erpnext/product-listing",
            },
            {
              text: "Item Group-wise Product Listing",
              link: "/erpnext/item_group_wise_product_listing",
            },
            {
              text: "Shopping Cart",
              link: "/erpnext/shopping-cart",
            },
            {
              text: "Shop by Category",
              link: "/erpnext/shop_by_category",
            },
            {
              text: "Coupon Code",
              link: "/erpnext/coupon-code",
            },
            {
              text: "Wishlist",
              link: "/erpnext/wishlist",
            },
            {
              text: "Reviews and Ratings",
              link: "/erpnext/reviews_and_rating",
            },
            {
              text: "E-commerce Search",
              link: "/erpnext/e_commerce_search",
            },
            {
              text: "Installing RediSearch to enable fast E-commerce Search",
              link: "/erpnext/installing_redisearch_to_enable_super_fast_e_commerce_search",
            },
            {
              text: "Store Landing Page",
              link: "/erpnext/store-landing-page",
            },
          ],
          collapsed: true,
        },
        {
          text: "Website",
          link: "/erpnext/website/",
          items: [
            {
              text: "Website Theme",
              link: "/erpnext/website-theme",
            },
            {
              text: "Website Settings",
              link: "/erpnext/website-settings",
            },
            {
              text: "Homepage",
              link: "/erpnext/homepage",
            },
            {
              text: "Website Components",
              link: "/erpnext/website-components",
            },
            {
              text: "Web Page",
              link: "/erpnext/web-page",
            },
            {
              text: "Web Page Builder",
              link: "/erpnext/web-page-builder",
            },
            {
              text: "Web Forms",
              link: "/erpnext/web-form",
            },
            {
              text: "Website Route Meta",
              link: "/erpnext/website-route-meta",
            },
            {
              text: "Blogs",
              link: "/erpnext/blogs",
            },
            {
              text: "Blog Post",
              link: "/erpnext/blog-post",
            },
            {
              text: "Portal Login",
              link: "/erpnext/portal-login",
            },
            {
              text: "Help Articles",
              items: [
                {
                  text: "Disable Signup on ERPNext Website",
                  link: "/erpnext/disable-signup",
                },
                {
                  text: "Website Home Page",
                  link: "/erpnext/website-home-page",
                },
                {
                  text: "Website Banner Resizing",
                  link: "/erpnext/website-banner",
                },
                {
                  text: "3 Step SEO for your ERPNext Website",
                  link: "/erpnext/how-to-setup-seo-for-your-website-on-erpnext",
                },
                {
                  text: "2 Step 301 Redirect in your ERPNext Website",
                  link: "/erpnext/2-step-301-redirect-in-your-erpnext-website",
                },
                {
                  text: "Feedback Request Using a Web Form",
                  link: "/erpnext/feedback-request-using-web-form",
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          text: "Help Articles",
          link: "/erpnext/help-articles",
        },
      ],
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/frappe/erpnext",
      },
    ],
  },
});
