---
title: "Freeze Accounting Entries"
---

# Introduction

After going live on ERPNext, whether it is your first ERP or accounting software or migrating from another application, then you need to ensure that recording accounting entries posting to periods earlier than your cutover date (cutover date is the first date on which ERPNext is considered the primary application for recording and processing business transactions and processes, respectively) to ensure the integrity of your data. This is controlled by the _Freeze Accounting Entries_ feature in ERPNext. Below is how to use it.

# Freezing Accounting Entries in ERPNext

To freeze accounting entries up to a certain date, follow the steps below:

1. Go to:  
   `Accounting > Accounting Msters > Accounts Settings`

1. Set Date: set date in the **Accounts Frozen Upto** field.

![Books Closed Through](/files/books-closed-through.png)

Now, the system will not allow to make any accounting entries before set date. If at all someone tries creating entries, system will show error message as below.

![Frozen Date Error](/files/error-message-in-transaction.png)

You can still allow user with certain role to create/edit entries within accounts frozen date. You can set that Role in the Account Settings itself.

![Role Allowed To Close Books](/files/role-allowed-to-close-books.png)
