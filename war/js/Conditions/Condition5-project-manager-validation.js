/*==================================================PROJECT MANAGER VALIDATION=================================================*/

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
================================================================================================================
	
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

12.Branch code(textbox)

13.Site address(textarea)

14.Total order amount(textbox)

15.Order status(textbox)

16.Requester 

17.MEP Study(dropdown)

18.Quality(dropdown)

19.Proto workshop(dropdown)

20.Control management(dropdown)

21.FO trade(dropdown)

22.ADV(dropdown)

23.Project manager(dropdown)

24.Prototype order N0(textbox) /*Component Details*/

25.Order type(textbox)

26.Customer Order N0(textbox) /*Component Details*/

27.Customer reference(textbox)

28.Product type(textbox)

29.Component id(textbox)

30.Component status(textbox)

31.Total quantity(textbox) /*Component description*/

32.Total amount(textbox)  /*Component description*/

33.R&D manager(textbox)    /*Technical defnition*/

34.YES(I specified process requirements)(checkbox)

35.Validation process(radio buttons)

36.Supported by(dropdown)

37.List of prototypists(textarea)

38.Component Projected Costs(label)

39.Estimated amount of workshop(textbox)

40.Estimated unit internal cost(textbox)

41.Estimated unit external cost(textbox)

42.Estimated total cost components(textbox)

43.Hourly rate(textbox)   

44.Fixed costs(textbox)

45.Estimated time unit of components(hour)(textbox) 

46.Estimated time total of components(hour)(textbox) 

47.Total cost(textbox)

48.YES(I specified quality requirements)(checkbox)

49.Customer qty(textbox)   /*Execution*/

50.Qty lab test plan qty (textbox)

51.Qty produced (textbox)

52.Qty test report(textbox)

53.Qty approv.compilant quality(textbox)

54.Qty approv. not compilant quality(textbox)

55.Delivered quantity(textbox)

56.Invoiced qty(textbox)

57.Creation(btn)          /*Parts Production*/

58.Creation(btn)          /*Quality Approval*/

59.Creation(btn)         /*Validation test report*/

60.Creation(btn)        /* Delivery Billing*/

//Condition 2:Prototype order-NONVENDU/NOT SOLD [Access-CURRENT ACTOR]

1.PCC(checkbox)

2.Product type(dropdown)

//Condition 3:Prototype order-VENDU/SOLD [Access-CURRENT ACTOR]

1.Open order(checkbox)

2.N0 customer order(textbox) /*order details*/

3.Customer order(file)      /*order details*/

4.Incoterms(dropdown)

5.Place(dropdown)

6.Allocation of turnover(dropdown)

7.Direct delivery to the customer(radiobuttons)

8.Unit selling price(textbox)

9.Project manager(textbox)  /*Technical defnition*/

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

17.R&D manager(dropdown)                    //[Access-CURRENT ACTOR]

18.Project phase(dropdown)                  //[Access-CURRENT ACTOR]

19.Valeo reference(textbox)                 //[Access-CURRENT ACTOR]

20.Technology(dropdown)                     //[Access-CURRENT ACTOR]

21.Estimated unit internal cost(textbox)    

22.Estimated unit external cost(textbox)  

23.Hourly rate(textbox)                     

24.Fixed costs(textbox)                    

25.Estimated time unit of components(hour)(textbox) 

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