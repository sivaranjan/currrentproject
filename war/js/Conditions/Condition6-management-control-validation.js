/**
 * 
 */
/*==================================================MANAGEMENT CONTROL VALIDATION=================================================*/
                                           /*Visible*/
====================================================================================================
//Condition 1:Default-NO
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
7.Unit selling price(textbox)
8.Direct delivery to the customer(radiobuttons)

//Condition 3:Prototype order-VENDU/SOLD
1.Total order amount(textbox)
2.FO trade(dropdown)
3.Customer order N0 (textbox) /*component creation*/
4.Total amount(textbox) /*Component creation*/

//Condition 4:Prototype order-VENDU/SOLD and Site -la verriere and prototype-P0
1.Frittage
//Condition 5:Prototype order-VENDU/SOLD and Site-La suze
1.IntraLE
//Condition 6: Site-Nogent
1.E52
//Condition 7:Prototype order-VENDU/SOLD and not IntraLE
1.ADV(dropdown)
//Condition 8:when the user click on a demote or refuse
1.Comment(textarea) /*component details*/
//Condition 9:Direct delivery to the customer -No and Prototype order -VENDU/SOLD [Access-CURRENT ACTOR]
1.Customer(dropdown)
2.Labo address or other(textarea)
//Condition 10:Validation Process-YES [Access-CURRENT ACTOR]
1.Process deliverable(file)
2.YES (I specified process requirements) (checkbox)
3.Comment (textarea) /*Process validation*/
//Condition 11:Default-Yes [Access-CURRENT ACTOR]
1.Quality deliverable(file)
2.Comment(textarea) /*Quality deliverable*/
                                                        /*Editable*/
==========================================================================================================================
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
12.Customer order(file)
13.Branch code(textbox)
14.Site address(textarea)
15.Total order amount(textbox)
16.Order status(textbox)
17.Requester 
18.MEP Study(dropdown)
19.Quality(dropdown)
20.Proto workshop(dropdown)
21.Control management(dropdown)
22.FO trade(dropdown)
23.ADV(dropdown)
24.Project manager(dropdown)
25.Prototype order N0(textbox) /*Component Details*/
26.Order type(textbox)
27.Customer Order N0(textbox) /*Component Details*/
28.Customer reference(textbox)
29.Product type(textbox)
30.Component id(textbox)
31.Component status(textbox)
32.Total quantity(textbox) /*Component description*/
33.Total amount(textbox)  /*Component description*/
34.Project manager(textbox)
35.R&D manager(textbox)    /*Technical defnition*/
36.Validation process(radiobuttons)
37.YES(I specified process requirements)(checkbox)
38.List of prototypists(textarea)
39.Component Projected Costs(label)
40.Estimated amount of workshop(textbox)
41.Estimated total cost components(textbox)
42.Estimated time total of components(hour)(textbox) 
43.Total cost(textbox)
44.YES(I specified quality requirements)(checkbox)
45.Customer qty(textbox)   /*Execution*/
46.Qty lab test plan qty (textbox)
47.Qty produced (textbox)
48.Qty test report(textbox)
49.Qty approv.compilant quality(textbox)
50.Qty approv. not compilant quality(textbox)
51.Delivered quantity(textbox)
52.Invoiced qty(textbox)
53.Creation(btn)          /*Parts Production*/
54.Creation(btn)          /*Quality Approval*/
55.Creation(btn)         /*Validation test report*/
56.Creation(btn)        /* Delivery Billing*/
//Condition 2:Prototype order-NONVENDU/NOT SOLD [Access-CURRENT ACTOR]
1.PCC(checkbox)
2.Product type(dropdown)
3.Project phase(dropdown)
4.Valeo reference(textbox)
5.Technology(dropdown)
6.BE code(textbox)
//Condition 3:Prototype order-VENDU/SOLD [Access-CURRENT ACTOR]
1.Open order(checkbox)
2.N0 customer order(textbox) /*order details*/
3.Incoterms(dropdown)
4.Place(dropdown)
5.Allocation of turnover(dropdown)
6.Direct delivery to the customer(radiobuttons)
7.Unit selling price(textbox)
//Condition 4:only if the user click on a demote or refuse
1.Comment (textarea)/*Component Details*/
//Condition 5:Direct delivery to the custmer -No and Prototype order -VENDU/SOLD [Access-CURRENT ACTOR]
1.Customer(dropdown) 
2.Labo address or other(textarea)
//Condition 6:Validation Process -YES [Access-CURRENT ACTOR]
1.Process deliverable(file)
2.Comment(textarea) /*Process validation*/
                                                       /*Mandatory*/
==========================================================================================================================
    
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
18.Project phase(dropdown)                  //[Access-CURRENT ACTOR]
19.Valeo reference(textbox)                 //[Access-CURRENT ACTOR]
20.Technology(dropdown)                     //[Access-CURRENT ACTOR]
21.WBS/OI code(textbox)
22.Estimated unit internal cost(textbox)    //[Access-CURRENT ACTOR]
23.Estimated unit external cost(textbox)   //[Access-CURRENT ACTOR]
24.Hourly rate(textbox)                     //[Access-CURRENT ACTOR]
25.Fixed costs(textbox)                    //[Access-CURRENT ACTOR]
26.Estimated time unit of components(hour)(textbox) //[Access-CURRENT ACTOR]
//Condition 2:Prototype order-VENDU/SOLD [Access-CURRENT ACTOR]
1.N0 customer order(textbox)
2.Customer order(file)
3.Allocation of turnover(dropdown)
4.Unit selling price(radiobuttons)
//Condition 3:Prototype order-VENDU/SOLD
1.FO trade(dropdown)
//Condition 4:Prototype order-VENDU/SOLD and not IntraLE
1.ADV(dropdown)
//Condition 5:Only if the user click on a demote or refuse
1.Comment(textarea) /*Componet Details*/
//Condition 6:Direct delivery to the customer-NO  [Access-CURRENT ACTOR]
1.Customer(dropdown) /*Component Description*/
2.Labo address or other(textarea) /*Component Description*/
//Condition 7:Validation Process-YES
1.YES(I specified process requirements)(checkbox)
    