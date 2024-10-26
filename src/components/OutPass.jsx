import React from 'react'
import { useForm } from 'react-hook-form'

function OutPass() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);  
  };

  return (
    <div className='w-full mt-20'>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col max-w-sm mx-auto min-h-96 border-2 space-y-7 min-w-[50%] p-4 rounded-2xl border-black"
      >
        <h1 className='mb-4 text-2xl font-semibold leading-tight text-gray-600'>Request Outpass</h1>
        <select 
          {...register('time', { required: 'Please select a time' })}
          className="block py-2.5 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          <option value="">Choose time</option>
          <option value="12:00">12:00</option>
          <option value="01:00">01:00</option>
          <option value="02:00">02:00</option>
          <option value="03:00">03:00</option>
          <option value="04:00">04:00</option>
        </select>
        {errors.time && <p className="text-red-500 text-xs">{errors.time.message}</p>}

        <input 
          type="text" 
          placeholder="Reason" 
          {...register('reason', { required: 'Reason is required' })}
          className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-700 focus:border-gray-200 focus:outline-none'
        />
        {errors.reason && <p className="text-red-500 text-xs">{errors.reason.message}</p>}

        <input 
          type="text" 
          placeholder="Destination" 
          {...register('destination', { required: 'Destination is required' })}
          className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-700 focus:border-gray-200 focus:outline-none'
        />
        {errors.destination && <p className="text-red-500 text-xs">{errors.destination.message}</p>}

        <div className='flex items-center'>
          <input 
            type="checkbox" 
            {...register('agree', { required: 'You must agree before submitting' })}
            className='w-4 h-4 bg-slate-600'
          />
          <span className='ml-2 text-sm text-gray-500'>I agree to the terms</span>
        </div>
        {errors.agree && <p className="text-red-500 text-xs">{errors.agree.message}</p>}

        <button className="p-[3px] relative" type="submit">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Submit
          </div>
        </button>
      </form>
    </div>
  );
}

export default OutPass;
