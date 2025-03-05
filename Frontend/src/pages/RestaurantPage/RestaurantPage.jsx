import css from './RestaurantPage.module.css'
import NavigationBar from '../../components/Navbars/NavigationBar2/NavigationBar2'
import DownloadAppUtil from '../../utils/RestaurantUtils/DownloadAppUtil/DownloadAppUtil'
import HeroComponent from '../../components/RestaurantComponents/HeroComponent/HeroComponent'
import OrderTitleComponent from '../../components/RestaurantComponents/OrderTitleComponent/OrderTitleComponent'
import OrderBodyComponent from '../../components/RestaurantComponents/OrderBodyComponent/OrderBodyComponent'
import Footer from '../../components/Footer/Footer'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const RestaurantPage = () => {
  const { id } = useParams();
  const [tiffinData, setTiffinData] = useState(null);
  const [mealType, setMealType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todayTiming, setTodayTiming] = useState("");
  const [fullTimings, setFullTimings] = useState("");
  useEffect(() => {
    const fetchTiffinData = async () => {
      try {
        if (!id) {
          throw new Error('Tiffin ID is required');
        }

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/get-tiffin/${id}`);

        if (!response.data.tiffin) {
          throw new Error('Tiffin data not found in response');
        }

        setTiffinData(response.data.tiffin);


        if (response.data.tiffin.menu?.mealTypes?.length > 0) {
          setMealType(response.data.tiffin.menu.mealTypes);
        }
      } catch (err) {
        console.error("Error fetching tiffin data:", err);
        setError(err.message || 'Error fetching tiffin data');
      } finally {
        setLoading(false);
      }
    };

    fetchTiffinData();
  }, [id]);

  const handleBookTable = () => alert("Table booked!");
  const handleShare = () => alert("Shared!");
  const handleReviews = () => alert("Viewing reviews!");

  useEffect(() => {
    if (tiffinData && tiffinData.operatingTimes && tiffinData.menu?.serviceDays) {
      const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

      if (tiffinData.menu.serviceDays.includes(today)) {
        const todaysTiming = tiffinData.operatingTimes[today];
        if (todaysTiming) {
          setTodayTiming(`${todaysTiming.open} - ${todaysTiming.close} (Today)`);
        } else {
          setTodayTiming("Timing not available");
        }
      } else {
        setTodayTiming("Closed Today");
      }

      // Show full timings only for available service days
      const filteredTimings = tiffinData.menu.serviceDays.map(day => {
        const timing = tiffinData.operatingTimes[day];
        return timing ? `${day}: ${timing.open} - ${timing.close}` : `${day}: Closed`;
      });

      setFullTimings(filteredTimings.join(" | "));
    }
  }, [tiffinData]);


  return <div className={css.outerDiv}>
    <NavigationBar />
    <div className={css.innerDiv}>
      <div className={css.breadcrumb}>
        Home
        /
        India
        /
        Maharashtra
        /
        Pune
        /
        Indira Nagar
      </div>
    </div>
    {/* <OrderTitleComponent /> */}
    {tiffinData && (
      <OrderTitleComponent
        name={tiffinData.kitchenName}
        specials={mealType.map(type => type.label).join(", ")}
        address={tiffinData.address}
        openingStatus={todayTiming.includes("Closed") ? "Closed" : "Open now"}
        todayTiming={todayTiming}
        fullTimings={fullTimings}
        serviceDays = {tiffinData.menu.serviceDays.map(day=> day).join(", ")}
        ratings={[
          { value: "4.1", count: "601", label: "Dining Reviews" },
          { value: "3.6", count: "37.3k", label: "Delivery Reviews" }
        ]}
        onBookTable={handleBookTable}
        onShare={handleShare}
        onReviews={handleReviews}
      />
    )}

    <HeroComponent />

    <div className={css.innerDiv2}>

      <OrderBodyComponent />
    </div>
    <Footer />
  </div>
}

export default RestaurantPage
