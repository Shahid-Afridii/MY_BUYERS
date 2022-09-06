import React, { useEffect,useState } from "react";

import "swiper/css";
import { BsWhatsapp } from "react-icons/bs";
import {Link} from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs,Autoplay } from "swiper";
import { MdOutlineUpdate } from "react-icons/md";
import mobiles from "../images/ADS/mobile-2.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import 'swiper/swiper-bundle.css'
// import "./styles.css";
import photo_1 from "../images/SVG ICONS/ban.jpeg";
import photo_2 from "../images/SVG ICONS/banner-5.png";
import photo_3 from "../images/SVG ICONS/banner-3.png";
import properties from "../images/SVG ICONS/icons-07.svg";
import leather from "../images/SVG ICONS/icons-08.svg";
import exhibition from "../images/SVG ICONS/icons-25.svg";
import investments from "../images/SVG ICONS/icons-01.svg";
import photographer from "../images/SVG ICONS/icons-05.svg";
import services from "../images/SVG ICONS/icons-09.svg";
import sports from "../images/SVG ICONS/icons-10.svg";
import decor from "../images/SVG ICONS/icons-11.svg";
import fashion from "../images/SVG ICONS/icons-16.svg";
import materials from "../images/SVG ICONS/icons-20.svg";
import projects from "../images/SVG ICONS/icons-02.svg";
import exports from "../images/SVG ICONS/icons-04.svg";
import electronics from "../images/SVG ICONS/icons-21.svg";
import market from "../images/SVG ICONS/icons-06.svg";
import home from "../images/SVG ICONS/icons-24.svg";
import digitalMarketing from "../images/SVG ICONS/icons-36.svg";
import manpower from "../images/SVG ICONS/icons-03.svg";
import imports from "../images/SVG ICONS/icons-26.svg";
import ViewMore from "../images/SVG ICONS/viewmore.png";
import whatsapp from "../images/icons/Whatsapp Icon green.svg";
import { BiUserPin } from "react-icons/bi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./style.css"
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


	window.$('.slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 10,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 4,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
			1200: {
				items: 6,
			}
		}
	});






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
		  
		   {images.map((photo, index) => (
		  <SwiperSlide>
		   <a  href="">
		   <img src={photo.url} alt="" style={{width:"100%",height:"135px"}}/>
		   </a>
		   
			</SwiperSlide>
			))}
	 </Swiper>
	</div>
	{/* <Swiper style={{display: 'flex', justifyContent: "center",flexWrap:"wrap-reverse"}}
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
		  
		   {images.map((photo, index) => (
		  <SwiperSlide>
		   <a  href="">
		   <img src={photo.url} alt="" style={{width:"100%",height:"135px"}}/>
		   </a>
		   
			</SwiperSlide>
			))}
	 </Swiper> */}
	<div class="container pt-3 pb-3">
          <div class="slides owl-carousel owl-theme">
		 				 <div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><img src={properties} style={{width:"33%"}} alt=""/></div>
							<div class="content-details">
								<div class="title">Properties</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span class=""><img src={properties} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Vehicles</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={sports} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Sports</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion}  style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Fashion</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion}  style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Furnitures</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Constructions</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Contracts</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={services} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Services</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={projects} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Projects</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={materials} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Materials</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={electronics} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Electronics</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={digitalMarketing} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Digital Marketing</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={photographer} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Photographer</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={home} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Home</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={decor} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Decor Items</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={exports} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Exports</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={imports} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Imports</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Agricultures</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Scraps</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={investments} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Investments</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Finances</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Surgical Items</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Food Orders</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={market} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Market</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={manpower} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Man Power</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Pets</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={fashion} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Packers & Movers</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={exhibition} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Exhibition</div>
							</div>
						</div>
						<div class="icon text-centers" style={{cursor:"pointer"}}>
							<div class="icon"><span ><img src={ViewMore} style={{width:"33%"}} alt=""/></span></div>
							<div class="content-details">
								<div class="title">Others</div>
							</div>
						</div>
          </div>
        </div>
	<section id="feature-property" class="feature-property pt0  border-bottom" style={{marginTop:"150px"}}>
		{/* <div class="container p0">
			<div class="feature-content dn-767">
				<div class="row justify-content-center mt-80 mb45">
					<div class="col-lg-4 text-centers">
						<p><em class="text-white">What are you interested in?</em></p>
					</div>
				</div>
				<div class="row">
					<div class=" col-sm-6 col-md-4 col-xl-2">
						<a href="/CategoryDetails">
						<div class="icon-box text-centerss">
							<div class="icon"><img src={properties} width="50%" alt=""/></div>
							<div class="content-details">
								<div class="title">Properties</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
					<a href="/CategoryDetails">
						<div class="icon-box text-centerss">
							<div class="icon"><span class=""><img src={properties} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Vehicles</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
					<a href="/CategoryDetails">
						<div class="icon-box text-centerss">
							<div class="icon"><span ><img src={sports} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Sports</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
					<a href="/CategoryDetails">
						<div class="icon-box text-centerss">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Fashion</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
					<a href="/CategoryDetails">
						<div class="icon-box text-centerss">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Furnitures</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">

						<div class="icon-box text-centerss">
							<a class="content-details" href="/categories">
						<div class="icon"><span ><img src={ViewMore} width="50%" alt=""/></span></div>
								<div class="title">View More</div>
							</a>
						</div>
					</div>
					
				</div>
			</div>
		</div> */}
		

		<div className="container" style={{maxWidth:"1410px"}}>
		<div class="main-title text-centers">
						<h2>All Products</h2>
						{/* <p>Discover some of the most popular listings in Toronto based on user reviews and ratings.</p> */}
					</div>
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
											
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											
										<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +91 90927  45806</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											
										<button type="button" class="btn btn-outline-success">View No</button>
										<button type="button" class="btn btn-outline"><img src={whatsapp}></img></button>
										{/* <button type="button" class="btn btn-outline"><img src={whatsapp}></img></button> */}
											
										</ul>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list" style={{width:"100%"}}>
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
											
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
									
											<li class="list-inline-item"><Link to="/productDetails" style={{textDecoration:"underline"}}>View Details</Link></li>
										</ul>
										<ul class="fp_meta float-right mb0">
										<button type="button" class="btn btn-outline-success">₹ 100 </button>
											
										</ul>
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
											
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											
										<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +91 90927  45806</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											
										<button type="button" class="btn btn-outline-success">View No</button>
										<button type="button" class="btn btn-outline"><img src={whatsapp}></img></button>
										{/* <button type="button" class="btn btn-outline"><img src={whatsapp}></img></button> */}
											
										</ul>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list" style={{width:"100%"}}>
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
											
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
									
											<li class="list-inline-item"><Link to="/productDetails" style={{textDecoration:"underline"}}>View Details</Link></li>
										</ul>
										<ul class="fp_meta float-right mb0">
										<button type="button" class="btn btn-outline-success">₹ 100 </button>
											
										</ul>
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
											
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
											
										<li class="list-inline-item"><a href="#"><span class="flaticon-phone pr5"></span> +91 90927  45806</a></li>
										</ul>
										<ul class="fp_meta float-right mb0">
											
										<button type="button" class="btn btn-outline-success">View No</button>
										<button type="button" class="btn btn-outline"><img src={whatsapp}></img></button>
										{/* <button type="button" class="btn btn-outline"><img src={whatsapp}></img></button> */}
											
										</ul>
									</div>
								</div>
							</div>
				</div>
				<div className="col-lg-6 ">
				<div class="feat_property list" style={{width:"100%"}}>
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
											
										</ul>
									</div>
									<div class="fp_footer">
										<ul class="fp_meta float-left mb0">
									
											<li class="list-inline-item"><Link to="/productDetails" style={{textDecoration:"underline"}}>View Details</Link></li>
										</ul>
										<ul class="fp_meta float-right mb0">
										<button type="button" class="btn btn-outline-success">₹ 100 </button>
											
										</ul>
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