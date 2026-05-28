---
title: "Session Defaults"
---

# Session Defaults

**Session Defaults allow users to configurable default values for certain parameters during user sessions.**

Let's assume that you have a multi company setup spanning across different countries then you have to set the 'Company' , 'Country' and 'Currency' fields every time while creating new transactions. This is a very time-consuming process when you have to deal with multiple Sales Orders daily. Hence, instead of putting the value manually, the value set in the Session Defaults gets displayed automatically by default.

1. How to Create Session Defaults

---

### 1.1 Set up the Session Default Settings

1. Go to Session Default Settings. There you can see a table for Session Defaults.
2. Click on 'Add Row'.
3. Select the DocType for which you want to set Session Defaults.
4. Save.

![](/files/image735ed4.png)

### 1.2 Set up the Session Default Values

1. Click on the 'Sidebar' and you will find an option 'Session Defaults'. Click on it.

![](/files/imageab1921.png)

2. A 'Session Defaults' prompt will appear. Set the default values for the respective fields and Save.

![](/files/image566433.png)

3. After saving, the default values will be set everywhere.

You can open a new Sales Order and check the company and currency fields as they are set to the default Company.

![](/files/imagecaa1a7.png)

Once you open any report, the default company will be set respectively.

![](/files/image620b34.png)

### 2. Features

---

### 2.1 Defaults cleared on logout

The default values are set for that particular user for the ongoing session. Once logged out, these default values are cleared.

### 2.2 'Settings' button visibility

The Settings button is only visible to the System Manager or to a person having permission to access 'Session Default Settings'. This button navigates you to Session Default Settings where you can add or remove the document types for which you want to set Session Defaults.

![](/files/image88662a.png)

### 3. Related Topics

1. [Global Defaults](/erpnext/global-defaults)
2. [System Settings](/erpnext/system-settings)
