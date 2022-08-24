import React, { useEffect,useState } from "react";

import "swiper/css";

// import 'swiper/swiper-bundle.css'
// import "./styles.css";

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
// import { BiUserPin } from "react-icons/bi";


const Categories = () => {
  return (
    <>
        <section class="inner_page_breadcrumb style2">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<h2 class="breadcrumb_title">Categories</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">Categories</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
    <div class="container p0">
			<div class="feature-content dn-767">
				{/* <div class="row justify-content-center mt-80 mb45">
					<div class="col-lg-4 text-center">
						<p><em class="text-white">What are you interested in?</em></p>
					</div>
				</div> */}
				<div class="row">
					<div class="col-sm-6 col-md-4 col-xl-2">
						<a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><img src={properties} width="50%" alt=""/></div>
							<div class="content-details">
								<div class="title">Properties</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails">

						<div class="icon-box text-center">
							<div class="icon"><span class=""><img src={properties} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Vehicles</div>
							</div>
						</div>
                        </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={sports} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Sports</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Fashion</div>
							</div>
						</div>
                         </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> </a>
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Furnitures</div>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Constructions</div>
							</div>
						</div>
                         </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Contracts</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={services} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Services</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={projects} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Projects</div>
							</div>
						</div>
                         </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={materials} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Materials</div>
							</div>
						</div>
                        </a>
					</div>
					
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={electronics} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Electronics</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={digitalMarketing} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Digital Marketing</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={photographer} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Photographer</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={leather} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Leathers</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={home} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Home</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={decor} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Decor Items</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={exports} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Exports</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={imports} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Imports</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Agricultures</div>
							</div>
						</div>
                         </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Scraps</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={investments} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Investments</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Finances</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                        <a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Surgical Items</div>
							</div>
						</div>
                             </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Food Orders</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={market} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Market</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={manpower} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Man Power</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Pets</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={fashion} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Packers & Movers</div>
							</div>
						</div>
                         </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails"> 
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={exhibition} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Exhibition</div>
							</div>
						</div>
                    </a>
					</div>
					<div class="col-sm-6 col-md-4 col-xl-2">
                    <a href="/CategoryDetails">
						<div class="icon-box text-center">
							<div class="icon"><span ><img src={ViewMore} width="50%" alt=""/></span></div>
							<div class="content-details">
								<div class="title">Others</div>
							</div>
						</div>
                         </a>
					</div>
					
					
				</div>
			</div>
		</div>
    </>
  )
}

export default Categories