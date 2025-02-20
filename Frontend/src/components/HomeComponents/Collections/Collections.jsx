import css from "./Collections.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import rightArrow from "/icons/right-arrow.png";
import CallingBarHoppersImg from "/images/callingallbarhoppers.jpg";
import CathTheMatachImg from "/images/cathcthematch.jpg";
import NewInTownImg from "/images/newintown.jpg";
import TrendingThisWeekImg from "/images/trendingthisweek.jpg";
import CollectionsCard from "../../../utils/Cards/card2/CollectionsCard";
import { fetchCityFromIP } from "../PopularPlaces/LocatioBasedAPI/fetchCityFromIP";

const Collections = () => {
  const [city, setCity] = useState("Your City");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCity = async () => {
      const fetchedCity = await fetchCityFromIP();
      setCity(fetchedCity);
      setLoading(false);
    };
    getCity();
  }, []);

  return (
    <div className={css.outerDiv}>
      {/* Title Section */}
      <div className="text-left mb-8 w-full max-w-screen-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          Collections
        </h1>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Explore curated lists of top restaurants, cafes, pubs, and bars in{" "}
            {loading ? "Loading..." : city}, based on trends.
          </p>

          {/* Right-aligned Link and Arrow */}
          <div className="flex items-center">
            <Link to="/collections" className={css.collectionRedirect}>
              All collections in {loading ? "Loading..." : city}
            </Link>
            <span className={css.rightArrowBox}>
              <img className={css.rightArrow} src={rightArrow} alt="right arrow" />
            </span>
          </div>
        </div>
      </div>

      {/* Collection Cards Section */}
      <div className={`${css.cards} mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5`}>
        <Link to="/CatchTheMatch">
          <CollectionsCard
            imgSrc={CathTheMatachImg}
            title="Catch the Match"
            places="30"
          />
        </Link>
        <Link to="/new-in-town">
          <CollectionsCard
            imgSrc={NewInTownImg}
            title="New In Town"
            places="19"
          />
        </Link>
        <Link to="/trending-this-week">
          <CollectionsCard
            imgSrc={TrendingThisWeekImg}
            title="Trending This Week"
            places="30"
          />
        </Link>
        <Link to="/calling-bar-hoppers">
          <CollectionsCard
            imgSrc={CallingBarHoppersImg}
            title="Calling all Bar Hoppers"
            places="30"
          />
        </Link>
      </div>
    </div>
  );
};

export default Collections;
