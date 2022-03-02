import React from 'react';
import About from '../../components/About/About';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Overview from '../../components/Overview/Overview';
import Services from '../../components/Services/Services';
import Testimonial from '../../components/Testimonial/Testimonial';
import Doctors from '../Doctors/Doctors';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>  
      <Services></Services>
   <Testimonial></Testimonial>
      <Overview></Overview>
      <About></About>
      <Doctors></Doctors>
      <Footer></Footer>
     
    </div>
  );
};

export default Home;