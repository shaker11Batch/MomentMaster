import React, { use } from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
const Footer = () => {
    const {user} =use(AuthContext)
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
               <Link to='/'>Home</Link>
               <Link to='/upComingEvents'>Upcoming Events</Link>
               <Link to={`/myEvents/${user?.email}`}>Manage Event</Link>
               <Link to='joined'>Joined Event</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                  <a href="https://www.facebook.com/"><CiFacebook size={32} /></a>
                  <a href="https://www.youtube.com/watch?v=pNNAOwFeTiM"><FaYoutube size={32} /></a>
                  <a href="https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-shaker11Batch"><FaGithub size={32} /></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Smart CollegeEvent Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;