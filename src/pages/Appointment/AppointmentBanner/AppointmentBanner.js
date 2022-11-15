
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import useTitle from '../../../hooks/UseTitle';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    useTitle('Appointment')
    

    return (
        <header className='my-6'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist chair' />
                    <div className='mr-6'>
                        <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        showOutsideDays 
                        
                        />

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;