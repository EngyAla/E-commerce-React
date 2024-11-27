import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const [menu, setMenu] = useState("Home")
    const [icon, setIcon] = useState("")
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const fav = useSelector((state)=> state.fav)
    useEffect(() =>{
        let username = localStorage.getItem("username")
        if(username){
            // window.location.reload()
            setIcon(<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>)
        } else{
            setIcon("")
        }
    }, [])
    const handleLogout = (e)=>{
        localStorage.removeItem("username")
        localStorage.removeItem("email")
        localStorage.removeItem("password")
    }
    const handelCart = (e)=>{
        e.preventDefault();
        if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){
            navigate('/cart')
        } else{
            alert("Sign up first")
        }
    }
    const handelFav = (e)=>{
        e.preventDefault();
        if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){
            navigate('/favourite')
        } else{
            alert("Sign up first")
        }
    }
return(
<>
    <nav className="navbar navbar-expand-lg nav_one">
        <div className="nav_one_container">
            <p className="head_title mb-0">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href="#" className="nav_one_link">ShopNow</a>
            <div className="collapse navbar-collapse  nav_one_dropdown" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <button className="" data-bs-toggle="dropdown" aria-expanded="false">
                        English
                        <svg className='mx-3' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.36452 4.95L11.3145 0L12.7285 1.414L6.36452 7.778L0.000514984 1.414L1.41451 0L6.36452 4.95Z" fill="white"/>
                        </svg>

                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="#">English</a></li>
                        <li><a className="dropdown-item" href="#">Arabic</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <nav className="navbar navbar-expand-lg ">
        <div className="container nav_content">
            <Link className="navbar-brand nav_logo" to={"/"}>Exclusive</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navLinks">
                    <li className="nav-item">
                        <Link className="nav-link active active_navLink" aria-current="page" to={'/'} onClick={() =>{setMenu("Home")}}>Home {menu === "Home" ? <hr className='links_hr'/> : <></>}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/contact'} onClick={() =>{setMenu("Contact")}}>Contact {menu === "Contact" ? <hr className='links_hr'/> : <></>}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/about'} onClick={() =>{setMenu("About")}}>About {menu === "About" ? <hr className='links_hr'/> : <></>}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/signup'} onClick={() =>{setMenu("Sign Up")}}>Sign Up {menu === "Sign Up" ? <hr className='links_hr'/> : <></>}</Link>
                    </li>
                </ul>
                <form className="nav_search d-flex align-items-center lg-mx-5 mb-3">
                    <div class="mb-3 mt-3 w-100">
                        <input type="text" class="form-control nav_search_input px-3" placeholder="What are you looking for?" name="text" />
                    </div>
                    <svg className='mx-2' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </form>

            <div className='d-flex gap-1 align-items-center'>
                <div>
                    <div>
                        <svg style={{cursor: "pointer"}} onClick={handelFav} width="23" height="23" className='fav' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className='fav_count'>{fav.length}</p>
                </div>
                <div>
                    <div><svg style={{cursor: "pointer"}} className='' onClick={handelCart} width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.25 3.75H5.25L7.5 16.5H19.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.5 12.5H19.1925C19.2792 12.5001 19.3633 12.4701 19.4304 12.4151C19.4975 12.3601 19.5434 12.2836 19.5605 12.1986L20.9105 5.44859C20.9214 5.39417 20.92 5.338 20.9066 5.28414C20.8931 5.23029 20.8679 5.18009 20.8327 5.13717C20.7975 5.09426 20.7532 5.05969 20.703 5.03597C20.6528 5.01225 20.598 4.99996 20.5425 5H6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> </div>
                    <p className="cart_count">{cart.length}</p>
                </div>
                <div class="dropdown">
                    <p className='user_Icon' data-bs-toggle="dropdown">{icon}</p>
                    <ul class="dropdown-menu sign_up_dropDown">
                        <li>
                            <Link to={'/account'}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Manage My Account</span></Link>
                        </li>
                        <li>
                            <Link to={'/cart'}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>My Order</span></Link>
                        </li>
                        <li>
                            <Link to={''}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4981_458)">
                            <path d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="12" r="11.25" stroke="white" stroke-width="1.5"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_4981_458">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            <span>My Cancellations</span></Link>
                        </li>
                        <li>
                            <Link to={''}><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8284 6.93621C18.4517 6.93621 18.7176 7.72859 18.2205 8.10461L14.8905 10.6234C14.1688 11.1693 13.8661 12.1087 14.1334 12.9732L15.3864 17.0261C15.5735 17.6312 14.8729 18.1193 14.3701 17.7341L11.3075 15.3879C10.536 14.7969 9.46399 14.7969 8.69251 15.3879L5.61357 17.7466C5.11152 18.1312 4.41161 17.645 4.59677 17.0403L5.83243 13.0046C6.09532 12.146 5.79694 11.2145 5.08413 10.6684L1.73432 8.1022C1.24111 7.72436 1.50831 6.93621 2.12961 6.93621H6.12744C7.07024 6.93621 7.90305 6.32198 8.18152 5.42125L9.379 1.5479C9.5678 0.937212 10.4322 0.937216 10.621 1.5479L11.8185 5.42124C12.0969 6.32198 12.9298 6.93621 13.8726 6.93621H17.8284Z" stroke="#FAFAFA" stroke-width="1.5"/>
                            </svg>
                            <span>My Reviews</span></Link>
                        </li>
                        <li>
                            <Link to={'/signup'} onClick={handleLogout}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Logout</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </nav>
    {/* <hr className='line'/> */}
</>
)
}

export default Navbar;