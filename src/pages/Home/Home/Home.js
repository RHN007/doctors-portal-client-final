import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import CardInfo from '../Card/CardInfo';
import DentalHero from '../DentalHero/DentalHero';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';



const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <CardInfo></CardInfo>
           <Services></Services>
           <DentalHero></DentalHero>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;