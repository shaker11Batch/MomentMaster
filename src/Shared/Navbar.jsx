import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    // console.log(user)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('sign out user')
            }).catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 shadow my-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='font-bold'><NavLink className={({ isActive }) =>
                            isActive ? "text-blue-700" : ""
                        } to='/'>Home</NavLink></li>
                        <li className='font-bold'><NavLink className={({ isActive }) =>
                            isActive ? "text-blue-700" : ""
                        } to='/upComingEvents'>Upcoming Events</NavLink></li>
                        <li>
                            <details className='z-10'>
                                <summary className='font-bold'>DashBoard</summary>
                                <ul className="p-2">
                                    <li className='font-bold'><NavLink className={({ isActive }) =>
                                        isActive ? "text-blue-700" : ""
                                    } to='/createEvents'>Create Events</NavLink></li>
                                    <li className='font-bold'><NavLink className={({ isActive }) =>
                                        isActive ? "text-blue-700" : ""
                                    } to={`/myEvents/${user?.email}`}>Manage Events</NavLink></li>
                                    <li className='font-bold'><NavLink className={({ isActive }) =>
                                        isActive ? "text-blue-700" : ""
                                    } to='/joined'>Joined Events</NavLink></li>

                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link to='/' className=" text-3xl font-bold text-secondary">Smart <span className='text-blue-500'>CollegeEvent</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><NavLink className={({ isActive }) =>
                        isActive ? "text-blue-700" : ""
                    } to='/'>Home</NavLink></li>
                    <li className='font-bold'><NavLink className={({ isActive }) =>
                        isActive ? "text-blue-700" : ""
                    } to='/upComingEvents'>Upcoming Events</NavLink></li>
                    <li>
                        <details className='z-10'>
                            <summary className='font-bold'>DashBoard</summary>
                            <ul className="p-2">
                                <li className='font-bold'><NavLink className={({ isActive }) =>
                                    isActive ? "text-blue-700" : ""
                                } to='/createEvents'>Create Events</NavLink></li>
                                <li className='font-bold'><NavLink className={({ isActive }) =>
                                    isActive ? "text-blue-700" : ""
                                } to={`/myEvents/${user?.email}`}>Manage Events</NavLink></li>
                                <li className='font-bold'><NavLink className={({ isActive }) =>
                                    isActive ? "text-blue-700" : ""
                                } to='/joined'>Joined Events</NavLink></li>

                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <input type="checkbox" value='dark' className="toggle theme-controller mr-5" />
                {
                    user && <div className=''>
                        {
                            user.photoURL && (
                                <img src={user.photoURL} referrerPolicy='no-referrer' alt="" className='w-12 h-12 rounded-full mr-2 ' />
                            )

                        }
                    </div>
                }
                {
                    user
                        ?
                        <Link to='/logIn'>
                            <button className='btn btn-outline' onClick={handleSignOut}>SignOut</button>
                        </Link>

                        :

                        <button>LogIn</button>

                }
            </div>
        </div>
    );
};

export default Navbar;