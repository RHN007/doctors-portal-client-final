import React from 'react';
import img from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const DentalHero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className='md:w-1/2 flex justify-center md:p-16 '>
          <img src={img} className="lg:w-1/2 rounded-lg shadow-2xl" alt='treatment' />
        </div>
        <div className=' md:w-1/2'>
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <PrimaryButton>Getting Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalHero;