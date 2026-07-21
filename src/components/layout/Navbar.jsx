import { User, Layers, Search, Bell } from "lucide-react";
function Navbar() {
  return (
    <>
    <nav className="h-20 bg-white border-b border-gray-200 shadow-sm px-8 flex items-center justify-between">
       
       {/* Left Section */}
        <div className="flex items-center gap-2">
          <Layers className="text-blue-600" size={28}/>
          <h1 className="text-2xl font-bold text-gray-800">SmartTask</h1>
        </div>


        {/* Center Section */}
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-[400px]">
          <Search className="text-gray-500" size={18}/> 
          <input type="text" placeholder="Search tasks..." className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder-gray-500" />
        </div>
        <div className="flex items-center gap-4">
          <Bell />
          <User />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
