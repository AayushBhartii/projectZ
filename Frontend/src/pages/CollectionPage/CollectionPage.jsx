import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ExploreOptionsNearMe from "../../components/HomeComponents/ExploreOptionsNearMe/ExploreOptionsNearMe";
import NavigationBar from "../../components/Navbars/NavigationBar2/NavigationBar2";
import CollectionsCard from "../../utils/Cards/card2/CollectionsCard";
import css from "./CollectionPage.module.css";
import { Link } from "react-router-dom";

const CollectionPage = () => {
  let [savedVisible, setSavedVisible] = useState(false);

  const text = {
    heading: "Collections - Delhi NCR",
    message: "Create and browse lists of the finest restaurants",
  };

  const collections = [
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
    {
      imgSrc: "/images/trendingthisweek.jpg",
      title: "Delhi NCR",
      places: "New place address",
    },
  ];

  return (
    <div>
      <NavigationBar />
      <div className={css.main}>
        <BreadCrumb />
        <div className={css.headText}>
          <div className={css.heading}>{text.heading}</div>
          <div className={css.msg}>{text.message}</div>
        </div>
        <TabSwitcher
          savedVisible={savedVisible}
          setSavedVisible={setSavedVisible}
        />
        <div className={css.collectionsBox}>
          {!savedVisible ? (
            collections.map((el, idx) => (
              <div className={css.cardWrapper} key={idx}>
                <CollectionsCard
                  imgSrc={el.imgSrc}
                  title={el.title}
                  places={el.places}
                />
              </div>
            ))
          ) : (
            <EmptySavedCard />
          )}
        </div>
      </div>
      <ExploreOptionsNearMe />
      <Footer />
    </div>
  );
};

const TabSwitcher = ({ savedVisible, setSavedVisible }) => {
  return (
    <div className={css.switcherContainer}>
      <div
        className={`${css.tabs} ${!savedVisible && css.selectedTab}`}
        onClick={() => setSavedVisible(false)}
      >
        Handpicked
      </div>
      <div
        className={`${css.tabs} ${savedVisible && css.selectedTab}`}
        onClick={() => setSavedVisible(true)}
      >
        Saved Collections
      </div>
    </div>
  );
};

const EmptySavedCard = () => (
  <section className={css.emptySavedCard}>
    <img
      src="/images/savedCollection.avif"
      alt="Saved Collection backgroundImage"
      className={css.bgImage}
    />
    <div className={css.subText}>
      Save collections you love! <br /> They'll appear here.
    </div>
  </section>
);

const BreadCrumb = () => {
  let navTrack = ["Home", "Delhi NCR", "Collection"];
  return (
    <div className={css.navTrack}>
      {navTrack.map((el, idx) => (
        <Link to="##" key={idx}>
          <span className={css.checkpoint}>{el}</span>
          {idx !== navTrack.length - 1 && (
            <span className={css.parter}> /</span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default CollectionPage;