import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4F5whCbQR21YvzXI0jKqBz9Fc5UmHeIZG-b0bwaNHEEzlp3QrKBfrvg&s"
          alt="logo"
          style={{ width: "100px", height: "auto", borderRadius: "100%" }}
        />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div className="card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
            resData.info.cloudinaryImageId
          }
          alt="" 
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <h2>{resData.info.name}</h2>
        <p>{resData.info.cuisines.join(", ")}</p>
        <p>
          {resData.info.locality}, {resData.info.areaName}
        </p>
        <p>{resData.info.costForTwo}</p>
        <p>{resData.info.avgRatingString} stars</p>
        <p>{resData.info.avgRating}</p>
      </div>
    </div>
  );
};

const reslist = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "979390",
      name: "Swad Sweets",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/6f4ec06a-a007-4618-8b84-317307e4049f_979390.JPG",
      locality: "Kankarbagh",
      areaName: "Kankarbagh",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Indian", "Sweets"],
      avgRating: 3.4,
      parentId: "198608",
      avgRatingString: "3.4",
      totalRatingsString: "19",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-10 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/swad-sweets-kankarbagh-rest979390",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1050502",
      name: "Coffee & Cravings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/9bd88dbf-3613-440f-a92c-062ac6b11764_1050502 (1).jpg",
      locality: "Kankarbagh",
      areaName: "Kankarbagh",
      costForTwo: "₹400 for two",
      cuisines: ["Cafe"],
      avgRating: 4.2,
      veg: true,
      parentId: "610788",
      avgRatingString: "4.2",
      totalRatingsString: "14",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "45-55 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/coffee-and-cravings-kankarbagh-rest1050502",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "474515",
      name: "Radhika Bakery Cake",
      cloudinaryImageId: "sst8mf1wkmw9prz0i09f",
      locality: "Ashok Nagar",
      areaName: "Kankarbagh",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Fast Food", "Snacks"],
      avgRating: 2.6,
      parentId: "285118",
      avgRatingString: "2.6",
      totalRatingsString: "21",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/radhika-bakery-cake-ashok-nagar-kankarbagh-rest474515",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "979551",
      name: "Vishnu Hotel & Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/1a199045-6a5c-4da2-8ca1-2311f7827f9c_979551.JPG",
      locality: "Kankarbagh",
      areaName: "Kankarbagh",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Biryani", "Indian", "Sweets"],
      avgRating: 3.8,
      parentId: "572665",
      avgRatingString: "3.8",
      totalRatingsString: "14",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-10 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹40 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/vishnu-hotel-and-restaurant-kankarbagh-rest979551",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1002594",
      name: "Saanvi Bakery and Cake Palace",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/532e9170-4a33-4c5f-90bc-c7b598600676_1002594.jpg",
      locality: "Phulwari Sharif",
      areaName: "Phulwari Sharif",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Ice Cream Cakes"],
      avgRating: 3.5,
      parentId: "584414",
      avgRatingString: "3.5",
      totalRatingsString: "10",
      sla: {
        deliveryTime: 59,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "55-65 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/saanvi-bakery-and-cake-palace-phulwari-sharif-rest1002594",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "930832",
      name: "Ribbons & ballons",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/44d93b76-f4db-419b-a1d1-899d5095feb0_930832.jpg",
      locality: "KHAGAUL ROAD",
      areaName: "KAILASH BHAWAN",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Ice Cream Cakes", "Cafe"],
      avgRating: 4.2,
      veg: true,
      parentId: "3421",
      avgRatingString: "4.2",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/ribbons-and-ballons-khagaul-road-kailash-bhawan-rest930832",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "985078",
      name: "Flames & Fire Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/e870d492-403b-4dc2-a7ba-95928c796488_985078.jpg",
      locality: "Kankarbagh",
      areaName: "Kankarbagh",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Biryani", "Indian", "Tandoor"],
      parentId: "575634",
      avgRatingString: "--",
      sla: {
        deliveryTime: 56,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "55-65 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-10 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/flames-and-fire-cafe-kankarbagh-rest985078",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "920886",
      name: "Sheetal Chhaya Cake & Snacks",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/4/7a0ae9a7-0a6d-4a2f-b76c-057aacd7e568_920886.jpg",
      locality: "SHIVAJI PARK ",
      areaName: "Kankarbagh",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery"],
      avgRating: 4.3,
      veg: true,
      parentId: "534326",
      avgRatingString: "4.3",
      totalRatingsString: "11",
      sla: {
        deliveryTime: 56,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "55-65 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-16 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/sheetal-chhaya-cake-and-snacks-shivaji-park-kankarbagh-rest920886",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1072880",
      name: "S S FOOD CENTER",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/1/0fd8f9b2-8c2f-4880-b04c-6481ec190d13_1072880.jpg",
      locality: "Kankarbagh",
      areaName: "Kankarbagh",
      costForTwo: "₹250 for two",
      cuisines: [
        "Thalis",
        "Indian",
        "Street Food",
        "Snacks",
        "Pastas",
        "Fast Food",
        "Burgers",
      ],
      parentId: "624342",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-10 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/s-s-food-center-kankarbagh-rest1072880",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "792667",
      name: "BHOJNAM (Takeaway & Mess Services)",
      cloudinaryImageId: "340eefa8d1bebc2d8f713a30acd6a4a1",
      locality: "Ashok Nagar",
      areaName: "Kankarbagh",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Salads"],
      avgRating: 3.2,
      parentId: "475371",
      avgRatingString: "3.2",
      totalRatingsString: "3",
      sla: {
        deliveryTime: 50,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/bhojnam-takeaway-and-mess-services-ashok-nagar-kankarbagh-rest792667",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "803116",
      name: "Starters Goods & Foods",
      cloudinaryImageId: "4b67be132e824ba78028a2cd0400ede5",
      locality: "Anjuna",
      areaName: "Kankarbagh",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Fast Food", "Indian"],
      parentId: "479487",
      avgRatingString: "--",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/starters-goods-and-foods-anjuna-kankarbagh-rest803116",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "807932",
      name: "The Cake's Delight",
      cloudinaryImageId: "6167c82da05e75eed7a0454584b66828",
      locality: "Dhalal Road",
      areaName: "Kankarbagh",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery"],
      avgRating: 3.9,
      veg: true,
      parentId: "482024",
      avgRatingString: "3.9",
      totalRatingsString: "4",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/the-cakes-delight-dhalal-road-kankarbagh-rest807932",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1164010",
      name: "Aadarsh Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/31/45845633-f300-41b1-b482-24ed36d70d38_1164010.jpg",
      locality: "Kankarbagh",
      areaName: "Kankarbagh",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "Biryani", "North Indian"],
      parentId: "667423",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "45-55 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/aadarsh-cafe-kankarbagh-rest1164010",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "469552",
      name: "3 Stumps",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/46de3215-56a8-4eb9-81ec-4c1a49897a22_469552.jpg",
      locality: "Lohiya Nagar",
      areaName: "Kankarbagh",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Indian", "Pastas", "Tandoor"],
      avgRating: 3.3,
      parentId: "282126",
      avgRatingString: "3.3",
      totalRatingsString: "22",
      sla: {
        deliveryTime: 54,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/3-stumps-lohiya-nagar-kankarbagh-rest469552",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "768773",
      name: "Toscana Pizza",
      cloudinaryImageId: "d9b5570d65d8600f10d985a817e0f0ff",
      locality: "Opposite Chanakya Law College",
      areaName: "Kankarbagh",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Beverages", "Desserts"],
      avgRating: 3.2,
      parentId: "459286",
      avgRatingString: "3.2",
      totalRatingsString: "12",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "45-55 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-09 18:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7053c98-15cd-49cc-91db-7e8ce4d2c9e9",
    },
    cta: {
      link: "https://www.swiggy.com/city/patna/toscana-pizza-opposite-chanakya-law-college-kankarbagh-rest768773",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <>
      <div className="search-bar">
        <input type="search" name="search" id="search" />
      </div>
      <div className="res-container">
        {reslist.map((resturant) => (
          <ResCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left ">
        <p>Follow us on:</p>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-right">
        <p>Contact us:</p>
        <p>© 2025 Foodie. All rights reserved.</p>
      </div>
    </div>
  );
};
function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
