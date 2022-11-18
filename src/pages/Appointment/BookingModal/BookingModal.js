import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate,setTreatment,refetch }) => {
    const { name: treatmentName,slots } = treatment //treatment is appointment options
    const date = format(selectedDate, 'PP')
    const {user} = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target; 
        const slot = form.slot.value
        const name = form.name.value; 
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(date, slot, name, email, phone) 
    const booking = {
        appointmentDate: date,
        treatment: treatmentName, 
        patient: name, 
        email, 
        phone,
        slot, 

    }

    //To : Send date to the server 
    // and once date is saved then close the modal 
    // And display success toast


    /**Sending data to the Server */
    fetch(`http://localhost:9000/bookings`, {
        method: 'POST', 
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)
    }).then(res => res.json())
    .then(data => {
        console.log(data)
        
        if(data.acknowledged) {
            setTreatment(null)
            toast.success('Booking Confirmed')
            refetch()
        }
        else {
            toast.error('data.message')
        }
    })

    }



    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        <input type="text" value={date} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full ">
                            {/* <option>Select Your Available Options</option> */}
                            {
                                slots.map((slot, index) => <option key={index}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text"  defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled  className="input input-bordered w-full" />
                        <input  name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-accent w-full max-w-xs' type="submit" value='submit' />


                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;