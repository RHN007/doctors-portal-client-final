import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ option }) => {
    const { name, slots } = option
    return (
        <div className="card   bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-primary font-bold text-center">{name}</h2>
                <p>{slots.length>0?slots[0]:'Try Another Day'}</p>
                <p>{slots.length} {slots.length>1?'spaces':'Spaces'} Available</p>
                <div className="card-actions justify-center">
                <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;