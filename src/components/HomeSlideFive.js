import slide5_img from '../Assets/7e210f637fc0504b7d93cd207df744c2.png'

function SlideFive(){
    return(
        <>
        <div className="container slide5">
            <div className='row'>
            <div className='slide5_txt_content col-sm-12 col-md-6 col-lg-5'>
                <p className='slide5_txt_content_cat'>Categories</p>
                <h2>Enhance Your <br></br>Music Experience</h2>
                <div className='circle_p'>
                <p className='outer_p'>23<p className='inner_p'>Houres</p></p>
                <p className='outer_p'>05<p className='inner_p'>Daye</p></p>
                <p className='outer_p'>59<p className='inner_p'>Minutes</p></p>
                <p className='outer_p'>35<p className='inner_p'>Seconds</p></p>
                </div>
                <button className='slide5_btn'>Buy Now!</button>
            </div>
            <div className='slide5_img_content col-sm-12 col-md-6 col-lg-5'>
                <img src={slide5_img}  alt="" width={"600px"}/>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default SlideFive;