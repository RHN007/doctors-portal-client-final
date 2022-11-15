import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import CardInfo from '../Card/CardInfo';
import DentalHero from '../DentalHero/DentalHero';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div className='mx-5'>
            <h1>this is login </h1>
            <Banner></Banner>
            <CardInfo></CardInfo>
           <Services></Services>
           <DentalHero></DentalHero>
            
        </div>
    );
};

export default Home;