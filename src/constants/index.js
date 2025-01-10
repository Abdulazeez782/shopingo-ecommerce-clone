import {facebookIcon, instagramIcon, emailIcon, homeIcon, orderIcon, addressIcon, paymentIcon, accountIcon, logoutIcon} from '../assets/icons'
import { blueJean, bucketHat, football, headphone, heels, laptop, redShirt, redSofa, smartphone, smartwatch, sneakers, sofa, suit, sweater, watchesCategory, shoesCategory, bagsCategory, electronicsCategory, headPhonesCategory, furnitureCategory, jewelryCategory, sportsCategory, vegetableCategory, medicalCategory, sunglassCategory, fashionCategory, blogImage1, blogImage2, blogImage3, blogImage4, blogImage5, blogImage6, visa, paypal, mastercard, americanExpress} from '../assets/images'

export const headerLinks = [
    {href: "/", label: "Track Order"},
    {href: "/", label: "About"},
    {href: "/", label: "Our Stores"},
    {href: "/", label: "Blog"},
    {href: "/", label: "Contact"},
    {href: "/", label: "Help & FAQs"}
]

export const headerSocials = [
    {imgurl: facebookIcon, alt: "facebookIcon", href: "/"},
    {imgurl: instagramIcon, alt: "instagramIcon", href: "/"},
    {imgurl: emailIcon, alt: "emailIcon", href: "/"}
]

export const navLinks = [
    {href: "/", label: "HOME", secondaryLinks: []},
    {href: "/", label: "CATEGORIES", secondaryLinks: [
        [
            {label: "FASHION", links: [
                {href: "/", label: "CASUAL T-SHIRTS"},
                {href: "/", label: "JACKETS"},
                {href: "/", label: "JEANS"},
                {href: "/", label: "SNEAKERS"},
                {href: "/", label: "BELTS"},
                {href: "/", label: "SPORT SHOES"},
            ]},
            {label: "ELECTRONICS", links: [
                {href: "/", label: "MOBILES"},
                {href: "/", label: "LAPTOP"},
                {href: "/", label: "MACBOOK"},
                {href: "/", label: "TELEVISIONS"},
                {href: "/", label: "FREEZER"},
                {href: "/", label: "SMART WATCH"},
            ]}
        ]
    ]},
    {label: "SHOP", secondaryLinks: [
        {href: "/", label: "PRODUCT DETAILS"},
        {href: "/", label: "SHOP CART"},
        {href: "/", label: "SHOP CATEGORIES"}
    ]},
    {href: "/aboutus", label: "ABOUT", secondaryLinks: []},
    {href: "/", label: "CONTACT", secondaryLinks: []},
    {href: "/", label: "OUR STORE", secondaryLinks: []},
    {href: "/", label: "ACCOUNT", secondaryLinks: [
        {href: "/", label: "DASHBOARD"},
        {href: "/", label: "USER DETAILS"},
        {href: "/", label: "MY ORDERS"},        
        {href: "/", label: "LOGIN"},        
        {href: "/", label: "REGISTER"},
    ]},
    {href: "/", label: "BLOG", secondaryLinks: []},
]

export const featuredProduct =  [
    {imgurl: redShirt, alt: "product-image", name: "Custom Men's Shirt"},
    {imgurl: suit, alt: "product-image", name: "Black Men's Suit"},
    {imgurl: blueJean, alt: "product-image", name: "Blue Men's Jean"},
    {imgurl: sweater, alt: "product-image", name: "Sweater"},
    {imgurl: sneakers, alt: "product-image",  name: "Sneakers"},
    {imgurl: sofa, alt: "product-image", name: "Sofa"},
    {imgurl: smartwatch, alt: "product-image", name: "Smartwatch"},
    {imgurl: heels, alt: "product-image", name: "Women's Heel Shoes"},
    {imgurl: bucketHat, alt: "product-image", name: "Bucket Hat"},
    {imgurl: headphone, alt: "product-image", name: "Headphone"},
]

export const newArrivals = [
    {imgurl: smartphone, alt: "product-image", name: "Smartphone"},
    {imgurl: laptop, alt: "product-image", name: "Laptop"},
    {imgurl: football, alt: "product-image", name: "Football"},
    {imgurl: redSofa, alt: "product-image", name: "Red Sofa"}
]

export const browseWearCategories = [
    {imgurl: watchesCategory, alt: "watches", heading: "WATCHES", subHeading: "8 PRODUCTS"},
    {imgurl: shoesCategory, alt: "shoes", heading: "SHOES", subHeading: "13 PRODUCTS"},
    {imgurl: bagsCategory, alt: "bags", heading: "BAGS", subHeading: "4 PRODUCTS"},
    {imgurl: electronicsCategory, alt: "electronics", heading: "ELECTRONICS", subHeading: "17 PRODUCTS"},
    {imgurl: headPhonesCategory, alt: "headphones", heading: "HEADPHONES", subHeading: "9 PRODUCTS"},
    {imgurl: furnitureCategory, alt: "furniture", heading: "FURNITURE", subHeading: "5 PRODUCTS"},
    {imgurl: jewelryCategory, alt: "jewelry", heading: "JEWELRY", subHeading: "22 PRODUCTS"},
    {imgurl: sportsCategory, alt: "sports", heading: "SPORTS", subHeading: "21 PRODUCTS"},
    {imgurl: vegetableCategory, alt: "vegetable", heading: "VEGETABLE", subHeading: "28 PRODUCTS"},
    {imgurl: medicalCategory, alt: "medical", heading: "MEDICAL", subHeading: "29 PRODUCTS"},
    {imgurl: sunglassCategory, alt: "sunglass", heading: "SUNGLASSES", subHeading: "12 PRODUCTS"},
    {imgurl: fashionCategory, alt: "fashion", heading: "FASHION", subHeading: "22 PRODUCTS"}
]

export const blogCategories = [
    {imgurl: blogImage1, heading: "Blog Short Title", paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.", comments: "2"},
    {imgurl: blogImage2, heading: "Blog Short Title", paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.", comments: "4"},
    {imgurl: blogImage3, heading: "Blog Short Title", paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.", comments: "2"},
    {imgurl: blogImage4, heading: "Blog Short Title", paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.", comments: "1"},
    {imgurl: blogImage5, heading: "Blog Short Title", paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.", comments: "0"},
    {imgurl: blogImage6, heading: "Blog Short Title", paragraphText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib.", comments: "9"},
]

export const contactInfo = [
    {label: "ADDRESS", info: "123 Street Name, City, Australia"},
    {label: "PHONE", info: "Toll Free (123) 472-796", secondInfo: "Mobile: +234 467 36283"},
    {label: "EMAIL", info: "mail@example.com"},
    {label: "WORKING DAYS", info: "MON-FRI / 9:30 AM - 6:30 PM"},
]

export const footerCategories = [
    {label: "Jeans", href: "/"},
    {label: "T-shirts", href: "/"},
    {label: "Sports", href: "/"},
    {label: "Shirts and Tops", href: "/"},
    {label: "Clogs and Mules", href: "/"},
    {label: "Sunglasses", href: "/"},
    {label: "Bags and Wallet", href: "/"},
    {label: "Sneakers", href: "/"},
    {label: "Electronics", href: "/"}
]

export const footerPopularTags = [
    {label: "CLOTHS", href: "/"},
    {label: "ELECTRONICS", href: "/"},
    {label: "FURNITURE", href: "/"},
    {label: "SPORTS", href: "/"},
    {label: "MEN WEAR", href: "/"},
    {label: "WOMEN WEAR", href: "/"},
    {label: "LAPTOPS", href: "/"},
    {label: "BAGS", href: "/"},
    {label: "SOFA", href: "/"},
    {label: "SHOES", href: "/"},
]

export const footerPaymentLogos = [
    {imgurl: visa},
    {imgurl: paypal},
    {imgurl: americanExpress},
    {imgurl: mastercard},
]

export const AccountLinks = [
    {label: "Dashboard", imgurl: homeIcon},
    {label: "Orders", imgurl: orderIcon},
    {label: "Addresses", imgurl: addressIcon},
    {label: "Payment Methods", imgurl: paymentIcon},
    {label: "Account Details", imgurl: accountIcon},
    {label: "Logout", imgurl: logoutIcon},
]