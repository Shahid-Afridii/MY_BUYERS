import React from 'react'
import { SiGooglemessages } from "react-icons/si";
import { FiStar } from "react-icons/fi";
import { MdOutlineUpdate } from "react-icons/md";
import {Link} from "react-router-dom";
import whatsapp from "../../images/icons/Whatsapp Icon green.svg";
import { BiUserPin } from "react-icons/bi";
import mobiles from "../../images/ADS/mobile-2.jpeg"
const MyADs = () => {
  return (
    <>
      {/* <!-- Inner Page Breadcrumb --> */}
	<section class="inner_page_breadcrumb style2">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<h2 class="breadcrumb_title">My Ads</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">My Ads</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
    {/* <!-- Main Blog Post Content --> */}
	<section class="blog_post_container pb80">
		
		<div className="container" style={{maxWidth:"1410px"}}>
		{/* <div class="main-title text-centers">
						<h2>All Products</h2>
						<p>Discover some of the most popular listings in Toronto based on user reviews and ratings.</p>
					</div> */}
			<div className="row">
				
				<div className="col-lg-6 ">
				<div class="feat_property list products" style={{width:"100%"}}>
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="ll1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											
											{/* <li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li> */}
										</ul>
										<ul class="tag2 mb0">
											{/* <li class="list-inline-item"><a href="#">Featured</a></li> */}
										</ul>
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
									<h4>Iphone 13 pro max with 128gb</h4>
									<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										
									
									</div>
									<div class="fp_footer">
									<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list products" style={{width:"100%"}}>
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="ll1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											
											{/* <li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li> */}
										</ul>
										<ul class="tag2 mb0">
											{/* <li class="list-inline-item"><a href="#">Featured</a></li> */}
										</ul>
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
									<h4>Iphone 13 pro max with 128gb</h4>
									<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										
									
									</div>
									<div class="fp_footer">
									<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list products" style={{width:"100%"}}>
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="ll1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											
											{/* <li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li> */}
										</ul>
										<ul class="tag2 mb0">
											{/* <li class="list-inline-item"><a href="#">Featured</a></li> */}
										</ul>
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
									<h4>Iphone 13 pro max with 128gb</h4>
									<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										
									
									</div>
									<div class="fp_footer">
									<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list products" style={{width:"100%"}}>
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="ll1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											
											{/* <li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li> */}
										</ul>
										<ul class="tag2 mb0">
											{/* <li class="list-inline-item"><a href="#">Featured</a></li> */}
										</ul>
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
									<h4>Iphone 13 pro max with 128gb</h4>
									<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										
									
									</div>
									<div class="fp_footer">
									<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list products" style={{width:"100%"}}>
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="ll1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											
											{/* <li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li> */}
										</ul>
										<ul class="tag2 mb0">
											{/* <li class="list-inline-item"><a href="#">Featured</a></li> */}
										</ul>
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
									<h4>Iphone 13 pro max with 128gb</h4>
									<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										
									
									</div>
									<div class="fp_footer">
									<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list products" style={{width:"100%"}}>
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="ll1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											
											{/* <li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li> */}
										</ul>
										<ul class="tag2 mb0">
											{/* <li class="list-inline-item"><a href="#">Featured</a></li> */}
										</ul>
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
									<h4>Iphone 13 pro max with 128gb</h4>
									<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										
									
									</div>
									<div class="fp_footer">
									<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list products" style={{width:"100%"}}>
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="ll1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											
											{/* <li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li> */}
										</ul>
										<ul class="tag2 mb0">
											{/* <li class="list-inline-item"><a href="#">Featured</a></li> */}
										</ul>
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
									<h4>Iphone 13 pro max with 128gb</h4>
									<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										
									
									</div>
									<div class="fp_footer">
									<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list products" style={{width:"100%"}}>
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="ll1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											
											{/* <li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li> */}
										</ul>
										<ul class="tag2 mb0">
											{/* <li class="list-inline-item"><a href="#">Featured</a></li> */}
										</ul>
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
									<h4>Iphone 13 pro max with 128gb</h4>
									<h5 style={{ fontSize: "20px" }}> ₹ 48,000 </h5>
										
									
									</div>
									<div class="fp_footer">
									<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
				</div>
				
				
			
			
				
			</div>
		</div>
			{/* <div class="row">
				<div class="col-lg-12">
					<div class="row">
						<div class="col-md-6 col-lg-4 col-xl-4">
							<div class="for_blog feat_property">
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="1.jpg" style={{height:"270px"}} />
									<div class="tag bgc-thm"><a class="text-white" href="#"><FiStar style={{fontSize:"20px",marginBottom:"4px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>5.0</span></a></div>
									
								</div>
								<div class="details">
									<div class="tc_content">
										<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{fontSize:"20px"}}> ₹ 48,000 </h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4 col-xl-4">
							<div class="for_blog feat_property">
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="1.jpg" style={{height:"270px"}} />
									<div class="tag bgc-thm"><a class="text-white" href="#"><FiStar style={{fontSize:"20px",marginBottom:"4px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>5.0</span></a></div>
									
								</div>
								<div class="details">
									<div class="tc_content">
										<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
											
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{fontSize:"20px"}}> ₹ 48,000 </h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4 col-xl-4">
							<div class="for_blog feat_property">
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="1.jpg" style={{height:"270px"}} />
									<div class="tag bgc-thm"><a class="text-white" href="#"><FiStar style={{fontSize:"20px",marginBottom:"4px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>5.0</span></a></div>
								
								</div>
								<div class="details">
									<div class="tc_content">
										<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{fontSize:"20px"}}> ₹ 48,000 </h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4 col-xl-4">
							<div class="for_blog feat_property">
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="1.jpg" style={{height:"270px"}} />
									<div class="tag bgc-thm"><a class="text-white" href="#"><FiStar style={{fontSize:"20px",marginBottom:"4px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>5.0</span></a></div>
									
								</div>
								<div class="details">
									<div class="tc_content">
										<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{fontSize:"20px"}}> ₹ 48,000 </h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4 col-xl-4">
							<div class="for_blog feat_property">
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="1.jpg" style={{height:"270px"}} />
									<div class="tag bgc-thm"><a class="text-white" href="#"><FiStar style={{fontSize:"20px",marginBottom:"4px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>5.0</span></a></div>
								
								</div>
								<div class="details">
									<div class="tc_content">
										<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
											
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{fontSize:"20px"}}> ₹ 48,000 </h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4 col-xl-4">
							<div class="for_blog feat_property">
								<div class="thumb">
									<img class="img-whp" src={mobiles} alt="1.jpg" style={{height:"270px"}} />
									
								</div>
								<div class="details">
									<div class="tc_content">
										<div class="bp_meta">
											<ul>
												<li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><SiGooglemessages style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/>  </a> 3 Responses</li>
												
												<li class="list-inline-item"><a href="#"><MdOutlineUpdate style={{fontSize:"25px"}}/> 24 December, 2022</a></li>
											</ul>
										</div>
										<h4>Iphone 13 pro max with 128gb</h4>
										<h5 style={{fontSize:"20px"}}> ₹ 48,000 </h5>
									</div>
								</div>
							</div>
						</div>
						
						
					
					
					</div>
					
				</div>
			</div> */}
		
	</section>
    </>
  )
}

export default MyADs
