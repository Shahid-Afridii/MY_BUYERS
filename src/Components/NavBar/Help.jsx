import React from 'react'

const Help = () => {
  return (
    <>
        <section class="inner_page_breadcrumb style2">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-xl-6">
					<div class="breadcrumb_content">
						<h2 class="breadcrumb_title">Help</h2>
						<ol class="breadcrumb">
						    <li class="breadcrumb-item"><a href="#">Home</a></li>
						    <li class="breadcrumb-item active" aria-current="page">Help</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	</section>
                <div class="container">
                    <div class="row">
                    <div class="col-md-12 col-lg-12">
					<div class="shortcode_widget_tab">
						
						<div class="ui_kit_tab style2 mt30">
							{/* <!-- Nav tabs --> */}
							<ul class="nav nav-tabs" role="tablist">
								<li class="nav-item">
							    	<a class="nav-link active" data-toggle="tab" href="#home2" style={{width:"100%"}}>Privacy Policy</a>
							    </li>
								<li class="nav-item">
							    	<a class="nav-link" data-toggle="tab" href="#menu4"  style={{width:"100%"}}>Terms & Conditions</a>
							    </li>
								{/* <li class="nav-item">
							    	<a class="nav-link" data-toggle="tab" href="#menu5">Items 3</a>
							    </li> */}
							</ul>
							{/* <!-- Tab panes --> */}
							<div class="tab-content">
							    <div id="home3" class="container tab-pane active">
									<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. <br/><br/>Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus.</p>
							    </div>
							    <div id="menu4" class="container tab-pane fade">
									<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. <br/><br/>Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus.</p>
							    </div>
							    <div id="menu5" class="container tab-pane fade">
									<p>Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. <br/><br/>Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus.</p>
							    </div>
							</div>
						</div>
					</div>
				</div>
                    </div>
                </div>
    </>
  )
}

export default Help