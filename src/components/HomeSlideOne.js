import appleImg from '../Assets/apple-icon.png'
import iphoneImg from '../Assets/7215f42e5883a64157f0aa3a4d1a866a.jpg'
import Carousel from 'react-bootstrap/Carousel';

function SlideOne(){
    return(
        <>
        <div className="container slide1">
            <div className="home_slide1 row">
                <div className="categories col-sm-12 col-md-6 col-lg-2">
                    <a href="#">Woman’s Fashion <svg width="24" className="slide1_arrow" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" fill="black"/>
                    </svg>
                    </a>
                    <a href="#">Men’s Fashion <svg width="24" height="24" className="slide1_arrow slide1_arrow2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" fill="black"/>
                    </svg>
                    </a>
                    <a href="#">Electronics</a>
                    <a href="#">Home & Lifestyle</a>
                    <a href="#">Medicine</a>
                    <a href="#">Sports & Outdoor</a>
                    <a href="#">Baby’s & Toys</a>
                    <a href="#">Groceries & Pets</a>
                    <a href="#">Health & Beauty</a>
                </div>
                <Carousel className='col-sm-1 col-md-6 col-lg-9'>
                    <Carousel.Item className='Carousel_item'>
                        <div className="home_slide1_content ">
                            <div className="home_slide1_txt_content">
                                <img src={appleImg} width="50px" alt=''/>
                                <span>iPhone 14 series</span>
                                <h2>Up to 10% <br></br>off Voucher</h2>
                                <a href='#'>Shop Now</a>
                                <svg width="16" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='home_slide1_img_content'>
                                <img src={iphoneImg} width="390px" alt='' className='iphone_image'/>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="home_slide1_content ">
                            <div className="home_slide1_txt_content">
                                <img src={appleImg} width="50px" alt=''/>
                                <span>iPhone 14 series</span>
                                <h2>Up to 10% <br></br>off Voucher</h2>
                                <a href='#'>Shop Now</a>
                                <svg width="16" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='home_slide1_img_content'>
                                <img src={iphoneImg} width="390px" alt='' className='iphone_image'/>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="home_slide1_content ">
                            <div className="home_slide1_txt_content">
                                <img src={appleImg} width="50px" alt=''/>
                                <span>iPhone 14 series</span>
                                <h2>Up to 10% <br></br>off Voucher</h2>
                                <a href='#'>Shop Now</a>
                                <svg width="16" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='home_slide1_img_content'>
                                <img src={iphoneImg} width="390px" alt='' className='iphone_image'/>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="home_slide1_content ">
                            <div className="home_slide1_txt_content">
                                <img src={appleImg} width="50px" alt=''/>
                                <span>iPhone 14 series</span>
                                <h2>Up to 10% <br></br>off Voucher</h2>
                                <a href='#'>Shop Now</a>
                                <svg width="16" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 8H18M18 8L11 1M18 8L11 15" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className='home_slide1_img_content'>
                                <img src={iphoneImg} width="390px" alt='' className='iphone_image'/>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        </>
    )
}

export default SlideOne;