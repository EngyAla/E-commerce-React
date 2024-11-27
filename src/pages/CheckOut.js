import { useDispatch, useSelector } from "react-redux"
import check1 from '../Assets/a8fc8e50822cb2d2d168e5d0e8bf7ea6.png'
import check2 from '../Assets/01b240273b40dab07f8246ef98aed88a.png'
import check3 from '../Assets/27c754abac218d25d8ea4360de61f8e8.png'
import check4 from '../Assets/c88d0c9b038b82deeb0523d82cffe267.png'


function ChechOut(){
    const cart = useSelector((state) => state.cart);
    const total = cart.reduce((acc, product)=>{
        return(
            acc += product.price * product.quanitiy
        )
    }, 0)
    return(
        <>  
        <div className="container">
            <p className="mt-4 mb-5"><span className="notfound_span">Account / My Account / Product / View Cart /</span> CheckOut</p>
        </div>
            <div className="container">
            <h2 className="mt-3 mb-5">Billing Details</h2>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-5">
                    <form className="checkout_form">
                        <div className="mb-3 mt-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="pwd" name="pswd" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Street Address</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Apartment, floor, etc. (optional)</label>
                            <input type="text" className="form-control" id="pwd" name="pswd" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Town/City</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="pwd" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="pwd" name="pswd" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                            <input className="form-check-input bg-danger" type="checkbox" name="remember" /> Save this information for faster check-out next time
                            </label>
                        </div>
                    </form>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2 mt-4">

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                        <table class="table table-borderless">
                            <tbody>
                                {
                                    cart.map((product)=>{
                                        return(
                                            <tr>
                                                <td><img src={product.image} alt="" width={"35px"}/> <span style={{fontSize:"12px"}}>{product.title}</span></td>
                                                <td><span style={{fontSize:"14px"}}>${product.price}</span></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <table class="table table-hover">
                        <tbody>
                        <tr>
                            <td>Subtotal:</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping:</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="mt-4 row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div class="">
                                <input type="radio" class="" id="radio1" name="optradio" value="option1" checked /><span className="mx-2">Bank</span>
                                <label class="form-check-label" for="radio1"></label>
                            </div>
                            <div class="mt-3">
                                <input type="radio" style={{backgroundColor: ""}} class="" id="radio2" name="optradio" value="option2" /><span className="mx-2">Cash on delivery</span>
                                <label class="form-check-label mx-3" for="radio2"></label>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src={check1} alt="" width={"35px"} />
                            <img src={check2} alt="" width={"30px"} />
                            <img src={check3} alt="" width={"30px"} />
                            <img src={check4} alt="" width={"30px"} />
                        </div>
                    </div>
                    <div className="cart_total_btn col-sm-12 col-md-12 mt-4">
                        <button className="cart_total_btn1">Coupon Code</button>
                        <button className="cart_total_btn2">Apply Coupon</button>
                    </div>
                    <button className="cart_total_btn3 mt-3">Place Order</button>
                </div>
                </div>
            </div>
        </>
    )
}
export default ChechOut;