import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FlashSaleProducts from "../components/FlashSaleProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart-slice";
import all_products from '../Assets/allproducts'
import data from '../Assets/allproducts'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProductDetails(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,

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
    const [product, setProduct] = useState([])
    const [quanitiy, setQuanitiy] = useState(1)
    let {productId} = useParams()
    const dispatch = useDispatch()
    const handleMinuxQuantity = () =>{
        setQuanitiy(quanitiy - 1 < 1 ? 1 : quanitiy - 1 )
    }
    const handlePlusQuantity = () =>{
        setQuanitiy(quanitiy + 1)
    }
    useEffect(()=>{
        let findProduct = all_products.find((item)=> item.id === productId)
        setProduct(findProduct)
    }, [productId])
    return(
    <>
        <div className="container">
        <p className="mt-4 mb-5"><span className="notfound_span">Account / </span>{product.title}</p>
        </div>
        <div className="productdetails container">
            <div className="productdetails_Imgs">
                <div className="productdetails_Imgs_1">
                    <img src={product.image} alt="" width={"150px"}/>
                    <img src={product.image} alt="" width={"150px"}/>
                    <img src={product.image} alt="" width={"150px"}/>
                    <img src={product.image} alt="" width={"150px"}/>
                </div>
                <div className="productdetails_Imgs_2">
                    <img src={product.image} alt="" width={"450px"}/>
                </div>
            </div>
            <div className="productdetails_txt">
                <h3>{product.title}</h3>
                <svg width="290" height="21" viewBox="0 0 290 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.673 10.1717C17.7437 9.36184 17.1709 7.65517 15.8284 7.65517H13.3992C12.7853 7.65517 12.243 7.25521 12.0617 6.66868L11.3375 4.32637C10.9309 3.01106 9.0691 3.01106 8.66246 4.32637L7.93832 6.66868C7.75699 7.25521 7.21469 7.65517 6.60078 7.65517H4.12961C2.79142 7.65517 2.21592 9.35274 3.27822 10.1665L5.39469 11.7879C5.85885 12.1435 6.05314 12.7501 5.88196 13.3092L5.11296 15.8207C4.71416 17.1232 6.22167 18.1704 7.30301 17.342L9.14861 15.9281C9.65097 15.5432 10.349 15.5432 10.8514 15.9281L12.6807 17.3295C13.7636 18.159 15.2725 17.1079 14.8696 15.8046L14.09 13.2827C13.9159 12.7198 14.113 12.1081 14.5829 11.7526L16.673 10.1717Z" fill="#FFAD33"/>
                <path d="M36.673 10.1717C37.7437 9.36184 37.1709 7.65517 35.8284 7.65517H33.3992C32.7853 7.65517 32.243 7.25521 32.0617 6.66868L31.3375 4.32637C30.9309 3.01106 29.0691 3.01106 28.6625 4.32637L27.9383 6.66868C27.757 7.25521 27.2147 7.65517 26.6008 7.65517H24.1296C22.7914 7.65517 22.2159 9.35274 23.2782 10.1665L25.3947 11.7879C25.8588 12.1435 26.0531 12.7501 25.882 13.3092L25.113 15.8207C24.7142 17.1232 26.2217 18.1704 27.303 17.342L29.1486 15.9281C29.651 15.5432 30.349 15.5432 30.8514 15.9281L32.6807 17.3295C33.7636 18.159 35.2725 17.1079 34.8696 15.8046L34.09 13.2827C33.9159 12.7198 34.113 12.1081 34.5829 11.7526L36.673 10.1717Z" fill="#FFAD33"/>
                <path d="M56.673 10.1717C57.7437 9.36184 57.1709 7.65517 55.8284 7.65517H53.3992C52.7853 7.65517 52.243 7.25521 52.0617 6.66868L51.3375 4.32637C50.9309 3.01106 49.0691 3.01106 48.6625 4.32637L47.9383 6.66868C47.757 7.25521 47.2147 7.65517 46.6008 7.65517H44.1296C42.7914 7.65517 42.2159 9.35274 43.2782 10.1665L45.3947 11.7879C45.8588 12.1435 46.0531 12.7501 45.882 13.3092L45.113 15.8207C44.7142 17.1232 46.2217 18.1704 47.303 17.342L49.1486 15.9281C49.651 15.5432 50.349 15.5432 50.8514 15.9281L52.6807 17.3295C53.7636 18.159 55.2725 17.1079 54.8696 15.8046L54.09 13.2827C53.9159 12.7198 54.113 12.1081 54.5829 11.7526L56.673 10.1717Z" fill="#FFAD33"/>
                <path d="M76.673 10.1717C77.7437 9.36184 77.1709 7.65517 75.8284 7.65517H73.3992C72.7853 7.65517 72.243 7.25521 72.0617 6.66868L71.3375 4.32637C70.9309 3.01106 69.0691 3.01106 68.6625 4.32637L67.9383 6.66868C67.757 7.25521 67.2147 7.65517 66.6008 7.65517H64.1296C62.7914 7.65517 62.2159 9.35274 63.2782 10.1665L65.3947 11.7879C65.8588 12.1435 66.0531 12.7501 65.882 13.3092L65.113 15.8207C64.7142 17.1232 66.2217 18.1704 67.303 17.342L69.1486 15.9281C69.651 15.5432 70.349 15.5432 70.8514 15.9281L72.6807 17.3295C73.7636 18.159 75.2725 17.1079 74.8696 15.8046L74.09 13.2827C73.9159 12.7198 74.113 12.1081 74.5829 11.7526L76.673 10.1717Z" fill="#FFAD33"/>
                <path opacity="0.25" d="M96.673 10.1717C97.7437 9.36184 97.1709 7.65517 95.8284 7.65517H93.3992C92.7853 7.65517 92.243 7.25521 92.0617 6.66868L91.3375 4.32637C90.9309 3.01106 89.0691 3.01106 88.6625 4.32637L87.9383 6.66868C87.757 7.25521 87.2147 7.65517 86.6008 7.65517H84.1296C82.7914 7.65517 82.2159 9.35274 83.2782 10.1665L85.3947 11.7879C85.8588 12.1435 86.0531 12.7501 85.882 13.3092L85.113 15.8207C84.7142 17.1232 86.2217 18.1704 87.303 17.342L89.1486 15.9281C89.651 15.5432 90.349 15.5432 90.8514 15.9281L92.6807 17.3295C93.7636 18.159 95.2725 17.1079 94.8696 15.8046L94.09 13.2827C93.9159 12.7198 94.113 12.1081 94.5829 11.7526L96.673 10.1717Z" fill="black"/>
                <path opacity="0.5" d="M112.354 17.604C111.458 16.7267 110.758 15.6113 110.254 14.258C109.759 12.9047 109.512 11.444 109.512 9.876C109.512 8.27067 109.773 6.77267 110.296 5.382C110.828 3.982 111.584 2.82933 112.564 1.924H113.894V2.05C112.849 3.03 112.06 4.21067 111.528 5.592C111.005 6.964 110.744 8.392 110.744 9.876C110.744 11.3227 110.991 12.704 111.486 14.02C111.99 15.336 112.723 16.4887 113.684 17.478V17.604H112.354ZM114.889 6.04V4.878H117.521V15H116.233V6.04H114.889ZM126.164 5.984H121.25V9.176C121.464 8.87733 121.782 8.63467 122.202 8.448C122.622 8.252 123.074 8.154 123.56 8.154C124.334 8.154 124.964 8.31733 125.45 8.644C125.935 8.96133 126.28 9.37667 126.486 9.89C126.7 10.394 126.808 10.9307 126.808 11.5C126.808 12.172 126.682 12.774 126.43 13.306C126.178 13.838 125.79 14.258 125.268 14.566C124.754 14.874 124.115 15.028 123.35 15.028C122.37 15.028 121.576 14.776 120.97 14.272C120.363 13.768 119.994 13.096 119.864 12.256H121.11C121.231 12.788 121.488 13.2033 121.88 13.502C122.272 13.8007 122.766 13.95 123.364 13.95C124.101 13.95 124.656 13.7307 125.03 13.292C125.403 12.844 125.59 12.256 125.59 11.528C125.59 10.8 125.403 10.24 125.03 9.848C124.656 9.44667 124.106 9.246 123.378 9.246C122.883 9.246 122.449 9.36733 122.076 9.61C121.712 9.84333 121.446 10.1653 121.278 10.576H120.074V4.864H126.164V5.984ZM128.501 9.834C128.501 8.22867 128.762 6.978 129.285 6.082C129.807 5.17667 130.722 4.724 132.029 4.724C133.326 4.724 134.236 5.17667 134.759 6.082C135.281 6.978 135.543 8.22867 135.543 9.834C135.543 11.4673 135.281 12.7367 134.759 13.642C134.236 14.5473 133.326 15 132.029 15C130.722 15 129.807 14.5473 129.285 13.642C128.762 12.7367 128.501 11.4673 128.501 9.834ZM134.283 9.834C134.283 9.022 134.227 8.336 134.115 7.776C134.012 7.20667 133.793 6.74933 133.457 6.404C133.13 6.05867 132.654 5.886 132.029 5.886C131.394 5.886 130.909 6.05867 130.573 6.404C130.246 6.74933 130.027 7.20667 129.915 7.776C129.812 8.336 129.761 9.022 129.761 9.834C129.761 10.674 129.812 11.3787 129.915 11.948C130.027 12.5173 130.246 12.9747 130.573 13.32C130.909 13.6653 131.394 13.838 132.029 13.838C132.654 13.838 133.13 13.6653 133.457 13.32C133.793 12.9747 134.012 12.5173 134.115 11.948C134.227 11.3787 134.283 10.674 134.283 9.834ZM146.372 15L144.048 11.01H142.508V15H141.234V5.242H144.384C145.122 5.242 145.742 5.368 146.246 5.62C146.76 5.872 147.142 6.21267 147.394 6.642C147.646 7.07133 147.772 7.56133 147.772 8.112C147.772 8.784 147.576 9.37667 147.184 9.89C146.802 10.4033 146.223 10.744 145.448 10.912L147.898 15H146.372ZM142.508 9.988H144.384C145.075 9.988 145.593 9.82 145.938 9.484C146.284 9.13867 146.456 8.68133 146.456 8.112C146.456 7.53333 146.284 7.08533 145.938 6.768C145.602 6.45067 145.084 6.292 144.384 6.292H142.508V9.988ZM156.752 10.87C156.752 11.1127 156.738 11.3693 156.71 11.64H150.578C150.624 12.396 150.881 12.9887 151.348 13.418C151.824 13.838 152.398 14.048 153.07 14.048C153.62 14.048 154.078 13.922 154.442 13.67C154.815 13.4087 155.076 13.0633 155.226 12.634H156.598C156.392 13.3713 155.982 13.9733 155.366 14.44C154.75 14.8973 153.984 15.126 153.07 15.126C152.342 15.126 151.688 14.9627 151.11 14.636C150.54 14.3093 150.092 13.8473 149.766 13.25C149.439 12.6433 149.276 11.9433 149.276 11.15C149.276 10.3567 149.434 9.66133 149.752 9.064C150.069 8.46667 150.512 8.00933 151.082 7.692C151.66 7.36533 152.323 7.202 153.07 7.202C153.798 7.202 154.442 7.36067 155.002 7.678C155.562 7.99533 155.991 8.434 156.29 8.994C156.598 9.54467 156.752 10.17 156.752 10.87ZM155.436 10.604C155.436 10.1187 155.328 9.70333 155.114 9.358C154.899 9.00333 154.605 8.73733 154.232 8.56C153.868 8.37333 153.462 8.28 153.014 8.28C152.37 8.28 151.819 8.48533 151.362 8.896C150.914 9.30667 150.657 9.876 150.592 10.604H155.436ZM161.289 13.824L163.669 7.328H165.027L162.017 15H160.533L157.523 7.328H158.895L161.289 13.824ZM166.939 6.082C166.696 6.082 166.491 5.998 166.323 5.83C166.155 5.662 166.071 5.45667 166.071 5.214C166.071 4.97133 166.155 4.766 166.323 4.598C166.491 4.43 166.696 4.346 166.939 4.346C167.172 4.346 167.368 4.43 167.527 4.598C167.695 4.766 167.779 4.97133 167.779 5.214C167.779 5.45667 167.695 5.662 167.527 5.83C167.368 5.998 167.172 6.082 166.939 6.082ZM167.555 7.328V15H166.281V7.328H167.555ZM176.726 10.87C176.726 11.1127 176.712 11.3693 176.684 11.64H170.552C170.599 12.396 170.856 12.9887 171.322 13.418C171.798 13.838 172.372 14.048 173.044 14.048C173.595 14.048 174.052 13.922 174.416 13.67C174.79 13.4087 175.051 13.0633 175.2 12.634H176.572C176.367 13.3713 175.956 13.9733 175.34 14.44C174.724 14.8973 173.959 15.126 173.044 15.126C172.316 15.126 171.663 14.9627 171.084 14.636C170.515 14.3093 170.067 13.8473 169.74 13.25C169.414 12.6433 169.25 11.9433 169.25 11.15C169.25 10.3567 169.409 9.66133 169.726 9.064C170.044 8.46667 170.487 8.00933 171.056 7.692C171.635 7.36533 172.298 7.202 173.044 7.202C173.772 7.202 174.416 7.36067 174.976 7.678C175.536 7.99533 175.966 8.434 176.264 8.994C176.572 9.54467 176.726 10.17 176.726 10.87ZM175.41 10.604C175.41 10.1187 175.303 9.70333 175.088 9.358C174.874 9.00333 174.58 8.73733 174.206 8.56C173.842 8.37333 173.436 8.28 172.988 8.28C172.344 8.28 171.794 8.48533 171.336 8.896C170.888 9.30667 170.632 9.876 170.566 10.604H175.41ZM188.628 7.328L186.234 15H184.918L183.07 8.91L181.222 15H179.906L177.498 7.328H178.8L180.564 13.768L182.468 7.328H183.77L185.632 13.782L187.368 7.328H188.628ZM192.608 15.126C192.02 15.126 191.493 15.028 191.026 14.832C190.56 14.6267 190.191 14.3467 189.92 13.992C189.65 13.628 189.5 13.2127 189.472 12.746H190.788C190.826 13.1287 191.003 13.4413 191.32 13.684C191.647 13.9267 192.072 14.048 192.594 14.048C193.08 14.048 193.462 13.9407 193.742 13.726C194.022 13.5113 194.162 13.2407 194.162 12.914C194.162 12.578 194.013 12.3307 193.714 12.172C193.416 12.004 192.954 11.8407 192.328 11.682C191.759 11.5327 191.292 11.3833 190.928 11.234C190.574 11.0753 190.266 10.8467 190.004 10.548C189.752 10.24 189.626 9.83867 189.626 9.344C189.626 8.952 189.743 8.59267 189.976 8.266C190.21 7.93933 190.541 7.68267 190.97 7.496C191.4 7.3 191.89 7.202 192.44 7.202C193.29 7.202 193.976 7.41667 194.498 7.846C195.021 8.27533 195.301 8.86333 195.338 9.61H194.064C194.036 9.20867 193.873 8.88667 193.574 8.644C193.285 8.40133 192.893 8.28 192.398 8.28C191.941 8.28 191.577 8.378 191.306 8.574C191.036 8.77 190.9 9.02667 190.9 9.344C190.9 9.596 190.98 9.806 191.138 9.974C191.306 10.1327 191.512 10.2633 191.754 10.366C192.006 10.4593 192.352 10.5667 192.79 10.688C193.341 10.8373 193.789 10.9867 194.134 11.136C194.48 11.276 194.774 11.4907 195.016 11.78C195.268 12.0693 195.399 12.4473 195.408 12.914C195.408 13.334 195.292 13.712 195.058 14.048C194.825 14.384 194.494 14.65 194.064 14.846C193.644 15.0327 193.159 15.126 192.608 15.126ZM196.801 17.604V17.478C197.762 16.4887 198.49 15.336 198.985 14.02C199.489 12.704 199.741 11.3227 199.741 9.876C199.741 8.392 199.475 6.964 198.943 5.592C198.42 4.21067 197.636 3.03 196.591 2.05V1.924H197.921C198.901 2.82933 199.652 3.982 200.175 5.382C200.707 6.77267 200.973 8.27067 200.973 9.876C200.973 11.444 200.721 12.9047 200.217 14.258C199.722 15.6113 199.027 16.7267 198.131 17.604H196.801Z" fill="black"/>
                <line opacity="0.5" x1="219.5" y1="2.5" x2="219.5" y2="18.5" stroke="black"/>
                <path opacity="0.6" d="M237.352 5.242V15H236.078V5.242H237.352ZM243.261 7.188C244.195 7.188 244.951 7.47267 245.529 8.042C246.108 8.602 246.397 9.414 246.397 10.478V15H245.137V10.66C245.137 9.89467 244.946 9.31133 244.563 8.91C244.181 8.49933 243.658 8.294 242.995 8.294C242.323 8.294 241.787 8.504 241.385 8.924C240.993 9.344 240.797 9.95533 240.797 10.758V15H239.523V7.328H240.797V8.42C241.049 8.028 241.39 7.72467 241.819 7.51C242.258 7.29533 242.739 7.188 243.261 7.188ZM255.305 15.098C254.661 15.098 254.082 14.986 253.569 14.762C253.065 14.5287 252.668 14.2113 252.379 13.81C252.089 13.3993 251.94 12.928 251.931 12.396H253.289C253.335 12.8533 253.522 13.2407 253.849 13.558C254.185 13.866 254.67 14.02 255.305 14.02C255.911 14.02 256.387 13.8707 256.733 13.572C257.087 13.264 257.265 12.872 257.265 12.396C257.265 12.0227 257.162 11.7193 256.957 11.486C256.751 11.2527 256.495 11.0753 256.187 10.954C255.879 10.8327 255.463 10.702 254.941 10.562C254.297 10.394 253.779 10.226 253.387 10.058C253.004 9.89 252.673 9.62867 252.393 9.274C252.122 8.91 251.987 8.42467 251.987 7.818C251.987 7.286 252.122 6.81467 252.393 6.404C252.663 5.99333 253.041 5.676 253.527 5.452C254.021 5.228 254.586 5.116 255.221 5.116C256.135 5.116 256.882 5.34467 257.461 5.802C258.049 6.25933 258.38 6.866 258.455 7.622H257.055C257.008 7.24867 256.812 6.922 256.467 6.642C256.121 6.35267 255.664 6.208 255.095 6.208C254.563 6.208 254.129 6.348 253.793 6.628C253.457 6.89867 253.289 7.28133 253.289 7.776C253.289 8.13067 253.387 8.42 253.583 8.644C253.788 8.868 254.035 9.04067 254.325 9.162C254.623 9.274 255.039 9.40467 255.571 9.554C256.215 9.73133 256.733 9.90867 257.125 10.086C257.517 10.254 257.853 10.52 258.133 10.884C258.413 11.2387 258.553 11.724 258.553 12.34C258.553 12.816 258.427 13.264 258.175 13.684C257.923 14.104 257.549 14.4447 257.055 14.706C256.56 14.9673 255.977 15.098 255.305 15.098ZM261.982 8.378V12.9C261.982 13.2733 262.061 13.5393 262.22 13.698C262.378 13.8473 262.654 13.922 263.046 13.922H263.984V15H262.836C262.126 15 261.594 14.8367 261.24 14.51C260.885 14.1833 260.708 13.6467 260.708 12.9V8.378H259.714V7.328H260.708V5.396H261.982V7.328H263.984V8.378H261.982ZM268.873 15.126C268.155 15.126 267.501 14.9627 266.913 14.636C266.335 14.3093 265.877 13.8473 265.541 13.25C265.215 12.6433 265.051 11.9433 265.051 11.15C265.051 10.366 265.219 9.67533 265.555 9.078C265.901 8.47133 266.367 8.00933 266.955 7.692C267.543 7.36533 268.201 7.202 268.929 7.202C269.657 7.202 270.315 7.36533 270.903 7.692C271.491 8.00933 271.953 8.46667 272.289 9.064C272.635 9.66133 272.807 10.3567 272.807 11.15C272.807 11.9433 272.63 12.6433 272.275 13.25C271.93 13.8473 271.459 14.3093 270.861 14.636C270.264 14.9627 269.601 15.126 268.873 15.126ZM268.873 14.006C269.331 14.006 269.76 13.8987 270.161 13.684C270.563 13.4693 270.885 13.1473 271.127 12.718C271.379 12.2887 271.505 11.766 271.505 11.15C271.505 10.534 271.384 10.0113 271.141 9.582C270.899 9.15267 270.581 8.83533 270.189 8.63C269.797 8.41533 269.373 8.308 268.915 8.308C268.449 8.308 268.019 8.41533 267.627 8.63C267.245 8.83533 266.937 9.15267 266.703 9.582C266.47 10.0113 266.353 10.534 266.353 11.15C266.353 11.7753 266.465 12.3027 266.689 12.732C266.923 13.1613 267.231 13.4833 267.613 13.698C267.996 13.9033 268.416 14.006 268.873 14.006ZM274.006 11.15C274.006 10.3567 274.165 9.666 274.482 9.078C274.8 8.48067 275.238 8.01867 275.798 7.692C276.368 7.36533 277.016 7.202 277.744 7.202C278.687 7.202 279.462 7.43067 280.068 7.888C280.684 8.34533 281.09 8.98 281.286 9.792H279.914C279.784 9.32533 279.527 8.95667 279.144 8.686C278.771 8.41533 278.304 8.28 277.744 8.28C277.016 8.28 276.428 8.532 275.98 9.036C275.532 9.53067 275.308 10.2353 275.308 11.15C275.308 12.074 275.532 12.788 275.98 13.292C276.428 13.796 277.016 14.048 277.744 14.048C278.304 14.048 278.771 13.9173 279.144 13.656C279.518 13.3947 279.774 13.0213 279.914 12.536H281.286C281.081 13.32 280.67 13.95 280.054 14.426C279.438 14.8927 278.668 15.126 277.744 15.126C277.016 15.126 276.368 14.9627 275.798 14.636C275.238 14.3093 274.8 13.8473 274.482 13.25C274.165 12.6527 274.006 11.9527 274.006 11.15ZM287.27 15L284.26 11.612V15H282.986V4.64H284.26V10.73L287.214 7.328H288.992L285.38 11.15L289.006 15H287.27Z" fill="#00FF66"/>
                </svg>
                <h6>${product.price}</h6>
                <p>{product.description}</p>
                <hr></hr>
                <h6>Colours: 
                    <svg width="40" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="6" fill="#A0BCE0"/>
                    <circle cx="10" cy="10" r="9" stroke="black" stroke-width="2"/>
                    <circle cx="38" cy="10" r="10" fill="#E07575"/>
                    </svg>
                </h6>
                <div className="product_sizes">
                    <h6>Size:</h6>
                    <div className="product_sizes_container">
                        <p>XS</p>
                    </div>
                    <div className="product_sizes_container">
                        <p>S</p>
                    </div>
                    <div className="product_sizes_container">
                        <p>M</p>
                    </div>
                    <div className="product_sizes_container">
                        <p>L</p>
                    </div>
                    <div className="product_sizes_container">
                        <p>XL</p>
                    </div>
                </div>
                <div className="productdetails_quantity_container">
                    <div className="productdetails_quantity_form">
                        <div className="productdetails_minus" onClick={handleMinuxQuantity}>
                            <h5>-</h5>
                        </div>
                        <div className="productdetails_quantity">
                            <h5>{quanitiy}</h5>
                        </div>
                        <div className="productdetails_positive" onClick={handlePlusQuantity}>
                            <h5>+</h5>
                        </div>
                    </div>
                    <button className="productdetails_btn" onClick={() => {dispatch(addToCart(product))}}>Buy Now</button>
                    <div className="productdetails_heartIcon">
                        <Link to={'/favourite'}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="productdetails_delivery">
                    <div className="productdetails_delivery1">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_120_1374)">
                        <path d="M11.6667 31.6667C13.5076 31.6667 15 30.1743 15 28.3333C15 26.4924 13.5076 25 11.6667 25C9.82573 25 8.33334 26.4924 8.33334 28.3333C8.33334 30.1743 9.82573 31.6667 11.6667 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.33331 28.3335H6.99998C5.89541 28.3335 4.99998 27.4381 4.99998 26.3335V21.6668M3.33331 8.3335H19.6666C20.7712 8.3335 21.6666 9.22893 21.6666 10.3335V28.3335M15 28.3335H25M31.6667 28.3335H33C34.1046 28.3335 35 27.4381 35 26.3335V18.3335M35 18.3335H21.6666M35 18.3335L30.5826 10.9712C30.2211 10.3688 29.5701 10.0002 28.8676 10.0002H21.6666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 11.8182H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.81818 15.4545H8.48484" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 19.0909H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_120_1374">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <div>
                            <h6>Free Delivery</h6>
                            <p>Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <div className="productdetails_delivery2">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_261_4865)">
                        <path d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_261_4865">
                        <rect width="40" height="40" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <div>
                            <h6>Return Delivery</h6>
                            <p>Free 30 Days Delivery Returns. Details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
        <div className="container slide2 details_slide2">
            <div className="slide2_title details_slide2_title">
                <svg width="15" height="35" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="40" rx="4" fill="#DB4444"/>
                </svg>
                <span>Related Item</span>
            </div>
            <div className=''>
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
            </div>
            <button className='Slide2_but'>View All Products</button>
        </div>
    </>
    )
}

export default ProductDetails;