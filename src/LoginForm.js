import React from 'react'

const LoginForm = () => {
  return (
    <div className=' min-h-screen bg-blue-400 flex items-center justify-center font-semibold text-sm'>
      <div className='bg-white p-12 rounded-2xl shadow-xl w-[90%] sm:w-[75%] md:w-[50%] lg:w-[35%] xl:w-[30%] 2xl:w-[15%]'>

        <h2 className='text-2xl font-bold mb-6 text-purple-800'>Create your account</h2>

        <form className='space-y-3'>

          <div>
            <label for='name' className='block mb-1'>Name:</label>
            <input id='name' type='text' className='bg-gray-100 border outline-none rounded-lg w-full py-1 px-3 focus:border-purple-500' />
          </div>

          <div>
            <label for='email' className='block mb-1'>Email:</label>
            <input id='email' type='email' className='bg-gray-100 border outline-none rounded-lg w-full py-1 px-3 focus:border-purple-500' />
          </div>

          <div>
            <label for='password' className='block mb-1'>Password:</label>
            <input id='password' type='password' className='bg-gray-100 border outline-none rounded-lg w-full py-1 px-3 focus:border-purple-500' />
          </div>

          <div>
            <label for='confirmPassword' className='block mb-1'>Confirmm Password:</label>
            <input id='confirmPassword' type='password' className='bg-gray-100 border outline-none rounded-lg w-full py-1 px-3 focus:border-purple-500' />
          </div>

          <div className='flex items-center'>
            <input id='tos' type='checkbox' className='mr-2 relative top-[1px]' />
            <label for='tos'>I agree to the TOS:</label>
          </div>

          <div className='pt-2'>
            <button type='submit' className='bg-purple-700 rounded-lg text-white font-bold w-full p-2 transition duration-300 hover:bg-purple-500'>sign up</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginForm
