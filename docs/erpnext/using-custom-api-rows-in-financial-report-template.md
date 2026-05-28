---
title: "Using Custom API Rows in Financial Report Template"
---

A row with _Data Source_ set to "Custom API" gets its values from a server-side Python function instead of account filters or a formula.

This works in templates used by "Balance Sheet", "Profit and Loss Statement", "Cash Flow", and "Custom Financial Statement".

## **When To Use It**

Use a `Custom API` row when a report line depends on custom business logic, budget data, external aggregates, or calculations that are not available through standard account filters.

If you need to combine that result with other report lines, add a later row with _Data Source_ set to "Calculated Amount".

## **How To Set It Up**

1. Open your **Financial Report Template**.
2. Add a row in the _Report Line Items_ table.
3. Set _Data Source_ to "Custom API".
4. In _Formula or Account Filter_, enter a dotted Python path such as `my_app.financial_report_api.get_budget_variance`.
5. Optional: set _Line Reference_ if later formula rows should reuse this result.
6. Optional: use _Reverse Sign_, _Hide If Zero_, _Hidden Line (Internal Use Only)_, _Include in Charts_, and _Value Type_ the same way you would on other rows.

## **How ERPNext Calls Your Function**

ERPNext calls the target function on the server and passes:

- `filters`: the current report filters, as a dict-like object
- `periods`: the generated period list for the report
- `row`: the current **Financial Report Row** document

Each item in `periods` includes values such as:

- `from_date`
- `to_date`
- `key`
- `label`

Your function can accept all three arguments, or only the ones it needs.

## **Example**

```python
from frappe.utils import flt

def get_budget_variance(filters=None, periods=None, row=None):
    filters = filters or {}
    periods = periods or []

    values = []

    for period in periods:
        # Replace this placeholder logic with your own query or calculation.
        variance = 0.0
        values.append(flt(variance))

    return values

```

## **Return Requirements**

- Return a list of numeric values.
- Return exactly one value for each period in `periods`.
- Return values in the same order as `periods`.

If the row has a _Line Reference_, later formula rows can use that code, for example `API001 + SALES001`.

## **Important Notes**

- The path must be in the format `app.module.method`.
- The target should be a module-level Python function in an installed app.
- `@frappe.whitelist()` is not required for this feature unless you also want to call the same function from `/api/method`.
- Server Scripts are not currently supported for `Custom API` rows.
- `Custom API` rows are processed before account-based and formula-based rows, so they should not depend on other template line results.
- If the function raises an error, ERPNext writes an error log entry and fills the row with zeros instead.

## **Troubleshooting**

- If you see a validation error about the API path, check that the path is written as `app.module.method`.
- If you see "Method not found", confirm that the function exists in that module and the app is installed on the site.
- If the row shows zeros, review Error Log for a `Custom API Error` entry.
- If a formula row cannot use the API result, make sure the source row has a _Line Reference_ and that the formula uses the same code exactly.
