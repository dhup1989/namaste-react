import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2018/02/26/21/44/hamburger-3184108_640.png"
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const dataList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "102334",
          name: "Dindigul Thalappakatti",
          cloudinaryImageId: "ogidjgqgh5w4otvuiipj",
          locality: "Mg Road",
          areaName: "Indiranagar",
          costForTwo: "₹650 for two",
          cuisines: [
            "Biryani",
            "Barbecue",
            "South Indian",
            "Chinese",
            "North Indian",
          ],
          avgRating: 4.4,
          parentId: "332",
          avgRatingString: "4.4",
          totalRatingsString: "9.2K+",
          promoted: true,
          adTrackingId:
            "cid=28592543~p=3~adgrpid=28592543#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=102334~plpr=COLLECTION~eid=8c8e2180-5a21-475f-b27b-2ccfba302759~srvts=1746083085396~collid=83639",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-01 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹179",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "28592543",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=102334&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3241",
          name: "Meghana Foods",
          cloudinaryImageId: "iivuhjc2mswi9lublktf",
          locality: "Residency Road",
          areaName: "Residency Road",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
          avgRating: 4.7,
          parentId: "635",
          avgRatingString: "4.7",
          totalRatingsString: "84K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-01 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "21K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3241&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "30532",
          name: "Hotel Empire",
          cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
          locality: "Infantry Road\t",
          areaName: "Infantry Road",
          costForTwo: "₹450 for two",
          cuisines: ["Kebabs", "Biryani"],
          avgRating: 4.5,
          parentId: "475",
          avgRatingString: "4.5",
          totalRatingsString: "19K+",
          promoted: true,
          adTrackingId:
            "cid=28566673~p=5~adgrpid=28566673#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30532~plpr=COLLECTION~eid=24aef1fd-8e1d-4357-9c90-2f0147685e9f~srvts=1746083085396~collid=83639",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-02 02:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "50 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "19K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "28566673",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=30532&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3434",
          name: "Nandhini Deluxe",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/7f19aaac-7299-4b54-a22d-69fd67f8fb65_3434.jpg",
          locality: "St. Marks Road",
          areaName: "St. Marks Road",
          costForTwo: "₹500 for two",
          cuisines: ["Andhra", "Biryani", "Chinese", "North Indian"],
          avgRating: 4.4,
          parentId: "2451",
          avgRatingString: "4.4",
          totalRatingsString: "18K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-01 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/big%20RX%20listing%2018px.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/big%20RX%20listing%2018px.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "1.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3434&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "705624",
          name: "Aromas of Biryani",
          cloudinaryImageId: "9b36a4e176674e135924d86470ad0785",
          locality: "S T Bed Extension",
          areaName: "Koramangala",
          costForTwo: "₹600 for two",
          cuisines: ["Biryani", "North Indian", "Tandoor", "Beverages"],
          avgRating: 4.3,
          parentId: "36155",
          avgRatingString: "4.3",
          totalRatingsString: "1.6K+",
          promoted: true,
          adTrackingId:
            "cid=28388172~p=9~adgrpid=28388172#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=705624~plpr=COLLECTION~eid=8b7032eb-808f-4819-9da4-155d1ab7aff6~srvts=1746083085396~collid=83639",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-02 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "503",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "28388172",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=705624&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "252412",
          name: "Anjappar",
          cloudinaryImageId: "60e4230b5b427968d26f8bdb1ba90362",
          locality: "Brigade Road",
          areaName: "Brigade Road",
          costForTwo: "₹400 for two",
          cuisines: [
            "Chettinad",
            "Thalis",
            "Biryani",
            "Chinese",
            "Tandoor",
            "South Indian",
          ],
          avgRating: 4.1,
          parentId: "61",
          avgRatingString: "4.1",
          totalRatingsString: "4.4K+",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-01 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
            footerText: "20 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "1.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=252412&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "285175",
          name: "Thalairaj Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/2/92c02d38-8436-4ec2-9462-6399cfcbe01b_df7ed699-fbeb-4da2-aead-9df62014f461.jpg",
          locality: "2nd stage",
          areaName: "Indiranagar",
          costForTwo: "₹300 for two",
          cuisines: [
            "Andhra",
            "Biryani",
            "Hyderabadi",
            "South Indian",
            "Indian",
            "Kebabs",
            "Snacks",
            "Beverages",
          ],
          avgRating: 4.4,
          parentId: "433875",
          avgRatingString: "4.4",
          totalRatingsString: "8.2K+",
          promoted: true,
          adTrackingId:
            "cid=28390510~p=10~adgrpid=28390510#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=285175~plpr=COLLECTION~eid=e98b3efe-d558-44e9-b016-6558021d72ed~srvts=1746083085396~collid=83639",
          sla: {
            deliveryTime: 39,
            lastMileTravel: 6.5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-05-02 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹1000",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "28390510",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=285175&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { rest } = props;
  return (
    <div className="resturant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          rest.cloudinaryImageId
        }
      />
      <h3>{rest.name}</h3>
      <h5>
        {rest.locality} {rest.areaName}
      </h5>
      <h4>{rest.sla.slaString}</h4>
      <h5>{rest.cuisines.join(", ")}</h5>
      <h5>⭐ {rest.avgRating}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <div>Search</div>
        <div className="resturant-container">
          {dataList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              rest={restaurant.card.card.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
