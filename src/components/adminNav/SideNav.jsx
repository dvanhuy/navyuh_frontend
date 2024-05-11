import * as React from 'react';
import menu from '../../declare/menu';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logonavyuh.png';
import NavItem from './NavItem';
import NavItemWithChildrens from './NavItemWithChildrens';

const SideNav = () => {
  return (
    <div className='w-[18rem] h-screen bg-white sticky top-0 left-0 overflow-y-auto'>
      <Link to='/' className='flex justify-center items-center gap-4 pt-10 pb-5'>
          <img className='h-14 mx-' src={Logo} alt='' />
          <span className='font-patrick text-2xl'>Navyuh</span>
      </Link>
      <ul>
        {menu.map((nav) => (
          <li key={nav.path+nav.displayText}>
            {nav.childrens ? (
              <NavItemWithChildrens {...nav} />
            ) : (
              <NavItem {...nav} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
