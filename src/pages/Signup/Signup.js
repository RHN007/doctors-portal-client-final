import React, { useContext, useState } from 'react';
import useTitle from '../../hooks/UseTitle';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';


const Signup = () => {
    useTitle('SingUp')
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const navigate = useNavigate()
    const handleSignUp = data => {
            console.log(data)
            setSignUpError('')
            createUser(data.email, data.password )
            .then(result => {
                const user = result.user
                console.log(user)
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email)
                })
                .catch(err => console.log(err))
            })
            .catch(error =>{ 
                console.error(error)
                toast.error(error.message)
                setSignUpError('')
            })
    }

//Save user to database 
const saveUser = (name, email) => {
    const user = {name, email}; 
    fetch(`http://localhost:9000/users`,{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log('save User',data)
       getUserToken(email)
    
    })

}



const getUserToken = email => {
    fetch(`http://localhost:9000/jwt?email=${email}`)
    .then(res => res.json())
    .then(data => {
        if(data.accessToken){
            localStorage.setItem('accessToken', data.accessToken)
            navigate('/')
        }
    })
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
                {
                    signUpError && <p className='text-red-600'>{signUpError}</p>
                }
            </form>
            <p>Already have an Account <Link className='text-secondary' to='/login'>Please Login</Link></p>

            <div className="divider">OR</div>
            <button className='btn btn-outline w-full'>SIGNUP WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Signup;