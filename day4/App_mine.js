import React from "react";
import ReactDOM from "react-dom/client"
import icon from "./React-icon.png"
import user from "./user.png"
import food from "./food.png"


const Title = () => {
    return(
        <div>
            <h1>Food Villa</h1>            
        </div>
    );
}

const AppLayout = () => {
    return (
        /*
        - Header
            - Logo (Title)
            - Nav Items (right side)
            - Cart
        - Body
            - Search Bar
            - Restaurant List
                - Restaurant Card (many)
                    - Image
                    - Description
                    - Rating
                    - Cusines
        - Footer
            - Links
            - CopyRight
        */
        <>
            <Header />
            <Body />
            <Footer />
        </>
        
    )
}

const styleObj = {
    backgroundColor:"red"
}
const Header = () => {
    return(
        <div style={styleObj} className="header">
            <a href="#">
                <img src ={food} className="logo"/>
            </a>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const burgerKing = {
    name:"Burger King",
    image: "https://res.cloudinary.com/demo/image/upload/lions.jpg",
    cusines: ["American","Chinese"],
    rating: 4.2
}
const restaurantList = {
    "data": {
        "title": "SEE ALL",
        "totalOpenRestaurants": 1573,
        "cards": [{
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "72821",
                "name": "Burger King",
                "uuid": "d9021b3a-1e7c-497a-b52b-2561ad674af6",
                "city": "1",
                "area": "Kaikondrahalli",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "maf1fgipihaidm3kertx",
                "cuisines": ["Burgers", "American"],
                "tags": [],
                "costForTwo": 35000,
                "costForTwoString": "₹350 FOR TWO",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "slaString": "24 MINS",
                "lastMileTravel": 1,
                "slugs": {
                    "restaurant": "burger-king-bellandur-bellandursarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Burger King, Surjapur road, Dodda Kannali  Bengaluru South Karnataka--560035",
                "locality": "Dodda Kannali",
                "parentId": 166,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [{
                        "meta": "60% off | Use STEALDEAL",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "60% off up to ₹120 | Use code STEALDEAL",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use STEALDEAL",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "60% off up to ₹120 | Use code STEALDEAL",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [{
                    "type": "PROMOTED"
                }],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5700193~p=1~eid=00000185-8b09-91ee-0e4b-f232006c017d",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "72821",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 1,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.2",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "654809",
                "name": "Meghana Foods",
                "uuid": "714578ac-c1b9-46a2-82af-a0d10ad21ad4",
                "city": "1",
                "area": "Sarjapur Road",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "c627e55c996978a070c10079ae57f706",
                "cuisines": ["Biryani", "Andhra", "South Indian", "North Indian", "Chinese", "Seafood"],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "slaString": "27 MINS",
                "lastMileTravel": 2,
                "slugs": {
                    "restaurant": "meghana-foods-bellandur-sarjapur-bellandur-sarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "SY No.18/2A, 1ST FLOOR G R S TOWERS SARJAPURA ROAD,BELLANDUR BANGALORE ,Mahadevapura , B.B.M.P East,Karnataka, 560102",
                "locality": "G R S TOWERS",
                "parentId": 635,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [{
                    "type": "NEW"
                }],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "2 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "654809",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 2,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.5",
                "totalRatings": 100,
                "new": true
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "267544",
                "name": "Gopaljee Cafe",
                "uuid": "95d0b475-16c4-4f58-be4b-1958de27a8fa",
                "city": "1",
                "area": "Bellandur",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "l54c700dfn5wpzrao6rc",
                "cuisines": ["Indian"],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "slaString": "23 MINS",
                "lastMileTravel": 2.5,
                "slugs": {
                    "restaurant": "gopaljee-cafe-bellandur-sarjapur-bellandur-sarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "NO. 17/1, CHANDRA MANSION, GROUND FLOOR, AMBALIPURA VILLAGE, SARJAPURA MAIN ROAD, BEHIND MORIZ HOTEL, opposite to back gate of akme harmony appartment",
                "locality": "Sarjapur Road",
                "parentId": 89083,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [{
                    "type": "PROMOTED"
                }],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5621492~p=4~eid=00000185-8b09-91ee-0e4b-f233006c0449",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "2.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "267544",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 2.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.3",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "8530",
                "name": "Kritunga Restaurant",
                "uuid": "84e612db-d9d4-483d-ad77-81ea42c2208f",
                "city": "1",
                "area": "Marathahalli",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "vxxpqtjryjhhrpoxt65h",
                "cuisines": ["Andhra", "Biryani", "South Indian", "Hyderabadi"],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "slaString": "36 MINS",
                "lastMileTravel": 7.5,
                "slugs": {
                    "restaurant": "kritunga-kundanhalli-gate-marathahalli",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "42 2  Sriven square  Munekollela  Beside star bazaar  Kundanahalli gate  Bangalore",
                "locality": "Kundalahalli",
                "parentId": 20088,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "7.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "8530",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 7.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.7",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "210119",
                "name": "Sri Jayadurga Biryani",
                "uuid": "13927ae4-7437-4d24-959e-888585c704e8",
                "city": "1",
                "area": "Marathahalli",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "e5k8viofbtrxxo75lxdy",
                "cuisines": ["Biryani", "South Indian", "Andhra", "Hyderabadi", "Snacks"],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "slaString": "39 MINS",
                "lastMileTravel": 8.300000190734863,
                "slugs": {
                    "restaurant": "sri-jayadurga-biryani-marathahalli-marathahalli",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Sri Jaya Durga Restaurant, OPP AMRUTHA BAKERY, LAKSHMI NARAYANA TEMPLE ROAD, MUNNEKOLALA, MARATHAHALLI, BANGALORE",
                "locality": "Munnekollal",
                "parentId": 14529,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "8.3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "210119",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "lastMileTravel": 8.300000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "IT_IS_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.7",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "12394",
                "name": "Byg Brewski Brewing Company",
                "uuid": "4e4319a4-d11f-45a7-8bf0-9d5d91e709f2",
                "city": "1",
                "area": "Sarjapur Road",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "koqni7wykoybxibmsddx",
                "cuisines": ["South Indian", "North Indian", "Asian", "Continental", "Pizzas", "Burgers", "Pastas", "Desserts"],
                "tags": [],
                "costForTwo": 85000,
                "costForTwoString": "₹850 FOR TWO",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "slaString": "27 MINS",
                "lastMileTravel": 0.6000000238418579,
                "slugs": {
                    "restaurant": "big-brewsky-bellandursarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "10 2A  Big Brewsky  Kaikondrahalli  Sarjapur road  Behind MK Retail  Bangalore  Karnataka 560035",
                "locality": "Kaikondrahalli",
                "parentId": 7382,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [{
                    "type": "PROMOTED"
                }],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5629869~p=7~eid=00000185-8b09-91ee-0e4b-f234006c077a",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.6 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "12394",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 0.6000000238418579,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.2",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "201224",
                "name": "Asha tiffins",
                "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
                "city": "1",
                "area": "7th Sector",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "n15vckntsiboiod3gpco",
                "cuisines": ["Indian", "South Indian", "Beverages"],
                "tags": [],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "slaString": "35 MINS",
                "lastMileTravel": 6.900000095367432,
                "slugs": {
                    "restaurant": "asha-tiffins-hsr-hsr-2",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
                "locality": "7th Sector",
                "parentId": 236243,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "6.9 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "201224",
                    "deliveryTime": 35,
                    "minDeliveryTime": 35,
                    "maxDeliveryTime": 35,
                    "lastMileTravel": 6.900000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.4",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "289513",
                "name": "Dindigul Thalappakatti",
                "uuid": "a554bb76-0f00-4a24-a50e-5a0c0205fd70",
                "city": "1",
                "area": "Bellandur",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "ernewdge09in6coowmym",
                "cuisines": ["Biryani", "Barbecue", "South Indian", "Chinese", "North Indian"],
                "tags": [],
                "costForTwo": 60000,
                "costForTwoString": "₹600 FOR TWO",
                "deliveryTime": 21,
                "minDeliveryTime": 21,
                "maxDeliveryTime": 21,
                "slaString": "21 MINS",
                "lastMileTravel": 0.800000011920929,
                "slugs": {
                    "restaurant": "dindigul-thalappakatti-bellandur-sarjapur-bellandur-sarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "No. 53/2, as per Bruhat Bangalore Mahanagara Palike Form-B property register Sl. No. 319, Doddakannelli Village, Varthur Hobli, Bangalore.",
                "locality": "Chikkakannahalli",
                "parentId": 332,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [{
                    "type": "PROMOTED"
                }],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5693510~p=10~eid=00000185-8b09-91ee-0e4b-f235006c0a0d",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.8 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "289513",
                    "deliveryTime": 21,
                    "minDeliveryTime": 21,
                    "maxDeliveryTime": 21,
                    "lastMileTravel": 0.800000011920929,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.8",
                "totalRatings": 100,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "649407",
                "name": "McDonald's",
                "uuid": "9df4ebab-877a-4c93-a789-115fbfc50ad4",
                "city": "1",
                "area": "Sarjapur Road",
                "totalRatingsString": "50+ ratings",
                "cloudinaryImageId": "0e8f93a56b93e43d7627c2c21bc1106c",
                "cuisines": ["Burgers", "Beverages", "Cafe", "Desserts"],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "slaString": "24 MINS",
                "lastMileTravel": 1,
                "slugs": {
                    "restaurant": "mcdonalds-near-wipro-gate-bellandur-sarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "McDonalds Family Restaurants,Survey No:65/1A, Beside SOUTH IN HOTEL, Near Wipro Gate, Kaikondrahalli, Sarjapur Road, Bangalore-560035",
                "locality": "Near Wipro Gate",
                "parentId": 630,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [{
                    "type": "NEW"
                }],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "1 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "649407",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 1,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.2",
                "totalRatings": 50,
                "new": true
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "1221",
                "name": "Biryani Day",
                "uuid": "1dec917e-3f4b-479b-b4db-f7095248bbd8",
                "city": "1",
                "area": "Marathahalli",
                "totalRatingsString": "500+ ratings",
                "cloudinaryImageId": "ucpbuzrvhg0ire3h9hwu",
                "cuisines": ["North Indian", "Chinese", "Andhra", "Biryani"],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "slaString": "36 MINS",
                "lastMileTravel": 6.900000095367432,
                "slugs": {
                    "restaurant": "biryani-day-thulsi-theater-road-marathahalli",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "No 389/2, 7th Cross, Thulsi Theater Road, Marathalli",
                "locality": "Thulsi Theater Road",
                "parentId": 2635,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "6.9 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "1221",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 6.900000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 500,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "412289",
                "name": "Oh! Calcutta",
                "uuid": "93023c71-b144-4708-83bf-a165536505ad",
                "city": "1",
                "area": "Sarjapur Road",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "o5ktljebt9zjcmf4jujw",
                "cuisines": ["Bengali", "Indian"],
                "tags": [],
                "costForTwo": 80000,
                "costForTwoString": "₹800 FOR TWO",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "slaString": "24 MINS",
                "lastMileTravel": 0.800000011920929,
                "slugs": {
                    "restaurant": "oh-calcutta-doddakannelli-village-bellandur-sarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Kitchens@ Sarjapur, 53/2, Sl no 319, Doddakannelli Village, Varthur Holbli, Sarjapur, Bangalore - 560035",
                "locality": "Daddakanahalli",
                "parentId": 672,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "Flat ₹125 off",
                    "shortDescriptionList": [{
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "₹125 OFF",
                    "shortDescriptionList": [{
                        "meta": "Use FLAT125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [{
                    "type": "PROMOTED"
                }],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5685369~p=13~eid=00000185-8b09-91ee-0e4b-f236006c0d38",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.8 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "412289",
                    "deliveryTime": 24,
                    "minDeliveryTime": 24,
                    "maxDeliveryTime": 24,
                    "lastMileTravel": 0.800000011920929,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.3",
                "totalRatings": 100,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "420659",
                "name": "Sri Lakshmi Biryani",
                "uuid": "eb227257-1596-441a-9c84-8265417d2d19",
                "city": "1",
                "area": "Marathahalli",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "n7pn6ilfponvcatp0n73",
                "cuisines": ["Biryani", "North Indian", "Snacks"],
                "tags": [],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "slaString": "39 MINS",
                "lastMileTravel": 8.300000190734863,
                "slugs": {
                    "restaurant": "sri-lakshmi-biryani-kadubeesanahalli-kadubeesanahalli",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "No 15&16 Srinivasa Reddy building, Lakshmi Narayana temple road, manunatha layout, munnekoll Bangalore 560037",
                "locality": "Manunatha Layout",
                "parentId": 193940,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "8.3 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "420659",
                    "deliveryTime": 39,
                    "minDeliveryTime": 39,
                    "maxDeliveryTime": 39,
                    "lastMileTravel": 8.300000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "IT_IS_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.6",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "261261",
                "name": "Hotel Empire",
                "uuid": "1737faa1-3303-4f10-9111-74193f23c459",
                "city": "1",
                "area": "Sarjapur Road",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "ue1tt2ujt2ybghd60bs0",
                "cuisines": ["North Indian", "Kebabs", "Biryani"],
                "tags": [],
                "costForTwo": 45000,
                "costForTwoString": "₹450 FOR TWO",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "slaString": "23 MINS",
                "lastMileTravel": 0.800000011920929,
                "slugs": {
                    "restaurant": "hotel-empire-bellandur-sarjapur-bellandur-sarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "Countryside Layout, Rainbow Drive, Bengaluru, Karnataka 560035",
                "locality": "Countryside Layout",
                "parentId": 475,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "0.8 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "261261",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 0.800000011920929,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.1",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "577196",
                "name": "Pablo's by Living Food",
                "uuid": "3eef0838-0c33-4f04-a226-81b8f8db4044",
                "city": "1",
                "area": "Bellandur",
                "totalRatingsString": "50+ ratings",
                "cloudinaryImageId": "xjvfgklxhopmmzb1nogr",
                "cuisines": ["Healthy Food", "American", "European", "Bakery", "Juices", "Sweets", "Snacks", "Cafe", "Fast Food", "Beverages", "Desserts"],
                "tags": [],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "slaString": "27 MINS",
                "lastMileTravel": 3.5,
                "slugs": {
                    "restaurant": "pablo's-bellandur-sarjapur-bellandur-sarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "NO.1202SY NO79/7,BELLANDUR GRAMA,OPP GREEN GLEN LAYOUTBANGALORE, KARNATAKINDIAMahadevapuraB.B.M.P EasKarnataka560102",
                "locality": "Green Glen Layout, ",
                "parentId": 345705,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "ribbon": [{
                    "type": "PROMOTED"
                }],
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=5621964~p=16~eid=00000185-8b09-91ee-0e4b-f237006c105e",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "3.5 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "577196",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 3.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.5",
                "totalRatings": 50,
                "new": false
            },
            "subtype": "basic"
        }, {
            "type": "restaurant",
            "data": {
                "type": "F",
                "id": "4747",
                "name": "Phulke Ghar Ke",
                "uuid": "56825c89-4929-470b-952b-7f82541bf80a",
                "city": "1",
                "area": "Bellandur",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "r08nbmwgi1pmj01hr9yh",
                "cuisines": ["North Indian"],
                "tags": [],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 26,
                "minDeliveryTime": 26,
                "maxDeliveryTime": 26,
                "slaString": "26 MINS",
                "lastMileTravel": 2.799999952316284,
                "slugs": {
                    "restaurant": "phulke-ghar-ke-bellandursarjapur",
                    "city": "bangalore"
                },
                "cityState": "1",
                "address": "#18/1, HMR Complex, Near Ganesh Temple, Bellandur, Bangalore",
                "locality": "HMR Complex",
                "parentId": 20953,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [{
                        "meta": "50% off | Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [{
                        "meta": "Use WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "descriptionList": [{
                        "meta": "50% off up to ₹100 | Use code WELCOME50",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                    "fees": [],
                    "totalFees": 0,
                    "message": "",
                    "title": "",
                    "amount": "",
                    "icon": ""
                },
                "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                    "imageBased": [],
                    "textBased": [],
                    "textExtendedBadges": []
                },
                "lastMileTravelString": "2.7 kms",
                "hasSurge": false,
                "sla": {
                    "restaurantId": "4747",
                    "deliveryTime": 26,
                    "minDeliveryTime": 26,
                    "maxDeliveryTime": 26,
                    "lastMileTravel": 2.799999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.2",
                "totalRatings": 1000,
                "new": false
            },
            "subtype": "basic"
        }],
        "totalRestaurants": 1573
    }
};

/* const config= [
    {
        type: "carousel",
        cards: [
            {
                offerName : "50 % off"
            },
            {
                offerName : "No delivery charge"
            }
        ]
    },
    {
        type: "restaurant",
        cards: [
            {
                name:"Burger King",
                image: "https://res.cloudinary.com/demo/image/upload/lions.jpg",
                cusines: ["American","Chinese"],
                rating: 4.2
            },
            {
                name:"KFC",
                image: "https://res.cloudinary.com/demo/image/upload/lions.jpg",
                cusines: ["American","Chinese"],
                rating: 4
            }
        ]
    }
] */

const RestaurantCard = ({name,cuisines,avgRating}) => {
    return (
        <div className="card">
            <img src={burgerKing.image} />
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="restaurant-list">
            {
            restaurantList.data.cards.map((restaurant,index)=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                /** The above one is equivalent to
                 * <RestaurantCard {...restaurantList.data.cards[0].data} hello="world"/>
        <RestaurantCard {...restaurantList.data.cards[1].data}/>
        <RestaurantCard {...restaurantList.data.cards[2].data}/>
        <RestaurantCard {...restaurantList.data.cards[3].data}/>
        <RestaurantCard {...restaurantList.data.cards[4].data}/>
        <RestaurantCard {...restaurantList.data.cards[5].data}/>
                 */
            })
            }        
        </div>
    )
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
}

const heading = (<h2>This is heading</h2>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
