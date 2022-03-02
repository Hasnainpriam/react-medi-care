import React from 'react';

const Footer = () => {
  return (<div>

    <div className='bg-dark'>
      
      <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5 className='text-light'>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5 className='text-light'>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5 className='text-light'>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5 className='text-light'>Subscribe to our newsletter</h5>
          <p className='text-light'>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between p-4 my-4 border-top">
      <p className='text-light'>© 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
    </div>
  );
};

export default Footer;