import React from "react";
// import { BiUserPin } from "react-icons/si";
import { FiStar } from "react-icons/fi";
import { MdOutlineUpdate } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { BiUserPin } from "react-icons/bi";
import mobiles from "../../images/ADS/mobile-2.jpeg";

const WishList = () => {
  return (
    <>
      {/* <!-- Inner Page Breadcrumb --> */}
      <section class="inner_page_breadcrumb style2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <div class="breadcrumb_content">
                <h2 class="breadcrumb_title">Wishlist</h2>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Wishlist
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Main Blog Post Content --> */}
      <section class="blog_post_container pb80">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">

                <div class="col-md-6 col-lg-4 col-xl-4">
                  <div class="for_blog feat_property">
                    <div class="thumb">
                      <img
                        class="img-whp"
                        src={mobiles}
                        alt="1.jpg"
                        style={{ height: "270px" }}
                      />
                      <div
                        class="tag bgc-thm"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a class="text-white" href="#">
                          <FiStar
                            style={{
                              fontSize: "20px",
                              marginBottom: "4px",
                              marginRight: "5px",
                            }}
                          />
                          <span style={{ fontWeight: "600" }}>5.0</span>
                        </a>
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          fontSize: " 14px",
                          right: "1px",
                          lineHeight: "20px",
                          padding: "3px 15px",
                          position: "absolute",
                          textTransform: "capitalize",
                          marginLeft: "10px",
                          top: "20px",
                        }}
                      >
                        <a class="text-white" href="#">
                          <AiFillHeart
                            style={{ fontSize: "30px", color: "black" }}
                          />
                          {/* <span style={{fontWeight:"600"}}>5.0</span> */}
                        </a>
                      </div>
                      {/* <div class="tag bgc-thm"> */}

                      {/* </div> */}

                      {/* <div class="tag bgc-thm"><a class="text-white" href="#"><BiUserPin style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>Shahid Afridi</span></a></div> */}
                    </div>
                    <div class="details">
                      <div class="tc_content">
                        <div class="bp_meta">
                          <ul>
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
                             Shahid Afridi
                            </li>
                            {/* <li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><FiStar/> </a> 5.0 </li> */}
                            <li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px" }} />{" "}
                                24 December, 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h4>Iphone 13 pro max with 128gb</h4>
                        <h5 style={{ fontSize: "20px" }}> ₹ 20,000 </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                  <div class="for_blog feat_property">
                    <div class="thumb">
                      <img
                        class="img-whp"
                        src={mobiles}
                        alt="1.jpg"
                        style={{ height: "270px" }}
                      />
                      <div
                        class="tag bgc-thm"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a class="text-white" href="#">
                          <FiStar
                            style={{
                              fontSize: "20px",
                              marginBottom: "4px",
                              marginRight: "5px",
                            }}
                          />
                          <span style={{ fontWeight: "600" }}>5.0</span>
                        </a>
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          fontSize: " 14px",
                          right: "1px",
                          lineHeight: "20px",
                          padding: "3px 15px",
                          position: "absolute",
                          textTransform: "capitalize",
                          marginLeft: "10px",
                          top: "20px",
                        }}
                      >
                        <a class="text-white" href="#">
                          <AiFillHeart
                            style={{ fontSize: "30px", color: "black" }}
                          />
                          {/* <span style={{fontWeight:"600"}}>5.0</span> */}
                        </a>
                      </div>
                      {/* <div class="tag bgc-thm"> */}

                      {/* </div> */}

                      {/* <div class="tag bgc-thm"><a class="text-white" href="#"><BiUserPin style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>Shahid Afridi</span></a></div> */}
                    </div>
                    <div class="details">
                      <div class="tc_content">
                        <div class="bp_meta">
                          <ul>
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
                              Shahid Afridi
                            </li>
                            {/* <li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><FiStar/> </a> 5.0 </li> */}
                            <li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px" }} />{" "}
                                24 December, 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h4>Iphone 13 pro max with 128gb</h4>
                        <h5 style={{ fontSize: "20px" }}> ₹ 20,000 </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                  <div class="for_blog feat_property">
                    <div class="thumb">
                      <img
                        class="img-whp"
                        src={mobiles}
                        alt="1.jpg"
                        style={{ height: "270px" }}
                      />
                      <div
                        class="tag bgc-thm"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a class="text-white" href="#">
                          <FiStar
                            style={{
                              fontSize: "20px",
                              marginBottom: "4px",
                              marginRight: "5px",
                            }}
                          />
                          <span style={{ fontWeight: "600" }}>5.0</span>
                        </a>
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          fontSize: " 14px",
                          right: "1px",
                          lineHeight: "20px",
                          padding: "3px 15px",
                          position: "absolute",
                          textTransform: "capitalize",
                          marginLeft: "10px",
                          top: "20px",
                        }}
                      >
                        <a class="text-white" href="#">
                          <AiFillHeart
                            style={{ fontSize: "30px", color: "black" }}
                          />
                          {/* <span style={{fontWeight:"600"}}>5.0</span> */}
                        </a>
                      </div>
                      {/* <div class="tag bgc-thm"> */}

                      {/* </div> */}

                      {/* <div class="tag bgc-thm"><a class="text-white" href="#"><BiUserPin style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>Shahid Afridi</span></a></div> */}
                    </div>
                    <div class="details">
                      <div class="tc_content">
                        <div class="bp_meta">
                          <ul>
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
                              Shahid Afridi
                            </li>
                            {/* <li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><FiStar/> </a> 5.0 </li> */}
                            <li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px" }} />{" "}
                                24 December, 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h4>Iphone 13 pro max with 128gb</h4>
                        <h5 style={{ fontSize: "20px" }}> ₹ 20,000 </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                  <div class="for_blog feat_property">
                    <div class="thumb">
                      <img
                        class="img-whp"
                        src={mobiles}
                        alt="1.jpg"
                        style={{ height: "270px" }}
                      />
                      <div
                        class="tag bgc-thm"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a class="text-white" href="#">
                          <FiStar
                            style={{
                              fontSize: "20px",
                              marginBottom: "4px",
                              marginRight: "5px",
                            }}
                          />
                          <span style={{ fontWeight: "600" }}>5.0</span>
                        </a>
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          fontSize: " 14px",
                          right: "1px",
                          lineHeight: "20px",
                          padding: "3px 15px",
                          position: "absolute",
                          textTransform: "capitalize",
                          marginLeft: "10px",
                          top: "20px",
                        }}
                      >
                        <a class="text-white" href="#">
                          <AiFillHeart
                            style={{ fontSize: "30px", color: "black" }}
                          />
                          {/* <span style={{fontWeight:"600"}}>5.0</span> */}
                        </a>
                      </div>
                      {/* <div class="tag bgc-thm"> */}

                      {/* </div> */}

                      {/* <div class="tag bgc-thm"><a class="text-white" href="#"><BiUserPin style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>Shahid Afridi</span></a></div> */}
                    </div>
                    <div class="details">
                      <div class="tc_content">
                        <div class="bp_meta">
                          <ul>
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
                              Shahid Afridi
                            </li>
                            {/* <li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><FiStar/> </a> 5.0 </li> */}
                            <li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px" }} />{" "}
                                24 December, 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h4>Iphone 13 pro max with 128gb</h4>
                        <h5 style={{ fontSize: "20px" }}> ₹ 20,000 </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                  <div class="for_blog feat_property">
                    <div class="thumb">
                      <img
                        class="img-whp"
                        src={mobiles}
                        alt="1.jpg"
                        style={{ height: "270px" }}
                      />
                      <div
                        class="tag bgc-thm"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a class="text-white" href="#">
                          <FiStar
                            style={{
                              fontSize: "20px",
                              marginBottom: "4px",
                              marginRight: "5px",
                            }}
                          />
                          <span style={{ fontWeight: "600" }}>5.0</span>
                        </a>
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          fontSize: " 14px",
                          right: "1px",
                          lineHeight: "20px",
                          padding: "3px 15px",
                          position: "absolute",
                          textTransform: "capitalize",
                          marginLeft: "10px",
                          top: "20px",
                        }}
                      >
                        <a class="text-white" href="#">
                          <AiFillHeart
                            style={{ fontSize: "30px", color: "black" }}
                          />
                          {/* <span style={{fontWeight:"600"}}>5.0</span> */}
                        </a>
                      </div>
                      {/* <div class="tag bgc-thm"> */}

                      {/* </div> */}

                      {/* <div class="tag bgc-thm"><a class="text-white" href="#"><BiUserPin style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>Shahid Afridi</span></a></div> */}
                    </div>
                    <div class="details">
                      <div class="tc_content">
                        <div class="bp_meta">
                          <ul>
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
                              Shahid Afridi
                            </li>
                            {/* <li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><FiStar/> </a> 5.0 </li> */}
                            <li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px" }} />{" "}
                                24 December, 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h4>Iphone 13 pro max with 128gb</h4>
                        <h5 style={{ fontSize: "20px" }}> ₹ 20,000 </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                  <div class="for_blog feat_property">
                    <div class="thumb">
                      <img
                        class="img-whp"
                        src={mobiles}
                        alt="1.jpg"
                        style={{ height: "270px" }}
                      />
                      <div
                        class="tag bgc-thm"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <a class="text-white" href="#">
                          <FiStar
                            style={{
                              fontSize: "20px",
                              marginBottom: "4px",
                              marginRight: "5px",
                            }}
                          />
                          <span style={{ fontWeight: "600" }}>5.0</span>
                        </a>
                      </div>
                      <div
                        style={{
                          borderRadius: "10px",
                          fontSize: " 14px",
                          right: "1px",
                          lineHeight: "20px",
                          padding: "3px 15px",
                          position: "absolute",
                          textTransform: "capitalize",
                          marginLeft: "10px",
                          top: "20px",
                        }}
                      >
                        <a class="text-white" href="#">
                          <AiFillHeart
                            style={{ fontSize: "30px", color: "black" }}
                          />
                          {/* <span style={{fontWeight:"600"}}>5.0</span> */}
                        </a>
                      </div>
                      {/* <div class="tag bgc-thm"> */}

                      {/* </div> */}

                      {/* <div class="tag bgc-thm"><a class="text-white" href="#"><BiUserPin style={{fontSize:"20px",marginBottom:"1px",marginRight:"5px"}}/> <span style={{fontWeight:"600"}}>Shahid Afridi</span></a></div> */}
                    </div>
                    <div class="details">
                      <div class="tc_content">
                        <div class="bp_meta">
                          <ul>
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
                              Shahid Afridi
                            </li>
                            {/* <li class="list-inline-item"><a href="#" style={{fontSize:"20px"}}><FiStar/> </a> 5.0 </li> */}
                            <li class="list-inline-item">
                              <a href="#">
                                <MdOutlineUpdate style={{ fontSize: "25px" }} />{" "}
                                24 December, 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                        <h4>Iphone 13 pro max with 128gb</h4>
                        <h5 style={{ fontSize: "20px" }}> ₹ 20,000 </h5>
                      </div>
                    </div>
                  </div>
                </div>
             
               
              
  
            
              </div>
              {/* <div class="row">
                <div class="col-lg-12">
                  <div class="mbp_pagination mt10">
                    <ul class="page_navigation">
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          {" "}
                          <span class="fa fa-angle-left"></span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">
                          3 <span class="sr-only">(current)</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          ...
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          15
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          <span class="fa fa-angle-right"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishList;
