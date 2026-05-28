---
title: "Overview"
---

# Overview

:::tip[‎ Why use accounting in ERPNext?]
ERPNext integrates all your financial data originating from various business functions & translate them into meaningful insights, enabling organisations to take informed decisions based on accurate financial reports.
:::

‎

Accounting module is the core financial engine, which follows double-entry bookkeeping system to manage financial data. It acts as a single source of financial truth which is well integrated across core modules at different stages of Procurement, Sales, Manufacturing, Contracting, which delivers unified financial view of the whole organisation.

‎

**Core modules that integrate with accounting are:**

- Buying, Selling, Stock, Manufacturing, Subcontracting, Assets, Projects

‎

## **‎Feature Suite**

---

### Multi-Company Setup

Manage accounting for multiple companies within the same system, while ensuring company-wise accounting & reporting remains separate.

- Set default company for ease-of-access
- Transaction can be mapped to a specific company during entry

---

### Chart of Accounts

At the very core you needs a structured chart of accounts which can encompass all the financial pieces of your business.

- Parents Groups & Child Accounts
- Account Types
- Tree View

---

### Sales & Purchase

Manage purchase, sales & service invoices, where respective accounting entries are posted automatically based on the transaction lifecycle which originates from core modules that are Buying, Selling, Stock, Subcontracting.

- Purchase & Sales Invoices
- Pricing Rule based on Customers, Supplier & Groups
- Shipping Rule Charges based on conditions
- Point of Sales

---

### Assets, Stock & Manufacturing

Although these components belong to their own separate module, its lifecycle have an impact on books of accounts when certain transactions takes place:

- **Asset-related activities** such as purchase, capitalisation, depreciation, and value adjustments automatically generate corresponding accounting entries.
- **Stock movements and manufacturing** processes create appropriate accounting entries, enabling accurate valuation and detailed stock reporting.

---

### Ledgers

Manage General Ledger by creating Journal Entries to record accounting transactions & adjustments.

- ERPNext takes care of generating Journal Entries for transactions which follows a lifecycle.
- Adjustments occurring beyond the standard flow can be recorded with Journal Entries.
- General Ledger shows all the accounting transactions & its impact.

---

### Statutory Compliances & Taxes

Manage taxes & statutory compliance reporting specifically tailored for your region/country. Every region has a dedicated Localisation App which introduces fields, reports, integrations helping in seamless filing of tax & compliance returns.

- Indirect Taxes on Purchases & Sales
- Apply Tax Withholding
- E-Invoicing
- [See Regional Localisation Apps](/erpnext/regional)

---

### Multi-Currency Accounting

Manage multiple currencies for customers, suppliers, bank accounts, while having a different base currency for your company.

- Record transactions in different currency, while having accounting entries in base currency.
- Fetch exchange rates & perform revaluations while recording gain/loss on fluctuations.

---

### Accounts Receivables & Payables

Keep a track of receivables from customers & payables to suppliers to better manage cash flow.

- Track ageing reports for Receivables & Payables
- Ageing can be based on Due Date, Posting Date, Invoice Date
- Report includes voucher reference through which the payable/receivable amount originates

---

### Advances Management

Manage advance payments across customers, suppliers, employees.

- Record advance payment entries & reconcile them to calculate net payable/receivable.
- Adjust advance payments during invoice process.

---

### Payments

Manage inward & outward payments related to supplier & customers

- Send reminders with payment links to Customers
- Raise Payment Request to release payment to a Supplier
- Perform reconciliations to generate Payment Entry

---

### Banking

Manage banking operations & reconciliations seamlessly with the option to manage value added services related to banking.

- Perform deposits, withdrawals & reconcile them against vouchers.
- Issue or receive bank guarantees against purchases & sales, respectively.
- Create Invoice Discounting records against sales invoices yet to be settled.

---

### Subscriptions

Manage recurring plans and automated invoicing for services that occur on a recurring basis.

- **Customer Subscriptions:** Bill customers for services delivered at regular intervals.
- **Vendor Subscriptions:** Track and manage recurring services procured from vendors on a fixed frequency.

---

### Budgeting

Manage spending by allocating budgets to any accounting segment, identify & restrict over-spending at different stages of purchase cycle.

- Allocate budgets for Month, Quarter, Half Year, Year
- Budget Distribution can be equal, percentage based or ad-hoc
- Configure threshold calculation logic for flexibility

---

### Deferred Accounting

Manage income & expenses incurred but not yet accrued.

- Configure Items to be processed for deferred accounting.
- Process deferred accounting automatically or manually based on setup
- Generate reports for transaction values that are deferred.

---

### Shareholding Management

Manage equity holding for your organisation, maintain share transfers & view reports.

- Shareholder Masters
- Share Issue, Purchase (Buyback), Transfer
- Reports of Share Balance & Share Ledger

---

### Accounting Segments

Segmentation of company into different business verticals, divisions, regions, markets and generating independent financial reports for profitability & analysis based on these segments can be done with the help of:

- **Using Default Accounting Segments:** Cost Center, Project
- **Create Custom Segments using:** Accounting Dimension

---

### Closing of Books

Manage period closures by transferring balances & restricting changes for already closed period.

- **Accounting Period:** Block creation of transactions after the books are closed for a specific period, with an option to allow specific user role to bypass restrictions.
- **Period Closing Voucher:** Transfer Profit & Loss at the end of year to the specified ledger account.

---

### Financial Reports & Profitability Analysis

Generate reports to analyse the financial position of the organisation with the help of various reports.

- Financial Ratios
- Profitability Analysis
- Purchase & Sales Trends
- Consolidated Financial Statements & Trial Balance
- Balance Sheet, Profit and Loss, & Cash Flow Statement

---

## **Advanced Sales Features**

---

### Sales Commission

Sales Partner can be mapped to transactions, based on which commission reports can be generated for pay-outs.

- Manage targets & generate variance reports
- Setup rate of commission for Sales Partner.
- Assign Sales Partners to a specific customer.

---

### Sales Interest / Dunning

Interest, fees & charges can be collected from customers who fail to settle Sales Invoice within due dates.

- Interest is calculated on the overdue amount & delay days.
- Schedule of charges can be configured based on needs

---

### Loyalty Program

Reward your loyal customers to retain them by issuing rewards points, which can be redeemed against future purchases.

- Setup multiple-tiers based on total amount spent by customer (eg. Gold, Silver, Bronze)
- Define, for how much amount spent, a single loyalty point must be credited
- Configure loyalty points conversion amount in base currency

---

### Promotional Schemes

Extend discounts to customers for a specified period as a part of campaign, or sale period.

- Promotion can be applied to Item, Item Group, Brand or Transaction
- Select whether scheme is applicable to buying, selling or both
- Choose whether scheme leads to discount, free product or both
