/*=======================================================PROCESS VALIDATION===============================================================*/
                                        /*Visible*/
====================================================================================================
//Condition 1:Default-No
1.Close the order (btn)
2.Cancel the order (btn)
3.Geosite (btn)
4.Site address(textarea)
//Condition 2:Prototype order-VENDU/SOLD [Access-CURRENT ACTOR]
1.Open order(checkbox)
2.N0 Customer order(textbox) /* order creation*/
3.Customer order(file)
4.Incotrems(dropdown)
5.Place(dropdown)
6.Allocation of turnover(dropdown)
//Condition 3:Prototype order-VENDU/SOLD and Site -la verriere and prototype-P0
1.Frittage
//Condition 4:Prototype order-VENDU/SOLD and Site-La suze
1.IntraLE
//Condition 5: Site-Nogent
1.E52
//Condition 6:Prototype order-VENDU/SOLD
1.Total order amount(textbox)
2.FO trade(dropdown)
3.Customer order N0 (textbox) /*component creation*/
//Condition 4:Prototype order-VENDU/SOLD and not IntraLE
1.ADV(dropdown)
//Condition 5:when the user click on a demote or refuse
1.Comment(textarea) /*component details*/
//Condition 6:Direct delivery to the customer-NO [Access-CURRENT ACTOR]
1.Customer(dropdown)
2.Labo address or other(textarea)
//Condition 7:Validation Process-YES [Access-CURRENT ACTOR]
1.Process deliverable(file)
2.YES (I specified process requirements) (checkbox)
3.Comment (textarea) /*Process validation*/
//Condition 8:Default-Yes [Access-CURRENT ACTOR]
1.Quality deliverable(file)
2.Comment(textarea)
                                         /*Editable*/
=====================================================================================================
//Condition 1:Default-NO
    
1.Close the order(btn)
2.Cancel the order(btn)
3.Site/Workshop Prototype(dropdown)
4.Geosite(textbox)
5.N0 prototype order(textbox)
6.Proto type(dropdown)
7.Frittage(checkbox)
8.E52(checkbox)
9.IntraLE(checkbox)
10.Type of the prototype order(dropdown)
11.Date of the order(datetime)
12.Customer order(file) //[Access-CURRENT ACTOR]
13.Branch code(textbox)
14.Site address(textarea)
15.Plateform(dropdown) //[Access-CURRENT ACTOR]
16.Total order amount(textbox)
17.Order status(textbox)
18.Requester 
19.MEP Study(dropdown)
20.Quality(dropdown)
21.Proto workshop(dropdown)
22.Control management(dropdown)
23.FO trade(dropdown)
24.ADV(dropdown)
25.Project manager(dropdown)
26.Prototype order N0(textbox) /*Component Details*/
27.Order type(textbox)
28.Customer Order N0(textbox) /*Component Details*/
29.Customer reference(textbox)
30.Product type(textbox)
31.Component id(textbox)
32.Component status(textbox)
33.Customer reference(textbox) /*Component Description*/
34.Product specification(tetxarea)
35.Product type(dropdown)
36.Unit selling price(textbox)
37.Total quatity(textbox)
38.Total amount(textbox)
39.Projet manager(textbox) /*Technical Definition*/
40.R&D mananger(dropdown)
41.Project phase(dropdwon)
42.Valeo reference(textbox)
43.Technology(dropdown)
44.WBS/OI code(textbox)
45.Supported by(dropdown)
46.List of prototypists(textarea)
47.Component Projected Costs(label)
48.Estimated amount of workshop(textbox)
49.Estimated unit internal cost(textbox)
50.Estimated unit external cost(textbox)
51.Estimated total cost components(textbox)
52.Hourly rate(textbox)
53.Fixed costs(textbox)
54.Estimated time unit of components(hour) (textbox)
55.Estimated time total of components(hour) (textbox)
56.Total cost(textbox)
57.YES(I specified quality requirements)(checkbox)
58.Customer qty(textbox)   /*Execution*/
59.Qty lab test plan qty (textbox)
60.Qty produced (textbox)
61.Qty test report(textbox)
62.Qty approv.compilant quality(textbox)
63.Qty approv. not compilant quality(textbox)
64.Delivered quantity(textbox)
65.Invoiced qty(textbox)
66.Creation(btn)          /*Parts Production*/
67.Creation(btn)          /*Quality Approval*/
68.Creation(btn)         /*Validation test report*/
69.Creation(btn)        /* Delivery Billing*/
//Condition 2:Prototype order-NONVENDU/NOT SOLD [Access-CURRENT ACTOR]
1.PCC
//Condition 3:Prototype order-VENDU/SOLD [Access-CURRENT ACTOR]
1.Open order(checkbox)
2.N0 customer order(textbox) /*order details*/
3.Incoterms(dropdown)
4.Place(dropdown)
5.Allocation of turnover(dropdown)
//Condition 4:only if the user click on a demote or refuse
1.Comment (textarea)/*Component Details*/
//Condition 5:Direct delivery to the customer-NO [Access-CURRENT ACTOR]
1.Customer(dropdown)
2.Labo address or other(textarea)
//Condition 6:Validation Process -YES [Access-CURRENT ACTOR]
1.Process deliverable(file)
2.YES(I specified process requirements)
3.Comment(textarea) /*Process validation*/
                                           /*Mandatory*/
===========================================================================================================
    
//Condition 1:Default-YES
    
1.Site/workshop prototype(dropdown)
2.N0 prototype order(textbox) /*order detail*/
3.Proto type(dropdown)
4.Type of the prototype order(dropdown)
5.Customer name(dropdown)
6.Plateform(dropdown) //[Access-CURRENT ACTOR]
7.MEP Study(dropdown)
8.Quality(dropdown)
9.Proto workshop(dropdown)
10.Control management(dropdown)
11.Project manager(dropdown)
12.Component id(textbox)
13.Customer reference(textbox) /*Component description*/
14.Product specifictaion(textarea)
15.Product type(dropdown)
16.Direct delivery to the customer(radiobuttons)
17.R&D manager(dropdown)
18.Project phase(dropdown)
19.Valeo reference(textbox)
20.Technology(dropdown)
21.WBS/OI code(textbox)
22.Estimated unit internal cost(textbox)
23.Estimated unit external cost(textbox)
24.Hourly rate(textbox)
25.Fixed costs(textbox)
26.Estimated time unit of components(hour)(textbox)
//Condition 2:Prototype order-VENDU/SOLD
1.N0 customer order(textbox)           // [Access-CURRENT ACTOR]
2.Customer order(file)                // [Access-CURRENT ACTOR]
3.Allocation of turnover(dropdown)   //[Access-CURRENT ACTOR]
4.FO trade(dropdown)
5.Unit selling price(textbox)
//Condition 3:Prototype order-VENDU/SOLD and not IntraLE
1.ADV(dropdown)
//Condition 4:Only if the user click on a demote or refuse
1.Comment(textarea) /*Componet Details*/
//Condition 5:Direct delivery to the customer-NO
1.Customer(dropdown) /*Component Description*/
2.Labo address or other(textarea) /*Component Description*/
//Condition 6:Validation Process-YES
1.YES(I specified process requirements)
