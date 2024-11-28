import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../store/cart-slice";
import { Link } from "react-router-dom";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const total = cart.reduce((acc, product) =>{
        return(
            acc += product.price * product.quanitiy
        )
    }, 0)
    console.log(cart);
return (
    <>
        <p className="notfound_p"><span className="notfound_span">Home /</span> Cart</p>
        <div class="container mt-3">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((product) =>{
                            return(
                        <tr>
                            <td><img src={product.image} alt="" width={"50px"}/> <span>{product.title}</span></td>
                            <td><span>${product.price}</span></td>
                            <td>
                                <div  className="cart_actions_container">
                                    <div>
                                        <p>{product.quanitiy}</p>
                                    </div>
                                    <div className="cart_actions">
                                        <button onClick={() => dispatch(increaseQuantity(product.id))}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z" fill="black"/>
                                            </svg>
                                        </button>
                                        <button onClick={() => dispatch(decreaseQuantity(product.id))}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.24268 8.63334L11.5427 5.33334L12.4854 6.27601L8.24268 10.5187L4.00002 6.27601L4.94268 5.33334L8.24268 8.63334Z" fill="black"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>{(product.price * product.quanitiy).toFixed(2)}</td> 
                        </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="cart_btn row gap-1 mx-2 my-2 mb-5 mt-5">
                <button className="col-sm-6 col-md-2">Return To Shop</button>
                <button className="col-sm-6 col-md-2">Update Cart</button>
            </div>
            <div className="cart_total mt-5 row">
                <div className="cart_total_btn col-sm-12 col-md-8">
                    <button className="cart_total_btn1">Coupon Code</button>
                    <button className="cart_total_btn2">Apply Coupon</button>
                </div>
                <div class="cart_total_table container col-sm-10 col-md-4">
                    <h5>Cart Total</h5>
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
                    <Link to={"/checkout"}>
                    <button className="table_btn mt-2">Procees to checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
)
}

export default Cart;
