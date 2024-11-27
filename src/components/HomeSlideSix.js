import ExploreOurProducts from "./ExploreOurProducts";
import all_products from '../Assets/allproducts'

function SlideSix(){
    const all_products3 = all_products.slice(8, 17)

    return(
        <>
        <div className="container slide2">
            <div className="slide2_title">
                <svg width="15" height="35" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="40" rx="4" fill="#DB4444"/>
                </svg>
                <span>Our Products</span>
            </div>
            <div className="slide2_counter">
                <h3>Explore Our Products</h3>
            </div>
            <div className='slide2_products_slider slide6_products_slider row'>
            {
            all_products3.map((product, i) =>{
                return(
                <ExploreOurProducts  key={i} id={product.id} image={product.image} discount={product.discount} title={product.title} price={product.price} old_price={product.old_price}/>
            )
        })
    }
            </div>
            <button className='Slide2_but'>View All Products</button>
        </div>
        </>
    )
}

export default SlideSix;