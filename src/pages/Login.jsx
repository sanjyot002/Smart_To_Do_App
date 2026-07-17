function Login() {
  return (
    <div className="flex min-h-screen bg-gray-200 items-center justify-center px-4">
        <div className="w-full max-w-md bg-yellow-500 p-8 rounded-xl shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-2 mt-2">Welcome Back</h2>
      <h3 className="text-center text-3xl mb-6 text-gray-700"> Login</h3>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col">
        <label >Email :</label>
        <input type="email" placeholder="Enter Your Email" className="mb-1 font-medium px-3 py-1 border border-gray-600 outline-none focus:ring-1 focus:ring-black-100 rounded-md transition duration-400"/>
        </div>
        <div className="flex flex-col">
        <label>Password :</label>
        <input type="password" placeholder="Enter Your Password" className="mb-1 font-medium rounded-md border border-gray-600 px-3 py-1 outline-none focus:ring-1 focus:ring-black-100 transition duration-400"/>
        </div>
        <button type="submit" className=" py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-all duration-500 hover:shadow-lg">Login</button>
      </form>
    </div>
    </div>
  );
}
export default Login;
