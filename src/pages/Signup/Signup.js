import React, { useContext } from 'react';
import useTitle from '../../hooks/UseTitle';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {
    useTitle('SingUp')
    const { register,formState: { errors }, handleSubmit } = useForm();

    const {createUser} = useContext(AuthContext)




    const handleSignUp = data => {
            console.log(data)
            createUser(data.email, data.password )
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.error(err))
    }


    return (
        <div className='h-[800px]  flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className="text-xl text-center">Sing Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>  
            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text' 
                    {...register("name", 
                    {required: 'Name is Required' })} 
                    className="input input-bordered w-full max-w-xs" />
                  {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                </div>  
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email' 
                    {...register("email", 
                    {required: 'Email is required' })} 
                    className="input input-bordered w-full max-w-xs" />
                  {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password'
                     {...register("password", 
                     {required:'Password is Required',
                        minLength: {value:6, message:'Password Must be at least six character or longer'},
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} 
                     
                     className="input input-bordered w-full max-w-xs" />  
                {errors.password && <p className="text-red-600">{errors.password?.message}</p>}  
                   
                </div>
                <input className='btn btn-accent w-full mt-2' type="submit" value='sign up'/>
            </form>
            <p>Already have an Account <Link className='text-secondary' to='/login'>Please Login</Link></p>

            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>SIGNUP WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Signup;