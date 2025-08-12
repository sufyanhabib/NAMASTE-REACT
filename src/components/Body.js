import reslist from "../utils/mockData";
import ResCard from "./ResCard";
import Footer from "./Footer";

const Body = () => {
  let listOfResturant = [
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
  ];
  return (
    <>
      <div className="search-bar">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search cuisines"
        />
        <div className="filter">
          <button
            className="btn"
            onClick={() => {
              listOfResturant = listOfResturant.filter(
                (res) => res.info.avgRating > 4
              );
              console.log(listOfResturant);
            }}
          >
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfResturant.map((resturant) => (
          <ResCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Body;
