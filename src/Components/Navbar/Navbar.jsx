import React from 'react'
import { Link } from 'react-router-dom'
import { FaRocket } from "react-icons/fa";
import { LuRocket } from "react-icons/lu";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-3  fs-3" href="#">
                    <LuRocket size={30} className='me-1' />
                        ISRO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 ms-auto mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/spacecrafts' className="nav-link">Spacecrafts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/launchers' className="nav-link">Launchers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/centers' className="nav-link">Centers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/customer-satellites' className="nav-link">Satellites</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar