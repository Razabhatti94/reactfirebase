import { Link } from "react-router-dom";


function Auth() {
  return (
    <div className='m-auto w-full min-h-96 lg:w-full bg-gray-200 flex gap-5 justify-center items-center'>
        <Link to={'signin'} className='border-2  text-white px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-lg'>Sign In</Link>
        <Link to={'signup'} className='border-2 border-gray-400 px-6 py-3 rounded-lg' >Sign Up</Link>
      
    </div>
  )
}

export default Auth