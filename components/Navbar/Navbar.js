import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

    const navStyle = {
        fontSize: '20px',
        fontWeight: '400',
        marginLeft: '30px'

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg"  >
                <div className="container-fluid" >
                    <a className="navbar-brand" href='/' style={{color:'#3884f4',fontSize:'30px',fontWeight:'600',margin:'10px,auto'}}>EIOV99</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={navStyle} >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-primary">
                                <NavLink to='/' className="nav-link active "  aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/courses' className="nav-link"  >Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={`/Help/Support`} className="nav-link"  >Help/Support</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex me-5" >
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-e9-primary" type="submit">Search</button>
                        </form>
                        <div className="d-fex me-right">

                            <NavLink to='/login' className="btn btn-outline-e9-primary-dark me-2" >Login</NavLink>
                            <NavLink to='/register' className="btn btn-e9-primary-dark" >Register</NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar