import React from 'react'
import  {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'

function AdminLogin() {

    const {handleSubmit , register} = useForm()

    const loginFunc = (data) => {
        console.log(data);
        
    }
  return (
    <div className='flex flex-col items-center justify-center max-w-96 mx-auto'>
        <div className='w-full p-6 rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center'>
                Admin
                <span className='text-blue-500'> Login</span>
            </h1>

            <form onSubmit={handleSubmit(loginFunc)}>
                <div>
                    <label className='p-2 label'>
                        <span className='text-base label-text text-blue-400'> Username :</span>
                    </label>
                    <input type="text" placeholder='enter username' className='input input-bordered input-info w-full m-2 h-10' 
                            {...register("userName" , {required : true})}
                    />
                </div>
                <div>
                    <label className='p-2 label'>
                        <span className='text-base label-text text-blue-400'> Password :</span>
                    </label>
                    <input type="password" placeholder='enter password' className='input m-2 input-bordered input-info w-full h-10' 
                    {...register("password" , {required : true})}/>
                </div>
                <Link to="/login" className='text-sm hover:underline hover:text-blue-600 my-2 inline-block ml-4'>
                    Login as Student
                </Link>
                <div>
                <button className="btn btn-outline btn-info w-full m-2">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin
