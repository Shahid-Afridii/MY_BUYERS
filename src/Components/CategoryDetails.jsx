import React,{useEffect} from 'react'
import whatsapp from "../images/icons/Whatsapp Icon green.svg";
import { BiUserPin } from "react-icons/bi";
import { MdOutlineUpdate } from "react-icons/md";
import mobiles from "../images/ADS/mobile-2.jpeg"
import {Link} from "react-router-dom";
const CategoryDetails = () => {
   
  return (
    <>
	 <section class="inner_page_breadcrumb style2">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<h2 class="breadcrumb_title">Category Details</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">Category Details</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
    <section class="our-listing pb30-991">
    <div class="container">

			<div class="row">
				<div class="col-lg-12">
					<div class="row">
						<div class="listing_filter_row dif db-767">
							<div class="col-md-6 col-lg-7">
								<div class="left_area tac-xsd mb30-767">
									<div class="price_ranger_dropdown mb30-991">
										<ul class="mb0 mt10">
											<li class="list-inline-item mb30-991">
												<select class="selectpicker show-tick">
													<option>Categories</option>
													<option>Automotive</option>
													<option>Beautu & Spa</option>
													<option>Hotels</option>
													<option>Outdoor Activities</option>
													<option>Restaurant</option>
													<option>Shopping</option>
												</select>
											</li>
											<li class="list-inline-item mb30-991">
												<div class="listing_price_tag">
													<div class="tag_btn mega_tags_dropdown">Tags <span class="fa fa-angle-down"></span></div>
													<div class="tag_dropdown_content">
														<div class="row">
													        <div class="col-lg-6">
												                <ul class="ui_kit_checkbox selectable-list tal-767">
												                	<li>
																		<div class="custom-control custom-checkbox">
																			<input type="checkbox" class="custom-control-input" id="customCheck1"/>
																			<label class="custom-control-label mb0" for="customCheck1">Accepts Credit Cards</label>
																		</div>
												                	</li>
												                	<li>
																		<div class="custom-control custom-checkbox">
																			<input type="checkbox" class="custom-control-input" id="customCheck2"/>
																			<label class="custom-control-label mb0" for="customCheck2">Smoking Allowed</label>
																		</div>
												                	</li>
												                	<li>
																		<div class="custom-control custom-checkbox">
																			<input type="checkbox" class="custom-control-input" id="customCheck3"/>
																			<label class="custom-control-label mb0" for="customCheck3">Bike Parking</label>
																		</div>
												                	</li>
												                	<li>
																		<div class="custom-control custom-checkbox">
																			<input type="checkbox" class="custom-control-input" id="customCheck4"/>
																			<label class="custom-control-label mb0" for="customCheck4">Street Parking</label>
																		</div>
												                	</li>
												                </ul>
													        </div>
													        <div class="col-lg-6">
												                <ul class="ui_kit_checkbox selectable-list tal-767">
												                	<li>
																		<div class="custom-control custom-checkbox">
																			<input type="checkbox" class="custom-control-input" id="customCheck5"/>
																			<label class="custom-control-label mb0" for="customCheck5">Wireless Internet</label>
																		</div>
												                	</li>
												                	<li>
																		<div class="custom-control custom-checkbox">
																			<input type="checkbox" class="custom-control-input" id="customCheck6"/>
																			<label class="custom-control-label mb0" for="customCheck6">Alcohol</label>
																		</div>
												                	</li>
												                	<li>
																		<div class="custom-control custom-checkbox">
																			<input type="checkbox" class="custom-control-input" id="customCheck7"/>
																			<label class="custom-control-label mb0" for="customCheck7">Pet Friendly</label>
																		</div>
												                	</li>
												                </ul>
													        </div>
												      	</div>
													</div>
												</div>
											</li>
											<li class="list-inline-item">
												<select class="selectpicker show-tick">
													<option>Price Range</option>
													<option>Free</option>
													<option>Low: $</option>
													<option>Medium: $$</option>
													<option>High: $$$</option>
												</select>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-5">
								<div class="listing_list_style tac-767">
									<ul class="mb0">
										<li class="list-inline-item dropdown text-left"><span class="stts">Short by: </span>
											<select class="selectpicker">
												<option>Default</option>
												<option>Newest</option>
												<option>Featured</option>
												<option>Most Views</option>
											</select>
										</li>
										{/* <li class="list-inline-item gird"><a class="text-thm" href="#"><span class="fa fa-th-large"></span></a></li>
										<li class="list-inline-item list"><a href="#"><span class="fa fa-th-list"></span></a></li> */}
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 col-lg-4">
						<div class="feat_property">
								<div class="thumb">
								<img class="img-whp" src={mobiles} alt="fp1.jpg" style={{height:"250px"}}/>
									<div class="thmb_cntnt">
										{/* <ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul> */}
										{/* <ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
										</ul> */}
										<ul class="listing_reviews">
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white total_review" href="#">(5 Review)</a></li>
										</ul>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
										
										{/* <div class="badge_icon"><a href="#"><img src={whatsapp} alt="agent1.svg" style={{background:"white",width:"40px"}}/></a></div> */}
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										{/* <p>But I must explain to you how all this mistaken idea...</p> */}
										<ul class="prop_details mb0">
										<li class="list-inline-item">
                              <a href="#" style={{ fontSize: "20px" }}>
                                <BiUserPin
                                  style={{
                                    fontSize: "20px",
                                    marginBottom: "1px",
                                    marginRight: "5px",
                                  }}
                                />{" "}
                              </a>{" "}
							  <span style={{color:'black'}}>

                             Shahid Afridi
							  </span>
                            </li>
							<li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px",marginBottom: "2px"}} />{" "}
                                24 December, 2022
                              </a>
                            </li>
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span>  <span>24 December 2022</span> </a></li> */}
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											{/* <li class="list-inline-item"><a href="#"><img src="images/icons/icon3.svg" alt="icon3.svg"/></a></li> */}
											<li class="list-inline-item"><Link to="/productDetails" style={{textDecoration:"underline"}}>View Details</Link></li>
										</ul>
										<ul class="fp_meta float-right mb0">
										<button type="button" class="btn btn-outline-success">₹ 100 </button>
											{/* <button>  </button> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
						<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="fp1.jpg" style={{height:"250px"}}/>
									<div class="thmb_cntnt">
										{/* <ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul> */}
										{/* <ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
										</ul> */}
										<ul class="listing_reviews">
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white total_review" href="#">(5 Review)</a></li>
										</ul>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
										
										<div class="badge_icon"><a href="#"><img src={whatsapp} alt="agent1.svg" style={{background:"white",width:"40px"}}/></a></div>
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										{/* <p>But I must explain to you how all this mistaken idea...</p> */}
										<ul class="prop_details mb0">
										<li class="list-inline-item">
                              <a href="#" style={{ fontSize: "20px" }}>
                                <BiUserPin
                                  style={{
                                    fontSize: "20px",
                                    marginBottom: "1px",
                                    marginRight: "5px",
                                  }}
                                />{" "}
                              </a>{" "}
							  <span style={{color:'black'}}>

                             Shahid Afridi
							  </span>
                            </li>
							{/* <li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px",marginBottom: "2px"}} />{" "}
                                24 December, 2022
                              </a>
                            </li> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span>  <span>24 December 2022</span> </a></li> */}
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											
										<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +91 90927  45806</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li> */}
										<button type="button" class="btn btn-outline-success">View No</button>
											{/* <button>  </button> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
						<div class="feat_property">
								<div class="thumb">
								<img class="img-whp" src={mobiles} alt="fp1.jpg" style={{height:"250px"}}/>
									<div class="thmb_cntnt">
										{/* <ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul> */}
										{/* <ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
										</ul> */}
										<ul class="listing_reviews">
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white total_review" href="#">(5 Review)</a></li>
										</ul>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
										
										{/* <div class="badge_icon"><a href="#"><img src={whatsapp} alt="agent1.svg" style={{background:"white",width:"40px"}}/></a></div> */}
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										{/* <p>But I must explain to you how all this mistaken idea...</p> */}
										<ul class="prop_details mb0">
										<li class="list-inline-item">
                              <a href="#" style={{ fontSize: "20px" }}>
                                <BiUserPin
                                  style={{
                                    fontSize: "20px",
                                    marginBottom: "1px",
                                    marginRight: "5px",
                                  }}
                                />{" "}
                              </a>{" "}
							  <span style={{color:'black'}}>

                             Shahid Afridi
							  </span>
                            </li>
							<li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px",marginBottom: "2px"}} />{" "}
                                24 December, 2022
                              </a>
                            </li>
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span>  <span>24 December 2022</span> </a></li> */}
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											{/* <li class="list-inline-item"><a href="#"><img src="images/icons/icon3.svg" alt="icon3.svg"/></a></li> */}
											<li class="list-inline-item"><Link to="/productDetails" style={{textDecoration:"underline"}}>View Details</Link></li>
										</ul>
										<ul class="fp_meta float-right mb0">
										<button type="button" class="btn btn-outline-success">₹ 100 </button>
											{/* <button>  </button> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					
						<div class="col-md-6 col-lg-4">
						<div class="feat_property">
								<div class="thumb">
								<img class="img-whp" src={mobiles} alt="fp1.jpg" style={{height:"250px"}}/>
									<div class="thmb_cntnt">
										{/* <ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul> */}
										{/* <ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
										</ul> */}
										<ul class="listing_reviews">
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white total_review" href="#">(5 Review)</a></li>
										</ul>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
										
										{/* <div class="badge_icon"><a href="#"><img src={whatsapp} alt="agent1.svg" style={{background:"white",width:"40px"}}/></a></div> */}
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										{/* <p>But I must explain to you how all this mistaken idea...</p> */}
										<ul class="prop_details mb0">
										<li class="list-inline-item">
                              <a href="#" style={{ fontSize: "20px" }}>
                                <BiUserPin
                                  style={{
                                    fontSize: "20px",
                                    marginBottom: "1px",
                                    marginRight: "5px",
                                  }}
                                />{" "}
                              </a>{" "}
							  <span style={{color:'black'}}>

                             Shahid Afridi
							  </span>
                            </li>
							<li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px",marginBottom: "2px"}} />{" "}
                                24 December, 2022
                              </a>
                            </li>
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span>  <span>24 December 2022</span> </a></li> */}
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											{/* <li class="list-inline-item"><a href="#"><img src="images/icons/icon3.svg" alt="icon3.svg"/></a></li> */}
											<li class="list-inline-item"><Link to="/productDetails" style={{textDecoration:"underline"}}>View Details</Link></li>
										</ul>
										<ul class="fp_meta float-right mb0">
										<button type="button" class="btn btn-outline-success">₹ 100 </button>
											{/* <button>  </button> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
						<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="fp1.jpg" style={{height:"250px"}}/>
									<div class="thmb_cntnt">
										{/* <ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul> */}
										{/* <ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
										</ul> */}
										<ul class="listing_reviews">
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white total_review" href="#">(5 Review)</a></li>
										</ul>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
										
										<div class="badge_icon"><a href="#"><img src={whatsapp} alt="agent1.svg" style={{background:"white",width:"40px"}}/></a></div>
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										{/* <p>But I must explain to you how all this mistaken idea...</p> */}
										<ul class="prop_details mb0">
										<li class="list-inline-item">
                              <a href="#" style={{ fontSize: "20px" }}>
                                <BiUserPin
                                  style={{
                                    fontSize: "20px",
                                    marginBottom: "1px",
                                    marginRight: "5px",
                                  }}
                                />{" "}
                              </a>{" "}
							  <span style={{color:'black'}}>

                             Shahid Afridi
							  </span>
                            </li>
							{/* <li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px",marginBottom: "2px"}} />{" "}
                                24 December, 2022
                              </a>
                            </li> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span>  <span>24 December 2022</span> </a></li> */}
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											
										<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +91 90927  45806</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li> */}
										<button type="button" class="btn btn-outline-success">View No</button>
											{/* <button>  </button> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4">
						<div class="feat_property">
								<div class="thumb">
								<img class="img-whp" src={mobiles} alt="fp1.jpg" style={{height:"250px"}}/>
									<div class="thmb_cntnt">
										{/* <ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul> */}
										{/* <ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
										</ul> */}
										<ul class="listing_reviews">
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white" href="#"><span class="fa fa-star"></span></a></li>
											<li class="list-inline-item"><a class="text-white total_review" href="#">(5 Review)</a></li>
										</ul>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
										
										{/* <div class="badge_icon"><a href="#"><img src={whatsapp} alt="agent1.svg" style={{background:"white",width:"40px"}}/></a></div> */}
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										{/* <p>But I must explain to you how all this mistaken idea...</p> */}
										<ul class="prop_details mb0">
										<li class="list-inline-item">
                              <a href="#" style={{ fontSize: "20px" }}>
                                <BiUserPin
                                  style={{
                                    fontSize: "20px",
                                    marginBottom: "1px",
                                    marginRight: "5px",
                                  }}
                                />{" "}
                              </a>{" "}
							  <span style={{color:'black'}}>

                             Shahid Afridi
							  </span>
                            </li>
							<li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px",marginBottom: "2px"}} />{" "}
                                24 December, 2022
                              </a>
                            </li>
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span>  <span>24 December 2022</span> </a></li> */}
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											{/* <li class="list-inline-item"><a href="#"><img src="images/icons/icon3.svg" alt="icon3.svg"/></a></li> */}
											<li class="list-inline-item"><Link to="/productDetails" style={{textDecoration:"underline"}}>View Details</Link></li>
										</ul>
										<ul class="fp_meta float-right mb0">
										<button type="button" class="btn btn-outline-success">₹ 100 </button>
											{/* <button>  </button> */}
											{/* <li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					
						
						
						
					
					</div>
				</div>
				<div class="col-lg-12">
					<div class="mbp_pagination mt10">
						<div class="new_line_pagination text-center">
							<p>Showing 6 of 10 Results</p>
							<div class="pagination_line"></div>
							{/* <a class="pagi_btn text-thm" href="#">Show More</a> */}
						</div>
					</div>
				</div>
			</div>
        </div>
        
    </section>
    </>
  )
}

export default CategoryDetails