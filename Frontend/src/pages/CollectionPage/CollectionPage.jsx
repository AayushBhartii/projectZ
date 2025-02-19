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
      imgSrc: "/dist/images/collection1.avif",
      title: "Top Trending Spots",
      places: "23 Places",
    },
    {
      imgSrc: "/dist/images/collection2.jpg",
      title: "Candle Lit Dining",
      places: "10 Places",
    },
    {
      imgSrc: "/dist/images/collection3.avif",
      title: "Newly Opened Places",
      places: "50 Places",
    },
    {
      imgSrc: "/dist/images/collection4.avif",
      title: "Best Rooftop Places",
      places: "29 Places",
    },
    {
      imgSrc: "/dist/images/collection5.avif",
      title: "Best Insta-Worth",
      places: "17 Places",
    },
    {
      imgSrc: "/dist/images/collection6.webp",
      title: "Regional Flavours",
      places: "34 Places",
    },
    {
      imgSrc: "/dist/images/collection7.avif",
      title: "Best Buffet In Town",
      places: "12 Places",
    },
    {
      imgSrc: "/dist/images/collection8.jpg",
      title: "Asain Restaurants",
      places: "14 Places",
    },
    {
      imgSrc: "/dist/images/collection9.avif",
      title: "Best Pubs & Bars",
      places: "19 Places",
    },
    {
      imgSrc: "/dist/images/collection10.jpg",
      title: "Hyderabad Biryani",
      places: "20 Places",
    },
    {
      imgSrc: "/dist/images/collection11.avif",
      title: "Lit Party Places",
      places: "13 Places",
    },
    {
      imgSrc: "/dist/images/collection12.avif",
      title: "Unique Dining Places",
      places: "6 Places",
    },
    {
      imgSrc: "/dist/images/collection13.avif",
      title: "Terrific Thalis",
      places: "8 Places",
    },
    {
      imgSrc: "/dist/images/collection14.avif",
      title: "Pure Veg Places",
      places: "11 Places",
    },
    {
      imgSrc: "/dist/images/collection15.jpg",
      title: "Bingeworthy Dessert",
      places: "13 Places",
    },
    {
      imgSrc: "/dist/images/collection16.webp",
      title: "Must Visit Cafes",
      places: "26 Places",
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