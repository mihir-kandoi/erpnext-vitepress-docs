---
title: "Fetch child table values using Jinja tags"
---

# Fetch child table values using Jinja tags

Jinja templating can be used to reference any field on any DocType in ERPNext. This can simply be done by calling `&#123;&#8203;&#123; doc.field_name &#125;&#8203;&#125;` on a print format, where 'doc.name' is the variable name for a certain field.

However this approach does not work for Child Tables inside a DocType. This article will help you traverse and display all rows pertaining to a child table inside any DocType.

**Pre Requisites**

We would require the variable name of the child table on the corresponding DocType. This can be viewed from the 'Customize Form' section for the required DocType. The same is illustrated below

![](/files/f7Xxz1S.png)

We will also require the variable names of all the fields inside the child table which need to be referenced. This can be obtained from the 'Customize Form' section of the corresponding child table as shown below

![](/files/tzloEh2.png)

![](/files/wPB82f0.png)

![](/files/AV0308f.png)

![](/files/CW0oEUo.png)

**Method 1. Displaying rows of a Child Table on an unordered list**

`&#123;&#8203;% for row in doc.items %&#8203;&#125;`

- Item Code: `&#123;&#8203;&#123; row.get_formatted("item_code", doc) &#125;&#8203;&#125;`

Quantity: `&#123;&#8203;&#123; row.get_formatted("qty", doc) &#125;&#8203;&#125;`

Rate: `&#123;&#8203;&#123; row.get_formatted("rate", doc) &#125;&#8203;&#125;`

Amount: `&#123;&#8203;&#123; row.get_formatted("amount", doc) &#125;&#8203;&#125;`

`&#123;&#8203;% endfor %&#8203;&#125;`

The output on a print format would be as follows

![](/files/lgLjE7u.png)

**Method 2. Displaying rows of a Child Table as a table**

| Item Code                                                | Quantity                                           | Rate                                                | Amount                                                |
| -------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------- |
| `&#123;&#8203;&#123; item.item_code &#125;&#8203;&#125;` | `&#123;&#8203;&#123; item.qty &#125;&#8203;&#125;` | `&#123;&#8203;&#123; item.rate &#125;&#8203;&#125;` | `&#123;&#8203;&#123; item.amount &#125;&#8203;&#125;` |

The output on a print format would be as follows

![](/files/GS00WlC.png)

This template can be used for reference. Any additional fields on the child table field can be fetched in a similar manner, by amending the Jinja template.
