import React from 'react';
import './Testimonial.css'
const Testimonial = () => {
  return (
    <div className='testimonial py-3'>
      <h1 className='my-3 '>What our patients say</h1>
      <span className="divider mb-3 mt-4"></span>
      <div className="container mt-5 mb-5">
    <div className="row g-2">
        <div className="col-md-4">
            <div className="card p-3 text-center px-4">
                <div className="user-image"> <img src="https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle" width="80"/> </div>
                <div className="user-content">
                    <h5 className="mb-0">Bruce Hardy</h5> <span>Software Developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-3 text-center px-4">
                <div className="user-image"> <img src="https://images.pexels.com/photos/5649997/pexels-photo-5649997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle" width="80"/> </div>
                <div className="user-content">
                    <h5 className="mb-0">Mark Smith</h5> <span>Web Developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card p-3 text-center px-4">
                <div className="user-image"> <img src="https://images.pexels.com/photos/4681885/pexels-photo-4681885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="rounded-circle" width="80"/> </div>
                <div className="user-content">
                    <h5 className="mb-0">Veera Duncan</h5> <span>Software Architect</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default Testimonial;