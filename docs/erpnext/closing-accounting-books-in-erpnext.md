---
title: "Closing Accounting Books in ERPNext in v15"
---

# Closing Accounting Books in ERPNext in v15

The financial year has ended and it's time to start the books fresh. Closing the books is an essential task for every business owner because it helps gauge the business's overall performance, highlights balances that will carry forward to the next year, removes inconsistencies from the books, and creates an outline for the next year's financial reports.

Here's the year-end guide to close your books in ERPNext.

- Review your Receivables and Payables
- Reconcile your Accounts
- Post a Period Closing Voucher
- Set your new Fiscal Year as default

### **Review your Receivables and Payables**

Verify the list of orders against which invoices are yet to be made, check the list of outstanding invoices, and ensure to remunerate them, this will give you a better idea of what you owe and own. Check for the oldest unpaid invoices present, it may cause a hidden uncertainty in your books. Once done, send out outstanding reports against your clients to ensure the balances are accurate.

### **Reconcile your accounts**

- Bank Reconciliation:  
  The process to match your transactions entered in ERPNext from your bank statement also helps to record other charges incurred not recorded in the books.  
  Use the [Update Bank Transaction Dates](/erpnext/bank-reconciliation) tool to match balances as per your bank statement.
  > Home > Accounting > Banking and Payments > Update Bank Transaction Date
- Invoice Reconciliation:  
  The process to allocate your Payment Entries against your _Customers and Suppliers_ to get accurate _Receivables and Payables_.  
  Use the [Payment Reconciliation](/erpnext/payment-reconciliation) tool to link your unallocated payments against pending invoices.
  > Home > Accounting > Banking and Payments > Match Payments with Invoices
- Stock Reconciliation: This helps you keep the physical stock and book stock in sync.  
  Use [Stock Reconciliation](/erpnext/stock-reconciliation) to keep your stock up-to-date.
  > Home > Stock > Tools > Stock Reconciliation

To audit your books, your accountant will need the following reports:

- Financial Statements: _Balance Sheet, Profit and Loss Statement, and Cash Flow Statement._
- Bank Statements and Loans.
- Asset Depreciation and Balances.

### **Post a** [**Period Closing Voucher**](/erpnext/period-closing-voucher)

This step will ensure all your _incomes and expenses_ are balanced and you start your books from zero for the next financial year.

It resets your _income and expense_ accounts and posts it to the account selected while creating it as seen in the General Ledger below(transferred to Reserves and Surplus).

![](https://lh7-us.googleusercontent.com/_GFl2jBcKclqGOhBUV47rFQQfQBp7aYfOZVPZFRqrFT4re1msvTg8uJOd9g0rE3HP6WVXaKmJ39EqvJAu8D9nWa7Aq52pfgCa3AGihh34sjvQQdTX8cGdj8KUV_yntFXg10xKyGUHScu2nNjMRuRol8)

Once your accountant has made all the adjustment entries to balance your accounts, you can freeze your accounts.

To freeze, you can:

- Go to Account Settings, and enter the date till when you want to freeze your account.  
  ![](https://lh7-us.googleusercontent.com/E28y8MVWwlvTkQuyF91qB0NpfJJ2HLufIPHDJEFBGJiwQeK9c0x3-iWdAyRTqCnRJp59GBYfAVL0zz0zf31_cBsNZ11WS3J9XtwWMQD2IZJLCxbe9c5vSBpVOYRz7GFWEObfe1oeVVYZoig_s8aQPrc)
- Create an [Accounting Period](/erpnext/accounting-period) to avoid the creation of any financial transactions for the period.  
  ![](https://lh7-us.googleusercontent.com/DVxYkdboO1UTc7vD3ac1KOuQaZT-Rm7muApbBsQb7nkGI2fajqv76HLTYzwoRfXxufvecrREER0iOTHHzTHrIqqD7j5rInZ_PKYlOFyy_MoiiFl5YbiZvF1Vzm8cPuolnlwGdoy0AChfSZEYSITYais)  
  This configuration will stop the submission of Purchase Invoices for the period mentioned.

### **Change Fiscal Year**

ERPNext creates [Fiscal Year](/erpnext/fiscal-year) at the end of every financial year.

> Home > Accounting > Setup > Fiscal Year

![](https://lh7-us.googleusercontent.com/yf4MA3WkmwyiItfVkl5xff-HM2f57OlEhmNMKeWTleyYfiFyJZ8nir7PAgAJBBwcWLQGEzlPn5QH_l3xxbgKCOUPV_KAGQEo0a_dSCZQ_VRtgFwm3cVlDWrXvLHL2DROtGzCwGSL6NsgLnFqkT9NQWw)

We hope this will help you in closing your books and give you a fresh start for the new financial year.
