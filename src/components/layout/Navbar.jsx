import { User, Layers, Search, Bell } from "lucide-react";
function Navbar() {
  return (
    <>
      <div className="flex py-6 px-2">
        <Layers />
        <h4>SmartT</h4>
        <div className="flex">
          <Search />
          <input type="search" className="border rounded-sm"/>

        </div>
                  <Bell />

        <User />
      </div>
    </>
  );
}

export default Navbar;
