import React from 'react'
import  {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
import {userRegister} from "../connecting/index"
import {login as authLogin} from '../store/authSlice';
import { useDispatch } from 'react-redux';

function SignUp() {
  const Dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const signupFunc =async (data) =>{
    console.log(data);
    await userRegister(data)
    
    
  }
  return (
    <div className='flex flex-col items-center justify-center max-w-96 mx-auto'>
      <div className='w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center'>
            Signup
            <span className='text-blue-500'> Portal</span>
        </h1>
        <form onSubmit={handleSubmit(signupFunc)}>
            <div>
                <label className='p-2 label'>
                    <span className='text-base label-text text-blue-400'> Username</span>
                </label>
                <input type="text" placeholder='enter username' className='input input-bordered input-info w-full mx-2 h-10' 
                    {...register("userName" , {required:true})}
                />
            </div>
            <div>
                <label className='p-2 label'>
                    <span className='text-base label-text text-blue-400'> Fullname</span>
                </label>
                <input type="text" placeholder='enter fullname' className='input input-bordered input-info w-full mx-2 h-10' 
                {...register("fullName" , {required:true})}/>
            </div>
            <div>
                <label className='p-2 label'>
                    <span className='text-base label-text text-blue-400'> Password</span>
                </label>
                <input 
                    type="password" 
                    placeholder='Enter password' 
                    className='input mx-2 input-bordered input-info w-full h-10' 
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long"
                        },
                        
                    })}
                />
            </div>
            <div>
                <label className='p-2 label'>
                    <span className='text-base label-text text-blue-400'>Confirm Password</span>
                </label>
                <input type="password" placeholder='confirm password' className='input mx-2 input-bordered input-info w-full h-10' 
                    {...register("confirm password",{required : true})}
                />
            </div>
            <div className='m-2 flex mt-4 ml-4'>
        Male &nbsp; 
        <input 
          type="radio" 
          value="male" 
          {...register("gender", { required: true })} 
          className="radio radio-info" 
        />
        &nbsp;
        Female &nbsp; 
        <input 
          type="radio" 
          value="female" 
          {...register("gender", { required: true })} 
          className="radio radio-info" 
        />
      </div>
            <Link to="/login" className='text-sm hover:underline hover:text-blue-600 my-2 inline-block ml-4'>
            Have an Account?
            </Link>
            <div>
            <button className="btn btn-outline btn-info w-full m-2">Sign up</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
