import p1 from "../Assets/gamepad.png"
import p2 from "../Assets/keyboard.png"
import p3 from "../Assets/LCD.png"
import p4 from "../Assets/chair.png"
import p5 from "../Assets/coat.png"
import p6 from "../Assets/bag.png"
import p7 from "../Assets/RGB-liquid.png"
import p8 from "../Assets/bookShell.png"
import p9 from "../Assets/a06f5d8e-0269-4aa2-a531-ed7290440855_1.259362d0d8c11e73aed87b8eebc626aa_1_-removebg-preview.png"
import p10 from "../Assets/camera.png"
import p11 from "../Assets/laptop.png"
import p12 from "../Assets/curology.png"
import p13 from "../Assets/kids-car.png"
import p14 from "../Assets/choose.png"
import p15 from "../Assets/play-station.png"
import p16 from "../Assets/jacket.png"


let allProducts = [
    {
        "id": "1",
        "title": "HAVIT HV-G92 Gamepad",
        "price": 109.95,
        "old_price": 175.95,
        "discount": "-40%",
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": p1,
        "rating": {
            "rate": 3.9
        }
        },
        {
        "id": "2",
        "title": "AK-900 Wired Keyboard",
        "price": 22.3,
        "old_price": 63.5,
        "discount": "-35%",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": p2,
        "rating": {
            "rate": 4.1
        }
        },
        {
        "id": "3",
        "title": "IPS LCD Gaming Monitor",
        "price": 55.99,
        "old_price": 65.95,
        "discount": "-30%",
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": p3,
        "rating": {
            "rate": 4.7
        }
        },
        {
        "id": "4",
        "title": "S-Series Comfort Chair ",
        "price": 15.99,
        "old_price": 30.4,
        "discount": "-25%",
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": p4,
        "rating": {
            "rate": 2.1
        }
        },
        {
        "id": "5",
        "title": "The north coat",
        "price": 260,
        "old_price": 360,
        "discount": "-75%",
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": p5,
        "rating": {
            "rate": 3.9
        }
        },
        {
        "id": "6",
        "title": "Gucci duffle bag",
        "price": 960,
        "old_price": 1160,
        "discount": "-40%",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": p6,
        "rating": {
            "rate": 4.1
        }
        },
        {
        "id": "7",
        "title": "RGB liquid CPU Cooler",
        "price": 160,
        "old_price": 170,
        "discount": "-10%",
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": p7,
        "rating": {
            "rate": 4.7
        }
        },
        {
        "id": "8",
        "title": "Small BookSelf",
        "price": 360,
        "old_price": 360,
        "discount": "-5%",
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": p8,
        "rating": {
            "rate": 2.1
        }
        },
        {
        "id": "9",
        "title": "Breed Dry Dog Food",
        "price": 100,
        "discount": "-60%",
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": p9,
        "rating": {
            "rate": 3.9
        }
        },
        {
        "id": "10",
        "title": "CANON EOS DSLR Camera",
        "price": 360,
        "discount": "-30%",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": p10,
        "rating": {
            "rate": 4.1
        }
        },
        {
        "id": "11",
        "title": "ASUS FHD Gaming Laptop",
        "price": 700,
        "discount": "-25%",
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": p11,
        "rating": {
            "rate": 4.7
        }
        },
        {
        "id": "12",
        "title": "Curology Product Set ",
        "price": 500,
        "discount": "-3%",
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": p12,
        "rating": {
            "rate": 2.1
        }
        },
        {
        "id": "13",
        "title": "Kids Electric Car",
        "price": 960,
        "discount": "-20%",
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": p13,
        "rating": {
            "rate": 3.9
        }
        },
        {
        "id": "14",
        "title": "Jr. Zoom Soccer Cleats",
        "price": 960,
        "discount": "-70%",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": p14,
        "rating": {
            "rate": 4.1
        }
        },
        {
        "id": "15",
        "title": "GP11 Shooter USB Gamepad",
        "price": 1160,
        "discount": "-40%",
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": p15,
        "rating": {
            "rate": 4.7
        }
        },
        {
        "id": "16",
        "title": "Quilted Satin Jacket",
        "price": 660,
        "discount": "-60%",
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "color1": "",
        "color2": "",
        "image": p16,
        "rating": {
            "rate": 2.1
        }
        }
]

export default allProducts;