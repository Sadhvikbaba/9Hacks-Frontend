import React from 'react'
import  {useForm} from "react-hook-form"
import { Link } from 'react-router-dom';
import {login as authLogin} from '../store/authSlice';
import { useDispatch } from 'react-redux';
import { userRegister } from '../connecting';

function Login() {
    const Dispatch = useDispatch();

    const {handleSubmit , register} = useForm()

    const loginFunc = async(data) => {
        console.log(data);
        await userRegister(data)
        .then((res) => {
            console.log(res);
            Dispatch(authLogin(res));
        })

        
    }
  return (
    <div className='flex flex-col items-center justify-center max-w-96 mx-auto'>
        <div className='w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center'>
                Student
                <span className='text-blue-500'> Login</span>
            </h1>

            <form onSubmit={handleSubmit(loginFunc)}>
                <div>
                    <label className='p-2 label'>
                        <span className='text-base label-text text-blue-400'> Id : </span>
                    </label>
                    <input type="text" placeholder='enter username' className='input input-bordered input-info w-full m-2 h-10' 
                            {...register("Id" , {required : true})}
                    />
                </div>
                <div>
                    <label className='p-2 label'>
                        <span className='text-base label-text text-blue-400'> Password : </span>
                    </label>
                    <input type="password" placeholder='enter password' className='input m-2 input-bordered input-info w-full h-10' 
                    {...register("password" , {required : true})}/>
                </div>
                <Link to="/admin-login" className='text-sm hover:underline hover:text-blue-600 my-2 inline-block ml-4'>
                    Login as Admin
                </Link>
                <div>
                <button className="btn btn-outline btn-info w-full m-2">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login

/*
email AdmissionNo password School Branch fullName section gender semester phoneNumber Batch
*/ 