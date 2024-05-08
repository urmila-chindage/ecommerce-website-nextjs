import bcrypt from "bcryptjs";
const data = {
    users : [
        {
            name:"Urmila Sirase",
            email:"urmilachindage@gmail.com",
            password:bcrypt.hashSync("123456"),
            isAdmin:true
        },
        {
            name:"Ujjwal Sirase",
            email:"ujjwalsirase@gmail.com",
            password:bcrypt.hashSync("ujjwal"),
            isAdmin:false
        }
    ],
    products : [
        {
            name:"Apple12",
            slug:"apple-mobile",
            category:"Mobiles",
            image:"/images/mobileimage1.jpg",
            price:70,
            brand:"Apple",
            rating:4.5,
            numReviews:4.5,
            countInStock:20,
            description:"a populat Mobile",
            isFeatured:true,
            banner:"/images/banner1.jpg"
        },
        {
            name:"Redme Note 13 Pro+",
            slug:"redme-mobile",
            category:"Mobiles",
            image:"/images/mobileimage2.jpg",
            price:80,
            brand:"Redme",
            rating:3.5,
            numReviews:10,
            countInStock:20,
            description:"a populat mobile",
            isFeatured:true,
            banner:"/images/banner2.jpg"
        },
        {
            name:"realme narzo 60x 5G+",
            slug:"realme-mobile",
            category:"Mobiles",
            image:"/images/mobileimage3.jpg",
            price:90,
            brand:"Realme",
            rating:3.5,
            numReviews:10,
            countInStock:20,
            description:"a populat mobile",
            isFeatured:true,
            banner:"/images/banner1.jpg"
        },
        {
            name:"Zebronics",
            slug:"zebronics-headphone",
            category:"Headphones",
            image:"/images/headphoneimage1.jpg",
            price:90,
            brand:"zebronics",
            rating:2.9,
            numReviews:13,
            countInStock:20,
            description:"good quality headphone",
        },
        {
            name:"Boat",
            slug:"boat-headphones",
            category:"Headphones",
            image:"/images/headphoneimage2.jpg",
            price:95,
            brand:"Boat",
            rating:3.5,
            numReviews:7,
            countInStock:20,
            description:"A Good Quality Headphones",
        },
        {
            name:"Hammer",
            slug:"hammer-headphones",
            category:"Headphones",
            image:"/images/headphoneimage4.jpg",
            price:75,
            brand:"Hammer",
            rating:2.4,
            numReviews:14,
            countInStock:20,
            description:"Good Quality Product",
        },
        
    ],
}

export default data