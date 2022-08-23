import React, { useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsWhatsapp } from "react-icons/bs";
import {Link} from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs,Autoplay } from "swiper";
import { MdOutlineUpdate } from "react-icons/md";
// import 'swiper/swiper-bundle.css'
// import "./styles.css";
import photo_1 from "../images/SVG ICONS/ban.jpeg";
import photo_2 from "../images/SVG ICONS/banner-5.png";
import photo_3 from "../images/SVG ICONS/banner-3.png";
import properties from "../images/SVG ICONS/icons-07.svg";
import sports from "../images/SVG ICONS/icons-10.svg";
import fashion from "../images/SVG ICONS/icons-16.svg";
import ViewMore from "../images/SVG ICONS/viewmore.png";
import whatsapp from "../images/icons/Whatsapp Icon green.svg";
import { BiUserPin } from "react-icons/bi";

// import photo_2 from "./assets/02.jpg";

import "./style.css"
const Home = () => {
	SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
	const images = [
		// {
		//   url: photo_1,
		//   alternativeText: "Sweden Photo One"
		// },
		{
		  url: photo_2,
		  alternativeText: "Sweden Photo Two"
		},
		// {
		//   url: photo_3,
		//   alternativeText: "Sweden Photo Two"
		// },
		
	  ];
    
useEffect(() => {
   /*  Testimonial-Slider-Owl-carousel  */
   if(window.$('.popular_listing_slider1').length){
    window.$('.popular_listing_slider1').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        nav:false,
        rtl:false,
        autoplayHoverPause:false,
        autoplay: false,
        singleItem: true,
        smartSpeed: 1200,
        navText: [
          '<i class="fa fa-arrow-left"></i>',
          '<i class="fa fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            767: {
                items: 1,
                center: false
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            },
            1280: {
                items: 3
            }
        }
    })
}
}, []);
  

  return (
    <>
    <div class="wrapper mb-5">
	{/* <div class="preloader"></div> */}
    {/* <!-- Feature Properties --> */}


	<div >
       
	<Swiper style={{display: 'flex', justifyContent: "center",flexWrap:"wrap-reverse"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
	   {/* {Array.isArray(banner) && banner.length !== 0 ? (
		banner?.map((Banner,i) => ( */}
		  
		   {images.map((photo, index) => (
		  <SwiperSlide>
		   {/* slide{i} */}
		   <a  href="">
		   <img src={photo.url} alt="" style={{width:"100%",height:"135px"}}/>
		   </a>
		   
			</SwiperSlide>
			))}
		 
		   

{/* ))
) : 
// false
(
<div class="spinner-border" role="status">
<span class="sr-only"> </span>
</div>
)

}  */}
	 </Swiper>
	</div>

	<section id="feature-property" class="feature-property pt0  border-bottom" style={{marginTop:"150px"}}>
		<div class="container p0">
			<div class="feature-content dn-767">
				<div class="row justify-content-center mt-80 mb45">
					<div class="col-lg-4 text-center">
						<p><em class="text-white">What are you interested in?</em></p>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-6 col-md-4 col-xl-2">
						<a href="/propertyDetails">
						<div class="icon-box text-center">
							<div class="icon"><img src={properties} width="50%" alt=""/></div>
							<div class="content-details">
								<div class="title">Properties</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
						<div class="icon-box text-center">
							<div class="icon"><span class=""><img src={properties} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Vehicles</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={sports} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Sports</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Fashion</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Furnitures</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
						<div class="icon-box text-center">
						<div class="icon"><span ><img src={ViewMore} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">View More</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="container pt100-767">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="main-title text-center">
						<h2>The Most Popular Things to Do in the City</h2>
						<p>Discover some of the most popular listings in Toronto based on user reviews and ratings.</p>
					</div>
				</div>
				<div class="col-lg-12">
					<div class="popular_listing_slider1">
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg"/>
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
										<h5 style={{ fontSize: "20px" }}> ₹ 20,000 </h5>
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
											<li class="list-inline-item"><a href="#">View Details</a></li>
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
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg"/>
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
										<h5 style={{ fontSize: "20px" }}> ₹ 20,000 </h5>
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
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent2.svg" alt="agent2.svg"/></a></div>
										<h4>Amrutha Lounge</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon4.svg" alt="icon4.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Restaurant</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent3.svg" alt="agent3.svg"/></a></div>
										<h4>The Waldorf Hilton</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon5.svg" alt="icon5.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Restaurant</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul>
										<ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent1.svg" alt="agent1.svg"/></a></div>
										<h4>Adventure High Ropes</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon3.svg" alt="icon3.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Outdoor Activities</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent2.svg" alt="agent2.svg"/></a></div>
										<h4>Amrutha Lounge</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon4.svg" alt="icon4.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Restaurant</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent3.svg" alt="agent3.svg"/></a></div>
										<h4>The Waldorf Hilton</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon5.svg" alt="icon5.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Restaurant</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul>
										<ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent1.svg" alt="agent1.svg"/></a></div>
										<h4>Adventure High Ropes</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon3.svg" alt="icon3.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Outdoor Activities</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent2.svg" alt="agent2.svg"/></a></div>
										<h4>Amrutha Lounge</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon4.svg" alt="icon4.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Restaurant</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent3.svg" alt="agent3.svg"/></a></div>
										<h4>The Waldorf Hilton</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon5.svg" alt="icon5.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Restaurant</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp1.jpg" alt="fp1.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
										</ul>
										<ul class="tag2 mb0">
											<li class="list-inline-item"><a href="#">Featured</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent1.svg" alt="agent1.svg"/></a></div>
										<h4>Adventure High Ropes</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon3.svg" alt="icon3.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Outdoor Activities</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp2.jpg" alt="fp2.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent2.svg" alt="agent2.svg"/></a></div>
										<h4>Amrutha Lounge</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon4.svg" alt="icon4.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Restaurant</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="feat_property">
								<div class="thumb">
									<img class="img-whp" src="images/property/fp3.jpg" alt="fp3.jpg"/>
									<div class="thmb_cntnt">
										<ul class="tag mb0">
											<li class="list-inline-item"><a href="#">$$$$</a></li>
											<li class="list-inline-item"><a href="#">Open</a></li>
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
										<div class="badge_icon"><a href="#"><img src="images/icons/agent3.svg" alt="agent3.svg"/></a></div>
										<h4>The Waldorf Hilton</h4>
										<p>But I must explain to you how all this mistaken idea...</p>
										<ul class="prop_details mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +61-8181-123</a></li>
											<li class="list-inline-item"><a href="#"><span class="flaticon-pin pr5"></span> New York</a></li>
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											<li class="list-inline-item"><a href="#"><img src="images/icons/icon5.svg" alt="icon5.svg"/></a></li>
											<li class="list-inline-item"><a href="#">Restaurant</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											<li class="list-inline-item"><a href="#"><span class="flaticon-zoom"></span></a></li>
											<li class="list-inline-item"><a class="icon" href="#"><span class="flaticon-love"></span></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
    </>
  )
}

export default Home