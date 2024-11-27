import { useState } from 'react'
import registerationImg from '../Assets/a1c7dc5b68a42239311e510f54d8cd59.jpeg'
import { Link, useNavigate } from 'react-router-dom'

function Signup(){
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(username === "" || password === "" || email === ""){
            alert("Error: Invalid Values")
        } else{
            localStorage.setItem("username", username)
            localStorage.setItem("password", password)
            localStorage.setItem("email", email)
            navigate('/login')
        }
    }
    return(
        <>
        <div className='signup_container'>
            <div className='signup_img'>
                <img src={registerationImg} alt='' width={"700px"}/>
            </div>
            <div className='signup_container' >
                <form onSubmit={handlesubmit}>
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <input type='text' placeholder='Name' value={username} onChange={(e) =>{setUserName(e.target.value)}}/>
                    <input type='email' placeholder='Email or Phone Number' value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
                    <input type='password' placeholder='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
                    <button type='submit' className='submit_btn'>Creatr Account</button>
                    <button className='google_btn'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_155_1565)">
                        <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"/>
                        <path d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z" fill="#34A853"/>
                        <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04"/>
                        <path d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z" fill="#EA4335"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_155_1565">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>Sign up with Google</button>
                    <p className='signup_check'>Already have account? <Link to={"/login"}>Log in</Link></p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup;