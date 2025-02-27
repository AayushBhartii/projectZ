
import { useState, useEffect } from 'react';
import Navbar from '../../Navbars/NavigationBar/NavigationBar'
import MobileNavbar from '../../Navbars/MobileNavbar/MobileNavbar';
import SearchBar from '../../../utils/SearchBar/SearchBar'

import css from './HomePageBanner.module.css'

import banner from '/banners/banner1.jpg'


let HomePageBanner = () => {
    const [toogleMenu, setToggleMenu] = useState(true);
    const [city, setCity] = useState("Your City");
    const [loading, setLoading] = useState(true);

    const API_URL = "http://localhost:4040"; // Your backend URL

    const getCity = async () => {
      try {
        const response = await fetch(`${API_URL}/api/location`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setCity(data.city || "Unknown City");
      } catch (error) {
        console.error("Error fetching city:", error);
        setCity("Your City"); // Fallback to a neutral message
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      getCity();
    }, []);
    

    let toggleBanner = toogleMenu ? (<div className={css.banner}>
        <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />
        <div className={css.bannerInner}>
            <img src={banner} alt="banner" className={css.bannerImg} />
            <div className={css.bannerTxt}>
                <div className={css.title}>Zomato</div>
                    <div className={css.tag}>
                        Discover the best food & drinks in <span className={css.bld}>{loading ? 'Loading...' : city}</span>
                    </div>
                <div className={css.searchbar}>
                    <SearchBar />
                </div>
            </div>
        </div>
    </div>) : <MobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />

    return toggleBanner;
}

export default HomePageBanner;
