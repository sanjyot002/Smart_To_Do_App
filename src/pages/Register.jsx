function Register() {
  return (
    <div className="flex min-h-screen bg-gray-300 items-center justify-center px-4">
      <div className="w-full max-w-md bg-yellow-500 p-8 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-2 mt-2">Create Account</h2>
        <h3 className="text-center text-3xl mb-6 text-gray-700">Register</h3>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col"> 
            <label>Full Name : </label>
            <input type="text" placeholder="Enter Your Full Name" className="mb-1 font-medium px-3 py-1 border border-gray-600 outline-none focus:ring-1 focus:ring-black-100 rounded-md transition duration-400"/>
          </div>
          <div className="flex flex-col">
            <label>Email : </label>
            <input type="email" placeholder="Enter Your Email" className="mb-1 font-medium px-3 py-1 border border-gray-600 outline-none focus:ring-1 focus:ring-black-100 rounded-md transition duration-400"/>
          </div>
          <div className="flex flex-col">
            <label>Password : </label>
            <input type="password"  placeholder="Enter Your Password "className="mb-1 font-medium px-3 py-1 border border-gray-600 outline-none focus:ring-1 focus:ring-black-100 rounded-md transition duration-400"/>
          </div>
          <div className="flex flex-col">
            <label>Confirm Password : </label>
            <input type="password" placeholder="Re-enter Your Password" className="mb-1 font-medium px-3 py-1 border border-gray-600 outline-none focus:ring-1 focus:ring-black-100 rounded-md transition duration-400"/>
          </div>
            <button type="submit" className=" py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-all duration-500 hover:shadow-lg">Register</button>
          
        </form>
      </div>
    </div>
  );
}

export default Register;
