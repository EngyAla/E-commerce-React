import { useState } from "react";

function Account(){
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")

    return(
        <>  
            <div className="container mt-4 mb-5">
                <div className="row ">
                    <p className="col-sm-12 col-md-6 col-lg-10"><span className="notfound_span">Home /</span> My Account</p>
                    <p className="col-sm-12 col-md-6 col-lg-2">Welcome! <span style={{color: "#DB4444"}}>{first} {last}</span></p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <ul>
                            <li style={{listStyle: "none"}}><span style={{fontWeight: "600"}}>Manage My Account</span>
                                <ul>
                                <li style={{listStyle: "none", color: "#DB4444", marginTop:"10px"}}>My Profile</li>
                                <li style={{listStyle: "none", color: "GrayText", margin:"10px 0px"}}>Address Book</li>
                                <li style={{listStyle: "none", color: "GrayText"}}>My Payment Options</li>
                                </ul>
                            </li>
                            <li style={{listStyle: "none"}}><span style={{fontWeight: "600"}}>My Order</span>
                                <ul>
                                <li style={{listStyle: "none", color: "GrayText", marginTop:"10px"}}>My Returns</li>
                                <li style={{listStyle: "none", color: "GrayText", margin:"10px 0px"}}>My Cancellations</li>
                                </ul>
                            </li>
                            <li style={{listStyle: "none", fontWeight: "600", marginTop:"10px"}}>My Wishlist</li>
                            </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-8 account_container">
                    <h5 style={{color: "#DB4444"}}>Edit Your Profile</h5>
                    <form className="mt-4 checkout_form">
                        <div class="row">
                            <div class="col">
                            <label for="email" class="form-label">First Name</label>
                            <input type="text" class="form-control" name="email" onChange={(e)=>{setFirst(e.target.value)}} />
                            </div>
                            <div class="col">
                            <label for="email" class="form-label">Last Name</label>
                            <input type="text" class="form-control" name="pswd" onChange={(e)=>{setLast(e.target.value)}}/>
                            </div>
                        </div>
                    </form>
                    <form className="checkout_form">
                        <div class="row">
                            <div class="col">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" class="form-control"  name="email" />
                            </div>
                            <div class="col">
                            <label for="email" class="form-label">Address</label>
                            <input type="text" class="form-control" name="pswd" />
                            </div>
                        </div>
                    </form>
                    <form className="checkout_form">
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Password Changes</label>
                            <input type="password" class="form-control" id="email"  name="pwd" placeholder="Current Password" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="pwd" name="pswd" placeholder="New Password"/>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="pwd" name="pswd" placeholder="Confirm New Password"/>
                        </div>
                    </form>
                    <div className="mt-5 d-flex justify-content-end align-items-center">
                        <span>Cancel</span>
                        <button className="cart_total_btn3 mx-4">Save Changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account;