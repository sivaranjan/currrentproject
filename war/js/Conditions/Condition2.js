/**
 * 
 */

/*===================================================COMPONENT CREATION======================================================================*/

                                                /*Visible*/

==============================================================================================================

//Condition 1: Default-No
1.Close the order (btn)
2.Cancel the order (btn)
3.Geosite (textbox)
4.Site address (textarea)
5.Refuse (btn)
6.Demote to previous step (btn)
7.Demote to requester (btn)
8.Comment (textarea)

//Condition 2: Prototype order-VENDU/SOLD
1.Total order amount (textbox)
2.Customer Order N0 (textbox)
3.Unit selling price (textbox)            unitsellingpriceDiv            
4.Direct delivery to the customer (radio buttons)       directDeliveryDiv
5.Total amount (textbox)  totalamtDiv

//Condition 2: Prototype order-VENDU/SOLD [Access-REQUESTER]
1.Open order (checkbox)
2.N0 Customer order (textbox) /*order creation*/
3.Customer Order (file)
4.Incoterms (dropdown)
5.Place (dropdown)
6.FO trade (dropdown)
7.Unit selling price (textbox)   
8.Allocation of turnover (dropdown)
9.Direct delivery to the customer (radio buttons)

//Condition 3: Prototype order-VENDU/SOLD and Direct delivery to the customer-NO [Access-REQUESTER]

1.Customer (dropdown)
2.Labo address or other (textarea)

//Condition 4: Prototype -P2 [Access-REQUESTER]

1.PCC (checkbox)

//Condition 5: Site-La verrirere and prototype-P0 and Prototype order-VENDU/SOLD [Access-REQUESTER]

1.Frittage (checkbox)

//Condition 6:Site-Nogent [Access-REQUESTER]

1.E52 (checkbox)

//Condition 5: Site-La Suze and Prototype order-VENDU/SOLD [Access-REQUESTER]

1.IntraLE (checkbox)

//Condition 6: Prototype order-VENDU/SOLD and not IntraLE[Access-REQUESTER]

1.ADV (dropdown)

//Condition 7: Validation Process -YES  [Access-CURRENT ACTOR]

1.Process deliverable (file)
2.YES (I specified process requirements) (checkbox)
3.Comment (textarea)          /* Process Validation*/

 

 //Condition 8:Default-Yes [Access-CURRENTN ACTOR]

1.Quality deliverable (file)
2.Comment (textarea)         

/*Qualities deliverables */

                                                /*Editable*/

=================================================================================================================

//Condition 1:Default-No

1.Close the order (btn)
2.Cancel the order (btn)
3.Site/Workshop Prototype (dropdown)
4.Geosite (textbox)
5.N0 prototype order (textbox) /*order creation*/
6.Proto type (dropdown ) /*order creation*/
7.Type of the prototype order(dropdown)
8.Date of the order (datetime) 
9.Branch Code (textbox)
10.Site address (textarea)
11.Total order amount (textbox)
12.Order status (textbox)
13.Requester
14.MEP Study (dropdown)
15.Quality (dropdown)
16.Proto workshop (dropdown)
17.Control Management (dropdown)
18.FO trade (dropdown)
19.ADV (dropdown)
20.Project manager(dropdown)
21.Prototype order N0 (textbox) /* component description*/
22.Order type (textbox)
23.Customer order N0 (textbox)
24.Customer reference (texbox)  /* component details */
25.Product type (textbox)      /* component details */ 
26.Component id (textbox)
27.Component status (textbox)
28.Total quantity (textbox)
29.Total amount (textbox)
30.Comment (textrarea) /*Technical definition */
31.Supported by (dropdown)
32.List of prototypists (textarea)
33.Component Projected Costs (label)
34.Estimated amount of workshop (textbox)
35.Estimated unit internal cost (textbox)
36.Estimated unit external cost (textbox)
37.Estimated total cost components (textbox)
38.Hourly rate (textbox)
39.Fixed costs (textbox)
40.Estimated time unit of components(hour) (textbox)
41.Estimated time total of components(hour) (textbox)
42.Total Cost (textbox)
43.YES (I specified quality requirements) (checkbox)
44.Customer qty(textbox)   /*Execution*/
45.Qty lab test plan qty (textbox)
46.Qty produced (textbox)
47.Qty test report(textbox)
48.Qty approv.compilant quality(textbox)
49.Qty approv. not compilant quality(textbox)
50.Delivered quantity(textbox)
51.Invoiced qty(textbox)
52.Creation(btn)          /*Parts Production*/
53.Creation(btn)          /*Quality Approval*/
54.Creation(btn)         /*Validation test report*/
55.Creation(btn)        /* Delivery Billing*/ 

//Condition 2:Prototype order-VENDU/SOLD

1.Unit selling price (textbox)
2.Direct delivery to the customer (radio buttons) 
3.Open order (checkbox)
4.N0 customer order (textbox)
5.Customer order (file)
6.Incoterms (dropdown)
7.Place (dropdown)
8.Allocation of turnover (dropdown)

//Condition 3: Prototype -P2

1.PCC (checkbox)

//Condition 4: Site-La verrirere and prototype-P0 and Prototype order-VENDU/SOLD

1.Frittage (checkbox)

//Condition 5:Site-Nogent

1.E52 (checkbox)

//Condition 6: Site-La Suze and Prototype order-VENDU/SOLD [Access-REQUESTER]

1.IntraLE (checkbox)

//Condition 4: Prototype order-VENDU/SOLD and Direct delivery to the customer-NO [Access-REQUESTER]

1.Customer (dropdown)
2.Labo address or other (textarea)

//condition 5: Validation Process -YES  [Access-CURRENT ACTOR]

1.Process deliverable (file)
2.YES (I specified process requirements) (checkbox)
3.Comment (textarea)         /* Process Validation*/

                                                /*Mandatory*/

==================================================================================================================

//Condition 1:Default-Yes

1.N0 prototype order (textbox)
2.Component id
3.Estimated time unit of components(hour) (textbox)
4.Hourly rate (textbox)
5.Fixed costs (textbox)
6.Estimated unit internal cost (textbox)
7.Estimated unit external cost (textbox)

//Condition 2:Default-Yes [Access-REQUESTER]

1.Site/workshop prototype (dropdown)
2.Proto type (dropdown)
3.Type of the prototype order (dropdown)
4.Customer name (dropdown)
5.Platform (dropdown)
6.MEP study(dropdown)
7.Quality (dropdown)
8.Proto workshop (dropdown)
9.Control management (dropdown)
10.Project manager (dropdown)
11.Customer reference (textbox) /* component description*/
12.Product specification (textarea)
13.Direct delivery to the customer (radio buttons)
14.Product type (dropdown) /* component description*/

//Condition 3: Prototype order-VENDU/SOLD

1.FO trade
1.Unit selling price (textbox)

//Condition 4: Prototype order-VENDU/SOLD and not IntraLE

1.ADV

//Condition 5:Direct delivery to the customer-NO [Access-REQUESTER]

1.Customer (dropdown)
2.Labo address or other (textarea)