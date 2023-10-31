import React from "react";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <div className="flex justify-between w-auto p-4 border-b-4 overflow-x-scroll no-scrollbar border-black text-lg font-black">
      <h1 className="p-4 text-lg block ">FRIENDS DATABASE</h1>
      <nav className="flex align-middle gap-3 items-center">
        <NavLink to="/login" className="py-4 px-2 bg-black text-white">
          LOGIN.
        </NavLink>
        <NavLink to="/friendList" className="py-4 px-2 bg-black text-white">
          FRIENDLIST.
        </NavLink>
        <NavLink to="/addFfriend" className="py-4 px-2 bg-black text-white">
          ADDFRIEND.
        </NavLink>
        <NavLink to="/login" className="py-4 px-2 bg-black text-white">
          LOGOUT.
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
