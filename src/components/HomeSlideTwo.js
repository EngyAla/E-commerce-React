import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import FlashSaleProducts from './FlashSaleProducts';
import data from '../Assets/allproducts'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='slider_next_arrow container' onClick={onClick}>
            <svg className="slider_nextarrow" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
            <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='slider_prev_arrow container' onClick={onClick}>
            <svg className='slider_prevarrow' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="23" fill="#F5F5F5"/>
            <path d="M22 16L15 23L22 30M15 23H31" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}

function SlideTwo(){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

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
        <div className="container slide2">
            <div className="slide2_title">
                <svg width="15" height="35" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="40" rx="4" fill="#DB4444"/>
                </svg>
                <span>Today's</span>
            </div>
            <div className="slide2_counter container row">
                <h3 className='col-sm-12 col-md-6 col-lg-2'>Flash Sales</h3>
                <FlipClockCountdown className='flip-clock col-sm-5 col-md-6 col-lg-8'
                to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
                labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
                digitBlockStyle={{ width: 30, height: 60, fontSize: 30 }}
                dividerStyle={{ color: 'white', height: 1 }}
                separatorStyle={{ color: 'red', size: '6px' }}
                duration={0.5}>
                </FlipClockCountdown>
            </div>        
            <div className="mt-5 w-90 mx-3">
                <div className="mt-5 pb-3">
                <Slider {...settings}>
                {
                    data.map((product, i)=>{
                        return <FlashSaleProducts key={i} id={product.id} image={product.image} discount={product.discount} title={product.title} price={product.price} old_price={product.old_price} />
                    })
                }
                </Slider>
                </div>
            </div>
            <button className='Slide2_but'>View All Products</button>
        </div>
        </>
    )
}

export default SlideTwo;