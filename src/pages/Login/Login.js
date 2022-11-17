import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/UseTitle";

const Login = () => {
    useTitle('Login')
    const {signIn} = useContext(AuthContext)
    const { register,formState: { errors }, handleSubmit } = useForm();
    const[ userError, setUserError] = useState('')
  
    const onSubmit = data => {
        console.log(data)
        setUserError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user; 
            console.log(user)
            
        })
        .catch(err => {
            setUserError(err.message)
            console.error(err.message)})

       
    }

    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>    
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
                            minLength: {value:6, message:'Password Must be at least six character or longer'}
                        })} 
                         
                         className="input input-bordered w-full max-w-xs" />  
                    {errors.password && <p className="text-red-600">{errors.password?.message}</p>}  
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value='Login'/>
                    {
                        userError && <p className="text-red-600">{userError}</p>
                    }
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to='/signup'>Create New Account</Link></p>

                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;