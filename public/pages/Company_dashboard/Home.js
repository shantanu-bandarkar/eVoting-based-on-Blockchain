import * as React from 'react'
import Admin from './Admin'
import { ReactDOM, Router ,Route } from 'react'
function Home() {
  return (
    <div>
      {/* <a class="menu-toggle rounded" href="#"><i class="fas fa-bars"></i></a> */}
	  <section class="content-section bg-light" id="about">
		  <div class="container px-4 px-lg-5 text-center">
			  <div class="row gx-4 gx-lg-5 justify-content-center">
				  <div class="col-lg-10">
					  <p class="lead mb-5">
						  Advantages of Online Voting 
						  <a href="https://pubmed.ncbi.nlm.nih.gov/34502764/">Cheak Here...</a>
						  !
					  </p>
					 
				  </div>
			  </div>
		  </div>
	  </section>
	  <section class="content-section bg-primary text-white text-center" id="services">
		  <div class="container px-4 px-lg-5">
			  <div class="content-section-heading">
				  <h3 class="text-secondary mb-0">Services</h3>
				  <h2 class="mb-5">What We Offer</h2>
			  </div>
			  <div class="row gx-4 gx-lg-5">
				  <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
					  <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-screen-smartphone"></i></span>
					  <h4><strong>Immutable</strong></h4>
					  <p class="text-faded mb-0"></p>
				  </div>
				  <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
					  <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-pencil"></i></span>
					  <h4><strong>Faster</strong></h4>
					  </div>
				  <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
					  <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-like"></i></span>
					  <h4><strong>Transparent</strong></h4>
					  <p class="text-faded mb-0">
						  
						  <i class="fas fa-heart"></i>
						  
					  </p>
				  </div>
				  <div class="col-lg-3 col-md-9">
					  <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-mustache"></i></span>
					  <h4><strong>Any Question...</strong></h4>
					  
				  </div>
			  </div>
		  </div>
	  </section>
		                
     </div>
  )
}

export default Home
