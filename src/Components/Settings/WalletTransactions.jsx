import React,{ useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { FaRupeeSign } from "react-icons/fa";
import { GrImage } from "react-icons/gr";
const WalletTransactions = () => {
   
  return (
    <>
    <secton class="our-dashbord dashbord bgc-f4">
        <div className="container">
        <div class="row">
        <div class="col-lg-12 mb10 mt-5">
					<div class="breadcrumb_content style2">
						<h2 class="breadcrumb_title float-left">Hello, Shahid!</h2>
						{/* <p class="float-right">Wallet Transactions Detailsl</p> */}
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
					<div class="ff_one">
						<div class="icon"><FaRupeeSign style={{fontSize:"25px"}}/></div>
						<div class="detais">
							<div class="timer">1000</div>
							<p>Total Balance</p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
					<div class="ff_one ">
						<div class="icon"><GrImage style={{fontSize:"25px"}}/></div>
						<div class="detais">
							<div class="timer">400</div>
							<p>Buyer</p>
						</div>
					</div>
				</div>
				<div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
					<div class="ff_one ">
						<div class="icon"><span class="flaticon-chat"></span></div>
						<div class="detais">
							<div class="timer">600</div>
							<p>Seller</p>
						</div>
					</div>
				</div>
				{/* <div class="col-sm-6 col-md-6 col-lg-6 col-xl-3">
					<div class="ff_one style4">
						<div class="icon"><span class="flaticon-love"></span></div>
						<div class="detais">
							<div class="timer">32</div>
							<p>Bookmarks</p>
						</div>
					</div>
				</div> */}
                <div class="col-lg-5 col-xl-4 mb-5" style={{width:"100%"}}>
					<div class="recent_job_activity">
						<h4 class="title">Transactions</h4>
						<div class="grid style1">
							<ul>
								<li class="list-inline-item"><div class="icon"><span class="fa fa-check"></span></div></li>
								<li class="list-inline-item"><p>Your earned <span>5 coins</span><br/>
                                1 hour ago
                                </p></li>
							</ul>
						</div>
						<div class="grid style1">
							<ul>
								<li class="list-inline-item"><div class="icon"><span class="fa fa-check"></span></div></li>
								<li class="list-inline-item"><p>Your earned <span>5 coins</span><br/>
                                1 hour ago
                                </p></li>
							</ul>
						</div>
						<div class="grid style2">
							<ul>
								<li class="list-inline-item"><div class="icon"><span class="fa fa-check"></span></div></li>
								<li class="list-inline-item "><p>Your earned <span>5 coins</span><br/>
                                1 hour ago
                                </p></li>
							</ul>
						</div>
						
						{/* <div class="grid style3">
							<ul>
								<li class="list-inline-item"><div class="icon"><span class="flaticon-note"></span></div></li>
								<li class="list-inline-item"><p>Pitter Parker left a review 3.4 on John's <span>John's Coffee Shop</span></p></li>
							</ul>
						</div>
						<div class="grid style4">
							<ul>
								<li class="list-inline-item"><div class="icon"><span class="flaticon-love"></span></div></li>
								<li class="list-inline-item"><p>Someone bookmarked your <span>Burger House</span> listing!</p></li>
							</ul>
						</div>
						<div class="grid style5">
							<ul>
								<li class="list-inline-item"><div class="icon"><span class="fa fa-check"></span></div></li>
								<li class="list-inline-item"><p><span>Your listing Holiday Home has been approved!</span></p></li>
							</ul>
						</div>
						<div class="grid style6 mb0">
							<ul class="pb0 mb0 bb_none">
								<li class="list-inline-item"><div class="icon"><span class="flaticon-love"></span></div></li>
								<li class="list-inline-item"><p><span>Someone bookmarked your Moonlight Hotel listing!</span></p></li>
							</ul>
						</div> */}
					</div>
				</div>
                </div>
        </div>

    </secton>

    </>
  )
}

export default WalletTransactions