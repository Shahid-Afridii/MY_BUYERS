import React from 'react'

const Footer = () => {
  return (
    <>
      <div class="wrapper">
      <div class="preloader"></div>
    	{/* <!-- Our Footer --> */}
	<section class="footer_one home1">
		<div class="container pb70">
			<div class="row">
				<div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
					<div class="footer_contact_widget">
						<h4>Contact Us</h4>
						<ul class="list-unstyled">
							<li class="text-white df"><span class="flaticon-pin mr15"></span><a href="#">329 Queensberry Street, North Melbourne VIC 3051, Australia.</a></li>
							<li class="text-white"><span class="flaticon-phone mr15"></span><a href="#">+123 456 7890</a></li>
							<li class="text-white"><span class="flaticon-email mr15"></span><a href="#">support@mybuyers.com</a></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-2 col-xl-3">
					<div class="footer_qlink_widget">
						<h4>Company</h4>
						<ul class="list-unstyled">
							<li><a href="#">Help Center</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Career</a></li>
							<li><a href="#">How It Works</a></li>
							<li><a href="#">Article & Tips</a></li>
							<li><a href="#">Terms & Service</a></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-5 col-md-6 col-lg-2 col-xl-2">
					<div class="footer_qlink_widget pl0">
						<h4>Discover</h4>
						<ul class="list-unstyled">
							<li><a href="#">Chicago</a></li>
							<li><a href="#">Los Angels</a></li>
							<li><a href="#">Miami</a></li>
							<li><a href="#">New York</a></li>
							<li><a href="#">Florida</a></li>
							<li><a href="#">Boston</a></li>
						</ul>
					</div>
				</div>
				<div class="col-sm-7 col-md-6 col-lg-4 col-xl-4">
					<div class="footer_social_widget">
						<h4>Subscribe</h4>
				    	<p class="text-white mb20">We don’t send spam so don’t worry.</p>
						<form class="footer_mailchimp_form">
						 	<div class="form-row align-items-center">
							    <div class="col-auto">
							    	<input type="email" class="form-control" id="inlineFormInput" placeholder="Enter your email"/>
							    	<button type="submit" class="btn btn-primary">Subscribe</button>
							    </div>
						  	</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<hr/>
		<div class="container pt20 pb30">
			<div class="row">
				<div class="col-md-4 col-lg-4">
					<div class="copyright-widget mt10 mb15-767">
						<p>© My Buyers - All rights reserved.</p>
					</div>
				</div>
				<div class="col-md-4 col-lg-4">
					<div class="footer_logo_widget text-center mb15-767">
						<div class="wrapper">
							<div class="logo text-center">
								{/* <img src="images/footer-logo.svg" alt="footer-logo.svg"/> */}
					            <span class="logo_title text-white pl15">My Buyers</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4 col-lg-4">
					<div class="footer_social_widget text-right tac-smd mt10">
						<ul class="mb0">
							<li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
							<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>

    </>
  )
}

export default Footer