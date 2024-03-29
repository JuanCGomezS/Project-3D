import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/Project-3D'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/Project-3D/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Acerca de mi
        </NavLink>
        <NavLink to='/Project-3D/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Proyectos
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
