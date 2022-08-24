import React from 'react'
import header1 from "../../images/header-logo.svg"
import header2 from "../../images/header-logo2.svg"
import {Link} from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import afridi from "../../images/SVG ICONS/icons-03.svg"
import { BiCategory } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import { BsWallet } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { GrImage } from "react-icons/gr";
import { MdOutlineAnalytics } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { RiHandCoinLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { RiFeedbackLine } from "react-icons/ri";
import { BsInfoSquare } from "react-icons/bs";
import { BsQuestionOctagon } from "react-icons/bs";
import "./style.css"

const Header = () => {
  return (
    <>
      <div class="wrapper">
      <div class="preloader"></div>
      {/* <!-- Main Header Nav --> */}
	<header class="header-nav menu_style_home_one navbar-scrolltofixed stricky main-menu " >
		<div class="container-fluid p0">
		    {/* <!-- Ace Responsive Menu --> */}
		    <nav >
		        {/* <!-- Menu Toggle btn--> */}
		        <div class="menu-toggle">
		            <img class="nav_logo_img img-fluid" src={header1} alt="header-logo.svg"/>
		            <button type="button" id="menu-btn">
		                <span class="icon-bar"></span>
		                <span class="icon-bar"></span>
		                <span class="icon-bar"></span>
		            </button>
		        </div>
		        <a href="index.html" class="navbar_brand float-left dn-smd">
		            <img class="logo1 img-fluid" src={header1} alt="header-logo.svg" />
		            <img class="logo2 img-fluid" src={header2} alt="header-logo2.svg"/>
		            <span >My buyers</span>
		        </a>
		        {/* <!-- Responsive Menu Structure-->
		        <!--Note: declare the Menu style in the data-menu-style="horizontal" (options: horizontal, vertical, accordion) --> */}
				<div class="ht_left_widget float-left">
					<ul>
						<li class="list-inline-item">
							<div class="ht_search_widget" >
								<div class="header_search_widget home1">
									<form class="form-inline mailchimp_form" >
										<input type="text"  class="custom_search_with_menu_trigger form-control" placeholder="What are you looking for?" data-toggle="modal" data-target="#staticBackdrop"/>
										<button type="submit" class="btn"><span class="flaticon-loupe"></span></button>
									</form>
								</div>
							</div>
						</li>
					</ul>
				</div>
		        <ul id="respMenu" class="ace-responsive-menu text-right" data-menu-style="horizontal">
					<div>
						
					</div>
		            <li>
						
		                <Link to="/"><span class="title" style={{fontWeight:"600"}} >Home</span> </Link>
		                {/* <!-- Level Two--> */}
		                {/* <ul>
		                    <li><a href="index.html">Home V1</a></li>
		                    <li><a href="index2.html">Home V2</a></li>
		                    <li><a href="index3.html">Home V3</a></li>
		                </ul> */}
		            </li>
		            {/* <li>
		                <a href="#"><span class="title" >Explore</span></a>
		               
	                	<ul>
                            <li><a href="page-author-single.html">Author Single</a></li>
                            <li><a href="page-city-single.html">City Single</a></li>
                            <li><a href="page-add-new-listing.html">New Listing</a></li>
	                	</ul>
		            </li> */}
		            <li>
		                <Link to="/chat"><span class="title" style={{fontWeight:"600"}} >Chat</span></Link>
		               
		            </li>
		            <li>
		                <Link to="/myADs"><span class="title" style={{fontWeight:"600"}} >My Ads</span></Link>
		                {/* <ul>
				            <li>
				                <a href="#"><span class="title">Shop Pages</span></a>
				                <ul>
				                    <li><a href="page-shop.html">Shop</a></li>
				                    <li><a href="page-shop-single.html">Shop Single</a></li>
				                    <li><a href="page-shop-cart.html">Cart</a></li>
				                    <li><a href="page-shop-checkout.html">Checkout</a></li>
				                    <li><a href="page-shop-order.html">Order</a></li>
				                </ul>
				            </li>
		                    <li><a href="page-about.html">About Us</a></li>
		                    <li><a href="page-contact.html">Contact</a></li>
		                    <li><a href="page-coming-soon.html">Coming Soon</a></li>
		                    <li>
		                        <a href="#">User Dashboard</a>
		                        <ul>
						            <li><a href="page-my-dashboard.html">Dashboard</a></li>
				                    <li><a href="page-profile.html">My Profile</a></li>
				                    <li><a href="page-my-listing.html">My Listings</a></li>
				                    <li><a href="page-my-bookmark.html">Bookmarks</a></li>
				                    <li><a href="page-message.html">Messages</a></li>
				                    <li><a href="page-my-review.html">Reviews</a></li>
				                    <li><a href="page-add-new-listing.html">Add New Property</a></li>
		                        </ul>
		                    </li>
		                    <li><a href="page-gallery.html">Gallery</a></li>
		                    <li><a href="page-faq.html">Faq</a></li>
		                    <li><a href="page-invoice.html">Invoice</a></li>
		                    <li><a href="page-login.html">LogIn</a></li>
			                <li><a href="page-pricing.html">Pricing V1</a></li>
			                <li><a href="page-pricing2.html">Pricing V2</a></li>
		                    <li><a href="page-register.html">Register</a></li>
		                    <li><a href="page-error.html">404 Page</a></li>
		                    <li><a href="page-terms.html">Terms and Conditions</a></li>
		                    <li><a href="page-ui-element.html">UI Elements</a></li>
		                </ul> */}
		            </li>
		            <li>
		                <Link to="/wishlist"><span class="title" style={{fontWeight:"600"}}>Wishlist</span></Link>
		                {/* <ul>
		                    <li><a href="page-blog-grid.html">Blog Grid</a></li>
		                    <li><a href="page-blog-grid-sidebar.html">Blog Grid Sidebar</a></li>
		                    <li><a href="page-blog-details.html">Blog Details</a></li>
		                    <li><a href="page-blog-list.html">Blog List</a></li>
		                    <li><a href="page-blog-single.html">Blog Single</a></li>
		                </ul> */}
		            </li>
		            <li>
		                <a href="#"><FaUserCircle style={{fontWeight:"600",fontSize:"25px",}}/></a>
		                <ul>
		                    <li><Link to="/categories"><BiCategory style={{fontWeight:"bold",fontSize:"20px",marginRight:"4px"}}/> Categories</Link></li>
		                    <li><a href="/walletTransactions"><BsWallet style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>My Balance</a></li>
		                    <li><a href="page-blog-details.html"><RiMessage2Line style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>Response</a></li>
		                    <li><a href="page-blog-details.html"><GrImage style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>Buyer</a></li>
		                    <li><a href="page-blog-details.html"><MdOutlineAnalytics style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>Seller</a></li>
		                    <li><a href="page-blog-details.html"><FiPackage style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>Packgae Option</a></li>
		                    <li><a href="page-blog-details.html"><RiHandCoinLine style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>Suggest & Earn</a></li>
		                    <li><a href="page-blog-details.html"><FiLogOut style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>Logout</a></li>
		                    
		                  
		                   
		                </ul>
		            </li>
		            <li>
		                <a href="#"><FiSettings style={{fontWeight:"600",fontSize:"25px",}}/></a>
		                <ul>
		                    <li><a href="/walletTransactions" ><BsWallet style={{fontWeight:"bold",fontSize:"20px",marginRight:"4px"}}/> <span style={{fontSize:'15px'}}>Wallet & Transactions</span></a></li>
		                    <li><a href="page-blog-grid-sidebar.html"><FiUsers style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/><span style={{fontSize:'15px'}}>Invite a friend</span></a></li>
		                    <li><a href="/feedback"><RiFeedbackLine style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>Feedback</a></li>
		                    <li><a href="page-blog-details.html"><BsInfoSquare style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>About</a></li>
		                    <li><Link to="/help"><BsQuestionOctagon style={{fontWeight:"bold",fontSize:"20px",marginRight:"10px"}}/>Help</Link></li>
		                    
		                    
		                  
		                    {/* <li><a href="page-blog-single.html">Packgae Option</a></li> */}
		                   
		                    {/* <li><a href="page-blog-single.html">Settings</a></li> */}
		                </ul>
		            </li>
		          
		          
	              
				  
				    {/* <li class="list-inline-item list_s">
						<a href="#" class="" data-toggle="modal" data-target=".bd-example-modal-lg" style={{fontWeight:"600"}}  > 
						<span class="dn-1200" ><img src={afridi} alt="" style={{borderRadius:"20px",background:"white",width:"12%"}}/></span>
						</a>
						      <ul>
		                    <li><a href="page-blog-grid.html">Blog Grid</a></li>
		                    <li><a href="page-blog-grid-sidebar.html">Blog Grid Sidebar</a></li>
		                    <li><a href="page-blog-details.html">Blog Details</a></li>
		                    <li><a href="page-blog-list.html">Blog List</a></li>
		                    <li><a href="page-blog-single.html">Blog Single</a></li>
		                </ul>
						
						</li> */}
				    {/* <li class="list-inline-item list_s">
						<a href="#" class="btn flaticon-avatar" data-toggle="modal" data-target=".bd-example-modal-lg" style={{fontWeight:"600"}} > 
						<span class="dn-1200" >Login/Sign Up</span>
						</a></li> */}
	                
					 {/* <ul>
		                    <li><a href="page-blog-grid.html">Blog Grid</a></li>
		                    <li><a href="page-blog-grid-sidebar.html">Blog Grid Sidebar</a></li>
		                    <li><a href="page-blog-details.html">Blog Details</a></li>
		                    <li><a href="page-blog-list.html">Blog List</a></li>
		                    <li><a href="page-blog-single.html">Blog Single</a></li>
		                </ul> */}
					<li class="list-inline-item add_listing" style={{background:"red",borderRadius:"8px",    }}>
						<a href="page-add-new-listing.html" style={{color:"white",letterSpacing:"2px",fontfamily: 'Jost,sans-serif',fontWeight:"600"}}>
							<span class="icon">+</span><span class="dn-lg"> Buy</span>
							</a>
							 <ul>
		                    <li><a href="/forms"><span style={{color:'black'}}>Create Buy post using forms</span></a></li>
		                    <li><a href="page-blog-grid-sidebar.html"><span style={{color:'black'}}>Create Buy post using voice</span></a></li>
		                
		                    
		                </ul>
							</li>
		        </ul>
		    </nav>
		</div>
	</header>

    {/* <!-- Modal --> */}
	<div class="sign_up_modal modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-md mt100" role="document">
		    <div class="modal-content">
		      	<div class="modal-header">
		        	<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		      	</div>
		      	<div class="modal-body container pb20 pl0 pr0 pt0">
		      		<div class="row">
		      			<div class="col-lg-12">
				    		<ul class="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
							  	<li class="nav-item">
							    	<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sign in</a>
							  	</li>
							  	<li class="nav-item">
							    	<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
							  	</li>
							</ul>
		      			</div>
		      		</div>
					<div class="tab-content container" id="myTabContent">
					  	<div class="row mt40 tab-pane fade show active pl20 pr20" id="home" role="tabpanel" aria-labelledby="home-tab">
					  		<div class="col-lg-12">
								<div class="login_form">
									<form action="#">
										<div class="input-group mb-2 mr-sm-2">
										    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username / Email"/>
										</div>
										<div class="input-group form-group mb5">
									    	<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
										</div>
										<div class="form-group custom-control custom-checkbox">
											<input type="checkbox" class="custom-control-input" id="exampleCheck1"/>
											<label class="custom-control-label" for="exampleCheck1">Remember me</label>
											<a class="btn-fpswd float-right" href="#">Forgot password?</a>
										</div>
										<button type="submit" class="btn btn-log btn-block btn-thm">Sign in</button>
										<p class="text-center mb30 mt20">Don't have an account? <a class="text-thm" href="#">Sign up</a></p>
										<hr/>
										<div class="row mt30">
											<div class="col-lg-6">
												<button type="submit" class="btn btn-fb btn-block"><i class="fa fa-facebook float-left mt5"></i> Log In via Facebook</button>
											</div>
											<div class="col-lg-6">
												<button type="submit" class="btn btn-googl btn-block"><i class="fa fa-google float-left mt5"></i> Log In via Google+</button>
											</div>
										</div>
									</form>
								</div>
					  		</div>
					  	</div>
					  	<div class="row mt40 tab-pane fade pl20 pr20" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					  		<div class="col-lg-12">
								<div class="sign_up_form">
									<ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
										<li class="nav-item" role="presentation">
											<a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Customer</a>
										</li>
										<li class="nav-item" role="presentation">
									    	<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Business Owner</a>
										</li>
									</ul>
									<div class="tab-content" id="pills-tabContent">
										<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
											<form action="#">
												<div class="form-group input-group">
												    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Email"/>
												</div>
												<div class="form-group input-group">
												    <input type="text" class="form-control" id="exampleInputName" placeholder="Username"/>
												</div>
												<div class="form-group input-group mb20">
												    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password"/>
												</div>
												<button type="submit" class="btn btn-log btn-block btn-thm">Sign Up</button>
												<hr/>
												<div class="row">
													<div class="col-lg-6">
														<button type="submit" class="btn btn-block btn-fb"><i class="fa fa-facebook float-left mt5"></i> Log In via Facebook</button>
													</div>
													<div class="col-lg-6">
														<button type="submit" class="btn btn-block btn-googl"><i class="fa fa-google float-left mt5"></i> Log In via Google+</button>
													</div>
												</div>
											</form>
										</div>
										<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
											<form action="#">
												<div class="form-group input-group">
												    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email"/>
												</div>
												<div class="form-group input-group">
												    <input type="text" class="form-control" id="exampleInputName2" placeholder="Username"/>
												</div>
												<div class="form-group input-group mb20">
												    <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password"/>
												</div>
												<button type="submit" class="btn btn-log btn-block btn-thm">Sign Up</button>
												<hr/>
												<div class="row">
													<div class="col-lg-6">
														<button type="submit" class="btn btn-block btn-fb"><i class="fa fa-facebook float-left mt5"></i> Log In via Facebook</button>
													</div>
													<div class="col-lg-6">
														<button type="submit" class="btn btn-block btn-googl"><i class="fa fa-google float-left mt5"></i> Log In via Google+</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
					  		</div>
					  	</div>
					</div>
		      	</div>
		    </div>
		</div>
	</div>

	{/* <!-- Main Header Nav For Mobile --> */}
	<div id="page" class="stylehome1 h0">
		<div class="mobile-menu">
			<div class="header stylehome1">
				<div class="main_logo_home2 text-left">
		            <img class="nav_logo_img img-fluid mt15" src={header2} alt="header-logo2.svg"/>
		            <span class="mt15">My Buyers</span>
				</div>
				<ul class="menu_bar_home2">
	                <li class="list-inline-item"><a class="custom_search_with_menu_trigger msearch_icon" href="#" data-toggle="modal" data-target="#staticBackdrop"><span class="flaticon-loupe"></span></a></li>
	                <li class="list-inline-item"><a class="muser_icon" href="page-register.html"><span class="flaticon-avatar"></span></a></li>
					<li class="list-inline-item"><a class="menubar" href="#menu"><span></span></a></li>
				</ul>
			</div>
		</div>
        {/* <!-- /.mobile-menu --> */}
		<nav id="menu" class="stylehome1">
			<ul>
				<li><span>Home</span>
	                <ul>
	                    <li><a href="index.html">Home V1</a></li>
	                    <li><a href="index2.html">Home V2</a></li>
	                    <li><a href="index3.html">Home V3</a></li>
	                </ul>
				</li>
				<li><span>Explore</span>
					<ul>
                        <li><a href="page-author-single.html">Author Single</a></li>
                        <li><a href="page-city-single.html">City Single</a></li>
                        <li><a href="page-add-new-listing.html">New Listing</a></li>
					</ul>
				</li>
				<li><span>Listing</span>
					<ul>
						<li><span>Listing Styles</span>
							<ul>
	                            <li><a href="page-listing-v1.html">Listing v1</a></li>
	                            <li><a href="page-listing-v2.html">Listing v2</a></li>
	                            <li><a href="page-listing-v3.html">Listing v3</a></li>
	                            <li><a href="page-listing-v4.html">Listing v4</a></li>
	                            <li><a href="page-listing-v5.html">Listing v5</a></li>
							</ul>
						</li>
						<li><span>Listing Map</span>
							<ul>
	                            <li><a href="page-listing-v6.html">Map v1</a></li>
	                            <li><a href="page-listing-v7.html">Map v2</a></li>
	                            <li><a href="page-listing-v8.html">Map v3</a></li>
	                            <li><a href="page-listing-v9.html">Map v4</a></li>
							</ul>
						</li>
						<li><span>Listing Single</span>
							<ul>
	                            <li><a href="page-listing-single-v1.html">Single V1</a></li>
	                            <li><a href="page-listing-single-v2.html">Single V2</a></li>
	                            <li><a href="page-listing-single-v3.html">Single V3</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li><span>Blog</span>
					<ul>
	                    <li><a href="page-blog-grid.html">Blog Grid</a></li>
	                    <li><a href="page-blog-grid-sidebar.html">Blog Grid Sidebar</a></li>
	                    <li><a href="page-blog-details.html">Blog Details</a></li>
	                    <li><a href="page-blog-list.html">Blog List</a></li>
	                    <li><a href="page-blog-single.html">Blog Single</a></li>
					</ul>
				</li>
				<li><span>Pages</span>
					<ul>
						<li><span>Shop</span>
							<ul>
			                    <li><a href="page-shop.html">Shop Pages</a></li>
			                    <li><a href="page-shop-single.html">Shop Single</a></li>
			                    <li><a href="page-shop-cart.html">Cart</a></li>
			                    <li><a href="page-shop-checkout.html">Checkout</a></li>
			                    <li><a href="page-shop-order.html">Order</a></li>
							</ul>
						</li>
	                    <li><a href="page-about.html">About Us</a></li>
	                    <li><a href="page-contact.html">Contact</a></li>
	                    <li><a href="page-coming-soon.html">Coming Soon</a></li>
						<li><span>User Detils</span>
							<ul>
					            <li><a href="page-my-dashboard.html">Dashboard</a></li>
			                    <li><a href="page-profile.html">My Profile</a></li>
			                    <li><a href="page-my-listing.html">My Listings</a></li>
			                    <li><a href="page-my-bookmark.html">Bookmarks</a></li>
			                    <li><a href="page-message.html">Messages</a></li>
			                    <li><a href="page-my-review.html">Reviews</a></li>
			                    <li><a href="page-add-new-listing.html">Add New Property</a></li>
							</ul>
						</li>
	                    <li><a href="page-gallery.html">Gallery</a></li>
	                    <li><a href="page-faq.html">Faq</a></li>
	                    <li><a href="page-invoice.html">Invoice</a></li>
	                    <li><a href="page-login.html">LogIn</a></li>
		                <li><a href="page-pricing.html">Pricing V1</a></li>
		                <li><a href="page-pricing2.html">Pricing V2</a></li>
	                    <li><a href="page-register.html">Register</a></li>
		                <li><a href="page-error.html">404 Page</a></li>
		                <li><a href="page-terms.html">Terms and Conditions</a></li>
		                <li><a href="page-ui-element.html">UI Elements</a></li>
					</ul>
				</li>
				<li><a href="page-contact.html">Contact</a></li>
				<li><a href="page-login.html"><span class="flaticon-avatar"></span> Login</a></li>
				<li><a href="page-register.html"><span class="flaticon-edit"></span> Register</a></li>
				<li class="cl_btn"><a class="btn btn-block btn-lg btn-thm rounded" href="#"><span class="icon">+</span> Create Listing</a></li>
			</ul>
		</nav>
	</div>


      </div>
    </>
  )
}

export default Header
