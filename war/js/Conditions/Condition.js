/*=========================================== Order Creation ==============================================================================*/
	
												visible
====================================================================================================
	
//Condition 1: Default-No
	
1.Close the Order(btn) // Yet
2.Cancel the Order(btn) // Yet
3.Geosite(text)				 							
4.Site Address(Text)
							
//Condition 2: P2-Yes (requester)

1.PCC(checkbox)

//Condition 3: VENDU/SOLD-Yes

1.Total Order Amount(text) //doubt
2.Open Order(checkbox)
3.N0 Customer Order(text)
4.Customer Order(file)
5.Incoterms(dropdown)
6.Place(dropdown)
7.Allocation of Turnover(dropdown)
8.FO Trade(dropdown)

//Condition 4: La Verriere (LVR) & P0 & VENDU/SOLD-Yes (requester)

1.Frittage(checkbox)

//Condition 5: Nogent (NOG)-Yes (requester)

1.E52(checkbox)

//Condition 6: La Suze (LAS) & VENDU/SOLD (requester)

1.IntraLE(checkbox)

//Condition 7: VENDU/SOLD & (IntraLE-No) (requester)

1.ADV(dropdown)

													Mandatory
=====================================================================================================
//Not for Buttons
//Condition 3:Default-No
	
1.Geosite(text) geosite_txt
2.PCC(checkbox) pcc_checkbox
3.Open Order(checkbox) openorder_checkbox
4.Frittage(checkbox) frittage_checkbox
5.E52(checkbox) e52_checkbox
6.IntraLE(checkbox) intrale_checkbox
7.Date of the Order(datetime) Date_of_the_order
8.N0 Customer Order(text) customer_order_no_txt
9.Customer Order(text) // deal seperately
10.Customer Code(text)customer_code_txt
11.Branch Code(text)branch_code_txt
12.Provider Code(text)provider_code_txt
13.Final Delivery Address(textarea)final_delivery_address_txt
14.Additional Address(textarea)additional_txt
15.Site Address(textarea) site_address_txt
16.Incoterms(dropdown) incoterms_drpdwn
17.Place(dropdown) places_drpdwn
18.Customer receiver name(text) customer_receiver_txt
19.Customer receiver telephone(text) customer_receiver_telephone_txt
20.Allocation of Turnover(dropdown) allocation_of_turnover_drpdwn
21.Total Order Amount(text) total_order_amt_txt
22.Order Status(text) order_status_txt
23.requester(text) requester_txt
24.MEP Study(dropdown) mep_study_drpdwn
												
//Condition 2: Default-Yes

1.N0 prototype Order(text) no_prototype_order_txt
2.Site/Workshop Prototype(dropdown) site_workshop_drpdwn
3.Proto Type(dropdown) prototype_drpdwn
4.Type of the prototype order(dropdown) Type_of_the_Prototype_Order_drpdwn
5.Customer Name(dropdown) customer_name_drpdwn
6.Plateform(dropdown) plateform_drpdwn
7.quality(dropdown) quality_drpdwn
8.Proto Workshop(dropdown) proto_workshop_drpdwn
9.Control Management(dropdown) control_management_drpdwn
10.Project Manager(dropdown) project_manager_drpdwn

//Condition 3: VENDU/SOLD (requester)

1.FO Trade(dropdown) fo_trade_drpdwn  

//Condition 4: VENDU/SOLD & (IntraLE-No) (requester)

1.ADV(dropdown) adv_drpdwn

													Editable
=================================================================================================================================
	
//Condition 1: Default-No

1.Close the Order(btn) // Yet
2.Cancel the Order(btn) // Yet
												
3.Geosite(text) 
4.N0 PrototypeOrder(text)
5.Date of the Order(datetime)
6.Branch Code(text)
7.Site Address(textarea)
8.Total Order Amount(text)
9.Order Status(text)
10.Requester(text)
											
//Condition 3: P2 (requester)
												
1.PCC(checkbox)

//Condition 4: VENDU/SOLD (requester)

1.Open Order(checkbox)
2.N0 Customer Order(text)
3.Customer Order(file)
4.Incoterms(dropdown)
5.Place(dropdown)
6.Allocation of Turnover(dropdown)
7.FO Trade(dropdown)
												
//Condition 5: La Verriere (LVR) & P0 & VENDU/SOLD (requester)
												
1.Frittage(checkbox)

//Condition 6: Nogent (NOG) (requester)

1.E52(checkbox)

//Condition 7: La Suze (LAS) & VENDU/SOLD (requester)

1.IntraLE(checkbox)

//Condition 8: VENDU/SOLD & IntraLE-No (requester)

1.ADV(dropdown)