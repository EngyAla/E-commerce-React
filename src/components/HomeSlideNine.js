import barcodeImg from '../Assets/5dd6d44594e01b675513068803e2426d.jpeg'
import googleplayImg from '../Assets/10b18ab55a1e1a07ebf54a46ebb07284.png'
import applestoreImg from '../Assets/ccb54c528f9bcf326ca48ea29bd6d890.png'
import twitter from '../Assets/165413-middle-removebg-preview.png'


function SLideNine(){
    return(
        <>
        <div className='slide9'>
        <div className="footer row">
                <div className="footer_col1 col-sm-6 col-md-6 col-lg-2">
                    <h5>Exclusive</h5>
                    <h6>Subscribe</h6>
                    <p>Get 10% off your first order</p>
                    <div className="footer_email">
                        <input type="email" placeholder="Enter your email" />
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.91199 12H3.99999L2.02299 4.13499C2.01033 4.08928 2.00262 4.04234 1.99999 3.99499C1.97799 3.27399 2.77199 2.77399 3.45999 3.10399L22 12L3.45999 20.896C2.77999 21.223 1.99599 20.737 1.99999 20.029C2.00201 19.9657 2.01313 19.9031 2.03299 19.843L3.49999 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className="footer_col1 col-sm-6 col-md-6 col-lg-2">
                    <h6>Support</h6>
                    <p>111 Bijoy sarani, Dhaka,  DH 1515,<br></br> Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className="footer_col1 col-sm-6 col-md-6 col-lg-2">
                    <h6>Account</h6>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="footer_col1 col-sm-6 col-md-6 col-lg-2">
                    <h6>Quick Link</h6>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="footer_col1 col-sm-6 col-md-6 col-lg-2">
                    <h6>Download App</h6>
                    <p>Save $3 with App New User Only</p>
                    <div className='footer_imgs'>
                        <div>
                        <img src={barcodeImg} alt="" width={"80px"}/>
                        </div>
                        <div className='footer_imgs2'>
                            <img src={googleplayImg} alt="" width={"120px"} height={"90px"}/>
                            <img src={applestoreImg} alt=""  width={"120px"} height={"70px"} className='footer_imgs2_img2'/>
                        </div>
                    </div>
                    <div className="footer_icons">
                        <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7H10.5L10 9H6V18H4V9H0V7H4V5.128C4 3.345 4.186 2.698 4.534 2.046C4.87501 1.40181 5.40181 0.875009 6.046 0.534C6.698 0.186 7.345 0 9.128 0C9.65 0 10.108 0.0500001 10.5 0.15V2H9.128C7.804 2 7.401 2.078 6.99 2.298C6.686 2.46 6.46 2.686 6.298 2.99C6.078 3.401 6 3.804 6 5.128V7Z" fill="white"/>
                        </svg>
                        <img src={twitter} alt='' width={"25px"}/>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z" fill="white"/>
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 6.05C9.417 5.113 10.611 4.5 12 4.5C13.4587 4.5 14.8576 5.07946 15.8891 6.11091C16.9205 7.14236 17.5 8.54131 17.5 10V17.5H15.5V10C15.5 9.07174 15.1313 8.1815 14.4749 7.52513C13.8185 6.86875 12.9283 6.5 12 6.5C11.0717 6.5 10.1815 6.86875 9.52513 7.52513C8.86875 8.1815 8.5 9.07174 8.5 10V17.5H6.5V5H8.5V6.05ZM1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3ZM0.5 5H2.5V17.5H0.5V5Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <hr></hr>
                <p>&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
        </>
    )
}

export default SLideNine;