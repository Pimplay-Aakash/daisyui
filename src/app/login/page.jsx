import React from 'react'

const LoginPage = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center mx-auto p-8 mt-4 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold mb-6'>Login</h2>

            <form action="">
                <div className='mb-4'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" className='input input-bordered w-full' placeholder='Example@gmail.com' />

                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='label'>Password</label>
                    <input type="password" className='input input-bordered w-full' placeholder='Enter You Password' />

                </div>
                <button type='submit' className='btn btn-primary w-full rounded-full text-white font-bold'>Log in</button>
            </form>

        </div>

    </>
  )
}

export default LoginPage