import React from 'react'

const Otp = () => {
  return (
    <>
<section class="inner_page_breadcrumb style2">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<h2 class="breadcrumb_title">OTP</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">OTP</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
    <div class="row mt40 tab-pane fade show active pl20 pr20" id="home" role="tabpanel" aria-labelledby="home-tab" style={{justifyContent:"center"}}>
					  		<div class="col-lg-4 mb-3">
								<div class="login_form">
									<form action="#">
										<div class="input-group mb-2 mr-sm-2">
										    <input type="phone" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Enter your OTP"/>
										</div>
										
										
										<p class="text-center mb30 mt20">Didn't receive OTP? <a class="text-thm" href="#">Resend OTP</a></p>
										{/* <hr/> */}
										<div class="row mt30">
											{/* <div class="col-lg-6">
												<button type="submit" class="btn btn-fb btn-block"><i class="fa fa-facebook float-left mt5"></i> Log In via Facebook</button>
											</div> */}
											<div class="col-lg-12 mt-3">
												<button type="submit" class="btn btn-googl btn-block"> <span style={{fontWeight: 'bold'}}>Continue</span></button>
											</div>
										</div>
									</form>
								</div>
					  		</div>
					  	</div>

    </>
  )
}

export default Otp