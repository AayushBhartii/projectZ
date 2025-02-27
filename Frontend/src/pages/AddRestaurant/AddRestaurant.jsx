import AddRestaurantHeader from "../../components/AddRestaurantComponents/AddRestaurantHeader/AddRestaurantHeader";
import AddRestaurantSec from "../../components/AddRestaurantComponents/AddRestaurantSec/AddRestaurantSec";
import HowItWorks from "../../components/AddRestaurantComponents/HowItWorks/HowItWorks";
import SearchListedRestaurant from "../../components/AddRestaurantComponents/SearchListedRestaurant/SearchListedRestaurant";
import WhyShouldYouPWZ from "../../components/AddRestaurantComponents/WhyShouldYouPWZ/WhyShouldYouPWZ";
import Footer from "../../components/Footer/Footer";
import FrequentlyAskedQues from "../../components/HomeComponents/FrequentlyAskedQues/FrequentlyAskedQues";
import SmallBannerCard from "../../utils/Cards/SmallBannerCard/SmallBannerCard";
import GuideCard from "../../components/AddRestaurantComponents/GuideCard/GuideCard";

let AddRestaurant = () => {
  return (
    <div>
      <AddRestaurantHeader />

      <GuideCard />
      <WhyShouldYouPWZ />
      <HowItWorks />
      <SearchListedRestaurant />
      <SmallBannerCard />
      <FrequentlyAskedQues />
      <AddRestaurantSec />
      <Footer />
    </div>
  );
};

export default AddRestaurant;
