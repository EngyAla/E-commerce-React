import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addToCart } from "../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../store/fav-slice";
import BestSellingProducts from "../components/BestSellingProducts";

function Favourite(){
    const cart = useSelector((state) => state.cart)
    const fav = useSelector((state) => state.fav)
    const dispatch = useDispatch()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
                },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        };
    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <p className="notfound_p col-sm-4 col-md-8"><span className="notfound_span">Home /</span> Wishlist ({fav.length})</p>
                <button className="fav_btn col-sm-4 col-md-2 mt-3">Move All To Bag</button>
            </div>
        </div>

        <div className="mt-5 w-90 container">
                <div className="mt-5 pb-3">
                <Slider {...settings}>
                    {
                        fav.map((product)=>{
                            return(
                            <div className="">
                                <div className="item_img">
                                    <div className="item_img_content">
                                        <p>{product.discount}</p>
                                        <div className="item_img_icons">
                                            <svg onClick={()=>{dispatch(removeFromFav(product))}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143" stroke="black" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <img src={product.image} width={"150px"} alt=""/>
                                    <button onClick={() => {dispatch(addToCart(product))}}> 
                                        <svg className="mx-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.75 3.75H5.75L8 16.5H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="item_info">
                                    <h6>{product.title}</h6>
                                    <div className="Slide2_prices">
                                        <p>${product.price}</p>
                                        <p className="old_price">$</p>
                                    </div>
                                </div>  
                            </div>
                            )
                        })
                            
                    }
                    </Slider>
                </div>
            </div>
            <div className="container slide2">
            <hr />
            <div className="slide2_title">
                <svg width="15" height="35" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="40" rx="4" fill="#DB4444"/>
                </svg>
                <span>Just For You</span>
                <button className='Slide2_but slide4_btn fav_btn mt-1' style={{color: "black"}}>See All</button>
            </div>
            <div className='slide2_products_slider row '>
                <BestSellingProducts />
            </div>
        </div>
        </>
    )
}

export default Favourite;