import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L11evCvuGHeMm9SkGgB12DjDkbkZM0vdFqbeTtmMYFe68zHlpy84kGnL58siTTTVDmPNZEhu4WQVAZgcdVTECMV00HDeadvRe');

const Payment = () => {
    const { id } = useParams();
    const url = `https://floating-beyond-48588.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-96 bg-neutral text-white my-4">
                <div class="card-body">
                    <p className='font-bold text-orange-500'>Hello,{appointment.patientName}</p>
                    <h2 class="card-title">pay for {appointment.treatment}</h2>
                    <p>your appointment <span className='text-green-600'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>please pay: $<span className='text-green-300'>{appointment.price}</span></p>
                </div>
            </div>
            <div className='card-flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mt-5'>
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;