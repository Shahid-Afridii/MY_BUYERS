import React from 'react'

const Forms = () => {
  return (
    <>
      <section class="inner_page_breadcrumb style2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="breadcrumb_content">
                <h2 class="breadcrumb_title">Forms</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Forms
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section class="our-dashbord dashbord bgc-f4 ovh">
		<div class="container ">
			<div class="row">
            <div class="col-lg-12 mb10">
					<div class="breadcrumb_content style2 mb25">
						<h2 class="breadcrumb_title">Forms</h2>
					</div>
				</div>
                <div class="row justify-content-center">
				<div class="col-lg-7">
					<div class="my_dashboard_review">
						<div class="row">
							<div class="col-lg-12">
								<h4 class="mb30">General</h4>
								<div class="my_profile_setting_input form-group">
							    	<label for="listingPlace">Place Name*</label>
							    	<input type="text" class="form-control" id="listingPlace" placeholder="What the name of place"/>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input ui_kit_select_search form-group">
							    	<label>Price</label>
									<select class="selectpicker" data-live-search="true" data-width="100%">
										<option>Pricing Range</option>
										<option data-tokens="Free">Free</option>
										<option data-tokens="PriceLevel2">Low: $</option>
										<option data-tokens="PriceLevel3">Medium: $$</option>
										<option data-tokens="PriceLevel4">High: $$$</option>
									</select>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_textarea">
								    <label for="propertyDescription">Description</label>
								    <textarea class="form-control" id="propertyDescription" rows="7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</textarea>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input ui_kit_select_search form-group">
							    	<label>Category</label>
									<select class="selectpicker" data-live-search="true" data-width="100%">
										<option data-tokens="">Select Categories</option>
										<option data-tokens="Category1">Categories 1</option>
										<option data-tokens="Category2">Categories 2</option>
										<option data-tokens="Category3">Categories 3</option>
										<option data-tokens="Category4">Categories 4</option>
									</select>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input ui_kit_select_search form-group">
							    	<label>Place type*</label>
									<select class="selectpicker" data-live-search="true" data-width="100%">
										<option data-tokens="">Select Type</option>
										<option data-tokens="NewYork">New York</option>
										<option data-tokens="London">London</option>
										<option data-tokens="Paris">Paris</option>
										<option data-tokens="Istanbul">Istanbul</option>
										<option data-tokens="LosAngeles">Los Angeles</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="my_dashboard_review mt30">
						<div class="row">
							<div class="col-lg-12">
								<h4 class="mb30">Hightlights</h4>
								<div class="my_profile_setting_input ui_kit_select_search form-group list_hightlights df">
					                <ul class="add_listing selectable-list">
					                	<li>
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="customCheck1"/>
												<label class="custom-control-label" for="customCheck1">Accepts Credit Cards</label>
											</div>
					                	</li>
					                	<li>
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="customCheck2"/>
												<label class="custom-control-label" for="customCheck2">Smoking Allowed</label>
											</div>
					                	</li>
					                	<li>
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="customCheck3"/>
												<label class="custom-control-label" for="customCheck3">Bike Parking</label>
											</div>
					                	</li>
					                </ul>
					                <ul class="add_listing selectable-list ml100 ml0-xxsd">
					                	<li>
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="customCheck4"/>
												<label class="custom-control-label" for="customCheck4">Street Parking</label>
											</div>
					                	</li>
					                	<li>
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="customCheck5"/>
												<label class="custom-control-label" for="customCheck5">Wireless Internet</label>
											</div>
					                	</li>
					                	<li>
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="customCheck6"/>
												<label class="custom-control-label" for="customCheck6">Alcohol</label>
											</div>
					                	</li>
					                </ul>
								</div>
							</div>
						</div>
					</div>
					<div class="my_dashboard_review mt30">
						<div class="row">
							<div class="col-lg-12">
								<h4 class="mb30">Location</h4>
								<div class="my_profile_setting_input ui_kit_select_search form-group">
							    	<label>City / Town*</label>
									<select class="selectpicker" data-live-search="true" data-width="100%">
										<option data-tokens="">Select City</option>
										<option data-tokens="Turkey">Turkey</option>
										<option data-tokens="Iraq">Iraq</option>
										<option data-tokens="Spain">Spain</option>
										<option data-tokens="Greece">Greece</option>
										<option data-tokens="Portugal">Portugal</option>
									</select>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input form-group">
							    	<label for="zipCode">Postal Code / Zip</label>
							    	<input type="text" class="form-control" id="zipCode" placeholder="Zip"/>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input form-group">
							    	<label for="propertyAddress">Place Address*</label>
							    	<input type="text" class="form-control" id="propertyAddress" placeholder="Full Address"/>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input form-group">
							    	<label for="propertyAddress">Place Location on Google Maps</label>
									<div class="h400 bdrs8 mt20" id="map-canvas"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="my_dashboard_review mt30">
						<div class="row">
							<div class="col-lg-12">
								<h4 class="mb30">Contact Information</h4>
								<div class="my_profile_setting_input ui_kit_select_search form-group">
							    	<label>Email</label>
							    	<input type="email" class="form-control" id="emailId" placeholder="Email Address"/>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input form-group">
							    	<label for="phoneNumber">Phone number (optional)</label>
							    	<input type="text" class="form-control" id="phoneNumber" placeholder="Phone Number"/>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input form-group">
							    	<label for="website">Website (optional)</label>
							    	<input type="text" class="form-control" id="website" placeholder="Website Url"/>
								</div>
							</div>
						</div>
					</div>
					<div class="my_dashboard_review mt30">
						<div class="row">
							<div class="col-lg-12">
								<h4 class="mb30">Social Networks</h4>								
							</div>
							<div class="col-lg-6">
								<div class="my_profile_setting_input ui_kit_select_search form-group">
							    	<label>Facebook</label>
							    	<input type="url" class="form-control" id="fblink" placeholder="Facebook url"/>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="my_profile_setting_input form-group">
							    	<label for="twlink">Twitter</label>
							    	<input type="url" class="form-control" id="twlink" placeholder="Twitter url"/>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="my_profile_setting_input form-group">
							    	<label for="inslink">Instagram</label>
							    	<input type="url" class="form-control" id="inslink" placeholder="Instagram Url"/>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="my_profile_setting_input form-group">
							    	<label for="googlelink">Google Plus</label>
							    	<input type="url" class="form-control" id="googlelink" placeholder="Google Url"/>
								</div>
							</div>
						</div>
					</div>
					<div class="my_dashboard_review mt30">
						<div class="row">
							<div class="col-lg-12">
								<h4 class="float-left fn-414 mb30">Opening Hours</h4>
								<div class="opening_hour_day_list float-right">
									<ul class="mb0">
										<li class="list-inline-item"><a href="#">Mon</a></li>
										<li class="list-inline-item"><a href="#">Tue</a></li>
										<li class="list-inline-item"><a href="#">Wed</a></li>
										<li class="list-inline-item"><a href="#">Thu</a></li>
										<li class="list-inline-item"><a href="#">Fri</a></li>
										<li class="list-inline-item"><a href="#">Sat</a></li>
										<li class="list-inline-item"><a href="#">Sun</a></li>
									</ul>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input ui_kit_select_search form-group">
									<select class="selectpicker" data-live-search="true" data-width="100%">
										<option data-tokens="9:00AM-5:00PM">9:00 AM - 5:00 PM</option>
										<option data-tokens="9:00AM-5:00PM">9:00 AM - 5:00 PM</option>
										<option data-tokens="9:00AM-5:00PM">9:00 AM - 5:00 PM</option>
										<option data-tokens="9:00AM-5:00PM">9:00 AM - 5:00 PM</option>
										<option data-tokens="9:00AM-5:00PM">9:00 AM - 5:00 PM</option>
										<option data-tokens="9:00AM-5:00PM">9:00 AM - 5:00 PM</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="my_dashboard_review mt30">
						<div class="row">
							<div class="col-lg-12">
								<h4 class="mb30">Media</h4>
							</div>
							<div class="col-lg-12">
								<h5>Featured image</h5>
							  	<div class="upload_file_input_add_remove">
							    	<span class="btn_upload"><input type="file" id="imag" title="" class="input-img"/><span class="flaticon-upload"></span></span>
							    	<img id="ImgPreview" src="images/resource/upload-img.png" class="preview1" alt="" />
							    	<button id="removeImage1" class="btn-rmv1" type="button"><span class="flaticon-delete"></span></button>
							  	</div>
								<small>Maximum file size: 1000kb.</small>
							</div>
							<div class="col-lg-12 mt50">
								<h5 class="mb20">Gallery Images (optional)</h5>
								<ul class="mb0">
									<li class="list-inline-item vat mb30-767">
									  	<div class="upload_file_input_add_remove">
									    	<span class="btn_upload"><input type="file" id="imag2" title="" class="input-img"/><span class="flaticon-upload"></span></span>
									    	<img id="ImgPreview2" src="images/resource/upload-img.png" class="preview2" alt="" />
									    	<button id="removeImage2" class="btn-rmv2" type="button"><span class="flaticon-delete"></span></button>
									  	</div>
										<small>Maximum file size: 1000kb.</small>
									</li>
									<li class="list-inline-item">
										<div class="portfolio_item">
											<img class="img-fluid" src="images/listing/a1.jpg" alt="a1.jpg"/>
						    				<div class="edu_stats_list" data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete"><a href="#"><span class="flaticon-delete"></span></a></div>
										</div>
									</li>
									<li class="list-inline-item">
										<div class="portfolio_item">
											<img class="img-fluid" src="images/listing/a2.jpg" alt="a2.jpg"/>
						    				<div class="edu_stats_list" data-toggle="tooltip" data-placement="top" title="Delete" data-original-title="Delete"><a href="#"><span class="flaticon-delete"></span></a></div>
										</div>
									</li>
								</ul>
							</div>
							<div class="col-lg-12">
								<div class="my_profile_setting_input form-group mt30">
							    	<label for="UtubeLink">Video (optional)</label>
							    	<input type="url" class="form-control" id="UtubeLink" placeholder="Youtube Video Url"/>
								</div>
							</div>
						</div>
					</div>
					<a class="btn btn-thm listing_save_btn mt30" href="#">Submit</a>
				</div>
			</div>
            </div>
            </div>
            </section>
    </>
  )
}

export default Forms
