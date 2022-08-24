import React from 'react'

const Register= () => {
  return (
    <>
      <section class="inner_page_breadcrumb style2">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<h2 class="breadcrumb_title">Register</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">Register</li>
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
										    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Name"/>
										</div>
										<div class="input-group mb-2 mr-sm-2">
										    <input type="phone" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Phone no"/>
										</div>
										<div class="input-group mb-2 mr-sm-2">
										    <input type="email" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Email"/>
										</div>
										<div class="input-group mb-2 mr-sm-2">
										    <input type="password" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Password"/>
										</div>
										{/* <div class="input-group form-group mb5">
									    	<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
										</div> */}
										
										<button type="submit" class="btn btn-googl btn-block mt-3"><span style={{fontWeight: 'bold'}}>Continue</span></button>
										
									</form>
								</div>
					  		</div>
					  	</div>
    </>
  )
}

export default Register
