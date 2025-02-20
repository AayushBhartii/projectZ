import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"

import Collections from "../../components/HomeComponents/Collections/Collections";

import NavigationBar2 from "../../components/Navbars/NavigationBar2/NavigationBar2";
import CategorySelectionComp from "../../utils/OrderingUtils/CategorySelectionComp/CategorySelectionComp";
import FilterBox from "../../utils/OrderingUtils/FilterBox/FilterBox";
import CircleCard1 from "../../utils/Cards/CircleCards/CircleCard1/CircleCard1";
import CircleCard2 from "../../utils/Cards/CircleCards/CircleCard2/CircleCard2";
import ShowcaseCard from "../../utils/Cards/ShowcaseCard/ShowcaseCard";
import ExploreOptionsNearMe from "../../components/HomeComponents/ExploreOptionsNearMe/ExploreOptionsNearMe";
import Footer from "../../components/Footer/Footer";
import CarouselUtil from "../../utils/CarouselUtil/CarouselUtil";

import dinning1 from "/icons/dinning1.png";
import dinning2 from "/icons/dinning2.png";
import delivery1 from "/icons/delivery1.png";
import delivery2 from "/icons/delivery2.png";
import nightlife1 from "/icons/nightlife1.png";
import nightlife2 from "/icons/nightlife2.png";
import tiffin1 from "/icons/tiffin1.png"
import tiffin2 from "/icons/tiffin2.png"
import filtersIcon from "/icons/filter.png";
import deliveryTimeIcon from "/icons/delivery-time.png";
import downArrowIcon from "/icons/down-arrow.png";

import biryaniCImg from "/icons/Food/biryaniC.png";
import burgerImg from "/icons/Food/burger.png";
import chickenImg from "/icons/Food/chicken.png";
import friesImg from "/icons/Food/fries.png";
import homestyleImg from "/icons/Food/homestyle.png";
import noodelsImg from "/icons/Food/noodels.png";
import pannerImg from "/icons/Food/panner.png";
import pizzaImg from "/icons/Food/pizza.png";
import sandwichImg from "/icons/Food/sandwich.png";
import shawarmaImg from "/icons/Food/shawarma.png";

import kfcImg from "/icons/Brands/kfc.png";
import pizzahutImg from "/icons/Brands/pizzahut.png";
import scoopsImg from "/icons/Brands/scoops.png";

import biryaniSCImg from "/images/Food/biryani.png";
import biryaniSCImg2 from "/images/Food/biryani2.png";
import chapathiImg from "/images/Food/chapathi.png";
import chickenSCImg from "/images/Food/chicken.png";
import fishImg from "/images/Food/fish.png";
import icecreamImg from "/images/Food/icecream.png";
import kfcSCImg from "/images/Food/kfc.png";
import pizzaSCImg from "/images/Food/pizza.png";

import {
  orderOnlinePage,
  diningOutPage,
  nightLifePage,
  proAndProPlusPage,
} from "../../helpers/constants";

import css from "./ShowCase.module.css";
import FilterPopupWindow from "../../components/FilterPopupWindow/FilterPopupWindow";

let ShowCase = () => {
  let location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const page = urlParams.get("page");
  const [filterGroup, setFilterGroup] = useState([[], []]);
  const [isOpen, setIsOpen] = useState(false);
  const [Tiffin, setTiffin] = useState([]);
  const [Error, setError] = useState(null);

  let [isActive, setIsActive] = useState({
    delivery: page === orderOnlinePage,
    dinning: page === diningOutPage,
    nightlife: page === nightLifePage,
    kitchen: page === proAndProPlusPage,
  });
  let filterBoxes;

  useEffect(() => {
    const getTifffin = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tiffin`);
        setTiffin(response.data.tiffin);
        console.log("Tiffin is:", response.data.tiffin);

      } catch (error) {
        console.error("Error fetching tiffin details:", error);
        setError(error.response.data.message);
      }
    }
    getTifffin();
  }, [])


  const handleFilter = (text) => {
    setFilterGroup(([arr1, arr2]) => {
      if (arr1.includes(text)) {
        return [arr1.filter((el) => el !== text), arr2];
      } else {
        return [[...arr1, text], arr2];
      }
    });
  };

  const handlePopupWindowFilter = (evt) => {
    if (evt.target.type === "radio") {
      console.log("I am radio selection", evt.target.value);
    } else if (evt.target.type === "checkbox") {
      setFilterGroup(([arr1, arr2]) => {
        if (evt.target.checked) {
          return [arr1, [...arr2, evt.target.value]];
        } else {
          return [arr1, arr2.filter((el) => el !== evt.target.value)];
        }
      });
    }
  };

  console.log(filterGroup);

  let filters = {
    delivery: [
      { text: "Filter", leftIcon: filtersIcon },
      { text: "Delivery Time", leftIcon: deliveryTimeIcon },
      { text: "Pure Veg" },
      { text: "Rating 4.5+" },
      { text: "Freate Offers" },
      { text: "Average Price Range" },
      { text: "Less than price x" },
      { text: "Cuisines", rightIcon: downArrowIcon },
      { text: "Dietary", rightIcon: downArrowIcon },
      { text: "Sort", rightIcon: downArrowIcon },
    ],
    dinning: [
      { text: "Filter", leftIcon: filtersIcon },
      { text: "Rating 4.5+" },
      { text: "Outdoor Seating" },
      { text: "Serves Alcohal" },
      { text: "Pet Friendly" },
      { text: "Average Price Range" },
      { text: "Less than price x" },
      { text: "Open Now" },
      { text: "Sort", rightIcon: downArrowIcon },
    ],
    nightLife: [
      { text: "Filter", leftIcon: filtersIcon },
      { text: "Distance", leftIcon: deliveryTimeIcon },
      { text: "Rating 4.5+" },
      { text: "Pubs & Bars" },
      { text: "Sort", rightIcon: downArrowIcon },
    ],
    kitchen: [
      { text: "Filter", leftIcon: filtersIcon },
      { text: "Distance", leftIcon: deliveryTimeIcon },
      { text: "Rating 4.5+" },
      { text: "Breakfast" },
      { text: "Lunch" },
      { text: "Dinner" },
      { text: "Sort", rightIcon: downArrowIcon },
    ],
  };
  if (page === orderOnlinePage) {
    filterBoxes = filters?.delivery?.map((val, id) => {
      return (
        <div key={id}>
          <FilterBox
            leftIcon={val?.leftIcon ?? null}
            rightIcon={val?.rightIcon ?? null}
            text={val.text}
            handleFilter={handleFilter}
            filterGroup={filterGroup}
            setIsOpen={setIsOpen}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        </div>
      );
    });
  } else if (page === diningOutPage) {
    filterBoxes = filters?.dinning?.map((val, id) => {
      return (
        <div key={id}>
          <FilterBox
            leftIcon={val?.leftIcon ?? null}
            rightIcon={val?.rightIcon ?? null}
            text={val.text}
            handleFilter={handleFilter}
            filterGroup={filterGroup}
            setIsOpen={setIsOpen}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        </div>
      );
    });
  } else if (page === nightLifePage) {
    filterBoxes = filters?.nightLife?.map((val, id) => {
      return (
        <div key={id}>
          <FilterBox
            leftIcon={val?.leftIcon ?? null}
            rightIcon={val?.rightIcon ?? null}
            text={val.text}
            handleFilter={handleFilter}
            filterGroup={filterGroup}
            setIsOpen={setIsOpen}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        </div>
      );
    });
  }
  else if (page === proAndProPlusPage) {
    filterBoxes = filters?.Tiffinservices?.map((val, id) => {
      return (
        <div key={id}>
          <FilterBox
            leftIcon={val?.leftIcon ?? null}
            rightIcon={val?.rightIcon ?? null}
            text={val.text}
            handleFilter={handleFilter}
            filterGroup={filterGroup}
            setIsOpen={setIsOpen}
            handlePopupWindowFilter={handlePopupWindowFilter}
          />
        </div>
      );
    });
  }

  const foodCardScroll = [
    {
      name: "Biryani",
      imgSrc: biryaniCImg,
    },
    {
      name: "Burger",
      imgSrc: burgerImg,
    },
    {
      name: "Chicken",
      imgSrc: chickenImg,
    },
    {
      name: "Fries",
      imgSrc: friesImg,
    },
    {
      name: "Home Style",
      imgSrc: homestyleImg,
    },
    {
      name: "Noodles",
      imgSrc: noodelsImg,
    },
    {
      name: "Panner",
      imgSrc: pannerImg,
    },
    {
      name: "Pizza",
      imgSrc: pizzaImg,
    },
    {
      name: "Sandwich",
      imgSrc: sandwichImg,
    },
    {
      name: "Shawarma",
      imgSrc: shawarmaImg,
    },
  ];

  const brandsCardScroll = [
    {
      name: "KFC",
      imgSrc: kfcImg,
      time: "45",
    },
    {
      name: "Pizza Hut",
      imgSrc: pizzahutImg,
      time: "35",
    },
    {
      name: "Scoops",
      imgSrc: scoopsImg,
      time: "49",
    },
    {
      name: "KFC",
      imgSrc: kfcImg,
      time: "19",
    },
    {
      name: "Pizza Hut",
      imgSrc: pizzahutImg,
      time: "22",
    },
    {
      name: "Scoops",
      imgSrc: scoopsImg,
      time: "33",
    },
  ];

  const items = [
    {
      promoted: true,
      time: "25",
      offB: true,
      proExtraB: false,
      off: "30",
      proExtra: "40",
      name: "Paradise Hotel",
      rating: "3.6",
      imgSrc: biryaniSCImg,
      link2: "/hyderabad/paraside/tiffin"
    },
    {
      promoted: false,
      time: "25",
      offB: true,
      proExtraB: false,
      off: "30",
      proExtra: "40",
      name: "Mangal Hotel",
      rating: "2.6",
      imgSrc: biryaniSCImg2,
      link2: "/hyderabad/paraside/tiffin"
    },
    {
      promoted: true,
      time: "30",
      offB: false,
      proExtraB: true,
      off: "30",
      proExtra: "40",
      name: "Chapathi Hotel",
      rating: "4.6",
      imgSrc: chapathiImg,
      link2: "/hyderabad/paraside/tiffin"
    },
    {
      promoted: false,
      time: "25",
      offB: true,
      proExtraB: false,
      off: "30",
      proExtra: "40",
      name: "Fish Mandi Hotel",
      rating: "4.9",
      imgSrc: fishImg,
      link2: "/hyderabad/paraside/tiffin"
    },
    {
      promoted: true,
      time: "25",
      offB: false,
      proExtraB: true,
      off: "30",
      proExtra: "40",
      name: "MangalCaptain Hotel",
      rating: "4.6",
      imgSrc: icecreamImg,
      link2: "/hyderabad/paraside/tiffin"
    },
    {
      promoted: false,
      time: "25",
      offB: true,
      proExtraB: false,
      off: "30",
      proExtra: "40",
      name: "KFCS Hotel",
      rating: "2.8",
      imgSrc: kfcSCImg,
      link2: "/hyderabad/paraside/tiffin"
    },
    {
      promoted: true,
      time: "25",
      offB: true,
      proExtraB: false,
      off: "30",
      proExtra: "40",
      name: "Pizza Hotel",
      rating: "3.2",
      imgSrc: pizzaSCImg,
      link2: "/hyderabad/paraside/tiffin"
    },
    {
      promoted: false,
      time: "25",
      offB: true,
      proExtraB: false,
      off: "30",
      proExtra: "40",
      name: "Fish Mandi Hotel",
      rating: "4.6",
      imgSrc: fishImg,
      link2: "/hyderabad/paraside/tiffin"
    },
    {
      promoted: true,
      time: "25",
      offB: false,
      proExtraB: true,
      off: "30",
      proExtra: "40",
      name: "MangalCaptain Hotel",
      rating: "2.6",
      imgSrc: icecreamImg,
      link2: "/hyderabad/paraside/tiffin"
    },
  ];

  return (
    <div className={css.outerDiv}>
      <NavigationBar2 />
      <FilterPopupWindow
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handlePopupWindowFilter={handlePopupWindowFilter}
      />
      <div className={css.innerDiv}>
        <div className={css.breadcrumb}>
          Home / India / Maharashtra / Pune / Indira Nagar
        </div>
      </div>
      <div className={css.showCaseDiv}>
        <div className={css.showcaseComps}>
          <CategorySelectionComp
            title="Takeaway"
            imgSrc={delivery1}
            imgSrc2={delivery2}
            color="#FCEEC0"
            comp="delivery"
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <CategorySelectionComp
            title="Dinning"
            imgSrc={dinning1}
            imgSrc2={dinning2}
            color="#EDF4FF"
            comp="dinning"
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <CategorySelectionComp
            title="NightLife"
            imgSrc={nightlife1}
            imgSrc2={nightlife2}
            color="#EDF4FF"
            comp="nightlife"
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <CategorySelectionComp
            title="Tiffin"
            imgSrc={tiffin1}
            imgSrc2={tiffin2}
            color="#EDF4FF"
            comp="kitchen"
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </div>
      {orderOnlinePage && proAndProPlusPage !== page ? (
        <div className={css.innerDiv2}>
          <div >
            <Collections />
          </div>
        </div>
      ) : null}
      <div className={css.innerDiv3}>
        <div className={css.filtersDiv}>{filterBoxes}</div>
      </div>
      {page === orderOnlinePage ? (
        <div className={css.innerDiv4}>
          <div className={css.w7}>
            <div className={css.innerDiv4Title}>
              Inspiration for your first order
            </div>
            <div className={css.rollerCarosuel}>
              <CarouselUtil>
                {foodCardScroll?.map((val, id) => {
                  return (
                    <div className={css.cardW} key={id}>
                      <CircleCard1 imgSrc={val.imgSrc} name={val.name} />
                    </div>
                  );
                })}
              </CarouselUtil>
            </div>
          </div>
        </div>
      ) : null}
      {page === orderOnlinePage ? (
        <div className={css.innerDiv5}>
          <div className={css.w7}>
            <div className={css.innerDiv5Title}>Top brands for you</div>
            <div className={css.rollerCarosuel}>
              <CarouselUtil>
                {brandsCardScroll?.map((val, id) => {
                  return (
                    <div className={css.cardW} key={id}>
                      <CircleCard2
                        imgSrc={val.imgSrc}
                        name={val.name}
                        time={val.time}
                      />
                    </div>
                  );
                })}
              </CarouselUtil>
            </div>
          </div>
        </div>
      ) : null}
      {page === proAndProPlusPage ? (
        <div className={css.innerDiv4}>
          <div className={css.w7}>
            <div className={css.innerDiv4Title}>
              Inspiration for your first order
            </div>
            <div className={css.rollerCarosuel}>
              <CarouselUtil>
                {foodCardScroll?.map((val, id) => {
                  return (
                    <div className={css.cardW} key={id}>
                      <CircleCard1 imgSrc={val.imgSrc} name={val.name} />
                    </div>
                  );
                })}
              </CarouselUtil>
            </div>
          </div>
        </div>
      ) : null}
      {/* "Nightlife Restaurants in Pune"  */}
      <div className={css.innerDiv6}>
        <div className={css.w7}>
          <div className={css.innerDiv6Title}>
            {page === orderOnlinePage
              ? "Delivery Restaurants in Pune"
              : page === diningOutPage
                ? "Dine-Out Restaurants in Pune"
                : page === proAndProPlusPage
                  ? "Tiffin services in Pune"
                  : "Nightlife Restaurants in Pune"}
          </div>
          <div className={css.innerDiv6Body}>
          {page === proAndProPlusPage ? (
              Array.isArray(Tiffin) && Tiffin.length > 0 ? (
                Tiffin.map((item) => (
                  <ShowcaseCard
                    key={item._id}
                    promoted={true}
                    time={item.operatingTimes?.Monday?.open || "N/A"}
                    offB={true}
                    proExtraB={false}
                    // Convert the first offer to a string if it exists
                    off={item.offers && item.offers[0] ? `${item.offers[0].discount}% OFF` : "No offer"}
                    proExtra="40"
                    name={item.kitchenName}
                    rating={item.ratings || 0}
                    imgSrc={item.images?.[0] || 'http://localhost:5173/icons/Food/burger.png'}
                    link2={`/tiffin/${item._id}`}
                  />
                ))
              ) : (
                <div className="text-center p-4">No tiffin services available</div>
              )
            ) : (
              items?.map((item, id) => (
                <ShowcaseCard
                  key={id}
                  promoted={item.promoted}
                  time={item.time}
                  offB={item.offB}
                  proExtraB={item.proExtraB}
                  off={item.off}
                  proExtra={item.proExtra}
                  name={item.name}
                  rating={item.rating}
                  imgSrc={item.imgSrc}
                  link2={item.link2}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <ExploreOptionsNearMe />
      <Footer />
    </div>
  );
};

export default ShowCase;