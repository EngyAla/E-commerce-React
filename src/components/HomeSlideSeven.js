import playstation from '../Assets/0c1817d3afa266b3c9f8c81ff0ed4428.png'
import wemencollection from '../Assets/WhatsApp Image 2024-11-27 at 18.34.36_c2fbd5f8.jpg'
import speakers from '../Assets/2977438364a41d7e8c9d1e9a794d43ed.png'
import perfume from '../Assets/5102562cf220504d288fa568eaa816dd.png'


function SlideSeven(){
    return(
    <>
        <div className="container slide2">
            <div className="slide2_title">
                <svg width="15" height="35" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="40" rx="4" fill="#DB4444"/>
                </svg>
                <span>Featured</span>
            </div>
            <div className="slide7_title">
                <h3>New Arrival</h3>
            </div>
            <div className="">            
                <div className="slide7_imgs">
                    <div className='slide7_img_content1'>
                        <img src={playstation} alt="" width={"630px"}/>
                        <div className='slide7_txt_content1'>
                            <h5>PlayStation 5</h5>
                            <p>Black and White version of the PS5 <br></br>coming out on sale.</p>
                            <a href='' >Shop Now</a>
                        </div>
                    </div>
                    <div className='slide7_img_content2'>
                        <div className='slide7_img_content2_img1_top'>
                            <img src={wemencollection} alt='' />
                            <div className='slide7_txt_content2_img1'>
                                <h5>Women’s Collections</h5>
                                <p>Featured woman collections that give you another vibe.</p>
                                <a href=''>Shop Now</a>
                            </div>
                        </div>
                        <div className='slide7_img_content2_img2_bottom'>
                            <div className='slide7_img_content2_img2_bottom_left'>
                                <img  src={speakers} alt='' width={"350px"}/>
                                <div className='slide7_txt_bottom_left'>
                                    <h5>Speakers</h5>
                                    <p>Amazon wireless speakers</p>
                                    <a href=''>Shop Now</a>
                                </div>
                            </div>
                            <div className='slide7_img_content2_img2_bottom_right'>
                                <img  src={perfume} alt='' width={"200px"}/>
                                <div className='slide7_txt_bottom_right '>
                                    <h5>Perfume</h5>
                                    <p>GUCCI INTENSE OUD EDP</p>
                                    <a href=''>Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default SlideSeven;