---
title: "Multiple finished goods with single raw material"
---

# Multiple finished goods with single raw material

Many manufacturing industries use one raw material (RM) to produce multiple finished goods. This business use case is common in chemical manufacturing. How can you map this use case in ERPNext? Let's take an example from the oil manufacturing industry, where multiple products such as petrol, gas, diesel, and kerosene are produced from crude oil.

- First create an Item master where crude oil will be RM & Petrol, Gas, Diesel, Kerosene etc. will be your FG. Here every product can also have different UOM.
- After creation of item master create a BOM for any of the FG you are going to produce from Crude oil (RM). Here I have created BOM of Petrol for 25 litres where I am going to use Crude oil (RM) of qty. 100 litres. Rest of the FG like Gas, Diesel & Kerosene I have added in Scrap section.

![](/files/1VHaiPf.png)  
![](/files/mg68Dbr.png)

- While creating a BOM you can add operations as well & run your production cycle (Work order) accordingly.
- After completion of work-order at the time of Back-flush entry your Raw material will get consumed & you will have multiple finish goods.
