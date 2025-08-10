import reslist from "../utils/mockData";
import ResCard from "./ResCard";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <div className="search-bar">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search cuisines"
        />
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

export default Body;
