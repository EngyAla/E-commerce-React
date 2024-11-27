import { useState } from 'react'
import registerationImg from '../Assets/a1c7dc5b68a42239311e510f54d8cd59.jpeg'
import { Link, useNavigate } from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(password === "" || email === ""){
            alert("Error: Invalid Values")
        } else if(password === localStorage.getItem("password") && email === localStorage.getItem("email")){
            navigate('/')
        } else{
            alert("Error: Invalid Values")
        }
    }
    return(
        <>
            <div className='signup_container'>
            <div className='signup_img'>
                <img src={registerationImg} alt='' width={"700px"}/>
            </div>
            <div className='signup_container'>
                <form onSubmit={handlesubmit}>
                    <h2>Log in to Exclusive</h2>
                    <p>Enter your details below</p>
                    <input type='email' placeholder='Email or Phone Number' value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
                    <input type='password' placeholder='password' value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
                    <div className='login_btn'>
                        <button type='submit' className='submit_btn'>Log In</button>
                        <span className='signup_check'><Link to={"/signup"}>Forget Password?</Link></span>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;