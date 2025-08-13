import reslist from "../utils/mockData";
import ResCard from "./ResCard";
import Footer from "./Footer";
import { useState } from "react";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState(reslist);

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
              const filtered = listOfResturant.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfResturant(filtered);
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
