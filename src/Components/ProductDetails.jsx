import React from 'react'
import mobiles from "../images/ADS/mobile-2.jpeg"
const ProductDetails = () => {
  return (
    <>
    	{/* <div class="preloader"></div> */}
    <section class="inner_page_breadcrumb style2">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<h2 class="breadcrumb_title">Product Details</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">Product Details</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
    	<section class="shop-single-content">
		<div class="container">
			{/* <div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="breadcrumb_content style2">
						<h2 class="breadcrumb_title">Shop Sıngle</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">Shop Sıngle</li>
						</ol>
					</div>
				</div>
			</div> */}
			<div class="row">
				<div class="col-lg-6">
					<div class="single_product_grid">
						<div class="sps_content">
							<div class="thumb">
								<img class="img-fluid" src={mobiles} alt="shop-single.png"/>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="shop_single_product_details" style={{marginTop:"85px"}}>
						<h2 class="title">Iphone 13 pro max with 128gb</h2>
						<p class="mb20"> The iPhone 13 Pro Max is Apple's biggest phone in the lineup with a massive, 6.7" screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling. </p>
						<div class="sspd_price mb35">₹ 48,000
                         {/* <small><del>$959</del></small> */}
                         </div>
						<ul class="cart_btns ui_kit_button mb30">
							<li class="list-inline-item"><input placeholder="4" type="number"/></li>
							<li class="list-inline-item"><span class="fa fa-check-circle text-thm2 ml10 mr5"></span> 432 in stock</li>
						</ul>
						<ul class="cart_btns ui_kit_button mb30">
							<li class="list-inline-item"><button type="button" class="btn"><span class="flaticon-shopping-bag pr5 fz20"></span> Add to Cart</button></li>
							<li class="list-inline-item"><div class="favorite_icon"><span class="flaticon-love fz20"></span></div></li>
						</ul>
						{/* <ul class="sspd_sku mb30">
							<li><a href="#">SKU:</a><span class="ml80">RTA-0058 </span></li>
							<li><a href="#">Category:</a><span class="ml47">Book</span></li>
							<li><a href="#">Tags:</a><span class="ml80">business / seo</span></li>
						</ul> */}
					</div>
				</div>
				<div class="col-lg-12">
					<div class="shop_single_tab_content mt30">
						<ul class="nav nav-tabs" id="myTab2" role="tablist">
							<li class="nav-item">
							    <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
							</li>
							<li class="nav-item">
							    <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (2)</a>
							</li>
						</ul>
						<div class="tab-content" id="myTabContent2">
							<div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
								<div class="product_single_content">
									<div class="mbp_pagination_comments">
										<div class="mbp_first media">
											<div class="media-body">
												<h5 class="mb20 fz16 mt5">Details</h5>
										    	<p class="mb25">Do you want to become a UI/UX designer but you don't know where to start? This course will allow you to develop your user interface design skills and you can add UI designer to your CV and start getting clients for your skills.</p>
										    	<p class="mt10 mb40">Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I will help you learn and master Figma app comprehensively from scratch. Figma is an innovative and brilliant tool for User Interface design. It's used by everyone from entrepreneurs and start-ups to Apple, Airbnb, Facebook, etc.</p>
												<div class="ui_page_heading">
													<h4 class="mb15">Material and care</h4>
													<ul class="order_list list-style-type-bullet list-inline-item">
														<li><a href="#">Main: 100% Cotton</a></li>
														<li><a href="#">Soft twill</a></li>
														<li><a href="#">Ribbed, diagonal pattern</a></li>
													</ul>
													<ul class="order_list list-style-type-bullet list-inline-item ml50 ml0-smd">
														<li><a href="#">One size fits all</a></li>
														<li><a href="#">Imported</a></li>
														<li><a href="#">Product color: Dark greenish</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
								<div class="product_single_content mb50">
									<div class="mbp_pagination_comments">
										<div class="mbp_first media">
											<img src="images/blog/reviewer1.png" class="mr-3" alt="reviewer1.png"/>
											<div class="media-body">
										    	<h4 class="sub_title mt-0">Jane Cooper</h4>
										    	<div class="sspd_postdate fz14 mb30">April 6, 2021 at 3:21 AM
													<div class="sspd_review pull-right">
														<ul class="mb0 pl15">
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item">(5 reviews)</li>
														</ul>
													</div>
										    	</div>
										    	<p class="fz14 mt10">Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul. we had an awesome time!</p>
										    	<div class="thumb-list mt30">
										    		<ul>
										    			<li class="list-inline-item"><a href="#"><img src="images/blog/bsp1.jpg" alt="bsp1.jpg"/></a></li>
										    			<li class="list-inline-item"><a href="#"><img src="images/blog/bsp2.jpg" alt="bsp2.jpg"/></a></li>
										    		</ul>
										    	</div>
											</div>
										</div>
										<div class="mbp_first media">
											<img src="images/blog/reviewer2.png" class="mr-3" alt="reviewer2.png"/>
											<div class="media-body">
										    	<h4 class="sub_title mt-0">Bessie Cooper</h4>
										    	<div class="sspd_postdate fz14 mb30">April 6, 2021 at 3:21 AM
													<div class="sspd_review pull-right">
														<ul class="mb0 pl15">
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item"><a href="#"><i class="fa fa-star"></i></a></li>
															<li class="list-inline-item">(5 reviews)</li>
														</ul>
													</div>
										    	</div>
										    	<p class="fz14 mt10">I enjoyed the tour. John is very friendly, observant, and funny. He cares for the guests and really works hard on providing a good experience by understanding each person's needs.…</p>
											</div>
										</div>
									</div>
								</div>
								<div class="bsp_reveiw_wrt">
									<h4>Add a Review</h4>
									<form class="comments_form">
										<div class="form-group">
									    	<input type="text" class="form-control" id="exampleInputName1" placeholder="Name"/>
										</div>
										<div class="form-group">
									    	<input type="email" class="form-control" id="exampleInputEmail14" placeholder="Email"/>
										</div>
										<div class="form-group">
										    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Message"></textarea>
										</div>
										<button type="submit" class="btn btn-thm">Send Your Review</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default ProductDetails