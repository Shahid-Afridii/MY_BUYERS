import React from 'react'
import {useNavigate,Link} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const sendOtp = (e)=>{
        // e.target.preventDefault();
        console.log("it works")
        navigate("/otp")
        // window.location.href="/otp";
    }
  return (
    <>
      <section class="inner_page_breadcrumb style2">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<h2 class="breadcrumb_title">Login</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">Login</li>
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
										    <input type="phone" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Phone no"/>
										</div>
										{/* <div class="input-group form-group mb5">
									    	<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
										</div> */}
										<div class="form-group custom-control custom-checkbox">
											{/* <input type="checkbox" class="custom-control-input" id="exampleCheck1"/> */}
											<label >We'll send you 4 digit verification code your number</label>
											{/* <a class="btn-fpswd float-right" href="#">Forgot password?</a> */}
										</div>
										<button  onClick={sendOtp} class="btn btn-googl btn-block"><span style={{fontWeight: 'bold'}}>Continue</span></button>
										<p class="text-center mb30 mt20">Don't have an account? <Link class="text-thm" to="/register">Sign up</Link></p>
										<hr/>
										<div class="row mt30">
											{/* <div class="col-lg-6">
												<button type="submit" class="btn btn-fb btn-block"><i class="fa fa-facebook float-left mt5"></i> Log In via Facebook</button>
											</div> */}
											<div class="col-lg-12 mt-3">
												<button type="submit" class="btn btn-googl btn-block"><i class="fa fa-google float-left mt5"></i> <span style={{fontWeight: 'bold'}}>Login via Email</span></button>
											</div>
										</div>
									</form>
								</div>
					  		</div>
					  	</div>
    </>
  )
}

export default Login
