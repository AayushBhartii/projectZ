import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddRestaurant from "./pages/AddRestaurant/AddRestaurant";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import GetTheApp from "./pages/GetTheApp/GetTheApp";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import ShowCase from "./pages/ShowCase/ShowCase";
import SkipedPage from "./pages/SkipedPage/SkipedPage";
import User from "./pages/User/User";
import UserSettingsPage from "./pages/UserSettingsPage/UserSettingsPage";


import TestPage from "./pages/TestPage/TestPage";
// import AddRestaurantHeader from './components/AddRestaurantHeader/AddRestaurantHeader'
import App from "./App";
import Dining from "./components/AddRestaurantComponents/AddRestaurantHeader/Dining";
import Fooddelieverydining from "./components/AddRestaurantComponents/AddRestaurantHeader/Fooddelieverydining";
import RestaurantRegistration from "./components/AddRestaurantComponents/AddRestaurantHeader/RestaurantRegistration";
import InvestorRelations from "./components/Navbars/InvestorsRelation/InvestorRelations";
import ClaimRestaurant from "./pages/ClaimRestaurant/ClaimRestaurant";
import "./index.css";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import FilterPopupWindow from "./components/FilterPopupWindow/FilterPopupWindow";
import WhoWeAre from "./pages/Whoweare/Whoweare";
import WorkWithUs from "./pages/Workwithus/WorkWithUs";
import Blog from "./pages/Blog/Blog";
import ReportFraud from "./pages/Reportfraud/Reportfraud";
import MenuCarousel from "./components/RestaurantComponents/OrderBodyComponent/Components/MenuComponent/MenuCaraousel";

import "./App.css"
import Privacy from "./pages/Privacy/Privacy";
import Security from "./pages/Security/Security";
import Terms from "./pages/Terms/Terms";
import AddToCart from "./pages/Addtocart/Addtocart";
import Cart from "./pages/Cart/Cart";
import BookingDetails from "./pages/BookingDetails/BookingDetails";
import AllCategories from "./pages/Blog/AllCategories"
import Community from "./pages/Blog/Community"
import Company from "./pages/Blog/Company"
import Culture from "./pages/Blog/Culture"
import Technology from "./pages/Blog/Technology"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/add-restaurant" element={<AddRestaurant />} />
      <Route
        path="/RestaurantRegistration"
        element={<RestaurantRegistration />}

      />
      {/* <Route path="/random" element={<FilterPopupWindow />} /> */}
      {/* <Route path='/landing' element={<LandingPage />}/> */}
      <Route path="/collections" element={<CollectionPage />} />
      <Route path="/whoweare" element={<WhoWeAre />} />
      <Route path="/menucarousel" element={<MenuCarousel />} />
      <Route path="/reportfraud" element={<ReportFraud />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/workwithus" element={<WorkWithUs />} />
      <Route path="/claim-restaurant" element={<ClaimRestaurant />} />
      <Route path="/dining" element={<Dining />} />
      <Route path="/fooddelievetydining" element={<Fooddelieverydining />} />
      <Route path="/show-case" element={<ShowCase />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/user/:userId/:hashId" element={<User />} />
      <Route path="/user/:userId/notifications" element={<SkipedPage />} />
      <Route path="/investors-relations" element={<InvestorRelations />} />
      <Route path="/user/:userId/network" element={<SkipedPage />} />
      <Route path="/user/:userId/find-friends" element={<SkipedPage />} />
      <Route path="/user/:userId/settings" element={<UserSettingsPage />} />
      <Route path="/get-the-app" element={<GetTheApp />} />
      <Route path="/:city/:hotel" element={<RestaurantPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/security" element={<Security />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/:city/:hotel/:page" element={<RestaurantPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<ErrorPage />} />
       
      {/* <Route
        path="/food-item"
        element={
          <FoodItemProduct
            data={{
              imgSrc: "/images/food.jpg",
              ttl: "Burger",
              votes: 200,
              price: 199,
              desc: "Delicious cheesy burger with fresh ingredients.",
              vegNonveg: "/icons/veg.png",
              mustTry: true,
              dishInfo: "Contains dairy and gluten.",
            }}
          />
        }
      /> */}
      <Route path="/add-to-cart" element={<AddToCart />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/cart/:cartId" element={<Cart />} /> */}
      <Route path="/bookingdetails" element={<BookingDetails />} />
      
        {/* paths for blog */}
      <Route path="/blog/allcategories" element={ <AllCategories /> }  />
      <Route path="/blog/community" element={ <Community /> } />
      <Route path="/blog/company" element={ <Company/> } />
      <Route path="/blog/culture" element={<Culture/>} />
      <Route path="/blog/technology" element={<Technology/>} />
    </Routes> 
  </BrowserRouter>
);
