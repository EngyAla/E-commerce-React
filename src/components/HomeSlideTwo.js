import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import FlashSaleProducts from './FlashSaleProducts';


function SlideTwo(){
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
            <div className=''>
                <FlashSaleProducts />
            </div>
            <button className='Slide2_but'>View All Products</button>
        </div>
        </>
    )
}

export default SlideTwo;