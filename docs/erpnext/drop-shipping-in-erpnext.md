---
title: "Drop Ship"
---

# Drop Ship

**Drop shipping** is a supply chain management method in which the retailer does not keep goods in stock but instead transfers the customer orders and shipment details to either the manufacturer, another retailer, or a wholesaler, who then ships the goods directly to the customer.

Drop shipping may also occur when a small retailer (that typically sells in small quantities to the general public) receives a single large order for a product. The retailer may arrange for the goods to be shipped directly to the customer from the manufacturer or distributor. Drop shipping is common with expensive products. No inventory is maintained by the retailer in any case, simply acting as a _middleman_. In this article, we will see how ERPNext provides a seamless drop-shipping experience.

Consider a business dealing with Computer Monitors. Now, the retailer has received an order from a customer, ABC Inc. for 1000 DELL 24Inch Monitors.

## **Drop Shipping In Action:**

### **Item Configuration**

- Setup Item with mandatory information keeping Maintain Stock disabled since there will be no stocking of this Item.
- Next, **enable** "Delivered By Supplier (Drop Ship)
- Set the Supplier with whom the Purchase Order will be raised for this orders fulfillment.

![](/files/imagea168ed.png)

### **Sales Cycle:**

- Create Sales Order with Customer, Item, Qty, Rate, Taxes and so on.

![](/files/image03c50d.png)

### **Order Fulfillment:**

- From the Sales Order Document itself, you can create the Purchase Order for this shipment, track delivery, and bill the customer accordingly.

![](/files/mSsoueP.gif)

:::note
Starting from v16, users can now track partial deliveries of drop shipped items.
:::

Prior to v16, users could only mark the entire Purchase Order as Delivered. Now from v16 onwards, if the Purchase Order has any drop shipped item, users will see see a new option called "Deliver (Dropship)" after submission. Clicking this button will open a dialog box where they can enter the quantity of the dropshipped item delivered by the Supplier to the Customer.

Users can also enter a negative quantity in the "Qty Change" field in case the quantity entered before was incorrect due to human error or customization. This button will be visible until the Purchase Order reaches the "Completed" state or is **not** manually closed.

![](/files/CleanShot 2026-05-11 at 13.09.41@2x.png)

![](/files/CleanShot 2026-05-11 at 13.10.47@2x.png)
