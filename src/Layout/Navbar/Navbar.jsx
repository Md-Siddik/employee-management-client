import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseAdmin from "../../Hook/UseAdmin";
import UseHR from "../../Hook/UseHR";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [isAdmin] = UseAdmin();
    const [isHR] = UseHR();

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            isAdmin ? (
                <li><NavLink to="/all-employee-list">All Employee List</NavLink></li>
            ) : isHR ? (
                <ul className="list-none flex">
                    <li><NavLink to="/employee-list">Employee List</NavLink></li>
                    <li><NavLink to="/payment-history">Payment History</NavLink></li>
                </ul>
            ) : (
                ""
            )
        }
        <li><NavLink to="/work-sheet">Dashboard</NavLink></li>
        <li><NavLink to="/progress">Progress</NavLink></li>
        <li><NavLink to="/contactUs">Contact us</NavLink></li>
    </>

    return (
        <div className="container mx-auto flex">
            <div className="navbar">
                <div className="navbar-start">
                    <a className="text-2xl font-bold text-gray-400">Job<span className="text-3xl text-black">Espial</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">

                    {
                        user && <div className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom z-[999]" data-tip={user.displayName}>
                            {
                                user && <div className="w-full rounded-full">
                                    <img alt="Profile" src={user?.photoURL} />
                                </div>
                            }
                        </div>
                    }

                    {
                        user ?
                            <button onClick={handleSignOut} className="btn lg:block hidden">Log Out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-outline">Login</button>
                            </Link>

                    }

                </div>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-[120px]">
                    {navLinks}
                    <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>
                    {
                        user ? <button onClick={handleSignOut} className="btn">Log Out</button> : <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                    }
                    <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;