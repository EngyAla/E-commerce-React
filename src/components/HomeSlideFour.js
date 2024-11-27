import BestSellingProducts from "./BestSellingProducts";

function SlideFour(){
    return(
    <>  
        <div className="container slide2">
            <hr />
            <div className="slide2_title">
                <svg width="15" height="35" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="40" rx="4" fill="#DB4444"/>
                </svg>
                <span>Today's</span>
            </div>
            <div className="slide2_counter slide4_title row ">
                <h3 className="col-sm-12 col-md-6 col-lg-6">Best Selling Products</h3>
                <button className='Slide2_but slide4_btn col-sm-12 col-md-6 col-lg-6'>View All</button>
            </div>
            <div className='slide2_products_slider row '>
                <BestSellingProducts />
            </div>
        </div>
    </>
    )
}

export default SlideFour;