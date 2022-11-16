import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvaiableAppointments/AvaiableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
         
            <AppointmentBanner 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate}   
            ></AppointmentBanner>
            
            
            
            <AvailableAppointments
                selectedDate={selectedDate}
            
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;